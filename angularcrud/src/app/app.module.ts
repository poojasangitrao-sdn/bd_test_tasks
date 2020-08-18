import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CompaintListComponent } from './compaint-list/compaint-list.component';
import { AddComplaintComponent } from './complaint/add-complaint/add-complaint.component';

const appRoutes: Routes = [
  { path: 'list', component:CompaintListComponent},
  { path: 'add', component:AddComplaintComponent},
  { path: '', redirectTo: '/list', pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    CompaintListComponent,
    AddComplaintComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
