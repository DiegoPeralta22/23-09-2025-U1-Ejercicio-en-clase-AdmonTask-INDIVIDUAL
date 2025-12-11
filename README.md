# 🛠️ API REST - Task Manager (Gestión de Tareas)

Este proyecto consiste en el desarrollo de una **API RESTful** utilizando **Node.js** y **Express**, diseñada bajo el patrón de arquitectura **MVC (Modelo-Vista-Controlador)**. El sistema permite la administración completa de tareas (To-Do List) mediante operaciones CRUD, gestionando la persistencia de datos en memoria y validando el flujo de información entre el cliente y el servidor.

## 📋 Objetivos del Proyecto

* **Arquitectura Modular:** Separación clara de responsabilidades:
    * **Modelo:** Definición de datos y lógica de almacenamiento.
    * **Controlador:** Lógica de negocio y manejo de peticiones/respuestas.
    * **Rutas:** Definición de endpoints y métodos HTTP.
* **Gestión de Estado:** Implementación de lógica para marcar tareas como completadas/pendientes.
* **Manejo de Respuestas HTTP:** Uso correcto de códigos de estado (`200`, `201`, `404`) y respuestas JSON estructuradas.

##  Endpoints Disponibles

La API expone los siguientes recursos para interactuar con las tareas:

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/tasks` | Obtiene la lista completa de tareas (`findAll`). |
| `GET` | `/tasks/:id` | Busca una tarea por su ID único. Retorna `404` si no existe. |
| `POST` | `/tasks` | Crea una nueva tarea. Genera ID con `randomUUID`. |
| `DELETE`| `/tasks/:id` | Elimina una tarea del sistema. |
| `PATCH` | `/tasks/:id` | Actualiza el título de una tarea existente. |
| `PATCH` | `/tasks/:id/toggle`| Invierte el estado de la tarea (Pendiente ↔ Completada). |

##  Detalles Técnicos y Soluciones

### Modelo (`Model`)
Se implementó un arreglo en memoria para simular la base de datos. Se solucionaron problemas de consistencia donde las búsquedas retornaban booleanos, ajustando las funciones `findId` para retornar el objeto completo o `null`, permitiendo al controlador tomar decisiones precisas.

### Controlador (`Controller`)
Se estandarizó la comunicación servidor-cliente. Se implementaron validaciones para asegurar que los datos de entrada (como el título) sean texto válido y se estructuraron los mensajes de error para ofrecer retroalimentación clara en caso de recursos no encontrados.

### Rutas (`Routes`)
Se utilizó `express.Router()` para desacoplar las rutas del archivo principal, mejorando la mantenibilidad y organización del código.
