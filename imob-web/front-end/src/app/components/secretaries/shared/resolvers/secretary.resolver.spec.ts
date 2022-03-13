import { TestBed } from '@angular/core/testing';

import { SecretaryResolver } from './secretary.resolver';

describe('SecretaryResolver', () => {
    let resolver: SecretaryResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(SecretaryResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
