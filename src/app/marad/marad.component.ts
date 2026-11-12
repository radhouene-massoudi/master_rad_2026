import { Component } from '@angular/core';

@Component({
  selector: 'app-marad',
  templateUrl: './marad.component.html',
  styleUrl: './marad.component.css'
})
export class MaradComponent {
  constructor(){
console.log('constructor')
  }
  ngOnInit(){
    console.log('ngOnint')
  }
klass='RAD'
color="pink"
showMsg(){
  alert('bonjour');
}
getColor(){
  if(this.klass==='RAD')
    return 'yellow'
  else
  return 'blue'
}
students=[{'id':1,'name':'ahmed','surname':'test','age':23},
  {'id':2,'name':'foulen','surname':'test','age':43},
  {'id':3,'name':'falten','surname':'test','age':33},
]
}
