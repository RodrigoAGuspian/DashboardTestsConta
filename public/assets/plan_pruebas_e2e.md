**Pruebas End-to-End**


Plan de Pruebas End-to-End

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

Definir el procedimiento, estándares y lineamientos para la ejecución de
pruebas End-to-End (E2E) en el sistema, con el fin de garantizar que los
flujos completos de negocio se ejecuten correctamente desde la interfaz
de usuario (Angular), pasando por el backend (Spring Boot) y llegando a
la base de datos.

## 2. Alcance 

-   Validar flujos críticos del negocio de principio a fin.

-   Verificar que los diferentes módulos del sistema interactúan
    correctamente entre sí.

-   Identificar defectos que solo se presentan al integrar múltiples
    capas (UI, API, DB).

-   Aplicable sobre:

    -   Frontend (Angular): Formularios, pantallas, navegación.

    -   Backend (Spring Boot): Endpoints que soportan los flujos.

    -   Base de Datos: Validación de persistencia de datos tras ejecutar
        una acción desde UI.

## 3. Herramientas

-   Frontend (Angular): Cypress (recomendado) pruebas e2e en
    navegadores.

-   Backend (Spring Boot):

    -   Postman (para pruebas iniciales de APIs).

    -   Base de datos: cliente SQL para validar resultados.

-   Gestión de pruebas:

    -   Excel / Google Sheets para registrar los casos de prueba E2E.

    -   Reportes de ejecución.

## 4. Estructura de documentación

Como las pruebas pueden ser manuales o automatizadas, se deben
documentar en una plantilla de casos de prueba E2E:

-   Repositorio de pruebas: Carpeta compartida.

-   Casos de prueba E2E: Documentados por flujo de negocio.

-   Reporte de ejecución: Documento/archivo donde se registran
    resultados de la corrida completa.

-   Evidencias: Capturas de pantalla o grabaciones de video (si se usan
    herramientas como Cypress).

## 5. Plantilla de Caso de Prueba Unitaria

Cada caso se espera con la siguiente información:

-   ID: Ejemplo: E2E-001

-   Flujo de negocio asociado: Ejemplo: Registro de usuario.

-   Módulos involucrados: Ejemplo: UI Login, API Auth, DB Users.

-   Precondiciones: Estado inicial del sistema (ejemplo: base de datos
    limpia).

-   Pasos de prueba: Lista detallada desde la UI hasta la validación en
    la DB.

-   Datos de entrada: Ejemplo: nombre, email, password.

-   Resultado esperado: Ejemplo: usuario creado y registrado en DB.

-   Resultado obtenido: (se llena en ejecución).

-   Estado: Aprobado / Fallido.

-   Evidencia: Captura de pantalla o consulta SQL.

## 6. Criterios de aceptación

-   Los flujos críticos deben tener al menos una prueba E2E.

-   Todas las pruebas deben ser reproducibles en un entorno similar a
    producción.

-   Los resultados deben incluir evidencias como capturas o similar.

-   Ningún flujo de negocio puede marcarse como completado sin haber
    pasado sus pruebas E2E.
