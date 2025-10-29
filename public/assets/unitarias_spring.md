Las pruebas unitarias en el backend verifican el **funcionamiento individual de los servicios y métodos** del módulo de inventarios, asegurando que cada componente cumpla con su responsabilidad de forma aislada y confiable.

---

## Objetivo

Garantizar que los cálculos realizados por los servicios del inventario, como el total de un producto (precio × cantidad), sean correctos y manejen adecuadamente los casos borde, evitando errores lógicos en la aplicación.

---

## Configuración del entorno

**Herramientas utilizadas:**
- **Spring Boot 3.x**
- **JUnit 5 (Jupiter)**
- **Maven** como gestor de dependencias
- **IntelliJ IDEA / Eclipse** como entorno de desarrollo

---

## Escenario de prueba

El servicio `InventarioService` contiene el método `calcularTotal(precio, cantidad)`, el cual debe retornar el valor total de una compra.  
Se deben validar tres comportamientos principales:

1. Cálculo correcto del total (`precio × cantidad`).
2. Retornar **0** si la cantidad es **0**.
3. Evitar valores negativos en caso de cantidad menor a cero.

---

## Ejemplo de clase de prueba

Archivo: `InventarioServiceTest.java`

```java
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class InventarioServiceTest {

    private final InventarioService service = new InventarioService();

    @Test
    void calcularTotal_deberiaRetornarValorCorrecto() {
        // Arrange
        double precioUnitario = 5000.0;
        int cantidad = 3;

        // Act
        double resultado = service.calcularTotal(precioUnitario, cantidad);

        // Assert
        assertEquals(15000.0, resultado, "3 unidades × $5000 = $15000");
    }

    @Test
    void calcularTotal_deberiaRetornarCeroSiCantidadEsCero() {
        // Arrange
        double precioUnitario = 5000.0;
        int cantidad = 0;

        // Act
        double resultado = service.calcularTotal(precioUnitario, cantidad);

        // Assert
        assertEquals(0.0, resultado, "Cualquier precio × 0 = 0");
    }

    @Test
    void calcularTotal_deberiaManejarCantidadNegativa() {
        // Arrange
        double precioUnitario = 5000.0;
        int cantidad = -5;

        // Act
        double resultado = service.calcularTotal(precioUnitario, cantidad);

        // Assert
        assertEquals(0.0, resultado, "Cantidad negativa debe retornar 0 (política de negocio)");
    }
}