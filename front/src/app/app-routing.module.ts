import { PatientPageComponent } from './containers/patient-page/patient-page.component';
import { PatientRequestAppointmentsComponent } from './components/patient-request-appointments/patient-request-appointments.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { PatientHomePageComponent } from './components/patient-home-page/patient-home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

// rutas de usuario
{
  path: '',
  component: PatientPageComponent
},
{
  path: 'singUp',
  component: SingUpComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
