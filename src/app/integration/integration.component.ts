import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integration',
  template: `
  <div class="container">
    <p class="my-5 py-5">
      Integration works
    </p>
  </div>
  `,
  styles: [
  ]
})
export class IntegrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
