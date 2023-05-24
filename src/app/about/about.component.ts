import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    console.log("About init");
    this.sharedService.navTabActiveId$.next("/about");
  }

}
