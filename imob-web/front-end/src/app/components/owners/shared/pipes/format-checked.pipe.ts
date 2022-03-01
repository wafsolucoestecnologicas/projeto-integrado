import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatChecked'
})
export class FormatCheckedPipe implements PipeTransform {

    public transform(value: boolean): string {
		if (value) return 'conferido';

        return 'não conferido';
    }
}
