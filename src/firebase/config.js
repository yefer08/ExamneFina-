// Importar las funciones necesarias de Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
// Credenciales obtenidas de Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDpmAyVs8pbsuQZa1PaOt7AFO8DS9IceYY",
  authDomain: "final-c8e68.firebaseapp.com",
  projectId: "final-c8e68",
  storageBucket: "final-c8e68.firebasestorage.app",
  messagingSenderId: "778749061998",
  appId: "1:778749061998:web:622f56760a775664a72f7f",
  measurementId: "G-GBQ07E9CQW"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Exportar la instancia de Firestore para usar en otros archivos
export { db };
