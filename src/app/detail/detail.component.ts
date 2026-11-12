import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  msg:any;
constructor(private ac:ActivatedRoute){
console.log('111111')
}
ngOnInit(){
  this.msg=this.ac.snapshot.params['idofproduct']
}
}
