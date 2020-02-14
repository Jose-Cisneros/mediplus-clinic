import { Action } from '@ngrx/store';

export enum PatientViewActionTypes {
    Home = '[PatientViewShown] Home',
    RequestAppointment = '[PatientViewShown] Request-Appointment',
    RequestedAppointments = '[PatientViewShown] Requested-Appointments',
    SelectSpecialist = '[SelectSpecialist] Select-specialist',
    AllAppointmentsHistory= '[AllAppointmentsHistory] All-Appointments-History',
    PattientProfile = '[PattientProfile] Pattient-Profile'
}

export class Home implements Action {
    readonly type = PatientViewActionTypes.Home;

    constructor() { }
}

export class RequestAppointment implements Action {
    readonly type = PatientViewActionTypes.RequestAppointment;

    constructor() { }
}

export class RequestedAppointments implements Action {
  readonly type = PatientViewActionTypes.RequestedAppointments;

  constructor() { }
}

export class SelectSpecialist implements Action {
  readonly type = PatientViewActionTypes.SelectSpecialist;

  constructor() { }
}
export class AllAppointmentHistory implements Action {
  readonly type = PatientViewActionTypes.AllAppointmentsHistory;

  constructor() { }
}
export class PattientProfile implements Action {
  readonly type = PatientViewActionTypes.PattientProfile;

  constructor() { }
}
export type PatientViewActionsUnion =
  | Home
  | RequestAppointment
  | RequestedAppointments
  | SelectSpecialist
  | AllAppointmentHistory
  | PattientProfile;
