import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  template: `
  <div class="container">
    <p class="my-5 py-5">
      company works!
    </p>
  </div>
  `,
  styles: [
  ]
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
