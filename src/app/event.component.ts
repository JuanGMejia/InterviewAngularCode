import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {EventService} from './services/event.service'
@Component({
  selector: 'events',
  template: `
    <span>Events</span>
    <div *ngFor="let event of eventService.events">
      {{event.name}}
      <br>
      <button (click)="viewMore(event.id)">
        <b style="color: black">View More</b>
      </button>
      <br>
      -------------------------------
    </div>
  `
})
export class EventsComponent {

  constructor(public eventService: EventService, private router: Router){}

  viewMore(id: number) {
    this.router.navigate([`details/${id}`])
  }
}
