import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectorService {

  isMobileDevice: boolean = false;

  constructor() { this.detectDevice(); }

  detectDevice() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const mobileDeviceKeywords = ['android', 'iphone', 'ipad', 'ipod', 'windows phone'];
    this.isMobileDevice = mobileDeviceKeywords.some(keyword => userAgent.includes(keyword));
  }
}
