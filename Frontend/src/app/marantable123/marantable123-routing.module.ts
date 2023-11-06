import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routes } from '@baseapp/marantable123/marantable123-routing.base.module';

/**
 * Extend routes here 
 * Example, 
 * 
 *  routes.push({
 *    path: 'projectsublist',
 *    component: ProjectsSubListComponent,
 *    data: {
 *       label: "PROJECTS_SUB_LIST",
 *       expectedRoles: ["business_owner"],
 *      breadcrumb: "PROJECTS_SUB_LIST",
 *     }
 *  })
 */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Marantable123RoutingModule { }