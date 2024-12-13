import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Core/login/login.component';
import { FormsModule } from '@angular/forms';
import { BrandsComponent } from './Core/brands/brands.component';
import { SidebarComponent } from './Common/sidebar/sidebar.component';
import { NavbarComponent } from './Common/navbar/navbar.component';
import { BrandOverviewComponent } from './Core/brand-overview/brand-overview.component';
import { ReferencesComponent } from './Core/references/references.component';
import { FactsComponent } from './Core/facts/facts.component';
import { ContentComponent } from './Core/content/content.component';
import { CoreComponent } from './Core/core/core.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BrandsComponent,
    SidebarComponent,
    NavbarComponent,
    BrandOverviewComponent,
    ReferencesComponent,
    FactsComponent,
    ContentComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
