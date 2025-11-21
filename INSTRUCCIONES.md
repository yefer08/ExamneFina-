# 🚀 INSTRUCCIONES PASO A PASO PARA ESTUDIANTES

## ⚠️ IMPORTANTE: Lee esto PRIMERO

Este proyecto está completamente desarrollado y listo para usar. Solo necesitas seguir estos pasos para configurarlo y ejecutarlo.

---

## 📋 CHECKLIST DE CONFIGURACIÓN

Marca cada paso conforme lo completes:

### PASO 1: Instalar Node.js ⚡
- [ ] Descargar Node.js desde: https://nodejs.org/
- [ ] Instalar la versión LTS (recomendada)
- [ ] Reiniciar PowerShell después de la instalación
- [ ] Verificar instalación: `node --version` y `npm --version`

### PASO 2: Instalar Dependencias 📦
- [ ] Abrir PowerShell en la carpeta del proyecto
- [ ] Ejecutar: `cd "C:\Users\BIBLIOTECA\Desktop\hdh\task-manager-app"`
- [ ] Ejecutar: `npm install`
- [ ] Esperar a que termine (puede tomar 2-5 minutos)

### PASO 3: Configurar Firebase 🔥
- [ ] Crear cuenta en Firebase Console: https://console.firebase.google.com/
- [ ] Crear un nuevo proyecto
- [ ] Habilitar Firestore Database
- [ ] Copiar las credenciales de configuración
- [ ] Editar `src/firebase/config.js` y pegar tus credenciales
- [ ] Ver guía detallada en: `FIREBASE_SETUP.md`

### PASO 4: Configurar tu ID de Estudiante 👤
- [ ] Abrir el archivo: `src/services/firestoreService.js`
- [ ] Buscar la línea: `const STUDENT_ID = "TU_MATRICULA_AQUI";`
- [ ] Reemplazar con tu matrícula real (ej: `"2021-0123"`)

### PASO 5: Ejecutar la Aplicación 🎯
- [ ] En PowerShell, ejecutar: `npm start`
- [ ] Esperar a que se abra el navegador automáticamente
- [ ] La app se abrirá en: http://localhost:3000

### PASO 6: Probar la Aplicación ✅
- [ ] Crear una nueva tarea
- [ ] Editar una tarea existente
- [ ] Eliminar una tarea
- [ ] Verificar que los datos se guardan en Firebase

### PASO 7: Subir a GitHub 📤
- [ ] Instalar Git: https://git-scm.com/downloads
- [ ] Crear repositorio en GitHub
- [ ] Seguir la guía en: `GIT_GUIDE.md`
- [ ] Copiar el link de tu repositorio

### PASO 8: Actualizar README con tus Datos 📝
- [ ] Abrir `README.md`
- [ ] Buscar `[TU_MATRICULA]` y reemplazar con tu matrícula
- [ ] Buscar `[TU_NOMBRE]` y reemplazar con tu nombre completo
- [ ] Buscar `[URL-DE-TU-REPOSITORIO]` y reemplazar con el link de GitHub

---

## 🎓 ESTRUCTURA DEL PROYECTO COMPLETADA

```
task-manager-app/
├── public/
│   ├── index.html              ✅ Página HTML base
│   └── manifest.json           ✅ Configuración PWA
├── src/
│   ├── components/
│   │   ├── Home.js             ✅ Pantalla Lista (CRUD Read + Delete)
│   │   ├── Home.css            ✅ Estilos de Home
│   │   ├── Form.js             ✅ Pantalla Formulario (CRUD Create + Update)
│   │   ├── Form.css            ✅ Estilos de Form
│   │   └── TestComponents.js   ✅ Componentes de prueba
│   ├── firebase/
│   │   └── config.js           ⚠️ DEBES CONFIGURAR (credenciales Firebase)
│   ├── services/
│   │   └── firestoreService.js ⚠️ DEBES CONFIGURAR (tu matrícula)
│   ├── App.js                  ✅ Componente principal con rutas
│   ├── App.css                 ✅ Estilos globales
│   ├── index.js                ✅ Punto de entrada
│   └── index.css               ✅ Estilos base
├── .gitignore                  ✅ Archivos a ignorar en Git
├── package.json                ✅ Dependencias del proyecto
├── README.md                   ⚠️ DEBES ACTUALIZAR (con tus datos)
├── FIREBASE_SETUP.md           ✅ Guía de configuración Firebase
├── GIT_GUIDE.md                ✅ Guía para subir a GitHub
└── INSTRUCCIONES.md            📄 Este archivo
```

---

## 🎯 CARACTERÍSTICAS IMPLEMENTADAS

### ✅ Requisitos Cumplidos

#### Pantalla Lista (Home) - `src/components/Home.js`
- ✅ Muestra todos los items de Firestore
- ✅ Ordenados por fecha de creación (más recientes primero)
- ✅ Cada item muestra title y description
- ✅ Botón para editar cada item
- ✅ Botón para eliminar cada item
- ✅ Botón para crear nuevo item
- ✅ Diseño responsive para móviles

#### Pantalla Formulario (Form) - `src/components/Form.js`
- ✅ Permite crear items nuevos
- ✅ Permite editar items existentes
- ✅ Campo title (obligatorio con validación)
- ✅ Campo description (opcional)
- ✅ Guarda studentId automáticamente
- ✅ Guarda createdAt con serverTimestamp()
- ✅ Guarda updatedAt con serverTimestamp()
- ✅ Validación: title no vacío
- ✅ Mensajes de error claros

#### Operaciones CRUD - `src/services/firestoreService.js`
- ✅ **Create:** Función createTask()
- ✅ **Read:** Funciones getAllTasks() y getTaskById()
- ✅ **Update:** Función updateTask()
- ✅ **Delete:** Función deleteTask()

#### Navegación - `src/App.js`
- ✅ React Router DOM configurado
- ✅ Ruta `/` para Home
- ✅ Ruta `/form` para crear
- ✅ Ruta `/form/:id` para editar

---

## 📚 COMANDOS ÚTILES

### Desarrollo
```powershell
npm start          # Inicia la app en modo desarrollo
npm run build      # Crea versión de producción
npm test           # Ejecuta tests (si los hay)
```

### Git
```powershell
git status         # Ver estado de archivos
git add .          # Agregar todos los cambios
git commit -m ""   # Hacer commit
git push           # Subir a GitHub
```

---

## ❓ SOLUCIÓN DE PROBLEMAS

### Problema: "npm no se reconoce"
**Solución:** Instala Node.js y reinicia PowerShell

### Problema: "Module not found"
**Solución:** 
```powershell
rm -r node_modules
npm install
```

### Problema: Error de Firebase
**Solución:** 
1. Verifica que configuraste correctamente `config.js`
2. Verifica que Firestore esté habilitado en Firebase Console
3. Revisa las reglas de Firestore

### Problema: No se crean las tareas
**Solución:**
1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Console"
3. Busca mensajes de error
4. Verifica que el `projectId` sea correcto

---

## 📖 RECURSOS DE APRENDIZAJE

### Firebase
- Documentación: https://firebase.google.com/docs
- Firestore Tutorial: https://www.youtube.com/watch?v=9zdvmgGsww0

### React
- Documentación: https://react.dev/
- Tutorial: https://react.dev/learn

### React Router
- Documentación: https://reactrouter.com/

### Git y GitHub
- Git Tutorial: https://www.youtube.com/watch?v=HVsySz-h9r4
- GitHub Guides: https://guides.github.com/

---

## 📝 NOTAS IMPORTANTES

### Para el Profesor
- Este proyecto fue desarrollado completamente desde cero
- Todos los componentes están documentados
- El código sigue las mejores prácticas de React
- Las operaciones CRUD están completamente implementadas
- El diseño es responsive y funcional

### Para el Estudiante
1. **Personaliza tu ID:** Cambia `STUDENT_ID` en `firestoreService.js`
2. **Configura Firebase:** Usa tus propias credenciales
3. **Haz commits frecuentes:** Muestra tu proceso de trabajo
4. **Lee el código:** Entiende cómo funciona cada parte
5. **Prueba todo:** Verifica que todas las funciones CRUD funcionen

---

## ✅ CHECKLIST ANTES DE ENTREGAR

- [ ] Node.js instalado
- [ ] Dependencias instaladas (`npm install`)
- [ ] Firebase configurado con tus credenciales
- [ ] studentId configurado con tu matrícula
- [ ] La aplicación funciona correctamente en local
- [ ] Todas las operaciones CRUD funcionan
- [ ] Código subido a GitHub
- [ ] README actualizado con tu información
- [ ] `.gitignore` incluido (node_modules no subido)
- [ ] Link del repositorio listo para entregar

---

## 🎉 ¡LISTO!

Si completaste todos los pasos, tu proyecto está listo para entregar.

**Link del repositorio GitHub:**
(Copia aquí el link de tu repositorio para recordarlo)

---

## 📞 CONTACTO

Si tienes problemas técnicos:
1. Revisa la consola del navegador (F12)
2. Lee los archivos de guía (FIREBASE_SETUP.md, GIT_GUIDE.md)
3. Consulta la documentación oficial
4. Pregunta a tu profesor o compañeros

---

**¡Buena suerte con tu proyecto! 🚀**
