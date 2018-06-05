import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-message',
  template: `
    <h3>my warning message is successful </h3>
  `,
  styleUrls: ['./warning-message.component.css']
})
export class WarningMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
