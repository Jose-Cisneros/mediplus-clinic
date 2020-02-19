export class AppointmentInfo {
  id: string;
   name: string;
   lastName: string;
   day: string;
   hour: string;
   photo: string;
   rejected: boolean;
   approved: boolean;
   observation: string;



 constructor(name: string, lastName: string, day: string, hour: string, id: string,
             rejected: boolean,  approved: boolean, observation: string) {
   this.id = id;
   this.name = name;
   this.lastName = lastName;
   this.day = day;
   this.hour = hour;
   this.photo = 'FOTO';
   this.rejected = rejected;
   this.approved = approved;
   this.observation = observation;

 }

 }
