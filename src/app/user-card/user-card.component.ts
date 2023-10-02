import { Component } from '@angular/core';
import { IUser } from './user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  // field
  name:string="Tetiana";
  surname:string="Shrol";
  address:string="Rivne";
  
  //object
  user1={
    name:"NoName",
    surname:"NoSurname",
    address:"NoCity",
    birthday: new Date("2000-07-07"),
    premium: 3000
  };
  
  user2:IUser={
    name:"Oleksandr",
    surname:"Shrol",
    address:"Rivne",
    birthday: new Date("2005-12-09"),
    premium: 5000
  };
//array user
  users:IUser[];

  constructor(){
    this.users=[
      { name:"Oleksandr11", surname:"Shrol11", address:"Rivne", birthday: new Date("2005-12-07"), premium: 8000},
      { name:"Oleksandr1111", surname:"Shrol1111", address:"Kiev", birthday: new Date("2005-12-02"), premium: 2000}
    ]
  }

  //metods
}

