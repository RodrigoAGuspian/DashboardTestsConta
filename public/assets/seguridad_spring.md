Las pruebas de seguridad buscan **identificar vulnerabilidades** en los endpoints del backend de Spring Boot, garantizando la protección de datos sensibles y la correcta autenticación de los usuarios del sistema contable.

---

## Objetivo

Validar que las API del módulo de inventarios sean seguras frente a ataques comunes (inyección, XSS, CSRF, etc.) y que los mecanismos de autenticación y autorización funcionen correctamente.

---

## Configuración del entorno

**Herramientas utilizadas:**
- 🧰 Spring Boot 3.x con Spring Security
- 🧪 OWASP ZAP (Zed Attack Proxy)
- 🔐 Base de datos H2 (entorno de pruebas)
- 💻 Postman (para validar tokens JWT)

---

## Escenario de prueba

El endpoint protegido es:

GET http://localhost:8080/api/inventario


El acceso debe requerir un token JWT válido emitido por el servicio de autenticación.

---

## Ejemplo de configuración de seguridad en Spring Boot

Archivo: `SecurityConfig.java`

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2.jwt());
        return http.build();
    }
}
