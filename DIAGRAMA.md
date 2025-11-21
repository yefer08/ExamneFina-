# 📖 DIAGRAMA DEL PROYECTO

## 🏗️ ARQUITECTURA DE LA APLICACIÓN

```
┌─────────────────────────────────────────────────────────────┐
│                    TASK MANAGER APP                         │
│                  (React + Firebase)                         │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────┐
        │         NAVEGACIÓN (Router)           │
        │       React Router DOM v6             │
        └───────────────────────────────────────┘
                │                        │
       Ruta: /                   Ruta: /form/:id?
                │                        │
                ▼                        ▼
    ┌──────────────────┐      ┌──────────────────┐
    │   HOME (Lista)   │◄─────┤  FORM (Crear/    │
    │                  │      │   Editar)        │
    │ - Listar tareas  │─────►│                  │
    │ - Editar tarea   │      │ - Crear nueva    │
    │ - Eliminar tarea │      │ - Editar existe  │
    │ - Nueva tarea    │      │ - Validar datos  │
    └──────────────────┘      └──────────────────┘
            │                         │
            │                         │
            └───────────┬─────────────┘
                        │
                        ▼
        ┌───────────────────────────────────────┐
        │    FIRESTORE SERVICE (CRUD)           │
        │                                       │
        │  • createTask()    - CREATE           │
        │  • getAllTasks()   - READ (all)       │
        │  • getTaskById()   - READ (one)       │
        │  • updateTask()    - UPDATE           │
        │  • deleteTask()    - DELETE           │
        └───────────────────────────────────────┘
                        │
                        ▼
        ┌───────────────────────────────────────┐
        │      FIREBASE CONFIG                  │
        │  (Conexión a Firebase)                │
        └───────────────────────────────────────┘
                        │
                        ▼
        ┌───────────────────────────────────────┐
        │      FIRESTORE DATABASE               │
        │      (Nube - Firebase)                │
        │                                       │
        │  Colección: tasks                     │
        │  ├── documento1                       │
        │  ├── documento2                       │
        │  └── documento3...                    │
        └───────────────────────────────────────┘
```

---

## 🔄 FLUJO DE DATOS

### CREAR TAREA
```
Usuario
   │
   │ 1. Click "Nueva Tarea"
   ▼
[HOME]
   │
   │ 2. Navega a /form
   ▼
[FORM]
   │
   │ 3. Usuario llena formulario
   │ 4. Click "Guardar"
   │ 5. Validación
   ▼
firestoreService.createTask()
   │
   │ 6. Envía datos a Firebase
   ▼
FIRESTORE
   │
   │ 7. Guarda documento
   │ 8. Retorna ID
   ▼
[FORM]
   │
   │ 9. Muestra mensaje de éxito
   │ 10. Navega de vuelta a /
   ▼
[HOME]
   │
   │ 11. Recarga lista
   ▼
Usuario ve nueva tarea
```

### LEER TAREAS
```
Usuario
   │
   │ 1. Abre la app
   ▼
[HOME]
   │
   │ 2. useEffect se ejecuta
   ▼
firestoreService.getAllTasks()
   │
   │ 3. Query a Firestore
   │    (ordenado por createdAt desc)
   ▼
FIRESTORE
   │
   │ 4. Retorna array de documentos
   ▼
[HOME]
   │
   │ 5. setTasks(data)
   │ 6. Renderiza lista
   ▼
Usuario ve todas las tareas
```

### ACTUALIZAR TAREA
```
Usuario
   │
   │ 1. Click "Editar" en una tarea
   ▼
[HOME]
   │
   │ 2. Navega a /form/:id
   ▼
[FORM]
   │
   │ 3. useEffect detecta ID en params
   ▼
firestoreService.getTaskById(id)
   │
   │ 4. Obtiene documento de Firestore
   ▼
FIRESTORE
   │
   │ 5. Retorna datos de la tarea
   ▼
[FORM]
   │
   │ 6. setFormData(taskData)
   │ 7. Usuario modifica campos
   │ 8. Click "Actualizar"
   ▼
firestoreService.updateTask(id, data)
   │
   │ 9. Actualiza documento en Firestore
   ▼
FIRESTORE
   │
   │ 10. Actualiza documento
   │ 11. Actualiza updatedAt
   ▼
[FORM]
   │
   │ 12. Muestra mensaje de éxito
   │ 13. Navega de vuelta a /
   ▼
[HOME]
   │
   │ 14. Recarga lista
   ▼
Usuario ve tarea actualizada
```

### ELIMINAR TAREA
```
Usuario
   │
   │ 1. Click "Eliminar" en una tarea
   ▼
[HOME]
   │
   │ 2. window.confirm()
   ▼
Usuario confirma
   │
   │ 3. Confirmación aceptada
   ▼
firestoreService.deleteTask(id)
   │
   │ 4. Elimina documento de Firestore
   ▼
FIRESTORE
   │
   │ 5. Elimina documento
   ▼
[HOME]
   │
   │ 6. Muestra mensaje de éxito
   │ 7. Recarga lista
   ▼
Usuario ve lista actualizada
```

---

## 📁 ESTRUCTURA DE ARCHIVOS DETALLADA

```
task-manager-app/
│
├── 📄 package.json              # Dependencias y scripts
├── 📄 .gitignore                # Archivos a ignorar en Git
├── 📄 README.md                 # Documentación principal
├── 📄 FIREBASE_SETUP.md         # Guía Firebase
├── 📄 GIT_GUIDE.md              # Guía Git/GitHub
├── 📄 INSTRUCCIONES.md          # Pasos para estudiante
├── 📄 RESUMEN.md                # Resumen del proyecto
├── 📄 DIAGRAMA.md               # Este archivo
│
├── 📁 public/                   # Archivos públicos
│   ├── 📄 index.html            # HTML principal
│   └── 📄 manifest.json         # Config PWA
│
└── 📁 src/                      # Código fuente
    │
    ├── 📄 index.js              # Punto de entrada
    ├── 📄 index.css             # Estilos base
    ├── 📄 App.js                # Componente principal + rutas
    ├── 📄 App.css               # Estilos globales
    │
    ├── 📁 components/           # Componentes React
    │   ├── 📄 Home.js           # Pantalla lista
    │   ├── 📄 Home.css          # Estilos Home
    │   ├── 📄 Form.js           # Pantalla formulario
    │   ├── 📄 Form.css          # Estilos Form
    │   └── 📄 TestComponents.js # Componentes de prueba
    │
    ├── 📁 firebase/             # Configuración Firebase
    │   └── 📄 config.js         # Inicialización Firebase
    │
    └── 📁 services/             # Lógica de negocio
        └── 📄 firestoreService.js # Operaciones CRUD
```

---

## 🧩 COMPONENTES Y SUS RESPONSABILIDADES

### 📄 index.js
```
┌─────────────────────────────┐
│         index.js            │
├─────────────────────────────┤
│ • Punto de entrada          │
│ • Renderiza <App />         │
│ • Conecta con el DOM        │
└─────────────────────────────┘
```

### 📄 App.js
```
┌─────────────────────────────┐
│          App.js             │
├─────────────────────────────┤
│ • Configuración de rutas    │
│ • BrowserRouter             │
│ • Routes y Route            │
│ • Layout principal          │
└─────────────────────────────┘
```

### 📄 Home.js
```
┌─────────────────────────────┐
│         Home.js             │
├─────────────────────────────┤
│ STATE:                      │
│ • tasks (array)             │
│ • loading (bool)            │
│ • error (string)            │
├─────────────────────────────┤
│ EFFECTS:                    │
│ • useEffect → loadTasks()   │
├─────────────────────────────┤
│ FUNCTIONS:                  │
│ • loadTasks()               │
│ • handleCreateNew()         │
│ • handleEdit(id)            │
│ • handleDelete(id)          │
│ • formatDate(timestamp)     │
├─────────────────────────────┤
│ RENDERIZA:                  │
│ • Header con botón          │
│ • Lista de tareas (cards)   │
│ • Botones editar/eliminar   │
│ • Loading/Error states      │
│ • Footer con contador       │
└─────────────────────────────┘
```

### 📄 Form.js
```
┌─────────────────────────────┐
│         Form.js             │
├─────────────────────────────┤
│ PARAMS:                     │
│ • id (de useParams)         │
├─────────────────────────────┤
│ STATE:                      │
│ • formData (object)         │
│   - title                   │
│   - description             │
│ • loading (bool)            │
│ • loadingTask (bool)        │
│ • errors (object)           │
├─────────────────────────────┤
│ EFFECTS:                    │
│ • useEffect → loadTask()    │
│   (si existe ID)            │
├─────────────────────────────┤
│ FUNCTIONS:                  │
│ • loadTask()                │
│ • handleChange(e)           │
│ • validateForm()            │
│ • handleSubmit(e)           │
│ • handleCancel()            │
├─────────────────────────────┤
│ RENDERIZA:                  │
│ • Formulario con campos     │
│ • Validaciones visuales     │
│ • Botones guardar/cancelar  │
│ • Loading state             │
└─────────────────────────────┘
```

### 📄 firestoreService.js
```
┌─────────────────────────────┐
│   firestoreService.js       │
├─────────────────────────────┤
│ CONSTANTES:                 │
│ • STUDENT_ID                │
│ • COLLECTION_NAME           │
├─────────────────────────────┤
│ FUNCIONES EXPORTADAS:       │
│                             │
│ createTask(taskData)        │
│ ├─ Input: {title, desc}     │
│ ├─ Agrega: studentId,       │
│ │   createdAt, updatedAt    │
│ └─ Output: {success, id}    │
│                             │
│ getAllTasks()               │
│ ├─ Query ordenado           │
│ └─ Output: {success, data}  │
│                             │
│ getTaskById(taskId)         │
│ ├─ Input: documentId        │
│ └─ Output: {success, data}  │
│                             │
│ updateTask(taskId, data)    │
│ ├─ Input: id, {title, desc} │
│ ├─ Actualiza: updatedAt     │
│ └─ Output: {success}        │
│                             │
│ deleteTask(taskId)          │
│ ├─ Input: documentId        │
│ └─ Output: {success}        │
└─────────────────────────────┘
```

### 📄 firebase/config.js
```
┌─────────────────────────────┐
│   firebase/config.js        │
├─────────────────────────────┤
│ • firebaseConfig (object)   │
│ • initializeApp(config)     │
│ • getFirestore(app)         │
│ • export { db }             │
└─────────────────────────────┘
```

---

## 🎨 ESTRUCTURA DE ESTILOS

```
ESTILOS GLOBALES (App.css, index.css)
│
├── Reset CSS (* {})
├── Fonts y tipografía
├── Colores base
└── Utilidades (.text-center, etc.)
    │
    ├── HOME STYLES (Home.css)
    │   ├── .home-container
    │   ├── .home-header
    │   ├── .tasks-list
    │   ├── .task-card
    │   │   ├── .task-content
    │   │   ├── .task-title
    │   │   ├── .task-description
    │   │   ├── .task-meta
    │   │   └── .task-actions
    │   └── .home-footer
    │
    └── FORM STYLES (Form.css)
        ├── .form-container
        ├── .form-card
        ├── .task-form
        │   ├── .form-group
        │   ├── .form-label
        │   ├── .form-input
        │   ├── .form-textarea
        │   └── .form-actions
        └── .form-info

RESPONSIVE (@media queries)
├── Desktop: > 768px
│   └── Layout de 2 columnas
└── Móvil: ≤ 768px
    └── Layout de 1 columna
```

---

## 🔥 ESTRUCTURA DE FIRESTORE

```
FIREBASE PROJECT
│
└── Firestore Database
    │
    └── 📁 Colección: tasks
        │
        ├── 📄 Documento: abc123
        │   ├── id: "abc123"
        │   ├── title: "Mi primera tarea"
        │   ├── description: "Descripción..."
        │   ├── studentId: "2021-0123"
        │   ├── createdAt: Timestamp
        │   └── updatedAt: Timestamp
        │
        ├── 📄 Documento: xyz789
        │   ├── id: "xyz789"
        │   ├── title: "Segunda tarea"
        │   ├── description: ""
        │   ├── studentId: "2021-0123"
        │   ├── createdAt: Timestamp
        │   └── updatedAt: Timestamp
        │
        └── 📄 Documento: ...
```

---

## 🚀 CICLO DE VIDA DE LA APLICACIÓN

### INICIO
```
1. Usuario abre http://localhost:3000
   ↓
2. index.html se carga
   ↓
3. index.js ejecuta ReactDOM.render(<App />)
   ↓
4. App.js monta el Router
   ↓
5. Router detecta ruta "/" y muestra <Home />
   ↓
6. Home.js se monta
   ↓
7. useEffect ejecuta loadTasks()
   ↓
8. loadTasks() llama a getAllTasks()
   ↓
9. getAllTasks() query a Firestore
   ↓
10. Firestore retorna documentos
   ↓
11. Home.js actualiza state con setTasks(data)
   ↓
12. Home.js re-renderiza mostrando las tareas
   ↓
13. Usuario ve la interfaz completa
```

### CREAR TAREA
```
1. Usuario click "Nueva Tarea"
   ↓
2. navigate('/form')
   ↓
3. Router muestra <Form />
   ↓
4. Form.js se monta con formData vacío
   ↓
5. Usuario escribe en campos
   ↓
6. handleChange actualiza formData
   ↓
7. Usuario click "Guardar"
   ↓
8. handleSubmit → validateForm()
   ↓
9. Si válido → createTask(formData)
   ↓
10. createTask() agrega documento a Firestore
   ↓
11. Firestore guarda y retorna ID
   ↓
12. navigate('/') regresa a Home
   ↓
13. Home se re-monta y carga tareas nuevamente
   ↓
14. Usuario ve la nueva tarea en la lista
```

---

## 🔗 DEPENDENCIAS Y SUS ROLES

```
package.json
│
├── react (^18.2.0)
│   └── Librería principal para UI
│
├── react-dom (^18.2.0)
│   └── Renderizado en el navegador
│
├── react-router-dom (^6.20.0)
│   ├── BrowserRouter
│   ├── Routes / Route
│   ├── useNavigate
│   └── useParams
│
├── firebase (^10.7.1)
│   ├── initializeApp
│   ├── getFirestore
│   ├── collection, doc
│   ├── addDoc, getDoc, getDocs
│   ├── updateDoc, deleteDoc
│   ├── query, orderBy
│   └── serverTimestamp
│
└── react-scripts (5.0.1)
    ├── webpack
    ├── babel
    ├── desarrollo (npm start)
    └── producción (npm run build)
```

---

## 🎯 PUNTOS DE CONFIGURACIÓN REQUERIDOS

```
┌─────────────────────────────────────────────────┐
│  CONFIGURACIÓN NECESARIA PARA EL ESTUDIANTE     │
├─────────────────────────────────────────────────┤
│                                                 │
│  1️⃣ src/firebase/config.js                     │
│     ├── apiKey                                  │
│     ├── authDomain                              │
│     ├── projectId                               │
│     ├── storageBucket                           │
│     ├── messagingSenderId                       │
│     └── appId                                   │
│                                                 │
│  2️⃣ src/services/firestoreService.js           │
│     └── STUDENT_ID = "TU_MATRICULA"            │
│                                                 │
│  3️⃣ README.md                                  │
│     ├── [TU_MATRICULA]                          │
│     ├── [TU_NOMBRE]                             │
│     └── [URL-DE-TU-REPOSITORIO]                │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## ✅ CHECKLIST DE VERIFICACIÓN

```
INSTALACIÓN
├── [ ] Node.js instalado
├── [ ] npm install ejecutado
└── [ ] node_modules creado

CONFIGURACIÓN
├── [ ] Firebase configurado
├── [ ] Firestore habilitado
├── [ ] config.js actualizado
└── [ ] STUDENT_ID actualizado

FUNCIONALIDAD
├── [ ] npm start funciona
├── [ ] Crear tarea funciona
├── [ ] Listar tareas funciona
├── [ ] Editar tarea funciona
├── [ ] Eliminar tarea funciona
└── [ ] Datos persisten en Firebase

GIT/GITHUB
├── [ ] Git instalado
├── [ ] Repositorio creado en GitHub
├── [ ] Código subido
├── [ ] .gitignore funcionando
└── [ ] Link del repo copiado

DOCUMENTACIÓN
├── [ ] README actualizado
├── [ ] Comentarios en código
└── [ ] Instrucciones claras

ENTREGA
├── [ ] Todo funciona
├── [ ] Link del repositorio listo
└── [ ] Proyecto probado
```

---

## 🎓 CONCEPTOS CLAVE IMPLEMENTADOS

### React
- ✅ Componentes funcionales
- ✅ Hooks (useState, useEffect)
- ✅ Props
- ✅ Eventos
- ✅ Renderizado condicional
- ✅ Listas y keys

### React Router
- ✅ BrowserRouter
- ✅ Routes y Route
- ✅ useNavigate
- ✅ useParams
- ✅ Rutas dinámicas

### Firebase Firestore
- ✅ Inicialización
- ✅ Colecciones
- ✅ Documentos
- ✅ CRUD completo
- ✅ Queries
- ✅ Ordenamiento
- ✅ Timestamps

### JavaScript
- ✅ Async/Await
- ✅ Promises
- ✅ Arrow functions
- ✅ Destructuring
- ✅ Spread operator
- ✅ Template literals

### CSS
- ✅ Flexbox
- ✅ Grid
- ✅ Media queries
- ✅ Transiciones
- ✅ Animaciones
- ✅ Variables CSS

---

**Diagrama creado el:** 20 de noviembre de 2025  
**Versión:** 1.0.0  
**Estado:** ✅ Completo
