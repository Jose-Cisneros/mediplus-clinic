import { LogInComponent } from './components/log-in/log-in.component';
import { PatientPageComponent } from './containers/patient-page/patient-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { PhoneAuthComponent } from './components/phone-auth/phone-auth.component';



const routes: Routes = [

// rutas de usuario
{
  path: '',
  component: PhoneAuthComponent
},
{
  path: 'singInPaciente',
  component: SingInComponent
},
{
  path: 'singInEspecialista',
  component: SingInComponent
},
  {path: 'logIn',
  component: LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
