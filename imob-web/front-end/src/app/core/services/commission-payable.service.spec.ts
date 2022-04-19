import { TestBed } from '@angular/core/testing';

import { CommissionPayableService } from './commission-payable.service';

describe('CommissionPayableService', () => {
    let service: CommissionPayableService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CommissionPayableService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
