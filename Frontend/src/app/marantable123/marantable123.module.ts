import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Marantable123RoutingModule } from './marantable123-routing.module';
import { Marantable123BaseModule } from '@baseapp/marantable123/marantable123.base.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    Marantable123BaseModule,
    Marantable123RoutingModule
    
  ],
  exports: [
      Marantable123BaseModule,
  ]

})
export class Marantable123Module  { }