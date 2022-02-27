import { TestBed } from '@angular/core/testing';

import { ManagersResolver } from './managers.resolver';

describe('ManagersResolver', () => {
    let resolver: ManagersResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(ManagersResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
