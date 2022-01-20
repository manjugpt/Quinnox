import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
  <div class="container">
   <p class="my-5 py-5">
      blog works!
    </p>
  </div>
  `,
  styles: [
  ]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
