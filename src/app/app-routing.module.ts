import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Core/login/login.component';
import { BrandsComponent } from './Core/brands/brands.component';
import { CoreComponent } from './Core/core/core.component';
import { ReferencesComponent } from './Core/references/references.component';
import { FactsComponent } from './Core/facts/facts.component';
import { ContentComponent } from './Core/content/content.component';
import { BrandOverviewComponent } from './Core/brand-overview/brand-overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
      path: 'core', component: CoreComponent, children: [
        { path: 'brands', component: BrandsComponent },
        { path: 'overview', component: BrandOverviewComponent },
        { path: 'reference', component: ReferencesComponent },
        { path: 'facts', component: FactsComponent },
        { path: 'content', component: ContentComponent },
        { path: '', redirectTo: 'brands', pathMatch: 'full' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
