import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecretaryComponent } from './view-secretary.component';

describe('ViewSecretaryComponent', () => {
    let component: ViewSecretaryComponent;
    let fixture: ComponentFixture<ViewSecretaryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ViewSecretaryComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewSecretaryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
