import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommissionsReceivableComponent } from './list-commissions-receivable.component';

describe('ListCommissionsReceivableComponent', () => {
    let component: ListCommissionsReceivableComponent;
    let fixture: ComponentFixture<ListCommissionsReceivableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListCommissionsReceivableComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListCommissionsReceivableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
