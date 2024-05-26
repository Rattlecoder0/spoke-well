import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  memberNames: string[] = ['Ubaid', 'Rushikesh', 'Rahul','Suraj','Ankit','Nirupam','Yuraj','Qasim','Jitendra'];
  mobileScreen: boolean = false;

  constructor(private devicedetectservice:DeviceDetectorService) {}

  ngOnInit(): void {
    this.mobileScreen = this.devicedetectservice.isMobileDevice
    console.log(this.mobileScreen)
  }

}
