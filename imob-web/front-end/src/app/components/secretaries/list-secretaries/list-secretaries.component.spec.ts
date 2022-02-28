import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSecretariesComponent } from './list-secretaries.component';

describe('ListSecretariesComponent', () => {
    let component: ListSecretariesComponent;
    let fixture: ComponentFixture<ListSecretariesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListSecretariesComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListSecretariesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
