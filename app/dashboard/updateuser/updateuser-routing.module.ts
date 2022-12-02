import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateuserComponent } from './updateuser.component';

const routes: Routes = [{ path: '', component: UpdateuserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateuserRoutingModule { }
