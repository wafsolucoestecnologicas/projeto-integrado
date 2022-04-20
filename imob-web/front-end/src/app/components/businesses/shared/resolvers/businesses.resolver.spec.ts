import { TestBed } from '@angular/core/testing';

import { BusinessesResolver } from './businesses.resolver';

describe('BusinessesResolver', () => {
    let resolver: BusinessesResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(BusinessesResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
