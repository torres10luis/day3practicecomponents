import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-message',
  template: `
    <h3>my warning message is successful </h3>
  `,
  styles: [`
    h3{
      color: red;
    }
  `]
})
export class WarningMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
