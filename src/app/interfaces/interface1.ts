export interface Requerimiento{
    solicitudes: Solicitud[];
}

export interface Solicitud {
  nroSol: number;
  descripcion: string;
  etapa: string;
  estado: string;
  contrato: string;
  lineaDeServicio: string;
  origen: string;
  solicitante: string;
  solOrigen: string;
  bloque: string;
  area: string;
  aplicacion: string;
  grupoDeTrabajo: string;
  responsable: string;
  prioridad: number | string;
  severidad: number | string;
  ambito: string;
  causa?: string;
  rework: string;
  reapertura: string;
  fechaRecepcion: string;
  horaRecepcion: string;
  fechaAsignacion: string;
  horaAsignacion: string;
  fechaRespuestaEstimada: string;
  fechaRespuestaReal: string;
  fechaRecupEstimada: string;
  fechaRecupReal: string;
  fechaResolucionEstimada: string;
  fechaResolucionReal: string;
  horasEstimadas: number;
  horasPlanificadas: number;
  horasIncurridas: number;
  codigoExterno?: string;
}