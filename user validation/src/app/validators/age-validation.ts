import { AbstractControl } from '@angular/forms';

export function ValidateAge(control: AbstractControl) {

    if (!(control.value>0&&control.value<=120)) {
        return { validAge: true };
    }
    return null;

}