import { TestBed } from '@angular/core/testing';

import { BrokerResolver } from './broker.resolver';

describe('BrokerResolver', () => {
    let resolver: BrokerResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(BrokerResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
