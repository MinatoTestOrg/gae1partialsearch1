import { BsModalService, ModalOptions, BsModalRef } from 'ngx-bootstrap/modal';
import { UploaderService } from '@baseapp/upload-attachment.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit, Component } from '@angular/core';
import { ActionItem } from '@baseapp/widgets/action-bar/action-bar.component';
import { AppGlobalService } from '@baseapp/app-global.service';
import { AppConstants } from '@app/app-constants';
import { BreadcrumbService } from '@baseapp/widgets/breadcrumb/breadcrumb.service';
import { environment } from '@env/environment';
import { AppUtilBaseService } from '@baseapp/app-util.base.service';
import { ConfirmationPopupComponent } from '@baseapp/widgets/confirmation/confirmation-popup.component';
import { BaseAppConstants } from '@baseapp/app-constants.base';
import { debounceTime, fromEvent, catchError, combineLatest, distinctUntilChanged, of, Observer, Subscription, map, Observable, Subject } from 'rxjs';
import { allowedValuesValidator } from '@baseapp/widgets/validators/allowedValuesValidator';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { dateValidator } from '@baseapp/widgets/validators/dateValidator';
import { DialogService } from 'primeng/dynamicdialog';
import { Marantable123DetailBaseComponent } from '@baseapp/marantable123/marantable123/marantable123-detail/marantable123-detail.base.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { WorkflowSimulatorComponent } from '@baseapp/widgets/workflow-simulator/workflow-simulator.component';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { ChangeLogsComponent } from '@baseapp/widgets/change-logs/change-logs.component';
import { WorkflowHistoryComponent } from '@baseapp/widgets/workflow-history/workflow-history.component';
import { Marantable123Service } from '@baseapp/marantable123/marantable123/marantable123.service';
import { AppBaseService } from '@baseapp/app.base.service';


@Component({
  selector: 'app-marantable123-detail',
  templateUrl: '../../../../../base/app/marantable123/marantable123/marantable123-detail/marantable123-detail.component.html',
  styleUrls: ['./marantable123-detail.scss']
})
export class Marantable123DetailComponent extends Marantable123DetailBaseComponent implements OnInit {
 
  constructor(public override marantable123Service: Marantable123Service, public override appUtilBaseService: AppUtilBaseService, public override translateService: TranslateService, public override messageService: MessageService, public override confirmationService: ConfirmationService, public override dialogService: DialogService, public override domSanitizer: DomSanitizer, public override bsModalService: BsModalService, public override activatedRoute: ActivatedRoute, public override breadcrumbService: BreadcrumbService, public override appBaseService: AppBaseService, public override router: Router, public override appGlobalService: AppGlobalService, public override uploaderService: UploaderService, public override location: Location) {
    super(marantable123Service, appUtilBaseService, translateService, messageService, confirmationService, dialogService, domSanitizer, bsModalService, activatedRoute, breadcrumbService, appBaseService, router, appGlobalService, uploaderService, location);
  }
	
  ngAfterViewInit(): void {
    this.onAfterViewInit()
  }

  ngOnInit(): void {
    super.onInit();
  }
 
}