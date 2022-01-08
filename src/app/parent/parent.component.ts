import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {

  person = {};
  constructor() {}

  ngOnInit(): void {}

  send(){
    this.person = {
      name: 'Mulyono Putra',
      phone: '081289900099'
    }
    console.log(this.person)
  }
}
