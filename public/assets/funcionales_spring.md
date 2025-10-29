**Objetivo:** Validar el correcto funcionamiento del endpoint de creación de productos en el módulo de Inventarios.

---

### Escenario probado
Controlador: `ProductoController.java`  
Endpoint: `POST /api/inventario/productos`  
Acción: Registrar un nuevo producto en la base de datos.

---

### Flujo probado
1. Se envía una solicitud HTTP `POST` con los datos del nuevo producto.  
2. El backend valida los campos requeridos.  
3. Si la información es correcta, el producto se guarda y se responde con código **201 (Created)**.  

---

### Fragmento de prueba (JUnit + MockMvc)
```java
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
@AutoConfigureMockMvc
class ProductoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void registrarProducto_deberiaRetornar201YProductoGuardado() throws Exception {
        String nuevoProducto = """
            {
              "nombre": "Cuaderno universitario",
              "categoria": "Papelería",
              "precio": 3500,
              "cantidad": 20
            }
        """;

        mockMvc.perform(post("/api/inventario/productos")
                .contentType(MediaType.APPLICATION_JSON)
                .content(nuevoProducto))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.nombre").value("Cuaderno universitario"))
                .andExpect(jsonPath("$.precio").value(3500));
    }
}
