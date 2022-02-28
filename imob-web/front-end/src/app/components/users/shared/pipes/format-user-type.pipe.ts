import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatUserType'
})
export class FormatUserTypePipe implements PipeTransform {

    public transform(value: boolean): string {
		if (value) return 'x';

        return '-';
    }

}
