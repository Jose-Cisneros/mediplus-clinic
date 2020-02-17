export class PhoneNumber {
  country: string;
  number: string;

  // format phone numbers as E.164
  get e164() {
    const num = '54' + this.number;
    return `+${num}`;
  }
}
