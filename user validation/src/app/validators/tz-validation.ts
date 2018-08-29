import { AbstractControl } from '@angular/forms';

export function ValidateTz(control: AbstractControl) {

    let legalTz = (id) => {
        let total = 0;
        for (let i = 0; i < 9; i++) {
            let x = (((i % 2) + 1) * id.charAt(i));
            total += Math.floor(x / 10) + x % 10;
        }
        return (total % 10 == 0);
    }

    if (!legalTz(control.value)) {
        return { validTz: true };
    }
    return null;
}