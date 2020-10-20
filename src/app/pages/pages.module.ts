import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { FechasPipe } from '../pipes/fechas.pipe';
import { HistoricoComponent } from './historico/historico.component';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import { GenerarInformesComponent } from './generar-informes/generar-informes.component';
import { ValBackofficeComponent } from './val-backoffice/val-backoffice.component';
import { SlideComponent } from '../components/slide/slide.component';
import { ValBackendComponent } from './val-backend/val-backend.component';
import { ValIntegracioComponent } from './val-integracio/val-integracio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AltUsuariosComponent } from './alt-usuarios/alt-usuarios.component';
import { InfActualComponent } from './inf-actual/inf-actual.component';
import { Graficas2Component } from './graficas2/graficas2.component';
import { CorrectivosComponent } from './correctivos/correctivos.component';
import { GraPresupuestoConsumoComponent } from './gra-presupuesto-consumo/gra-presupuesto-consumo.component';
import { PresupuestoConsumoComponent } from './presupuesto-consumo/presupuesto-consumo';
import { GaugeChartModule } from 'angular-gauge-chart';
import { Historico2Component } from './historico2/historico2.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        SlideComponent,
        GraficaDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        SolicitudesComponent,
        HistoricoComponent,
        FechasPipe,
        GenerarInformesComponent,
        ValBackofficeComponent,
        ValBackendComponent,
        ValIntegracioComponent,
        UsuariosComponent,
        AltUsuariosComponent,
        InfActualComponent,
        Graficas2Component,
        CorrectivosComponent,
        PresupuestoConsumoComponent,
        GraPresupuestoConsumoComponent,
        Historico2Component,
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        CalendarModule,
        CheckboxModule,
        DropdownModule,
        InputTextModule,
        RadioButtonModule,
        GaugeChartModule
    ]
})
export class PagesModule { }
