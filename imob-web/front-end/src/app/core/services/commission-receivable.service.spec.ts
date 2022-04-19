import { TestBed } from '@angular/core/testing';

import { CommissionReceivableService } from './commission-receivable.service';

describe('CommissionReceivableService', () => {
    let service: CommissionReceivableService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CommissionReceivableService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
