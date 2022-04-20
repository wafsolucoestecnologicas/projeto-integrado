import { TestBed } from '@angular/core/testing';

import { CommissionsReceivableResolver } from './commissions-receivable.resolver';

describe('CommissionsReceivableResolver', () => {
    let resolver: CommissionsReceivableResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(CommissionsReceivableResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
