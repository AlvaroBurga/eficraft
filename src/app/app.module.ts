import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Core/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandsComponent } from './Core/brands/brands.component';
import { SidebarComponent } from './Common/sidebar/sidebar.component';
import { NavbarComponent } from './Common/navbar/navbar.component';
import { BrandOverviewComponent } from './Core/brand-overview/brand-overview.component';
import { ReferencesComponent } from './Core/references/references.component';
import { FactsComponent } from './Core/facts/facts.component';
import { ContentComponent } from './Core/content/content.component';
import { CoreComponent } from './Core/core/core.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrandCreateComponent } from './Core/brand-create/brand-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


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
    CoreComponent,
    BrandCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
