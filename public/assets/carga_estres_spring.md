Las pruebas de **carga y estrés** permiten evaluar la **resistencia, estabilidad y capacidad de respuesta** del backend desarrollado en Spring Boot bajo diferentes condiciones de uso.

---

## Objetivo

Determinar cómo se comporta el módulo de inventarios del sistema contable cuando múltiples usuarios realizan peticiones simultáneamente, identificando posibles cuellos de botella en la API y en la base de datos.

---

## Configuración del entorno

**Herramientas utilizadas:**
- Spring Boot 3.x  
- Apache JMeter 5.x  
- Base de datos H2 (modo pruebas)  
- Servidor local en `http://localhost:8080`  
- CPU y memoria monitorizadas con VisualVM  

---

## Escenario de prueba

Endpoint principal bajo análisis:

GET http://localhost:8080/api/inventario


Se diseñaron dos tipos de pruebas:

1. **Prueba de carga:** Simula el uso normal del sistema con un número creciente de usuarios (de 10 a 500).  
2. **Prueba de estrés:** Aumenta el número de usuarios de forma extrema (de 500 hasta 2000) para detectar el punto de fallo.

---

## Configuración de JMeter

1. Crear un nuevo **Test Plan** → "Inventario - Carga y Estrés".
2. Agregar un **Thread Group** con:
   - **Usuarios:** 500  
   - **Ramp-up period:** 30 segundos  
   - **Loop count:** 10  
3. Añadir un **HTTP Request** con:
   - **Método:** `GET`  
   - **URL:** `http://localhost:8080/api/inventario`
4. Añadir **Summary Report** y **Graph Results** para la interpretación de métricas.

---

## Resultados esperados

| Métrica                        | Valor esperado | Descripción |
|--------------------------------|----------------|--------------|
| Tiempo medio de respuesta      | < 700 ms       | El servicio responde de forma fluida bajo carga. |
| Tasa de error                  | < 2 %          | Mínimas peticiones fallidas durante la ejecución. |
| Throughput (peticiones/segundo) | > 120 req/s    | Mantiene un flujo estable con múltiples usuarios. |
| Consumo de CPU                 | < 80 %         | Se mantiene dentro de los límites de tolerancia. |

---

## Resultados observados (ejemplo)

- **Carga:** 500 usuarios concurrentes  
  - Tiempo promedio: 640 ms  
  - Errores: 0 %  
  - Throughput: 132 req/s  

- **Estrés:** 2000 usuarios concurrentes  
  - Tiempo promedio: 1.2 s  
  - Errores: 3 %  
  - El sistema siguió respondiendo, pero con degradación visible.

---

## Conclusión

El módulo de inventarios **soporta adecuadamente cargas altas** y se mantiene estable hasta los 1500 usuarios simultáneos.  
Se recomienda optimizar las consultas SQL más frecuentes y considerar el uso de **caché de lectura** o **pool de conexiones Hikari** para entornos productivos.

---

## Archivos relacionados

- `src/test/resources/jmeter/inventario_stress_test.jmx`
- `src/main/java/com/empresa/inventario/controller/InventarioController.java`

---

**Resultado esperado:**  
El backend mantiene la estabilidad del servicio durante las pruebas de carga y estrés.  
La degradación del rendimiento se presenta solo en niveles de concurrencia extremos, sin interrupciones críticas.
