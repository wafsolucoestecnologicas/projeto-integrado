import { TestBed } from '@angular/core/testing';

import { PropertyResolver } from './property.resolver';

describe('PropertyResolver', () => {
    let resolver: PropertyResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(PropertyResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
