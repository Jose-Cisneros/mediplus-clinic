import { Action } from '@ngrx/store';

export enum AllAppointmentsActionTypes {
    GET_ALL_APPOINTMENTS = '[ALL_APPOINTMENTS] GET_ALL_APPOINTMENTS',
    GET_ALL_APPOINTMENTS_SUCCESS = '[ALL_APPOINTMENTS] GET_ALL_APPOINTMENTS_SUCCESS',
    GET_ALL_APPOINTMENTS_ERROR = '[ALL_APPOINTMENTS] GET_ALL_APPOINTMENTS_ERROR'
}

export class GetAllAppointments implements Action {
    readonly type = AllAppointmentsActionTypes.GET_ALL_APPOINTMENTS;
    constructor() { }
}

export class GetAllAppointmentsSuccess implements Action {
    readonly type = AllAppointmentsActionTypes.GET_ALL_APPOINTMENTS_SUCCESS;

    constructor() { }
}

export class GetAllAppointmentsError implements Action {
  readonly type = AllAppointmentsActionTypes.GET_ALL_APPOINTMENTS_ERROR;

  constructor() { }
}

export type AllAppointmentsActionsUnion =
  | GetAllAppointments
  | GetAllAppointmentsSuccess
  | GetAllAppointmentsError;
