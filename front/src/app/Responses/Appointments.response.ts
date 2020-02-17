export interface AppointmentResponse {
  _id: string;
  doctor: Doctor;
  date: string;
  hour: string;
}

export interface Doctor {
  person: Person;
  speciality: string;
  _id: string;
}

export interface Person {
  birthDate: string;
  dni: number;
  firstName: string;
  lastName: string;
  phone: number;
}
