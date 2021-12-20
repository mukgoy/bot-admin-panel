import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HasPermissionDirective } from './directives/has-permission.directive';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HasPermissionDirective,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule,FormsModule
  ],
  exports:[NgbModule, FormsModule]
})
export class SharedModule { }
