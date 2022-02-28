import { TestBed } from '@angular/core/testing';

import { AdvisorsResolver } from './advisors.resolver';

describe('AdvisorsResolver', () => {
    let resolver: AdvisorsResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(AdvisorsResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
