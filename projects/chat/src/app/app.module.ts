import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChatLibModule } from 'projects/chat-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ChatLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
