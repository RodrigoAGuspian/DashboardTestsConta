Las pruebas de rendimiento verifican la **estabilidad, tiempos de respuesta y capacidad del sistema** bajo diferentes niveles de carga.  
En este ejemplo, se evalúa el desempeño del endpoint `/api/inventario` del backend desarrollado en **Spring Boot**.

---

## 🧩 Objetivo

Determinar el tiempo promedio de respuesta y la cantidad máxima de peticiones por segundo que el servicio puede manejar sin degradarse.

---

## Configuración de JMeter

1. Abrir **Apache JMeter**.
2. Crear un nuevo **Test Plan**.
3. Agregar un **Thread Group** con los siguientes parámetros:
   - **Número de usuarios (threads):** 100  
   - **Ramp-up period:** 10 segundos  
   - **Loop count:** 10  

4. Dentro del Thread Group:
   - Añadir un **HTTP Request**:
     - **Método:** GET  
     - **URL:** `http://localhost:8080/api/inventario`
   - Añadir un **HTTP Header Manager** con:
     - `Content-Type: application/json`

5. Agregar un **Summary Report** y un **View Results Tree** para analizar los resultados.

---

## Ejecución

Ejecutar la prueba y observar los tiempos de respuesta promedio y el throughput (peticiones por segundo).

---

## Resultados esperados

| Métrica                    | Valor esperado | Descripción |
|----------------------------|----------------|--------------|
| Tiempo de respuesta medio  | < 500 ms       | El servicio responde de forma óptima. |
| Throughput                 | > 150 req/s    | Mantiene un flujo estable de peticiones concurrentes. |
| Errores                    | 0 %            | Todas las peticiones completadas exitosamente. |

---

## Conclusión

El servicio `/api/inventario` cumple los objetivos de rendimiento establecidos.  
Si el tiempo medio supera los 500 ms, se recomienda optimizar las consultas a la base de datos o usar **caché** con Spring Cache / Redis.

---

## Archivos relacionados

- `src/test/resources/jmeter/inventario_test.jmx`
- `src/main/java/com/empresa/inventario/controller/InventarioController.java`

---

**Resultado esperado:**  
El reporte de JMeter muestra una ejecución estable sin errores, manteniendo un tiempo de respuesta medio por debajo del umbral definido.
