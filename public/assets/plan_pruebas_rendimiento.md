**Pruebas de Rendimiento**

Plan de Pruebas de Rendimiento

Pasantía: Prototipo de ambiente de pruebas para los módulos de
Inventarios del "Software contable para uso educativo en el programa de
Contaduría Pública de la Universidad del Cauca

> **Rodrigo Alejandro Guspian Perez**
>
> 104619021334

Profesor: Julio Ariel Hurtado

> Universidad del Cauca
>
> **Facultad de Ingeniería Electrónica y Telecomunicaciones**
>
> **Departamento de Sistemas**
>
> Popayán, Septiembre de 2025

## Objetivo

Evaluar el comportamiento y la estabilidad del sistema desarrollado en
Java Spring Boot (backend) y Angular (frontend) bajo diferentes
condiciones de uso, verificando que cumple con los tiempos de respuesta
y capacidad esperada en entornos similares a producción.

## Alcance 

-   Pruebas de Carga: medir el rendimiento del sistema bajo una carga
    esperada de usuarios concurrentes.

-   Pruebas de Estrés: evaluar el comportamiento del sistema bajo una
    carga mayor a la esperada, identificando el punto de quiebre.

## Herramientas

-   JMeter: para simular usuarios concurrentes y generar carga sobre el
    backend y API REST.

-   Lighthouse (Google Chrome DevTools): para evaluar el rendimiento del
    frontend Angular.

## Entorno de Pruebas

-   Backend: Spring Boot ejecutándose en servidor de pruebas.

-   Frontend: aplicación Angular desplegada en el mismo entorno.

-   Base de datos: misma versión que producción .

-   Servidor: similar a producción en CPU, memoria y red, para
    garantizar resultados representativos.

-   Herramientas instaladas: JMeter en máquina local/servidor, Google
    Chrome con Lighthouse.

## 5. Estrategia de Ejecución

1.  Definir escenarios de prueba

-   Inicio de sesión de usuarios.

-   Consulta de productos.

-   Creación y edición de registros.

-   Operaciones masivas (ej. búsqueda, exportación).

2.  Pruebas de Carga (JMeter)

    -   Simular el número de usuarios concurrentes esperado, para estas
        pruebas se van a usar 30 usuarios.

    -   Medir: tiempo de respuesta promedio, throughput, tasa de
        errores.

3.  Pruebas de Estrés (JMeter)

    -   Incrementar progresivamente la carga hasta el punto de falla
        (ej. 1000 usuarios concurrentes).

    -   Registrar comportamiento del sistema: caídas, errores, tiempos
        de respuesta.

4.  Pruebas de Rendimiento en Frontend (Lighthouse)

    -   Medir indicadores de rendimiento web:

    -   FCP (First Contentful Paint)

    -   TTI (Time to Interactive)

    -   CLS (Cumulative Layout Shift)

    -   Ejecutar en distintos navegadores/dispositivos.

## 6. Métricas a Evaluar

-   Tiempo de respuesta (ms).

-   Tasa de errores (%).

-   Throughput (transacciones por segundo).

-   Consumo de CPU y memoria en el servidor.

-   Puntuaciones de rendimiento en Lighthouse.

## 7. Criterios de Aceptación

-   El sistema debe soportar la carga esperada con tiempos de respuesta
    menores a 2 segundos.

-   No más del 2% de errores bajo carga esperada.

-   El sistema debe recuperarse tras pruebas de estrés sin pérdida de
    datos.

## 8. Entregables

-   Plan de pruebas.

-   Archivos de configuración de JMeter.

-   Reportes de resultados (JMeter y Lighthouse).

-   Informe final con hallazgos y recomendaciones.
