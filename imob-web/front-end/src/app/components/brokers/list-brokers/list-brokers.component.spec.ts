import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBrokersComponent } from './list-brokers.component';

describe('ListBrokersComponent', () => {
    let component: ListBrokersComponent;
    let fixture: ComponentFixture<ListBrokersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListBrokersComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListBrokersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
