import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommissionsPayableComponent } from './list-commissions-payable.component';

describe('ListCommissionsPayableComponent', () => {
    let component: ListCommissionsPayableComponent;
    let fixture: ComponentFixture<ListCommissionsPayableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListCommissionsPayableComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListCommissionsPayableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
