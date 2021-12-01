import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProjectsListComponent }      from './projects/projects-list/projects-list.component';
import { VariantViewComponent } from './variant/variant-view/variant-view.component';
import { VariantListComponent } from './variant/variant-list/variant-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

//import { DashboardComponent }   from './dashboard/dashboard.component';
//import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },


  { path: 'projects', component: ProjectsListComponent },
  { path: 'variant/:chrom/:pos/:ref/:alt', component: VariantViewComponent },
  { path: 'variant/:id', component: VariantViewComponent },
  { path: 'variants/:chrom/:start/:end', component: VariantListComponent },
  { path: 'variants/:chrom/:start', component: VariantListComponent },

];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
//  providers: [
//    { provide: LocationStrategy, useClass: PathLocationStrategy },
    //{ provide: APP_BASE_HREF, useValue: 'ehos-frontend/' },
//  ],
})
export class RoutingModule { }
