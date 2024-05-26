import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  adminDetailsForm!: FormGroup;
  groupNameForm!: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    //create group from
    this.groupNameForm = this.fb.group({
      groupName: [''],
      penalty: ['']
    });

    //admin details form
    this.adminDetailsForm = this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: ['']
    });

  }

  onSubmit() {
    console.log(this.adminDetailsForm.value)
    this._snackBar.open('Group Created','Close',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    })
  }



}
