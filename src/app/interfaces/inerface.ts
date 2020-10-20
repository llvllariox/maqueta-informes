export interface Requerimiento{
  requerimiento: RootObject[];
}

export interface RootObject {
  'Nro. Req.': number;
  'Descripción': string;
  Etapa: string;
  Estado: string;
  Contrato: string;
  'Línea de Servicio': string;
  Origen: string;
  Solicitante: string;
  'Código Externo': string;
  'Req. Origen': number | string;
  Bloque: string;
  'Área': string;
  'Aplicación': string;
  'Grupo de Trabajo': string;
  Responsable: string;
  Prioridad: number | string;
  Severidad: number | string;
  'Ámbito': string;
  Rework: string;
  Reapertura: string;
  'Fecha Recepción': string;
  'Hora Recepción': string;
  'Fecha Asignación': string;
  'Fec. Plan. Estimación': string;
  'Fec. Plan. Inicio': string;
  'Fec. Plan. Pase Aprobación': string;
  'Fec. Plan. Pase Producción': string;
  'Fec. Plan. Fin': string;
  'Fec. Real Estimación': string;
  'Fec. Real Inicio': string;
  'Fec. Real Pase Aprobación': string;
  'Fec. Real Pase Producción': string;
  'Fec Real Fin': string;
  Usuario: string;
  'Fec. Ult. Actualización': string;
  'Hora. Ult. Actualización': string;
  'Horas Estimadas': number;
  'Horas Planificadas': number;
  'Horas Incurridas': number;
  Facturable: string;
  eventos?: Evento[];
  estimadoQA: number;
  incurridoQA: number;
  estimadoProd: number;
  incurridoProd: number;
  'Hora Asignación'?: string;
}

export interface Evento {
  'Tipo de contrato': string;
  Tipo: string;
  'Número de req. o sol.': number;
  'Descripción': string;
  'Código externo': string;
  Etapa: string;
  Estado: string;
  'Línea de servicio': string;
  Responsable: string;
  'Fecha de recepción': string;
  'Fecha de fin': string;
  'Tipo de evento': string;
  'Descripción breve': string;
  Fecha: string;
  Hora: string;
  'Responsable evento'?: string;
  'Fecha Comprometida': string;
  'Fecha Cierre': string;
  'Descripción de evento': string;
  'Ingresado Por': string;
}
