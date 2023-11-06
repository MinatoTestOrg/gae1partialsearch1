import { allowedValuesValidator } from '@baseapp/widgets/validators/allowedValuesValidator';
import { debounceTime, fromEvent, catchError, combineLatest, distinctUntilChanged, of, Observer, Subscription, map, Observable, Subject } from 'rxjs';
import { BsModalService, ModalOptions, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit, ElementRef, Renderer2, ViewChild, Component } from '@angular/core';
import { Marantable123ListBaseComponent } from '@baseapp/marantable123/marantable123/marantable123-list/marantable123-list.base.component';
import { AppGlobalService } from '@baseapp/app-global.service';
import { GridComponent } from '@baseapp/widgets/grid/grid.component';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogService } from 'primeng/dynamicdialog';
import { Filter } from '@baseapp/vs-models/filter.model';
import { AppConstants } from '@app/app-constants';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { ChangeLogsComponent } from '@baseapp/widgets/change-logs/change-logs.component';
import { environment } from '@env/environment';
import { Marantable123Service } from '@baseapp/marantable123/marantable123/marantable123.service';
import { AppUtilBaseService } from '@baseapp/app-util.base.service';


@Component({
  selector: 'app-marantable123-list',
  templateUrl: '../../../../../base/app/marantable123/marantable123/marantable123-list/marantable123-list.component.html',
  styleUrls: ['./marantable123-list.scss']
})
export class Marantable123ListComponent extends Marantable123ListBaseComponent implements OnInit {
 
  constructor(public override marantable123Service: Marantable123Service, public override appUtilBaseService: AppUtilBaseService, public override translateService: TranslateService, public override messageService: MessageService, public override confirmationService: ConfirmationService, public override dialogService: DialogService, public override domSanitizer: DomSanitizer, public override bsModalService: BsModalService, public override activatedRoute: ActivatedRoute, public override renderer2: Renderer2, public override router: Router, public override appGlobalService: AppGlobalService) {
    super(marantable123Service, appUtilBaseService, translateService, messageService, confirmationService, dialogService, domSanitizer, bsModalService, activatedRoute, renderer2, router, appGlobalService);
  }
	
  ngAfterViewInit(): void {
    this.onAfterViewInit()
  }

  ngOnInit(): void {
    super.onInit();
  }
 
}