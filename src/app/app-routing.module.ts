import {RouterModule, Routes} from '@angular/router';
import { EventsComponent } from './event.component';
import { EventDetailsComponent } from './event-detail/event-details.component';
import { NgModule } from '@angular/core';
import {TokenGuard} from './guards/token';
const routes: Routes = [
  {
    path: '',
    component: EventsComponent
  },
  {
    path: 'details/:id',
    component: EventDetailsComponent,
    canActivate: [TokenGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}