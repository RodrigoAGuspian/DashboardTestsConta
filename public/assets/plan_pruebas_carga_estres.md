**Pruebas Pruebas de Carga y Estrés**

Plan de Pruebas de Carga y Estrés

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

## 1. Objetivo

Evaluar el rendimiento, escalabilidad y estabilidad del sistema.

Identificar cuellos de botella en el backend (APIs REST) y en el
frontend (Angular, tiempos de carga en navegador).

Asegurar que la aplicación responde de forma aceptable bajo la carga
esperada y que se comporta correctamente ante picos y estrés.

## 2. Alcance

Backend (Spring Boot): Endpoints críticos (ejemplo: /login, /accounts,
/checkout).

Frontend (Angular): Tiempo de carga, interactividad, accesibilidad,
métricas de rendimiento en navegadores.

## 3. Herramientas

Apache JMeter: Simulación de usuarios concurrentes y transacciones para
el backend.

Google Lighthouse (CLI/CI): Auditoría de rendimiento del frontend (FCP,
TTI, CLS, PWA).

## 4. Métricas

### Backend (JMeter)

-   Latencia (ms).

-   Percentiles (p90, p95, p99).

-   Throughput (req/s).

-   Tasa de errores (%).

-   Uso de CPU, memoria, conexiones DB (si se monitorea con
    Actuator/Prometheus).

### Frontend (Lighthouse)

-   Performance Score (\>80 aceptable).

-   First Contentful Paint (FCP) (\<2s).

-   Time to Interactive (TTI) (\<3s).

-   Cumulative Layout Shift (CLS) (\<0.1).

-   Largest Contentful Paint (LCP) (\<2.5s).

## 5. Escenarios de Prueba

### Backend -- JMeter

1.  Carga Normal:

-   200 usuarios concurrentes durante 10 minutos.

-   Validar latencia \<2s en 95% de requests.

2.  Carga Pico:

-   Incremento gradual hasta 20 usuarios en 5 minutos.

-   Validar estabilidad del sistema.

3.  Estrés:

-   Escalar hasta 30 usuarios concurrentes hasta provocar errores.

-   Identificar umbral de ruptura.

### Frontend -- Lighthouse

1.  Prueba de carga inicial:

-   Ejecutar Lighthouse en la URL principal (/login o /home).

-   Métricas de renderizado y accesibilidad.

2.  Prueba de navegación interna:

-   Lighthouse en páginas críticas (ejemplo: /dashboard, /checkout).

3.  Prueba en condiciones adversas:

-   Emular conexión lenta (3G) y CPU throttling.

-   Validar tiempos de carga en dispositivos de bajos recursos.

## Criterios de Aceptación

### Backend:

-   95% de peticiones \<2s en carga esperada.

-   \<2% tasa de error en carga pico.

Frontend:

-   Performance score ≥80 en Lighthouse.

-   FCP \<2s y TTI \<3s en condiciones normales.

-   CLS \<0.1.

## Miniglosario

### FCP -- First Contentful Paint

-   Definición: Tiempo desde que comienza la carga de la página hasta
    que el navegador muestra el primer contenido con significado (texto,
    imagen, SVG, etc.).

-   Ejemplo: Si tu página Angular muestra un logo o un título al inicio,
    FCP mide cuánto tarda en aparecer.

-   Meta recomendada: \< 2 segundos en dispositivos promedio.

-   Se relaciona con la percepción de velocidad inicial para el usuario.

### TTI -- Time To Interactive

-   Definición: Tiempo que tarda la página en ser completamente
    interactiva, es decir, cuando el usuario ya puede hacer clic,
    escribir o navegar sin bloqueos.

-   Ejemplo: Tu dashboard de Angular puede renderizarse en 2s, pero si
    los scripts siguen cargando y bloquean botones por 3s más, el TTI
    será 5s.

-   Meta recomendada: \< 3-5 segundos.

-   Se relaciona con la fluidez y usabilidad real de la aplicación.

### CLS -- Cumulative Layout Shift

-   Definición: Mide cuánto se mueve el contenido visualmente mientras
    carga la página.

-   Ejemplo: En Angular cargas un banner, pero luego se inserta una
    imagen grande arriba y los botones bajan repentinamente → eso
    aumenta el CLS.

-   Meta recomendada: \< 0.1 (muy bajo).
