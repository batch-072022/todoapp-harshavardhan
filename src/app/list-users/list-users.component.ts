import { Component, OnInit } from '@angular/core';



@Component({

  selector: 'app-list-users',

  templateUrl: './list-users.component.html',

  styleUrls: ['./list-users.component.css']

})

export class ListUsersComponent implements OnInit {



  constructor() { }



  ngOnInit(): void {

  }

  //users=["Harshavardhan","kedhar","Roopesh"];

  users=[

    {id:101, name:"Harshavardhan",email:"Harshavardhan@gmail.com"},



    {id:102, name:"kedhar",email:"kedhar@gmail.com"},



    {id:103, name:"Roopesh",email:"roopesh@gmail.com"}



  ];



  //ListTaskComponent



  tasks=[



    {id:1,name:"Install Java",status:"COMPLETED"},



    {id:2,name:"Install NodeJS",status:"PENDING"},



  ];





  deleteUser()



  {



    alert("Successfully deleted");



  }





}