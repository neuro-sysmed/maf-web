import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './material.module';


import { SingleInputComponent } from './kbrNotification/single-input/single-input.component';
import { ConfirmationComponent } from './kbrNotification/confirmation/confirmation.component';
import { httpInterceptorProviders} from './kbr/interceptor';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';


//import { ProjectsComponent } from './projects/projects.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectViewComponent } from './project/project-view/project-view.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { VariantViewComponent } from './variant/variant-view/variant-view.component';
import { VariantListComponent } from './variant/variant-list/variant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // std kbr components
    ConfirmationComponent,
    SingleInputComponent,
    ProjectListComponent,
    VariantViewComponent,
    WelcomeComponent,
    VariantListComponent,
    ProjectViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    // material bits

    
  ],
  providers: [httpInterceptorProviders],
  entryComponents: [ConfirmationComponent,
                  SingleInputComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
