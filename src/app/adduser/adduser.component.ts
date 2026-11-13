import { Component } from '@angular/core';
import { Users } from '../../model/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  users:Users[]=[]

showForm(f:any){
  console.log(f)
}
showData(data:Users){
  let u=data
   this.users.push(data)
console.log(this.users)
}
}
