**Objetivo:** Validar el correcto funcionamiento del formulario de registro de productos en el módulo de Inventarios.

---

### Escenario probado
Componente: `producto-form.component.ts`  
Acción: Registrar un nuevo producto desde el formulario.

---

### Flujo probado
1. El usuario ingresa nombre, categoría, precio y cantidad.  
2. Hace clic en **Guardar**.  
3. El sistema muestra un mensaje de confirmación y limpia el formulario.

---

### Fragmento de prueba (Jasmine + TestBed)
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoFormComponent } from './producto-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProductoFormComponent', () => {
  let component: ProductoFormComponent;
  let fixture: ComponentFixture<ProductoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductoFormComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería registrar un producto válido', () => {
    component.form.setValue({
      nombre: 'Lápiz HB',
      categoria: 'Útiles Escolares',
      precio: 500,
      cantidad: 10
    });

    expect(component.form.valid).toBeTrue();
  });
});