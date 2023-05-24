import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  reportName:string;

  complains={"title":"","content":""}
  contentExist:boolean=false;

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.navTabActiveId$.next("/contact");
  }

  onComplainSubmit(){
    console.log(this.complains);
    this.contentExist = this.complains.title != '' && this.complains.content != '';
  }
 
  onComplainClear(){
    this.complains={
      "title":"",
      "content":""
    }
    this.contentExist = false;
  }
}
