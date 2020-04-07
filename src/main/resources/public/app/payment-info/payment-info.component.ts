import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaymentInfo } from '../payment-info';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentInfoComponent implements OnInit {

  @Input()
  paymentInfo: PaymentInfo;
  @Output()
  submitEvent = new EventEmitter<PaymentInfo>();

  paymentForm;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      cardNumber: [this.paymentInfo.cardNumber, [Validators.required, Validators.pattern('^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})$')]],
      expirationDate: this.formBuilder.group({
        year: [this.paymentInfo.expirationDate.year, [Validators.required, Validators.pattern('\\d{2}')]],
        month: [this.paymentInfo.expirationDate.month, [Validators.required, Validators.pattern('\\d{2}')]]
      }),
      securityCode: [this.paymentInfo.securityCode, [Validators.required, Validators.pattern('\\d{3}')]]
    });
  }

  onSubmit(paymentInfo: PaymentInfo) {
    this.submitEvent.emit(paymentInfo);
  }
}
