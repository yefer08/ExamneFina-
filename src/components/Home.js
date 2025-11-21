import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllTasks, deleteTask } from '../services/firestoreService';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar todas las tareas cuando el componente se monta
  useEffect(() => {
    loadTasks();
  }, []);

  // Función para cargar las tareas desde Firestore
  const loadTasks = async () => {
    setLoading(true);
    setError(null);
    
    const result = await getAllTasks();
    
    if (result.success) {
      setTasks(result.data);
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  // Función para navegar al formulario de creación
  const handleCreateNew = () => {
    navigate('/form');
  };

  // Función para navegar al formulario de edición
  const handleEdit = (taskId) => {
    navigate(`/form/${taskId}`);
  };

  // Función para eliminar una tarea
  const handleDelete = async (taskId, taskTitle) => {
    // Confirmación antes de eliminar
    const confirmDelete = window.confirm(
      `¿Estás seguro de que deseas eliminar la tarea "${taskTitle}"?`
    );
    
    if (confirmDelete) {
      const result = await deleteTask(taskId);
      
      if (result.success) {
        // Recargar la lista después de eliminar
        loadTasks();
        alert('Tarea eliminada exitosamente');
      } else {
        alert('Error al eliminar la tarea: ' + result.error);
      }
    }
  };

  // Función para formatear la fecha
  const formatDate = (timestamp) => {
    if (!timestamp) return 'Sin fecha';
    
    // Convertir timestamp de Firestore a Date
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>📋 Gestión de Tareas</h1>
        <button className="btn-create" onClick={handleCreateNew}>
          ➕ Nueva Tarea
        </button>
      </header>

      {loading && (
        <div className="loading">
          <p>Cargando tareas...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>⚠️ Error al cargar las tareas: {error}</p>
          <button onClick={loadTasks}>Reintentar</button>
        </div>
      )}

      {!loading && !error && tasks.length === 0 && (
        <div className="empty-state">
          <p>📝 No hay tareas registradas</p>
          <p>Haz clic en "Nueva Tarea" para crear tu primera tarea</p>
        </div>
      )}

      {!loading && !error && tasks.length > 0 && (
        <div className="tasks-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-card">
              <div className="task-content">
                <h3 className="task-title">{task.title}</h3>
                {task.description && (
                  <p className="task-description">{task.description}</p>
                )}
                <div className="task-meta">
                  <span className="task-date">
                    📅 Creado: {formatDate(task.createdAt)}
                  </span>
                  {task.updatedAt && task.createdAt !== task.updatedAt && (
                    <span className="task-date">
                      🔄 Actualizado: {formatDate(task.updatedAt)}
                    </span>
                  )}
                  <span className="task-student">
                    👤 ID: {task.studentId}
                  </span>
                </div>
              </div>
              <div className="task-actions">
                <button 
                  className="btn-edit"
                  onClick={() => handleEdit(task.id)}
                  title="Editar tarea"
                >
                  ✏️ Editar
                </button>
                <button 
                  className="btn-delete"
                  onClick={() => handleDelete(task.id, task.title)}
                  title="Eliminar tarea"
                >
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <footer className="home-footer">
        <p>Total de tareas: {tasks.length}</p>
      </footer>
    </div>
  );
}

export default Home;
