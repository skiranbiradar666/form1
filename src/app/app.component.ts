import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './validatorsPattern';
import { CustonValidators, EmpIdValidators } from './customValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Reactive Form Validations';

  signUpForm !: FormGroup

  gendersArr : Array<string> = ["Female", "Male", "Others"]

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userName : new FormControl(null,[ Validators.required,  Validators.maxLength(16),
        Validators.minLength(8), Validators.pattern(CustomRegex.onlyText), CustonValidators.noSpace], []),

      email : new FormControl(null, [Validators.required, 
        Validators.pattern(CustomRegex.email)], []),

      empId : new FormControl(null, [Validators.required, EmpIdValidators.isEmpIdValid]),

      gender : new FormControl('Female'),

      skills : new FormArray([new FormControl(null, [Validators.required])])
    })
    console.log(this.signUpForm)

  }
   
  onSignUp(){
    console.log(this.signUpForm)
     console.log(this.signUpForm.controls)
  }

  get userName(){
    return this.signUpForm.get('userName') as FormControl
  }

  get formControls(){
    return this.signUpForm.controls
  }

  get skillsArr(){
    return this.signUpForm.get('skills') as FormArray
  }

  onAdd(){
    let controls = new FormControl(null, [Validators.required])
    this.skillsArr.push(controls)
  }

  onRemove(i : number){
    this.skillsArr.removeAt(i)
  }
}
