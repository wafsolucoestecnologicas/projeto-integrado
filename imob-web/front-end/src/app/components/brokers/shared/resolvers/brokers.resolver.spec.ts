import { TestBed } from '@angular/core/testing';

import { BrokersResolver } from './brokers.resolver';

describe('BrokersResolver', () => {
    let resolver: BrokersResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(BrokersResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
