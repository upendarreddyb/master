import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
        { path: '', loadChildren: () => import('./userprofiles/userprofiles.module').then(m => m.UserprofilesModule) },
        { path: 'updateuser', loadChildren: () => import('./updateuser/updateuser.module').then(m => m.UpdateuserModule) }
      ]
  },
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
