import { TestBed } from '@angular/core/testing';

import { OwnerResolver } from './owner.resolver';

describe('OwnerResolver', () => {
    let resolver: OwnerResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(OwnerResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
