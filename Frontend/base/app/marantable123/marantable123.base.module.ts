import { NgModule } from '@angular/core';
import { Marantable123ListComponent } from '@app/marantable123/marantable123/marantable123-list/marantable123-list.component';
import { Marantable123DetailComponent } from '@app/marantable123/marantable123/marantable123-detail/marantable123-detail.component';
import { SharedModule } from '@app/shared/shared.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

@NgModule({
  declarations: [
Marantable123DetailComponent,
Marantable123ListComponent
],
imports: [
SharedModule,
WidgetsBaseModule
],

exports: [
SharedModule,
WidgetsBaseModule,
Marantable123DetailComponent,
Marantable123ListComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class Marantable123BaseModule { }