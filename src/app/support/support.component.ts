import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  template: `
  <div class="container">
    <p class="my-5 py-5">
      support works!
    </p>
  </div>
  `,
  styles: [
  ]
})
export class SupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
