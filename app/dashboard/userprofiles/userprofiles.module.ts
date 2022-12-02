import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofilesRoutingModule } from './userprofiles-routing.module';
import { UserprofilesComponent } from './userprofiles.component';


@NgModule({
  declarations: [
    UserprofilesComponent
  ],
  imports: [
    CommonModule,
    UserprofilesRoutingModule
  ]
})
export class UserprofilesModule { }
