import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesForSaleComponent } from './properties-for-sale.component';

describe('PropertiesForSaleComponent', () => {
    let component: PropertiesForSaleComponent;
    let fixture: ComponentFixture<PropertiesForSaleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PropertiesForSaleComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PropertiesForSaleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
