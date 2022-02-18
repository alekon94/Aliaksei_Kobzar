import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssueViewComponent } from './issue-view/issue-view.component';
import { IssueListComponent } from './issue-list/issue-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueViewComponent,
    IssueListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
