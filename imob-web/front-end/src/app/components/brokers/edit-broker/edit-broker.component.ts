import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Broker, UpdateBroker } from 'src/app/core/interfaces/broker.interface';
import { BrokerService } from 'src/app/core/services/broker.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-edit-broker',
    templateUrl: './edit-broker.component.html',
    styleUrls: ['./edit-broker.component.css']
})
export class EditBrokerComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;
    public broker: Broker;
    public path: string;
    public MASKS: typeof Masks;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _brokerService: BrokerService,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.path = '/content/brokers';
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        this.createFormGroup();

        const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['broker']) {
					this.broker = data['broker'];
                    this.broker.landline = this.broker.landline?.trim();

					this.formGroup.patchValue(this.broker);
				} else {
					this._router.navigate([`${this.path}/list`]);
					this._alertService.openSnackBar('Corretor não encontrado na base de dados!');
				}
			});

        this.subscriptions.push(subscription);
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    private createFormGroup(): void {
        this.formGroup = this._formBuilder.group({
            name: [null, [Validators.required]],
            surname: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            birthDate: [null, [Validators.required]],
            RG: [null, [Validators.required]],
            CPF: [null, [Validators.required]],
            landline: [null, []],
            cellPhone: [null, [Validators.required]],
            profession: [null, []]
        });
    }

    private parseFormGroup(form: any): UpdateBroker {
        return {
            name: form.name,
            surname: form.surname,
            email: form.email,
            birthDate: form.birthDate,
            RG: form.RG,
            CPF: form.CPF,
            landline: form.landline,
            cellPhone: form.cellPhone,
            profession: form.profession
        };
    }

    public onSubmit(): void {
        if (this.formGroup.valid) {
            if (this.broker.id) {
                const subscription: Subscription = this._brokerService
                    .update(this.parseFormGroup(this.formGroup.value), this.broker.id)
                    .subscribe((data: UpdateBroker) => {
                        if (data) {
                            this._router.navigate([`${this.path}/list`]);
                            this._alertService.openSnackBar('Corretor atualizado com sucesso!');
                        }
                    });

                this.subscriptions.push(subscription);
            }
        }
    }

}
