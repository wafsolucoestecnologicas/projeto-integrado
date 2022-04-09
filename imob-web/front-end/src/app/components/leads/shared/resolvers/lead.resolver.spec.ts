import { TestBed } from '@angular/core/testing';

import { LeadResolver } from './lead.resolver';

describe('LeadResolver', () => {
    let resolver: LeadResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(LeadResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
