import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../services/event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit{
  event: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService){}
 
  ngOnInit() {
    this.activatedRoute.params
    .subscribe(param => {
      this.event = this.eventService.events.find((event) => event.id === +param.id);
    });
  }
}
