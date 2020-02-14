import { PatientViewActionTypes, PatientViewActionsUnion } from '../actions/patient-view-status.actions';

export interface State {
  isHomeView: boolean;
  isRequestAppointmentView: boolean;
  isRequestedAppointmentsView: boolean;
  isSelectSpecialist: boolean;
  isAllAppointmentsHistory: boolean;
  isPatientProfile: boolean;
}

const initialState = {
  isHomeView: true,
  isRequestAppointmentView: false,
  isRequestedAppointmentsView: false,
  isSelectSpecialist: false,
  isAllAppointmentsHistory: false,
  isPatientProfile: false,
};

type ActionsType =
  | PatientViewActionsUnion;

export function reducer( state = initialState, action: ActionsType): State {
  switch (action.type) {
    case PatientViewActionTypes.Home: {
      return {
        ...state,
        isHomeView: true,
        isRequestAppointmentView: false,
        isRequestedAppointmentsView: false,
        isSelectSpecialist: false,
        isAllAppointmentsHistory: false,
        isPatientProfile: false,
      };
    }
    case PatientViewActionTypes.RequestAppointment: {
      return {
        ...state,
        isHomeView: false,
        isRequestAppointmentView: true,
        isRequestedAppointmentsView: false,
        isSelectSpecialist: false,
        isAllAppointmentsHistory: false,
        isPatientProfile: false,

      };
    }
    case PatientViewActionTypes.RequestedAppointments: {
      return {
        ...state,
        isHomeView: false,
        isRequestAppointmentView: false,
        isRequestedAppointmentsView: true,
        isSelectSpecialist: false,
        isAllAppointmentsHistory: false,
        isPatientProfile: false,

      };
    }
    case PatientViewActionTypes.SelectSpecialist: {
      return {
        ...state,
        isHomeView: false,
        isRequestAppointmentView: false,
        isRequestedAppointmentsView: false,
        isSelectSpecialist: true,
        isAllAppointmentsHistory: false,
        isPatientProfile: false,
      };
    }
    case PatientViewActionTypes.AllAppointmentsHistory: {
      return {
        ...state,
        isHomeView: false,
        isRequestAppointmentView: false,
        isRequestedAppointmentsView: false,
        isSelectSpecialist: false,
        isAllAppointmentsHistory: true,
        isPatientProfile: false,
      };
    }
    case PatientViewActionTypes.PatientProfile: {
      return {
        ...state,
        isHomeView: false,
        isRequestAppointmentView: false,
        isRequestedAppointmentsView: false,
        isSelectSpecialist: false,
        isAllAppointmentsHistory: false,
        isPatientProfile: true,
      };
    }
    default: {
      return state;
    }
  }
}
