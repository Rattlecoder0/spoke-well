import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  checkRouteTitle: any = '';
  displayTitle: string = '';

  constructor(private router: Router, private titleCasePipe: TitleCasePipe) { }

  ngOnInit(): void {
    this.checkRouteForTitleChange()
  }

  checkRouteForTitleChange() {
    // const str = 'https://rattlecoder0.github.io/spoke-well/add-members'
    const str = this.router.url
    if (str.split('/').includes('spoke-well')) {
      const checkForTitle = str.search('spoke-well')
      const getSubstring = str.substring(checkForTitle)
      const splittedUrl = getSubstring.split('/')[1]
      const title = splittedUrl.includes('-') ? splittedUrl.split('-').join(' ') : splittedUrl
      this.displayTitle = title
      // console.log(getSubstring)
    } else {
      const localHostUrl = this.router.url.split('/')[1]
      const title = localHostUrl.includes('-') ? localHostUrl.split('-').join(' ') : localHostUrl
      this.displayTitle = title
      // console.log(title)
    }
  }

}
