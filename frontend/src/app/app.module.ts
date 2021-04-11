import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';
import { ClientesListComponent } from './taller/clientes-list/clientes-list.component';
import { ClienteAddComponent } from './taller/cliente-add/cliente-add.component';
import { ClienteDetailComponent } from './taller/cliente-detail/cliente-detail.component';
import { AutoAddComponent } from './taller/auto-add/auto-add.component';
import { ReparacionAddComponent } from './taller/reparacion-add/reparacion-add.component';
import { AutoDetailComponent } from './taller/auto-detail/auto-detail.component';
import { ReparacionReporteComponent } from './taller/reparacion-reporte/reparacion-reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientesListComponent,
    ClienteAddComponent,
    ClienteDetailComponent,
    AutoAddComponent,
    ReparacionAddComponent,
    AutoDetailComponent,
    ReparacionReporteComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    PresentationModule,
    SectionsModule,
    ComponentsModule,
    ExamplesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
