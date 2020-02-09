export class Appointment {

  private _id: string;
  public set id(value: string) {
    this._id = value;
  }
  public get id(): string {
    return this._id;
  }
  private _doctorFirstName: string;
  public set doctorFirstName(value: string) {
    this._doctorFirstName = value;
  }
  public get doctorFirstName(): string {
    return this._doctorFirstName;
  }
  private _doctorLastName: string;
  public set doctorLastName(value: string) {
    this._doctorLastName = value;
  }
  public get doctorLastName(): string {
    return this._doctorLastName;
  }
  private _doctorSpeciality: string;
  public set doctorSpeciality(value: string) {
    this._doctorSpeciality = value;
  }
  public get doctorSpeciality(): string {
    return this._doctorSpeciality;
  }
  private _date: string;
  public set date(value: string) {
    this._date = value;
  }
  public get date(): string {
    return this._date;
  }
  private _hour: string;
  public set hour(value: string) {
    this._hour = value;
  }
  public get hour(): string {
    return this._hour;
  }

  constructor(id: string, doctorFirstName: string, doctorLastName: string, doctorSpeciality: string, date: string, hour: string) {
    this._id = id;
    this._doctorFirstName = doctorFirstName;
    this._doctorLastName = doctorLastName;
    this._doctorSpeciality = doctorSpeciality;
    this._date = date;
    this._hour = hour;
  }
}
