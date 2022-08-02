import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css']
})
export class ListtaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   // users ! :any;
  // users = ["Harsha", "Kedhar", "Roopesh"];
  users = [
    {id:101,name:"Harsha",email:"harshavardhan123@gmail.com",status:"PENDING"},
   {id:1022,name:"kedhar",email:"kedhar@gmail.com",status:"PENDING"}
  ]
  deleteUser(){
    alert("Successfully Deleted");
  }


}