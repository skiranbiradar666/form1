import { AbstractControl, ValidationErrors } from "@angular/forms";


export class CustonValidators{

    static noSpace(control : AbstractControl) : ValidationErrors | null{
        
        let val = control.value

        if(!val){
            return null
        } 

        if(val.includes(' ')){

            return{
                noSpaceBar : 'Space is not Allowed !'
            }
        }else{
            return null
        }
    }
}

export class EmpIdValidators{

    static isEmpIdValid(control : AbstractControl) : ValidationErrors | null {
         let val = control.value

         if(!val){
            return null
         }

         let regExp = /^[A-Z]\d{3}$/;

         let isValid = regExp.test(val)

         if(isValid){
            return null
         }else{
            return{
                isEmpValid : `Invalid Emp Id !`
            }
         }
    }
}