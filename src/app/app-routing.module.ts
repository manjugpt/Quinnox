import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CompanyComponent } from './company/company.component';
import { IntegrationComponent } from './integration/integration.component';
import { PlatformComponent } from './platform/platform.component';
import { SolutionComponent } from './solution/solution.component';
import { SupportComponent } from './support/support.component';


const routes: Routes = [
  { path: '', component: PlatformComponent },
  { path: 'platform', component: PlatformComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'integration', component: IntegrationComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'support', component: SupportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [PlatformComponent, SolutionComponent, IntegrationComponent, CompanyComponent, BlogComponent, SupportComponent]
