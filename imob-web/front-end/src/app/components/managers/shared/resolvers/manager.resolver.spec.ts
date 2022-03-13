import { TestBed } from '@angular/core/testing';

import { ManagerResolver } from './manager.resolver';

describe('ManagerResolver', () => {
    let resolver: ManagerResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(ManagerResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
