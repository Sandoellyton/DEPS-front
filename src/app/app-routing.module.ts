import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {ListingAreasComponent} from './areas/listing-areas/listing-areas.component';
import {RegistrationAreasComponent} from './areas/registration-areas/registration-areas.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'listing-areas',
    component: ListingAreasComponent
  },
  {
    path: 'listing-areas/:user',
    component: ListingAreasComponent
  },
  {
    path: 'registration-areas',
    component: RegistrationAreasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
