import { TestBed } from '@angular/core/testing';

import { CommissionsPayableResolver } from './commissions-payable.resolver';

describe('CommissionsPayableResolver', () => {
    let resolver: CommissionsPayableResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(CommissionsPayableResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
