# 🔥 Guía de Configuración de Firebase

Esta guía te ayudará a configurar Firebase para tu aplicación de gestión de tareas.

## Paso 1: Crear Proyecto en Firebase

1. **Ir a Firebase Console**
   - Visita: https://console.firebase.google.com/
   - Inicia sesión con tu cuenta de Google

2. **Crear Nuevo Proyecto**
   - Click en "Agregar proyecto"
   - Ingresa un nombre (ej: "task-manager-app")
   - (Opcional) Puedes desactivar Google Analytics
   - Click en "Crear proyecto"
   - Espera a que se cree el proyecto

## Paso 2: Configurar Firestore Database

1. **Crear Base de Datos**
   - En el menú lateral, click en "Firestore Database"
   - Click en "Crear base de datos"
   
2. **Configurar Reglas de Seguridad**
   - Selecciona "Comenzar en modo de prueba" (para desarrollo)
   - Click en "Siguiente"
   
3. **Seleccionar Ubicación**
   - Elige una ubicación cercana (ej: "us-central1")
   - Click en "Habilitar"

4. **Configurar Reglas (Importante)**
   - Ve a la pestaña "Reglas"
   - Reemplaza el contenido con:
   
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
   
   ⚠️ **NOTA:** Estas reglas son solo para desarrollo. En producción, debes implementar reglas de seguridad más estrictas.

## Paso 3: Obtener Credenciales

1. **Configurar App Web**
   - En la página principal del proyecto, click en el ícono Web (</>) 
   - Ingresa un nombre para tu app (ej: "task-manager-web")
   - NO es necesario configurar Firebase Hosting
   - Click en "Registrar app"

2. **Copiar Credenciales**
   - Verás un código de configuración como este:
   
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
     authDomain: "tu-proyecto.firebaseapp.com",
     projectId: "tu-proyecto",
     storageBucket: "tu-proyecto.appspot.com",
     messagingSenderId: "123456789012",
     appId: "1:123456789012:web:xxxxxxxxxxxxxxxxxxxx"
   };
   ```
   
   - **Copia estos valores** (los necesitarás en el siguiente paso)

## Paso 4: Configurar la Aplicación

1. **Editar archivo de configuración**
   - Abre el archivo: `src/firebase/config.js`
   - Reemplaza los valores de `firebaseConfig` con tus credenciales:
   
   ```javascript
   const firebaseConfig = {
     apiKey: "TU_API_KEY",              // Pega tu apiKey aquí
     authDomain: "TU_AUTH_DOMAIN",       // Pega tu authDomain aquí
     projectId: "TU_PROJECT_ID",         // Pega tu projectId aquí
     storageBucket: "TU_STORAGE_BUCKET", // Pega tu storageBucket aquí
     messagingSenderId: "TU_MESSAGING_SENDER_ID", // Pega tu messagingSenderId aquí
     appId: "TU_APP_ID"                  // Pega tu appId aquí
   };
   ```

2. **Configurar tu ID de estudiante**
   - Abre el archivo: `src/services/firestoreService.js`
   - Busca la línea:
   ```javascript
   const STUDENT_ID = "TU_MATRICULA_AQUI";
   ```
   - Reemplaza `"TU_MATRICULA_AQUI"` con tu matrícula real (ej: `"2021-0123"`)

## Paso 5: Instalar y Ejecutar

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Iniciar la aplicación**
   ```bash
   npm start
   ```

3. **Verificar conexión**
   - La app se abrirá en `http://localhost:3000`
   - Intenta crear una tarea
   - Ve a Firebase Console > Firestore Database
   - Deberías ver una colección llamada "tasks" con tu tarea

## Solución de Problemas Comunes

### Error: "Firebase: Error (auth/invalid-api-key)"
- Verifica que copiaste correctamente el `apiKey` de Firebase Console

### Error: "Missing or insufficient permissions"
- Verifica las reglas de Firestore en Firebase Console
- Asegúrate de estar en "modo de prueba" o tener reglas correctas

### No se crean las tareas
- Abre la Consola del navegador (F12) para ver errores
- Verifica que configuraste correctamente el `projectId`
- Asegúrate de que Firestore esté habilitado en tu proyecto

### Error: "Module not found"
- Ejecuta: `npm install` nuevamente
- Verifica que estés en la carpeta correcta del proyecto

## Seguridad para Producción

Cuando estés listo para producción, actualiza las reglas de Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /tasks/{document=**} {
      // Solo permite lectura y escritura si el usuario está autenticado
      allow read, write: if request.auth != null;
    }
  }
}
```

También considera:
- Implementar Firebase Authentication
- Validar datos en el servidor
- Limitar el tamaño de documentos
- Implementar rate limiting

## Referencias Útiles

- 📚 Documentación de Firebase: https://firebase.google.com/docs
- 📚 Documentación de Firestore: https://firebase.google.com/docs/firestore
- 📚 Reglas de Seguridad: https://firebase.google.com/docs/firestore/security/get-started
- 🎥 Video Tutorial: https://www.youtube.com/watch?v=9zdvmgGsww0

## ¿Necesitas Ayuda?

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Revisa la consola de Firebase para ver logs
3. Verifica que todos los pasos se hayan completado correctamente
