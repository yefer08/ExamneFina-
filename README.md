# Task Manager App - Gestión de Tareas

Aplicación móvil desarrollada con React JS y Firebase Firestore para gestionar una lista de tareas/items.

## 📋 Descripción

Esta aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una lista de tareas almacenadas en Firebase Firestore. Cuenta con dos pantallas principales:

- **Pantalla Lista (Home)**: Muestra todos los items ordenados por fecha de creación
- **Pantalla Formulario (Form)**: Permite crear y editar items

## 🚀 Características

- ✅ Crear nuevas tareas
- ✅ Listar todas las tareas (ordenadas por fecha de creación)
- ✅ Editar tareas existentes
- ✅ Eliminar tareas
- ✅ Validación de campos obligatorios
- ✅ Timestamps automáticos (createdAt, updatedAt)
- ✅ Almacenamiento en la nube con Firebase Firestore

## 🛠️ Tecnologías Utilizadas

- React JS 18
- React Router DOM (navegación)
- Firebase 10 (Firestore)
- CSS3

## 📦 Instalación

### Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn
- Cuenta de Firebase

### Pasos para Instalar

1. **Clonar el repositorio:**
   ```bash
   git clone [URL-DE-TU-REPOSITORIO]
   cd task-manager-app
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar Firebase:**
   - Ve a [Firebase Console](https://console.firebase.google.com/)
   - Crea un nuevo proyecto
   - Habilita Firestore Database
   - Copia las credenciales de tu proyecto
   - Edita el archivo `src/firebase/config.js` con tus credenciales:

   ```javascript
   const firebaseConfig = {
     apiKey: "TU_API_KEY",
     authDomain: "TU_AUTH_DOMAIN",
     projectId: "TU_PROJECT_ID",
     storageBucket: "TU_STORAGE_BUCKET",
     messagingSenderId: "TU_MESSAGING_SENDER_ID",
     appId: "TU_APP_ID"
   };
   ```

4. **Actualizar el studentId:**
   - Edita el archivo `src/services/firestoreService.js`
   - Cambia el valor de `STUDENT_ID` por tu matrícula:
   ```javascript
   const STUDENT_ID = "TU_MATRICULA_AQUI";
   ```

5. **Iniciar la aplicación:**
   ```bash
   npm start
   ```

   La aplicación se abrirá en `http://localhost:3000`

## 📱 Estructura del Proyecto

```
task-manager-app/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Home.js          # Pantalla principal (lista)
│   │   ├── Form.js          # Pantalla de formulario
│   │   ├── Home.css         # Estilos de Home
│   │   └── Form.css         # Estilos de Form
│   ├── firebase/
│   │   └── config.js        # Configuración de Firebase
│   ├── services/
│   │   └── firestoreService.js  # Funciones CRUD
│   ├── App.js               # Componente principal con rutas
│   ├── App.css              # Estilos globales
│   └── index.js             # Punto de entrada
├── .gitignore
├── package.json
└── README.md
```

## 🔥 Configuración de Firestore

### Reglas de Seguridad (Firebase Console)

Para desarrollo, puedes usar estas reglas (⚠️ cambiar para producción):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /tasks/{document=**} {
      allow read, write: if true;
    }
  }
}
```

## 📝 Uso de la Aplicación

1. **Ver Tareas:** Al abrir la app, verás la lista de todas las tareas
2. **Crear Tarea:** Click en "➕ Nueva Tarea" para abrir el formulario
3. **Editar Tarea:** Click en "✏️ Editar" en cualquier tarea
4. **Eliminar Tarea:** Click en "🗑️ Eliminar" en cualquier tarea

## 🎓 Datos del Estudiante

- **Matrícula:** [TEST-001]
- **Nombre:** [Yefer yesid mosquera cordoba]
- **Curso:** Desarrollo Web con React JS

## 📄 Licencia

Este proyecto es para fines educativos.

## 👤 Autor

[Yefer yesid mosquera cordoba]
