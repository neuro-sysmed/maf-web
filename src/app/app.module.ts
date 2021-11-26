import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
//import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
//    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
