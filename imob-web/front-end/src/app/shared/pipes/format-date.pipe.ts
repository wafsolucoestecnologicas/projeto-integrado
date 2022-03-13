import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

    public transform(value: string): string | null {
		if (value) return moment(value).format('DD/MM/YYYY');

        return null;
    }
	
}
