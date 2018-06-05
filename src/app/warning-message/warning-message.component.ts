import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-message',
  template: `
    <h2> warning message </h2>
  `,
  styleUrls: ['./warning-message.component.css']
})
export class WarningMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
