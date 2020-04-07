export class PaymentInfo {
  cardNumber: string;
  expirationDate = new ExpirationDate();
  securityCode: string;
}

export class ExpirationDate {
  year: string;
  month: string;
}
