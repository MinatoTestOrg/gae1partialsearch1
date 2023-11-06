import { Component, OnInit } from '@angular/core';
import { AppHomePageBaseComponent } from "@baseapp/app-home-page/app-home-page-base.component";
import { AppHomeBaseService } from '@baseapp/app-home-page/app-home.service.base';
import { AppUtilBaseService } from "@baseapp/app-util.base.service";
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  templateUrl: '../../../base/app/app-home-page/app-home-page-base.component.html',
  styleUrls: ['../../../base/app/app-home-page/app-home-page-base.component.scss']
})
export class AppHomePageComponent extends AppHomePageBaseComponent {

  constructor(override bs: AppHomeBaseService, override utilBase: AppUtilBaseService, override _sanitize: DomSanitizer,override translateService:TranslateService) {
    super(bs, utilBase, _sanitize,translateService)
  }

  override displayMenus: boolean = false;

  ngOnInit(): void {
    super.onInit();
  }

}
