import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Adm. Usuarios',
      icono: 'mdi mdi-account-multiple',
      submenu: [
        { titulo: 'Listar Usuarios', url: '/usuarios' },
        { titulo: 'Crear Usuario', url: '/crearUsuario' }
      ]
    },
    {
      titulo: 'Generación Informes',
      icono: 'mdi mdi-file-check',
      submenu: [
        { titulo: 'Generar Informe', url: '/generar' },
        { titulo: 'Validar Backoffice', url: '/backoffice' },
        { titulo: 'Validar Backend', url: '/backend' },
        { titulo: 'Validar Integración', url: '/integracion' }

      ]
    },
    {
      titulo: 'Evolutivo',
      icono: 'mdi mdi-archive',
      submenu: [
        { titulo: 'Informe Actual', url: '/actual'},
        { titulo: 'Consulta Histórica', url: '/historico'},
        // { titulo: 'Gráficas', url: '/graficas1' }
        // { titulo: 'Evolutivo', url: '/evolutivo' },
        // { titulo: 'Correctivo', url: '/correctivo' },
        // { titulo: 'Presupuesto vs Consumo', url: '/presupuestoConsumo' }
      ]
    },
    {
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-trending-up',
      submenu: [
        { titulo: 'Evolutivo', url: '/evolutivo' },
        { titulo: 'Correctivo', url: '/correctivo' },
        // { titulo: 'Presupuesto vs Consumo', url: '/presupuestoConsumo' },
        { titulo: 'Presupuesto', url: '/presupuesto-consumo' },
        { titulo: 'Consulta Histórica', url: '/historico2'},
      ]
    }
  ];

  constructor() { }
}
