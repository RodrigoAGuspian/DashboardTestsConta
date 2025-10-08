**Pruebas Unitarias**

Plan de Pruebas Unitarias

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
pruebas unitarias en los módulos del backend (Spring Boot) y frontend
(Angular), con el fin de garantizar la calidad del código desde las
etapas iniciales del desarrollo.

## 2. Alcance 

Las pruebas unitarias se aplican sobre clases, funciones y servicios
individuales.

El objetivo es validar que cada unidad de código cumpla con su
responsabilidad de forma aislada.

## 3. Herramientas

-   Backend (Spring Boot -- Java)

-   JUnit 5: Framework principal para pruebas unitarias.

-   Mockito: Simulación de dependencias externas (mocks).

-   Spring Boot Starter Test: Dependencia incluida en el proyecto.

-   Frontend (Angular -- TypeScript)

-   Jasmine: Framework de pruebas unitarias.

-   Karma: Test runner que ejecuta las pruebas en navegadores.

## 4. Estructura del proyecto

### Backend

-   Carpeta de pruebas: src/test/java

-   Convención de nombres: \[NombreClase\]Test.java

-   Ejemplo: ProductServiceTest.java

### Frontend

-   Carpeta de pruebas: src/app/\[modulo\]/

-   Convención de nombres: \[nombre\].component.spec.ts

-   Ejemplo: login.component.spec.ts

## 5. Plantilla de Caso de Prueba Unitaria

Cada caso de prueba debe documentarse con:

-   **Módulo/Clase:** Clase o componente bajo prueba.

-   **Método/Función:** Método específico que se prueba.

-   **Descripción:** Qué se valida.

-   **Datos de entrada:** Valores de prueba.

-   **Resultado esperado:** Comportamiento esperado.

-   **Resultado obtenido:** (llenar al ejecutar).

-   **Estado:** Aprobado / Fallido.

## 6. Criterios de aceptación

-   Todas las pruebas unitarias deben ejecutarse automáticamente en el
    pipeline de CI/CD.

-   Cobertura mínima aceptada: 80% del código.

-   Ningún commit puede integrarse al repositorio principal si falla
    alguna prueba unitaria.
