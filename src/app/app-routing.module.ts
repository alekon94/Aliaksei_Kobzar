import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueViewComponent } from './issue-view/issue-view.component';

const routes: Routes  = [
  { path: '', component: IssueListComponent},
  { path: 'view', component: IssueViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
