// person:
// birthDate: "01-12-1996"
// dni: 40234234
// firstName: "Juan Pablo"
// lastName: "Pardal"
// phone: 2214765185
// __v: 0
// _id: "5da776e8a49566349022bdb2"
// __proto__: Object
// speciality: "Traumatologo"


export interface DoctorResponse {
  doctor: any;
  person: Person;
  speciality: string;
  prepaid: HealthCareResponse[],
  _id: string;
}

export interface HealthCareResponse {
  _id: string;
  name: string;
}


export interface Person {
  birthDate: string;
  dni: number;
  firstName: string;
  lastName: string;
  phone: number;
  prepaid: string[];
}
