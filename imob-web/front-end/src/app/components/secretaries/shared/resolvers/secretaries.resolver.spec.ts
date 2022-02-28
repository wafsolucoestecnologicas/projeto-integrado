import { TestBed } from '@angular/core/testing';

import { SecretariesResolver } from './secretaries.resolver';

describe('SecretariesResolver', () => {
    let resolver: SecretariesResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(SecretariesResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
