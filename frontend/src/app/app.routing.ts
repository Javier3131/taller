import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// import { PresentationComponent } from './presentation/presentation.component';
// import { ComponentsComponent } from './components/components.component';
// import { SectionsComponent } from './sections/sections.component';
// import { AboutusComponent } from './examples/aboutus/aboutus.component';
// import { AddproductComponent } from './examples/addproduct/addproduct.component';
// import { BlogpostComponent } from './examples/blogpost/blogpost.component';
// import { BlogpostsComponent } from './examples/blogposts/blogposts.component';
// import { ContactusComponent } from './examples/contactus/contactus.component';
// import { DiscoverComponent } from './examples/discover/discover.component';
// import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';
// import { LandingComponent } from './examples/landing/landing.component';
// import { LoginComponent } from './examples/login/login.component';
// import { ProductpageComponent } from './examples/productpage/productpage.component';
// import { ProfileComponent } from './examples/profile/profile.component';
// import { RegisterComponent } from './examples/register/register.component';
// import { SearchComponent } from './examples/search/search.component';
// import { SettingsComponent } from './examples/settings/settings.component';
// import { TwitterComponent } from './examples/twitter/twitter.component';
import { Page404Component } from './examples/page404/page404.component';
import { Page422Component } from './examples/page422/page422.component';
import { Page500Component } from './examples/page500/page500.component';
// import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

import { ClientesListComponent } from './taller/clientes-list/clientes-list.component';
import { ClienteAddComponent } from './taller/cliente-add/cliente-add.component';
import { ClienteDetailComponent } from './taller/cliente-detail/cliente-detail.component';
import { AutoAddComponent } from './taller/auto-add/auto-add.component';
import { AutoDetailComponent } from './taller/auto-detail/auto-detail.component';
import { ReparacionAddComponent } from './taller/reparacion-add/reparacion-add.component';
import { ReparacionReporteComponent } from './taller/reparacion-reporte/reparacion-reporte.component';

const routes: Routes = [
  //   { path: 'presentation', component: PresentationComponent },
  //   { path: 'components', component: ComponentsComponent },
  //   { path: 'sections', component: SectionsComponent },
  //   { path: 'nucleoicons', component: NucleoiconsComponent },
  //   { path: 'examples/aboutus', component: AboutusComponent },
  //   { path: 'examples/addproduct', component: AddproductComponent },
  //   { path: 'examples/blogpost', component: BlogpostComponent },
  //   { path: 'examples/blogposts', component: BlogpostsComponent },
  //   { path: 'examples/contactus', component: ContactusComponent },
  //   { path: 'examples/discover', component: DiscoverComponent },
  //   { path: 'examples/ecommerce', component: EcommerceComponent },
  //   { path: 'examples/landing', component: LandingComponent },
  //   { path: 'examples/login', component: LoginComponent },
  //   { path: 'examples/productpage', component: ProductpageComponent },
  //   { path: 'examples/profile', component: ProfileComponent },
  //   { path: 'examples/register', component: RegisterComponent },
  //   { path: 'examples/search', component: SearchComponent },
  //   { path: 'examples/settings', component: SettingsComponent },
  //   { path: 'examples/twitter', component: TwitterComponent },
  { path: 'clientes', component: ClientesListComponent },
  { path: 'clientes/add', component: ClienteAddComponent },
  { path: 'clientes/detail', component: ClienteDetailComponent },

  { path: 'autos/add', component: AutoAddComponent },
  { path: 'autos/detail', component: AutoDetailComponent },

  { path: 'reparaciones/add', component: ReparacionAddComponent },
  { path: 'reparaciones/reporte', component: ReparacionReporteComponent },

  { path: 'examples/page404', component: Page404Component },
  { path: 'examples/page422', component: Page422Component },
  { path: 'examples/page500', component: Page500Component },
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
