import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterContentChecked {

  active:string;
  
  constructor(private sharedService:SharedService, private cdRef:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked():void{
    this.sharedService.navTabActiveIdObs.subscribe((data)=>{
      console.log("Active:"+data);
      this.active = data;
    })
    this.cdRef.detectChanges();
  }

  onNavChange(changeEvent:NgbNavChangeEvent){
    // changeEvent.preventDefault();
  }
}
