import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigations/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardPageModule } from './components/dashboard-page/dashboard-page.module';
import { DeviceDetectorService } from './services/device-detector.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardPageModule
  ],
  providers: [
    DeviceDetectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
