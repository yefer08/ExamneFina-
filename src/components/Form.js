import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTask, updateTask, getTaskById } from '../services/firestoreService';
import './Form.css';

function Form() {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtener el ID de la tarea si estamos editando
  const isEditing = Boolean(id); // Determinar si estamos en modo edición

  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const [loading, setLoading] = useState(false);
  const [loadingTask, setLoadingTask] = useState(false);
  const [errors, setErrors] = useState({});

  // Cargar datos de la tarea si estamos editando
  useEffect(() => {
    if (isEditing) {
      loadTask();
    }
  }, [id]);

  // Función para cargar los datos de la tarea a editar
  const loadTask = async () => {
    setLoadingTask(true);
    const result = await getTaskById(id);
    
    if (result.success) {
      setFormData({
        title: result.data.title,
        description: result.data.description || ''
      });
    } else {
      alert('Error al cargar la tarea: ' + result.error);
      navigate('/');
    }
    
    setLoadingTask(false);
  };

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validar el formulario
  const validateForm = () => {
    const newErrors = {};

    // Validar que el título no esté vacío
    if (!formData.title.trim()) {
      newErrors.title = 'El título es obligatorio';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'El título debe tener al menos 3 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar el formulario
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      let result;
      
      if (isEditing) {
        // Actualizar tarea existente
        result = await updateTask(id, {
          title: formData.title.trim(),
          description: formData.description.trim()
        });
      } else {
        // Crear nueva tarea
        result = await createTask({
          title: formData.title.trim(),
          description: formData.description.trim()
        });
      }

      if (result.success) {
        alert(isEditing ? 'Tarea actualizada exitosamente' : 'Tarea creada exitosamente');
        navigate('/');
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      alert('Error inesperado: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Manejar cancelación
  const handleCancel = () => {
    const confirmCancel = window.confirm(
      '¿Estás seguro de que deseas cancelar? Los cambios no guardados se perderán.'
    );
    
    if (confirmCancel) {
      navigate('/');
    }
  };

  if (loadingTask) {
    return (
      <div className="form-container">
        <div className="loading">
          <p>Cargando datos de la tarea...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="form-title">
          {isEditing ? '✏️ Editar Tarea' : '➕ Nueva Tarea'}
        </h1>
        
        <form onSubmit={handleSubmit} className="task-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Título <span className="required">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`form-input ${errors.title ? 'input-error' : ''}`}
              placeholder="Ingresa el título de la tarea"
              disabled={loading}
            />
            {errors.title && (
              <span className="error-text">{errors.title}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Descripción <span className="optional">(opcional)</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Ingresa una descripción detallada (opcional)"
              rows="5"
              disabled={loading}
            />
          </div>

          <div className="form-info">
            <p>ℹ️ Los campos marcados con <span className="required">*</span> son obligatorios</p>
            <p>📅 La fecha de creación y actualización se guardarán automáticamente</p>
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={handleCancel}
              className="btn-cancel"
              disabled={loading}
            >
              ❌ Cancelar
            </button>
            <button
              type="submit"
              className="btn-submit"
              disabled={loading}
            >
              {loading ? '⏳ Guardando...' : isEditing ? '💾 Actualizar' : '💾 Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
