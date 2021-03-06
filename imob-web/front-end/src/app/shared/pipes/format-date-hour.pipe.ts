import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'formatDateHour'
})
export class FormatDateHourPipe implements PipeTransform {

    public transform(value: string): string | null {
        if (value) return moment(value).format('DD/MM/YYYY HH:mm:ss');

        return null;
    }

}
