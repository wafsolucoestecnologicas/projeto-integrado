import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

    public transform(value: string): string {
        return value.trim();
    }
	
}
