import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { Marantable123DetailComponent } from '@app/marantable123/marantable123/marantable123-detail/marantable123-detail.component';
import { Marantable123ListComponent } from '@app/marantable123/marantable123/marantable123-list/marantable123-list.component';

export const routes: Routes = [

{
     path: 'marantable123detail',
     component: Marantable123DetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "MARANTABLE123_DETAIL",
        breadcrumb: "MARANTABLE123_DETAIL",
        roles : [
        			"all"
				]
     }
},
{
     path: 'marantable123list',
     component: Marantable123ListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "MARANTABLE123_LIST",
        breadcrumb: "MARANTABLE123_LIST",
        roles : [
        			"all"
				]
     }
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class Marantable123BaseRoutingModule
{
}
