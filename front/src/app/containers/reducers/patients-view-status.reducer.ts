import { PatientViewActionTypes, PatientViewActionsUnion } from '../actions/patient-view-status.actions';

export interface State {
  isHomeView: boolean;
  isRequestAppointmentView: boolean;
  isRequestedAppointmentsView: boolean;
  isSelectSpecialist: boolean;
  isAllAppointmentsHistory: boolean;
  isProfile: boolean;
}

const initialState = {
  isHomeView: true,
  isRequestAppointmentView: false,
  isRequestedAppointmentsView: false,
  isSelectSpecialist: false,
  isAllAppointmentsHistory: false,
  isProfile: false,
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
        isProfile: false,
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
        isProfile: false,

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
        isProfile: false,

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
        isProfile: false,
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
        isProfile: false,
      };
    }
    case PatientViewActionTypes.Profile: {
      return {
        ...state,
        isHomeView: false,
        isRequestAppointmentView: false,
        isRequestedAppointmentsView: false,
        isSelectSpecialist: false,
        isAllAppointmentsHistory: false,
        isProfile: true,
      };
    }
    default: {
      return state;
    }
  }
}
