import { TestBed } from '@angular/core/testing';

import { AdressesResolver } from './adresses.resolver';

describe('AdressesResolver', () => {
    let resolver: AdressesResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(AdressesResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
