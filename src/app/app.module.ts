import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event-detail/event-details.component';
import { EventsComponent } from './event.component';
import { TokenGuard } from './guards/token';

import { EventService } from './services/event.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventService, TokenGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
