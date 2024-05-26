import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberDrilldownComponent } from './member-drilldown/member-drilldown.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreateGroupComponent } from '../create-group/create-group.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    DashboardComponent,
    MemberDrilldownComponent,
    TitleBarComponent,
    CreateGroupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  providers: [
    TitleCasePipe
  ]
})
export class DashboardPageModule { }
