export const projects = [
  {
    year: '2026',
    title: 'Sistema de Gestión Académica - Gestion_Colegios',
    summary:
      'API backend para la gestión de una institución educativa. Permite administrar estudiantes, docentes, grados, secciones, calificaciones, pagos, usuarios y roles mediante una API REST.',
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JPA / Hibernate',
      'MySQL',
      'Maven',
    ],
    status: 'wip',
    repoUrl: 'https://github.com/Gabo199912/colegiosV2',
    demoUrl: '',
  },

  {
    year: '2025',
    title: 'API de Control de Gastos',
    summary:
      'API REST desarrollada con Java y Spring Boot para gestionar gastos y proporcionar los servicios utilizados por una aplicación móvil. Implementa persistencia de datos y comunicación mediante endpoints REST.',
    stack: [
      'Java',
      'Spring Boot',
      'REST API',
      'MySQL',
      'Maven',
    ],
    status: 'archived',
    repoUrl: 'https://github.com/Gabo199912/ControlGastosRest',
    demoUrl: '',
  },

  {
    year: '2025',
    title: 'Aplicación Android de Control de Gastos',
    summary:
      'Aplicación Android desarrollada en Java que consume la API REST de Control de Gastos para consultar y gestionar la información almacenada en el backend.',
    stack: [
      'Java',
      'Android',
      'REST API',
      'Spring Boot',
      'MySQL',
    ],
    status: 'archived',
    repoUrl: 'https://github.com/Gabo199912/ControlDeGastos',
    demoUrl: '',
  },
]

export const statusLabels = {
  prod: 'En producción',
  wip: 'En desarrollo',
  archived: 'Archivado',
}
