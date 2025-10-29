Las pruebas con **K6** permiten medir el rendimiento del backend de Spring Boot bajo condiciones de carga y estrés mediante scripts automatizados en JavaScript.  
Esta herramienta es ideal para integrar en pipelines CI/CD y obtener métricas de desempeño en tiempo real.

---

## Objetivo

Evaluar el comportamiento del endpoint del módulo de inventarios bajo un volumen progresivo de solicitudes concurrentes, identificando límites de rendimiento y puntos críticos del sistema.

---

## Configuración del entorno

**Herramientas utilizadas:**
- [K6](https://k6.io/)  
- Node.js / PowerShell / Bash  
- API del sistema contable (`Spring Boot`)  
- Base de datos H2 (modo pruebas)  

---

## Estructura del proyecto

/k6
├── carga_inventario_test.js
├── resultados/
│ ├── resumen.json
│ └── reporte.html


---

## Script de prueba con K6

Archivo: `carga_inventario_test.js`

```javascript
import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 100 },  // Carga inicial
    { duration: '1m', target: 500 },   // Carga media
    { duration: '1m', target: 1000 },  // Estrés alto
    { duration: '30s', target: 0 },    // Descenso
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'], // 95% de las peticiones < 800 ms
    http_req_failed: ['rate<0.02'],   // Menos del 2% de fallos
  },
};

export default function () {
  const res = http.get('http://localhost:8080/api/inventario');
  check(res, {
    'status 200': (r) => r.status === 200,
    'tiempo de respuesta aceptable': (r) => r.timings.duration < 800,
  });
  sleep(1);
}
