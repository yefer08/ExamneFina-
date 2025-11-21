# 📦 Guía para Subir el Proyecto a GitHub

Esta guía te ayudará a subir tu proyecto a GitHub paso a paso.

## Requisitos Previos

- Git instalado en tu computadora ([Descargar Git](https://git-scm.com/downloads))
- Cuenta en GitHub ([Crear cuenta](https://github.com/join))

## Paso 1: Verificar Git

Abre PowerShell y verifica que Git esté instalado:

```powershell
git --version
```

Si ves la versión de Git, estás listo. Si no, instala Git primero.

## Paso 2: Configurar Git (Primera vez)

Si es la primera vez que usas Git, configura tu nombre y email:

```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@ejemplo.com"
```

## Paso 3: Crear Repositorio en GitHub

1. **Ir a GitHub**
   - Visita: https://github.com
   - Inicia sesión con tu cuenta

2. **Crear Nuevo Repositorio**
   - Click en el botón "+" en la esquina superior derecha
   - Selecciona "New repository"
   
3. **Configurar Repositorio**
   - **Repository name:** `task-manager-app` (o el nombre que prefieras)
   - **Description:** "Aplicación de gestión de tareas con React y Firebase"
   - **Visibilidad:** Público o Privado (según prefieras)
   - ⚠️ **NO marques** "Initialize this repository with a README"
   - Click en "Create repository"

4. **Copiar URL del Repositorio**
   - Verás una URL como: `https://github.com/tu-usuario/task-manager-app.git`
   - **Copia esta URL** (la necesitarás en el siguiente paso)

## Paso 4: Inicializar Git en tu Proyecto

Abre PowerShell en la carpeta de tu proyecto (`task-manager-app`) y ejecuta:

```powershell
# Navegar a la carpeta del proyecto
cd "C:\Users\BIBLIOTECA\Desktop\hdh\task-manager-app"

# Inicializar repositorio Git
git init

# Verificar que .gitignore existe y está configurado
Get-Content .gitignore
```

## Paso 5: Hacer el Primer Commit

```powershell
# Agregar todos los archivos al staging area
git add .

# Crear el primer commit
git commit -m "Initial commit: Estructura completa del proyecto con React y Firebase"

# Renombrar rama a main (si es necesario)
git branch -M main
```

## Paso 6: Conectar con GitHub y Subir

```powershell
# Conectar con tu repositorio remoto (reemplaza con TU URL)
git remote add origin https://github.com/TU-USUARIO/task-manager-app.git

# Subir los archivos a GitHub
git push -u origin main
```

**Nota:** Si es la primera vez, te pedirá autenticación. Usa tu cuenta de GitHub.

## Paso 7: Verificar en GitHub

1. Ve a tu repositorio en GitHub
2. Deberías ver todos tus archivos
3. ¡Listo! Tu código está en GitHub

## Comandos Git Útiles para el Futuro

### Ver el estado de los archivos
```powershell
git status
```

### Agregar cambios específicos
```powershell
git add archivo.js
```

### Agregar todos los cambios
```powershell
git add .
```

### Hacer un commit
```powershell
git commit -m "Descripción de los cambios"
```

### Subir cambios a GitHub
```powershell
git push
```

### Ver historial de commits
```powershell
git log --oneline
```

### Crear una nueva rama
```powershell
git checkout -b nombre-rama
```

### Cambiar de rama
```powershell
git checkout nombre-rama
```

## Flujo de Trabajo Recomendado

Cada vez que hagas cambios en tu proyecto:

```powershell
# 1. Ver qué archivos cambiaron
git status

# 2. Agregar los cambios
git add .

# 3. Hacer commit con un mensaje descriptivo
git commit -m "Agregué validación al formulario"

# 4. Subir a GitHub
git push
```

## Buenas Prácticas para Commits

### ✅ Buenos mensajes de commit:
- `"Agregué componente de formulario con validaciones"`
- `"Implementé operación CRUD de eliminar tarea"`
- `"Mejoré estilos responsive para móviles"`
- `"Corregí error al actualizar tareas"`

### ❌ Malos mensajes de commit:
- `"cambios"`
- `"update"`
- `"fix"`
- `"asdfsdf"`

## Estructura Recomendada de Commits

Para tu proyecto académico, puedes organizar tus commits de esta manera:

```powershell
git commit -m "Initial commit: Estructura del proyecto"
git commit -m "Feat: Agregué configuración de Firebase"
git commit -m "Feat: Implementé operaciones CRUD en firestoreService"
git commit -m "Feat: Creé componente Home con listado de tareas"
git commit -m "Feat: Creé componente Form para crear/editar tareas"
git commit -m "Style: Agregué estilos CSS responsive"
git commit -m "Docs: Actualicé README con instrucciones"
```

## ⚠️ Importante: Archivos Sensibles

El archivo `.gitignore` ya está configurado para **NO subir**:
- `node_modules/` (dependencias - demasiado pesado)
- `.env` (variables de entorno sensibles)

**NUNCA subas:**
- Tus credenciales de Firebase reales (si son sensibles)
- Contraseñas o API keys privadas

Para el proyecto académico, está bien subir `config.js` si es para demostración.

## Compartir tu Repositorio

Para entregar tu proyecto:

1. **Obtener el link de tu repositorio:**
   - Ve a tu repositorio en GitHub
   - Copia la URL (ej: `https://github.com/tu-usuario/task-manager-app`)

2. **Asegurarte de que sea público:**
   - Ve a Settings > General
   - En "Danger Zone" puedes cambiar la visibilidad si es necesario

3. **Incluir el README:**
   - Tu repositorio ya tiene un README.md completo
   - Asegúrate de actualizarlo con tu información personal

## Solución de Problemas Comunes

### Error: "fatal: not a git repository"
```powershell
# Asegúrate de estar en la carpeta correcta
cd "C:\Users\BIBLIOTECA\Desktop\hdh\task-manager-app"
git init
```

### Error: "remote origin already exists"
```powershell
# Eliminar el remoto existente y agregar nuevamente
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/task-manager-app.git
```

### Error: "failed to push some refs"
```powershell
# Primero descarga los cambios del repositorio
git pull origin main --allow-unrelated-histories
# Luego sube tus cambios
git push origin main
```

### Olvidaste agregar el .gitignore antes del primer commit
```powershell
# Eliminar node_modules del repositorio (si ya lo subiste)
git rm -r --cached node_modules
git commit -m "Removí node_modules del repositorio"
git push
```

## Recursos Adicionales

- 📚 Documentación oficial de Git: https://git-scm.com/doc
- 📚 GitHub Guides: https://guides.github.com/
- 🎥 Git Tutorial: https://www.youtube.com/watch?v=HVsySz-h9r4
- 🎮 Juego interactivo para aprender Git: https://learngitbranching.js.org/

## Checklist Final ✅

Antes de entregar tu proyecto, verifica:

- [ ] Todos los archivos están en GitHub (excepto `node_modules/`)
- [ ] El README.md está actualizado con tu información
- [ ] Has actualizado el `STUDENT_ID` en `firestoreService.js`
- [ ] Has configurado las credenciales de Firebase
- [ ] El repositorio es público (o privado con acceso compartido al profesor)
- [ ] Tienes varios commits con mensajes descriptivos
- [ ] El `.gitignore` está incluido
- [ ] Las instrucciones de instalación son claras

¡Buena suerte con tu proyecto! 🚀
