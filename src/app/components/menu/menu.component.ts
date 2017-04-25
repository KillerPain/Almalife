import { 
  Component, 
  OnInit,
  trigger,
  animate,
  state,
  transition,
  keyframes 
} from '@angular/core';

@Component({
  selector: 'al-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  someProperty:Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMove() {
    this.someProperty = (this.someProperty === true) ? false: true;
  }

}
