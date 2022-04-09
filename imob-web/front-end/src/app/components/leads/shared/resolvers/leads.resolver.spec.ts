import { TestBed } from '@angular/core/testing';

import { LeadsResolver } from './leads.resolver';

describe('LeadsResolver', () => {
    let resolver: LeadsResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(LeadsResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
