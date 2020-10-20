import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PromesasComponent } from './promesas/promesas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { HistoricoComponent } from './historico/historico.component';
import { Historico2Component } from './historico2/historico2.component';
import { GenerarInformesComponent } from './generar-informes/generar-informes.component';
import { ValBackofficeComponent } from './val-backoffice/val-backoffice.component';
import { ValBackendComponent } from './val-backend/val-backend.component';
import { ValIntegracioComponent } from './val-integracio/val-integracio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AltUsuariosComponent } from './alt-usuarios/alt-usuarios.component';
import { InfActualComponent } from './inf-actual/inf-actual.component';
import { Graficas2Component } from './graficas2/graficas2.component';
import { CorrectivosComponent } from './correctivos/correctivos.component';
import { GraPresupuestoConsumoComponent } from './gra-presupuesto-consumo/gra-presupuesto-consumo.component';
import { PresupuestoConsumoComponent } from './presupuesto-consumo/presupuesto-consumo';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'generar', component: GenerarInformesComponent, data: { titulo: 'Generar Informe' }  },
            { path: 'backoffice',  component: ValBackofficeComponent, data: { titulo: 'Backoffice' }  },
            { path: 'backend',  component: ValBackendComponent, data: { titulo: 'BackEnd' }  },
            { path: 'integracion',  component: ValIntegracioComponent, data: { titulo: 'Integración' }  },
            { path: 'usuarios' , component: UsuariosComponent, data: { titulo: 'Usuarios' } },
            { path: 'crearUsuario' , component: AltUsuariosComponent, data: { titulo: 'Alta Usuarios' } },
            { path: 'usuarios' , component: UsuariosComponent, data: { titulo: 'Alta Usuarios' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' }  },
            { path: 'actual' , component: InfActualComponent, data: { titulo: 'Informe Actual' } },
            { path: 'historico',  component: HistoricoComponent, data: { titulo: 'Consulta Histórica' }  },
            { path: 'historico2',  component: Historico2Component, data: { titulo: 'Consulta Histórica' }  },
            { path: 'evolutivo', component: Graficas2Component, data : {titulo: 'Evolutivo'}},
            { path: 'correctivo', component: CorrectivosComponent, data : {titulo: 'Correctivo'}},
            { path: 'presupuestoConsumo', component: GraPresupuestoConsumoComponent, data : {titulo: 'Presupuesto vs Consumo'}},
            { path: 'presupuesto-consumo', component: PresupuestoConsumoComponent, data : {titulo: 'Presupuesto'}},
            { path: '' , redirectTo: '/generar', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
