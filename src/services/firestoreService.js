// Servicio para manejar todas las operaciones CRUD con Firestore
import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc,
  doc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp,
  query,
  orderBy
} from "firebase/firestore";
import { db } from "../firebase/config";

// IMPORTANTE: Reemplaza este valor con tu matrícula/ID de estudiante
const STUDENT_ID = "TEST-001";

// Nombre de la colección en Firestore
const COLLECTION_NAME = "tasks";

// ============================================
// CREAR (CREATE) - Agregar un nuevo item
// ============================================
export const createTask = async (taskData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      title: taskData.title,
      description: taskData.description || "",
      studentId: STUDENT_ID,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    console.log("Tarea creada con ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error al crear tarea: ", error);
    return { success: false, error: error.message };
  }
};

// ============================================
// LEER (READ) - Obtener todos los items
// ============================================
export const getAllTasks = async () => {
  try {
    // Crear query para ordenar por fecha de creación (más recientes primero)
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy("createdAt", "desc")
    );
    
    const querySnapshot = await getDocs(q);
    const tasks = [];
    
    querySnapshot.forEach((doc) => {
      tasks.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    console.log(`Se obtuvieron ${tasks.length} tareas`);
    return { success: true, data: tasks };
  } catch (error) {
    console.error("Error al obtener tareas: ", error);
    return { success: false, error: error.message, data: [] };
  }
};

// ============================================
// LEER (READ) - Obtener un item específico
// ============================================
export const getTaskById = async (taskId) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, taskId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { 
        success: true, 
        data: { id: docSnap.id, ...docSnap.data() }
      };
    } else {
      console.log("No se encontró el documento");
      return { success: false, error: "Documento no encontrado" };
    }
  } catch (error) {
    console.error("Error al obtener tarea: ", error);
    return { success: false, error: error.message };
  }
};

// ============================================
// ACTUALIZAR (UPDATE) - Modificar un item existente
// ============================================
export const updateTask = async (taskId, taskData) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, taskId);
    
    await updateDoc(docRef, {
      title: taskData.title,
      description: taskData.description || "",
      updatedAt: serverTimestamp()
    });
    
    console.log("Tarea actualizada con ID: ", taskId);
    return { success: true };
  } catch (error) {
    console.error("Error al actualizar tarea: ", error);
    return { success: false, error: error.message };
  }
};

// ============================================
// ELIMINAR (DELETE) - Borrar un item
// ============================================
export const deleteTask = async (taskId) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, taskId);
    await deleteDoc(docRef);
    
    console.log("Tarea eliminada con ID: ", taskId);
    return { success: true };
  } catch (error) {
    console.error("Error al eliminar tarea: ", error);
    return { success: false, error: error.message };
  }
};
