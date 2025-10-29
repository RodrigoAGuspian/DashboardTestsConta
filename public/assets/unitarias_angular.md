Las pruebas unitarias en el frontend permiten validar el comportamiento individual de los componentes de Angular sin depender de servicios externos.  
En este caso, se prueba el componente `InventarioItemComponent`, encargado de calcular el total de un producto en base al precio y la cantidad ingresados.

---

## Objetivo

Verificar que el método `calcularTotal()` del componente `InventarioItemComponent` realice correctamente el cálculo del valor total y maneje adecuadamente los casos especiales como cantidades nulas.

---

## Configuración del entorno

**Herramientas utilizadas:**
- Angular 17
- Jasmine y Karma (framework de pruebas y ejecutor)
- Node.js y npm
- Visual Studio Code

---

## Escenario de prueba

El componente debe cumplir los siguientes comportamientos:

1. Retornar el resultado correcto de la multiplicación `precio × cantidad`.
2. Retornar **0** si la cantidad es igual a **0**.
3. Evitar valores inválidos o negativos durante el cálculo.

---

## Ejemplo de clase de prueba

Archivo: `inventario-item.component.spec.ts`

```typescript
import { InventarioItemComponent } from './inventario-item.component';

describe('InventarioItemComponent', () => {
  let component: InventarioItemComponent;

  beforeEach(() => {
    component = new InventarioItemComponent();
  });

  it('debería calcular el total correctamente', () => {
    const total = component.calcularTotal(5000, 3);
    expect(total).toBe(15000);
  });

  it('debería devolver 0 si la cantidad es 0', () => {
    const total = component.calcularTotal(5000, 0);
    expect(total).toBe(0);
  });
});
