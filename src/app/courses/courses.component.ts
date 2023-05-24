import { Component, OnInit } from '@angular/core';
import { DataType } from './DataType';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  data:DataType[]=[
    {id:1, name:'Brian 1', age:48},
    {id:2, name:'Brian 2', age:48},
    {id:3, name:'Brian 3', age:48},
    {id:4, name:'Brian 4', age:48},
    {id:5, name:'Brian 5', age:48},
    {id:6, name:'Brian 6', age:48},
    {id:7, name:'Brian 7', age:48},
    {id:8, name:'Brian 8', age:48},
    {id:9, name:'Brian 9', age:48}
  ];

  // Form Fields
  id:number;
  name: string;
  age: number;

  editMode:boolean=false;
  result:DataType[];


  page:number;
  pageSize:number;
  collectionSize:number;
  selectedToUpdate:DataType;

  constructor(private sharedService:SharedService) { }
  toggleEditMode(){
    this.editMode = !this.editMode;
  }

  onSubmit(){

    if(this.id){
      // Edit
      let found = this.data.find(rec=>rec.id==this.id);
      found.name=this.name;
      found.age=this.age;
      this.result=[...this.data];

      this.editMode=false;
      this.page=1;
      this.pageSize=2;
      this.collectionSize=this.data.length;
      this.showResultTable();
    }else{
      // Add
      console.log(this.name+","+this.age);
      this.result=[...this.data];
      console.log(typeof this.result)
      this.result.sort((a,b)=> {return a.id-b.id} );
      let firstData = this.result[0]
      let newData = { id:firstData.id+1,
        name:this.name,
        age:this.age};
      this.data.push(newData);
      this.result=[...this.data];
      this.editMode=false;
      this.page=1;
      this.pageSize=2;
      this.collectionSize=this.data.length;
      this.showResultTable();
    }

    
  }

  onEdit(id:number){
    this.editMode=true;
    this.selectedToUpdate = this.data.find((rec)=>rec.id=id);
    this.id = this.selectedToUpdate.id;
    this.name = this.selectedToUpdate.name;
    this.age = this.selectedToUpdate.age;
  }

  onDelete(id:number){
    this.data.splice(
      this.data.indexOf(
        this.data.find((r)=>r.id==id)
      ), 1
    )
    this.showResultTable();
  }

  ngOnInit(): void {
    this.sharedService.navTabActiveId$.next("/courses");

    this.page=1;
    this.pageSize=2;
    this.collectionSize=this.data.length;
    this.showResultTable();
  }

  showResultTable(){
    this.result = this.data.sort((a,b)=> b.id-a.id ).map((items,i) => ({...items})).slice(
      (this.page-1)*this.pageSize,
      (this.page-1)*this.pageSize+this.pageSize
    );
  }
}
