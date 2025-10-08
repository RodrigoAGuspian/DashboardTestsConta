**Pruebas de Seguridad**

Plan de Pruebas de Seguridad

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

Garantizar que el sistema desarrollado en Java Spring Boot (backend) y
Angular (frontend) protege adecuadamente la información de los usuarios
y resiste intentos de acceso no autorizado, vulnerabilidades comunes y
malas prácticas de seguridad.

## Alcance 

-   Validar seguridad de la API REST (backend): autenticación,
    autorización, manejo de sesiones y cifrado.

-   Validar seguridad del frontend Angular: protección contra ataques
    XSS, CSRF y validaciones en formularios.

-   Verificar configuración del servidor, dependencias y librerías.

## Herramientas

-   OWASP ZAP o Burp Suite: para pruebas de vulnerabilidades y análisis
    de tráfico.

-   SonarQube: análisis estático de código para identificar fallos de
    seguridad.

-   Dependabot / Snyk: monitoreo de vulnerabilidades en dependencias.

-   Spring Security / JWT: configuración en backend para autenticación y
    autorización.

## Entorno de Pruebas

-   Servidor de staging o pruebas con datos ficticios (nunca en
    producción).

-   Configuración de HTTPS habilitada.

-   Logs de auditoría activados para seguimiento de intentos de acceso
    no autorizado.

## 5. Estrategia de Ejecución

1.  Autenticación y Autorización

-   Verificar que las rutas protegidas solo sean accesibles con token
    válido (JWT).

-   Validar expiración de tokens y manejo de sesiones.

2.  Pruebas de Vulnerabilidades OWASP Top 10

-   Inyección SQL: probar inputs en formularios y endpoints.

-   XSS (Cross-Site Scripting): validar sanitización de campos en
    Angular.

-   CSRF (Cross-Site Request Forgery): verificar protección en
    formularios y endpoints sensibles.

-   Broken Authentication: revisar contraseñas por defecto, políticas de
    complejidad.

-   Exposición de datos sensibles: asegurar uso de HTTPS y cifrado de
    contraseñas.

3.  Pruebas de Dependencias y Código

-   Ejecutar SonarQube para revisar vulnerabilidades en el código.

-   Ejecutar Dependabot/Snyk para validar seguridad de dependencias

4.  Configuración del Servidor

-   Revisar encabezados de seguridad en respuestas HTTP
    (Content-Security-Policy, X-Frame-Options, etc.).

-   Verificar deshabilitación de endpoints no usados (ej. /actuator
    expuestos).

## 6. Métricas a Evaluar

-   Número de vulnerabilidades detectadas (clasificadas en baja, media,
    crítica).

-   Tiempo de resolución de vulnerabilidades.

-   Nivel de cumplimiento con estándares OWASP Top 10.

## 7. Criterios de Aceptación

-   No deben existir vulnerabilidades críticas en el sistema.

-   Todas las contraseñas y tokens deben estar cifrados.

-   Las pruebas de inyección y XSS deben ser rechazadas por el sistema.

-   El sistema debe cumplir con el OWASP Top 10 como mínimo estándar de
    seguridad.

## 8. Entregables

-   Reportes de OWASP ZAP / Burp Suite.

-   Reporte de análisis estático en SonarQube.

-   Listado de vulnerabilidades con plan de remediación.

-   Informe final de seguridad.
