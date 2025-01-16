import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Core/login/login.component';
import { BrandsComponent } from './Core/brands/brands.component';
import { CoreComponent } from './Core/core/core.component';
import { ReferencesComponent } from './Core/references/references.component';
import { FactsComponent } from './Core/facts/facts.component';
import { ContentComponent } from './Core/content/content.component';
import { BrandOverviewComponent } from './Core/brand-overview/brand-overview.component';
import { BrandCreateComponent } from './Core/brand-create/brand-create.component';
import { ReferenceUploadComponent } from './Core/reference-upload/reference-upload.component';
import { ContentCreateComponent } from './Core/content-create/content-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
      path: 'core', component: CoreComponent, children: [
        { path: 'brands', component: BrandsComponent },
        { path: 'brands/create', component: BrandCreateComponent },
        { path: 'overview', component: BrandOverviewComponent },
        { path: 'reference', component: ReferencesComponent },
        { path: 'reference/upload', component: ReferenceUploadComponent },
        { path: 'facts', component: FactsComponent },
        { path: 'content', component: ContentComponent },
        { path: 'content/create', component: ContentCreateComponent },
        { path: '', redirectTo: 'brands', pathMatch: 'full' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
