import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeadComponent } from './list-lead.component';

describe('ListLeadComponent', () => {
    let component: ListLeadComponent;
    let fixture: ComponentFixture<ListLeadComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListLeadComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListLeadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
