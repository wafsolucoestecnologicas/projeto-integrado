import { Pipe, PipeTransform } from '@angular/core';

import { LeadService } from 'src/app/core/services/lead.service';

@Pipe({
    name: 'formatSource'
})
export class FormatSourcePipe implements PipeTransform {

	private sources: string[];

	constructor(
		private readonly _leadService: LeadService
	) {
		this.sources = this._leadService.sources;
	}

    public transform(source: number): string {
        return this.sources.filter((value: string, index: number) => source === index)[0];
    }

}
