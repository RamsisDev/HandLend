Perfecto. Aquí va la **versión formal tipo UX Spec / Product Design Document**, mucho más utilizable para diseño de pantallas, prototipado en Figma, handoff a desarrollo y validación de flujos.

---

# **UX Spec / Product Design Document**

## **Producto: Lending Protocol para ayuda humanitaria**

## **1\. Resumen del producto**

La plataforma permite coordinar financiamiento, operación logística y trazabilidad de entregas humanitarias en contextos de desastre natural. El sistema conecta donantes, empresas logísticas y operadores de campo mediante una experiencia digital respaldada por contratos inteligentes, validaciones de identidad y evidencia operativa.

---

# **2\. Objetivo UX del producto**

Diseñar una experiencia que permita:

* al **donante**, seleccionar con confianza dónde aportar y entender qué sucede con su dinero;  
* al **coordinador**, registrar y administrar la operación logística de manera clara;  
* al **operador**, ejecutar entregas con una interfaz robusta, rápida y apta para trabajo en campo, incluso sin internet.

---

# **3\. Alcance del documento**

Este documento describe:

* actores del sistema,  
* objetivos por flujo,  
* definición de pantallas,  
* user flows detallados,  
* acciones principales,  
* resultados esperados,  
* estados de error,  
* componentes UX/UI sugeridos,  
* consideraciones de usabilidad.

---

# **4\. Actores del sistema**

## **4.1 Donante**

Actor individual o grupal que provee fondos para una operación humanitaria.

### **Necesidad principal**

Aportar a una causa concreta con suficiente confianza, claridad y trazabilidad.

---

## **4.2 Coordinador**

Representante legal de una empresa logística.

### **Necesidad principal**

Registrar a la empresa, proponer su plan de acción y gestionar operadores responsables de la ejecución.

---

## **4.3 Operador**

Empleado subordinado al coordinador, encargado de ejecutar físicamente la entrega en la última milla y subir evidencia.

### **Necesidad principal**

Registrar entregas de forma simple, segura y eficiente en contexto operativo real.

---

# **5\. Mapa general de flujos**

## **Donante**

Choosing → Funding → Reporting

## **Coordinador**

Registro legal → Registro de planificación → CRUD de operadores → Dashboard operativo

## **Operador**

Captura de entrega → Evidencia → Cola offline → Sincronización → Cierre contractual

---

# **6\. Especificación UX por flujo**

---

# **6A. Flujo del Donante**

## **Objetivo general del flujo**

Permitir que el donante seleccione un desastre, evalúe empresas logísticas, realice un aporte y haga seguimiento verificable al uso de los fondos.

---

## **Fase 1: Choosing**

---

## **Pantalla D-01**

# **Interfaz de Desastres Naturales**

### **Objetivo de la pantalla**

Permitir que el donante identifique el contexto humanitario al que desea dirigir su aporte.

### **Trigger de entrada**

El usuario entra por primera vez al flujo de donación o hace clic en “explorar operaciones activas”.

### **Objetivo del usuario**

Encontrar un desastre relevante y entender rápidamente su nivel de urgencia.

### **Acción principal**

Seleccionar un desastre natural del listado.

### **Resultado esperado**

El sistema guarda el desastre seleccionado y conduce al usuario a la vista de empresas logísticas disponibles.

### **Componentes UI sugeridos**

* Header con título y breve contexto  
* Listado o cards de desastres  
* Etiquetas visuales de urgencia  
* Ubicación y fecha de actualización  
* CTA por card: **Seleccionar**  
* Filtros opcionales por región, tipo o urgencia

### **Datos mínimos por ítem**

* Nombre del desastre  
* País o ubicación  
* Tipo de evento  
* Nivel de severidad  
* Fecha  
* Estado de campaña o atención

### **Estados esperados**

* Cargando  
* Lista poblada  
* Sin desastres disponibles  
* Error de red o carga

### **Consideraciones UX**

* El usuario debe entender la diferencia entre varias crisis sin leer demasiado.  
* Las tarjetas deben ser comparables entre sí.  
* El CTA debe ser inequívoco.

---

## **Pantalla D-02**

# **Interfaz de Empresas de Logística**

### **Objetivo de la pantalla**

Mostrar qué empresas pueden responder al desastre elegido.

### **Trigger de entrada**

El usuario selecciona un desastre natural en la pantalla anterior.

### **Objetivo del usuario**

Comparar opciones logísticas antes de decidir a cuál empresa respaldar con su dinero.

### **Acción principal**

Abrir el detalle de una empresa logística.

### **Resultado esperado**

El usuario identifica una empresa de interés y navega a su ficha detallada.

### **Componentes UI sugeridos**

* Breadcrumb de contexto del desastre seleccionado  
* Lista o tabla comparativa de empresas  
* Indicadores visuales de capacidad y confianza  
* CTA: **Ver detalle**  
* Resumen breve generado por sistema/IA

### **Datos mínimos por empresa**

* Nombre de la empresa  
* Estado de verificación  
* Nivel de capacidad operativa  
* Nivel de confianza  
* Cobertura  
* Tiempo de respuesta  
* Resumen operacional corto

### **Estados esperados**

* Empresas disponibles  
* Ninguna empresa disponible  
* Empresa saturada o no elegible  
* Error de carga

### **Consideraciones UX**

* La comparación debe ser simple y rápida.  
* Las métricas deben ser comprensibles para alguien no técnico.  
* El usuario debe sentir que está eligiendo entre opciones reales y no abstractas.

---

## **Pantalla D-03**

# **Interfaz de Empresa**

### **Objetivo de la pantalla**

Brindar suficiente detalle para que el donante tome una decisión informada.

### **Trigger de entrada**

El usuario hace clic en una empresa logística desde el listado.

### **Objetivo del usuario**

Entender si la empresa es confiable y si su plan de acción es convincente.

### **Acción principal**

Revisar el perfil y continuar hacia el funding.

### **Resultado esperado**

El usuario elige avanzar con esa empresa y pasa al flujo de aporte.

### **Componentes UI sugeridos**

* Encabezado con identidad de empresa  
* Badge de verificación  
* Panel resumen de capacidad operativa  
* Panel de confianza  
* Sección “Análisis generado por GenLayer”  
* Sección “Plan operativo presentado por la empresa”  
* CTA principal: **Continuar con esta empresa**

### **Contenido recomendado**

* Qué puede ejecutar la empresa  
* Qué cobertura propone  
* Qué recursos posee  
* Qué riesgos o limitaciones existen  
* Qué evidencia respalda su capacidad

### **Estados esperados**

* Perfil completo  
* Perfil incompleto  
* Empresa no disponible  
* Datos en revisión

### **Consideraciones UX**

* El texto generado por IA debe estar resumido y explicado.  
* El plan operativo debe tener jerarquía visual clara.  
* El CTA debe aparecer cuando el usuario ya tenga contexto suficiente.

---

## **Fase 2: Funding**

---

## **Pantalla D-04**

# **Interfaz de Wallet / Aporte**

### **Objetivo de la pantalla**

Permitir al usuario realizar su contribución económica con seguridad y claridad.

### **Trigger de entrada**

El usuario selecciona un desastre y una empresa y presiona continuar.

### **Objetivo del usuario**

Definir cuánto aportar y confirmar la transacción.

### **Acción principal**

Ingresar monto y firmar/confirmar la operación.

### **Resultado esperado**

La transacción se registra exitosamente y el aporte queda vinculado al desastre y empresa seleccionados.

### **Componentes UI sugeridos**

* Resumen de contexto seleccionado  
* Campo de monto  
* Información de activo/token  
* Balance disponible  
* Fee estimada  
* Estado de wallet  
* CTA principal: **Confirmar aporte**  
* Mensajes de validación en línea

### **Estados esperados**

* Wallet desconectada  
* Wallet conectada  
* Monto inválido  
* Fondos insuficientes  
* Firma pendiente  
* Transacción enviada  
* Confirmada  
* Fallida

### **Resultado esperado detallado**

Tras una confirmación exitosa, el sistema debe:

* mostrar un mensaje de éxito,  
* guardar el aporte,  
* permitir acceso inmediato al módulo de seguimiento.

### **Consideraciones UX**

* El resumen del contexto debe permanecer visible.  
* La interfaz debe minimizar incertidumbre al firmar.  
* Las fallas deben ser explicadas claramente.

---

## **Fase 3: Reporting**

---

## **Pantalla D-05**

# **Interfaz de Reporte / Timeline**

### **Objetivo de la pantalla**

Permitir al donante verificar qué ha ocurrido después de su aporte.

### **Trigger de entrada**

El usuario completa una donación o entra desde su historial de aportes.

### **Objetivo del usuario**

Visualizar el progreso de la operación y la evidencia asociada.

### **Acción principal**

Explorar el timeline y abrir detalles de eventos o evidencias.

### **Resultado esperado**

El usuario comprende el estado de la operación y la trazabilidad del uso de fondos.

### **Componentes UI sugeridos**

* Timeline cronológico  
* Tarjetas de eventos  
* Filtros por estado o fecha  
* Estado actual global  
* Acceso a evidencia  
* Resumen de hitos y progreso

### **Eventos sugeridos del timeline**

* Empresa elegida  
* Fondos recibidos  
* Plan operativo publicado  
* Operador asignado  
* Lote registrado  
* Entrega ejecutada  
* Evidencia subida  
* Evento sincronizado  
* Liquidación ejecutada  
* Operación cerrada

### **Estados esperados**

* Sin eventos todavía  
* Timeline parcial  
* Timeline completo  
* Error de carga de evidencias

### **Consideraciones UX**

* Debe evitar lenguaje técnico innecesario.  
* El timeline debe ser legible en desktop y móvil.  
* Cada evento debe responder: qué pasó, quién lo hizo, cuándo ocurrió, cuál es su evidencia.

---

# **6B. Flujo del Coordinador**

## **Objetivo general del flujo**

Permitir que una empresa logística sea representada formalmente en la plataforma, describa su plan operativo, administre operadores y supervise la ejecución y los fondos.

---

## **Pantalla C-01**

# **Registro de Representante Legal**

### **Objetivo de la pantalla**

Formalizar la presencia de la empresa a través de un representante autorizado.

### **Trigger de entrada**

La empresa desea participar como ejecutora logística en la plataforma.

### **Objetivo del usuario**

Completar la validación requerida para operar.

### **Acción principal**

Ingresar datos y someterse al proceso de verificación/KYC-whitelist.

### **Resultado esperado**

El coordinador queda registrado como representante legal válido de la empresa.

### **Componentes UI sugeridos**

* Stepper del proceso  
* Formulario de empresa  
* Formulario de representante  
* Estado de verificación  
* Adjuntos o evidencia legal si aplica  
* CTA: **Registrar representante**

### **Estados esperados**

* Pendiente  
* En revisión  
* Verificado  
* Rechazado  
* Requiere corrección

### **Consideraciones UX**

* Debe quedar claro qué es obligatorio y qué no.  
* Los errores deben señalar exactamente qué corregir.  
* Debe comunicarse si la verificación tiene impacto contractual.

---

## **Pantalla C-02**

# **Registro de Planificación**

### **Objetivo de la pantalla**

Permitir que la empresa describa cómo ejecutará la ayuda.

### **Trigger de entrada**

El coordinador ya fue verificado o prehabilitado.

### **Objetivo del usuario**

Subir un plan de acción convincente y comprensible.

### **Acción principal**

Completar y guardar/publicar un formulario de planificación.

### **Resultado esperado**

El plan queda registrado para su exposición a donantes y para el seguimiento operativo.

### **Componentes UI sugeridos**

* Formulario largo estructurado por bloques  
* Guardado de borrador  
* Campos guiados  
* Ayuda contextual  
* CTA: **Guardar borrador** / **Publicar plan**

### **Campos sugeridos**

* Desastre asociado  
* Capacidad de carga  
* Tiempo estimado  
* Cobertura  
* Infraestructura disponible  
* Riesgos  
* Estrategia de última milla  
* Recursos humanos  
* Necesidades

### **Estados esperados**

* Borrador  
* Publicado  
* Editado  
* Suspendido

### **Consideraciones UX**

* Debe ayudar al coordinador a escribir mejor, no solo capturar texto.  
* Conviene usar secciones y validaciones progresivas.

---

## **Pantalla C-03**

# **CRUD de Operadores**

### **Objetivo de la pantalla**

Gestionar el equipo operativo subordinado que ejecutará la ayuda.

### **Trigger de entrada**

El coordinador necesita crear o administrar operadores.

### **Objetivo del usuario**

Registrar, editar, activar o desactivar operadores.

### **Acción principal**

Realizar operaciones CRUD sobre el listado de operadores.

### **Resultado esperado**

Los operadores quedan configurados correctamente para recibir asignaciones y registrar entregas.

### **Componentes UI sugeridos**

* Tabla/listado de operadores  
* Buscador  
* Filtro por estado  
* Modal o formulario de alta/edición  
* Acciones rápidas  
* Confirmación para acciones sensibles

### **Datos por operador**

* Nombre  
* Identificador  
* Estado  
* Fecha de creación  
* Asignaciones activas  
* Última actividad

### **Estados esperados**

* Sin operadores  
* Operadores activos  
* Operador deshabilitado  
* Error de creación  
* Duplicado

### **Consideraciones UX**

* Debe priorizar rapidez administrativa.  
* Las acciones destructivas no deben ejecutarse accidentalmente.

---

## **Pantalla C-04**

# **Dashboard del Coordinador**

### **Objetivo de la pantalla**

Concentrar la visibilidad operativa y financiera de la empresa dentro de la plataforma.

### **Trigger de entrada**

El coordinador entra a su panel principal.

### **Objetivo del usuario**

Monitorear fondos, actividad operativa y evidencia subida por operadores.

### **Acción principal**

Revisar indicadores y navegar a detalles operativos.

### **Resultado esperado**

El coordinador puede supervisar la operación y actuar ante incidencias.

### **Componentes UI sugeridos**

* KPIs principales  
* Resumen de fondos  
* Tabla de entregas  
* Lista de operadores  
* Evidencia reciente  
* Alertas / inconsistencias  
* Accesos rápidos a gestión

### **KPIs sugeridos**

* Fondos disponibles  
* Fondos comprometidos  
* Entregas pendientes  
* Entregas completadas  
* Operadores activos  
* Sincronizaciones fallidas

### **Consideraciones UX**

* La información más crítica debe estar arriba.  
* Deben distinguirse claramente indicadores financieros y operativos.  
* Las alertas deben ser accionables.

---

# **6C. Flujo del Operador**

## **Objetivo general del flujo**

Permitir el registro eficiente y confiable de entregas en última milla, incluyendo evidencia y tolerancia a trabajo offline.

---

## **Pantalla O-01**

# **Pantalla Operativa Principal de Entrega**

### **Objetivo de la pantalla**

Registrar una entrega y asociarla con evidencia válida.

### **Trigger de entrada**

El operador accede al módulo de campo desde dispositivo móvil o interfaz operativa.

### **Objetivo del usuario**

Capturar la información mínima necesaria para registrar una entrega sin fricción.

### **Acción principal**

Ingresar o validar IDs, escanear QR, obtener GPS y registrar evento.

### **Resultado esperado**

La entrega queda registrada localmente o enviada, según conectividad.

### **Componentes UI sugeridos**

* Header con estado del sistema  
* Formulario compacto  
* Botón de escaneo QR  
* Estado GPS  
* Lista de cola offline  
* Botón de sincronización

---

## **Componente O-01-A**

# **Indicadores de Estado**

### **Objetivo**

Mostrar salud operativa del sistema en tiempo real.

### **Acción del usuario**

Verifica si está online/offline y cuántos eventos pendientes existen.

### **Resultado esperado**

El operador toma decisiones rápidas sin revisar menús adicionales.

### **Elementos**

* Badge de conexión  
* Contador de pendientes  
* Estado visible persistente

### **Consideraciones UX**

* Debe estar siempre visible.  
* Debe ser inmediatamente interpretable.

---

## **Componente O-01-B**

# **Formulario de Captura**

### **Objetivo**

Registrar datos mínimos de la entrega.

### **Acción del usuario**

Completa campos, escanea QR y confirma.

### **Resultado esperado**

El evento queda correctamente identificado.

### **Campos mínimos**

* ID de operador  
* ID de lote  
* Resultado de QR  
* Posible timestamp automático

### **Componentes**

* Inputs simples  
* Botón principal  
* Modal de escaneo  
* Confirmación de lectura

### **Consideraciones UX**

* Evitar tipeo extensivo.  
* Asegurar buena visibilidad del CTA.  
* Permitir reintento de escaneo.

---

## **Componente O-01-C**

# **Retroalimentación GPS**

### **Objetivo**

Capturar ubicación como parte de la evidencia.

### **Acción del usuario**

Observa el estado del GPS y reintenta si falla.

### **Resultado esperado**

La ubicación se captura o el sistema informa claramente el problema.

### **Estados**

* Locating  
* OK  
* Error  
* Permiso denegado  
* Reintentar

### **Consideraciones UX**

* No ocultar fallas.  
* El usuario debe tener control.  
* Debe informarse si la entrega puede continuar sin GPS.

---

## **Componente O-01-D**

# **Cola Offline**

### **Objetivo**

Permitir que los eventos se registren aunque no haya conexión.

### **Acción del usuario**

Registra eventos mientras está offline y posteriormente usa “Sync”.

### **Resultado esperado**

Los eventos quedan almacenados y luego sincronizados sin pérdida de información.

### **Elementos**

* Lista de eventos pendientes  
* Estado individual por evento  
* Marca temporal  
* Botón prominente de sincronización

### **Estados por ítem**

* Pendiente  
* Enviando  
* Sincronizado  
* Error  
* Requiere revisión

### **Consideraciones UX**

* La cola debe transmitir seguridad.  
* El operador debe saber si los datos están a salvo.  
* Los errores deben ser claros y accionables.

---

## **Pantalla O-02**

# **Estado de Liquidación / Cierre Operativo**

### **Objetivo de la pantalla**

Comunicar de forma comprensible el efecto contractual de una entrega validada.

### **Trigger de entrada**

La entrega ha sido validada y el contrato procesa la liquidación.

### **Objetivo del usuario**

Entender el estado financiero derivado de la entrega registrada.

### **Acción principal**

Consultar el estado del evento y su efecto económico.

### **Resultado esperado**

El operador entiende que el préstamo inicial se descuenta y solo se transfiere su margen operativo.

### **Componentes UI sugeridos**

* Estado de validación  
* Estado de liquidación  
* Resumen económico  
* Línea temporal de cierre

### **Estados sugeridos**

* Entrega registrada  
* Evidencia validada  
* Liquidación en proceso  
* Préstamo descontado  
* Margen transferido  
* Operación cerrada

### **Consideraciones UX**

* Esta lógica no debe mostrarse solo como texto técnico.  
* Debe explicarse de forma simple y secuencial.

---

# **7\. Tabla resumida de user flow por pantalla**

## **Donante**

| ID | Pantalla | Objetivo | Acción principal | Resultado esperado |
| ----- | ----- | ----- | ----- | ----- |
| D-01 | Desastres Naturales | Elegir un contexto de ayuda | Seleccionar desastre | Contexto activo definido |
| D-02 | Empresas de Logística | Comparar opciones de ejecución | Ver detalle de empresa | Selección informada |
| D-03 | Perfil de Empresa | Evaluar capacidad y confianza | Continuar con empresa | Paso a funding |
| D-04 | Wallet / Aporte | Financiar operación | Ingresar monto y confirmar | Aporte registrado |
| D-05 | Reporte / Timeline | Dar seguimiento a la ayuda | Ver eventos y evidencia | Transparencia post-donación |

## **Coordinador**

| ID | Pantalla | Objetivo | Acción principal | Resultado esperado |
| ----- | ----- | ----- | ----- | ----- |
| C-01 | Registro legal | Formalizar representación | Completar KYC/registro | Empresa habilitada |
| C-02 | Planificación | Declarar plan operativo | Guardar/publicar plan | Plan visible y utilizable |
| C-03 | CRUD Operadores | Gestionar equipo de campo | Crear/editar/desactivar | Operadores configurados |
| C-04 | Dashboard | Monitorear operación | Revisar KPIs y alertas | Supervisión efectiva |

## **Operador**

| ID | Pantalla | Objetivo | Acción principal | Resultado esperado |
| ----- | ----- | ----- | ----- | ----- |
| O-01 | Captura operativa | Registrar entrega | Escanear, capturar, guardar | Evento registrado |
| O-02 | Estado de liquidación | Entender cierre contractual | Consultar resultado | Ciclo operativo comprendido |

---

# **8\. Requisitos UX transversales**

## **8.1 Estados visibles**

Todas las acciones relevantes deben mostrar estado claro.

## **8.2 Feedback inmediato**

Cada acción debe responder con confirmación, error o progreso.

## **8.3 Prevención de errores**

El sistema debe minimizar captura manual, duplicados y acciones irreversibles accidentales.

## **8.4 Accesibilidad contextual**

Especialmente para operadores, el diseño debe ser usable en campo, con poco tiempo y conectividad irregular.

## **8.5 Transparencia**

La lógica blockchain y contractual debe traducirse a lenguaje comprensible de producto.

---

# **9\. Riesgos de experiencia**

## **Riesgo 1**

Confusión entre “donación”, “financiamiento”, “préstamo operativo” y “liquidación”.

### **Mitigación**

Separar estos conceptos en copy, arquitectura de información y estados de interfaz.

## **Riesgo 2**

Sobrecarga cognitiva en la evaluación de empresas.

### **Mitigación**

Usar resumen \+ detalle progresivo.

## **Riesgo 3**

Fricción en trabajo de campo.

### **Mitigación**

Diseño mobile-first, inputs mínimos y soporte offline fuerte.

## **Riesgo 4**

Falta de confianza por exceso de complejidad técnica.

### **Mitigación**

Traducir IA, smart contracts y evidencias a narrativas simples de estado.

---

# **10\. Recomendación final de estructura para Figma**

## **Sección 1: Donante**

* Explorer de desastres  
* Explorer de empresas  
* Perfil de empresa  
* Wallet / aporte  
* Timeline de reporte

## **Sección 2: Coordinador**

* Registro legal  
* Planificación  
* Gestión de operadores  
* Dashboard

## **Sección 3: Operador**

* Pantalla móvil de captura  
* Modal QR  
* Estado GPS  
* Cola offline  
* Estado de liquidación

## **Sección 4: Sistema de estados**

* Loading  
* Empty  
* Error  
* Success  
* Pending  
* Synced  
* Offline

---

# **11\. Próximo nivel de documentación recomendado**

Lo siguiente ideal sería convertir esto en cualquiera de estos tres formatos:

1. **UX sitemap \+ task flows**  
2. **Wireframe spec por pantalla**  
3. **PRD \+ UX writing \+ estados vacíos y mensajes de error**

Yo te recomendaría que el siguiente paso sea el **wireframe spec por pantalla**, porque ya tienes los flujos y ahora toca bajar eso a estructura visual concreta.

