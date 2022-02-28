import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertBoolean'
})
export class ConvertBooleanPipe implements PipeTransform {

    public transform(value: boolean): string {
		if (value) return 'x';

        return '-';
    }

}
