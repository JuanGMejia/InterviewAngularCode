import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {EventService} from '../services/event.service';

@Injectable()
export class TokenGuard implements CanActivate {
  constructor(
    private eventService: EventService
  ) {}

  canActivate(): boolean {
    return this.eventService.token ? true : false;
  } 
}
