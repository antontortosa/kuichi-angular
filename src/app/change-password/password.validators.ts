import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators{
    
    static shouldMatchNew(control:AbstractControl):ValidationErrors | null{
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if(newPassword.value !== confirmPassword.value){
            return { shouldMatchNew: true };
        }
        return null;
    }

    static shouldMatchOld(control:AbstractControl):Promise<ValidationErrors> | null{   
        return new Promise((resolve)=>{
            /*SIMULTE SERVER CALL */
             setTimeout(() => {
                if(control.value !== '1234'){
                    resolve({shouldMatchOld: true});
                 }
                 else resolve(null);
             }, 2000);   
         });       
     }
}