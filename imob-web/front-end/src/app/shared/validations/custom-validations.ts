import { ValidatorFn, ValidationErrors, AbstractControl } from "@angular/forms";

export class CustomValidations {

    constructor() {}

    static checkPassword(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const password = control.parent?.get('password');
            const confirm = control.parent?.get('confirm');

            if (password?.value === confirm?.value) return null;

            return { password: true };
        }
    }

}