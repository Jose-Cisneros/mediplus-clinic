import { PatientViewActionTypes, PatientViewActionsUnion } from '../actions/patient-view-status.actions';
import { AllAppointmentsActionTypes, AllAppointmentsActionsUnion } from '../actions/appointments.actions';


export interface State {
  data: any;
  loading: boolean;
  error: any;
}

const initialState = {
  data: [],
  loading: false,
  error: null
};


export function reducer( state = initialState, { type, payload } ) {
  switch ( type ) {
    case AllAppointmentsActionTypes.GET_ALL_APPOINTMENTS:
      return Object.assign({}, state, {pending: true, error: null});
    case AllAppointmentsActionTypes.GET_ALL_APPOINTMENTS_SUCCESS:
      return Object.assign({}, state, {data: payload, pending: false});
    case AllAppointmentsActionTypes.GET_ALL_APPOINTMENTS_ERROR:
      return Object.assign({}, state, {pending: false, error: 'Error'});
    default:
      return state;
  }
}
