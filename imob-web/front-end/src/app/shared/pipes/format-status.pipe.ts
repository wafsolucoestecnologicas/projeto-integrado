import { Pipe, PipeTransform } from '@angular/core';
import { BusinessService } from 'src/app/core/services/business.service';

@Pipe({
    name: 'formatStatus'
})
export class FormatStatusPipe implements PipeTransform {

	private status: string[];

	constructor(
		private readonly _businessService: BusinessService
	) {
		this.status = this._businessService.status;
	}

    public transform(value: number): string {
        return this.status.find((name: string, index: number) => value === index) as string;
    }

}
