**Objetivo:** Verificar el flujo completo de registro y visualización de productos en el módulo de Inventarios, simulando la interacción real del usuario.

---

### Escenario probado
Flujo: Crear un nuevo producto y comprobar que aparezca en la lista.  
Herramienta: Cypress (automatización de pruebas E2E en Angular).  

---

### Flujo de la prueba
1. El usuario accede al módulo de Inventarios.  
2. Abre el formulario de “Agregar producto”.  
3. Ingresa los datos del nuevo producto.  
4. Envía el formulario.  
5. Verifica que el producto aparezca en la tabla principal.  

---

### Fragmento de prueba (Cypress)
```javascript
// cypress/e2e/inventario_productos.cy.ts

describe('Flujo E2E - Módulo de Inventarios', () => {
  it('debería permitir registrar un nuevo producto y visualizarlo en la lista', () => {
    cy.visit('/inventarios');
    cy.contains('Agregar producto').click();

    cy.get('input[name="nombre"]').type('Marcador Azul');
    cy.get('input[name="categoria"]').type('Útiles Escolares');
    cy.get('input[name="precio"]').type('2500');
    cy.get('input[name="cantidad"]').type('5');
    cy.contains('Guardar').click();

    cy.contains('Marcador Azul').should('be.visible');
  });
});
