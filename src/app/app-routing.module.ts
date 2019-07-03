import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailListComponent } from './admin/email-list/email-list.component';

const routes: Routes = [
  {
      path: 'dashboard',
      component: DashboardComponent ,

  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'email-list',
    component: EmailListComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
