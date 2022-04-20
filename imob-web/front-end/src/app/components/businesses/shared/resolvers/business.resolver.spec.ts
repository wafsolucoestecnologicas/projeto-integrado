import { TestBed } from '@angular/core/testing';

import { BusinessResolver } from './business.resolver';

describe('BusinessResolver', () => {
    let resolver: BusinessResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(BusinessResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
