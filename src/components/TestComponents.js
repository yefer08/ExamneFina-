// Este archivo contiene componentes de prueba simples
// Úsalo para verificar que React funciona correctamente antes de conectar Firebase

import React from 'react';

// Componente de prueba simple
export const TestComponent = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>✅ React está funcionando correctamente</h1>
      <p>Si ves este mensaje, tu configuración de React está lista.</p>
    </div>
  );
};

// Datos de prueba para simular Firestore (útil para desarrollo sin conexión)
export const mockTasks = [
  {
    id: '1',
    title: 'Tarea de ejemplo 1',
    description: 'Esta es una tarea de prueba para verificar el diseño',
    studentId: 'TEST-001',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    title: 'Tarea de ejemplo 2',
    description: 'Otra tarea de prueba con descripción más larga para ver cómo se ve el diseño con más texto',
    studentId: 'TEST-001',
    createdAt: new Date(Date.now() - 86400000), // 1 día atrás
    updatedAt: new Date()
  },
  {
    id: '3',
    title: 'Tarea de ejemplo 3',
    description: '',
    studentId: 'TEST-001',
    createdAt: new Date(Date.now() - 172800000), // 2 días atrás
    updatedAt: new Date(Date.now() - 172800000)
  }
];
