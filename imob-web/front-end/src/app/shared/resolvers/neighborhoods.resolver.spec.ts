import { TestBed } from '@angular/core/testing';

import { NeighborhoodsResolver } from './neighborhoods.resolver';

describe('NeighborhoodsResolver', () => {
    let resolver: NeighborhoodsResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(NeighborhoodsResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
