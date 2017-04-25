import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  signUp:Boolean = false;

  constructor() { }
  ngOnInit() {
  }

  changeMode() {
    this.signUp = this.signUp? false: true;
  }

}
