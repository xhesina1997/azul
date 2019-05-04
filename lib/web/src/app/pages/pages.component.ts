import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: '<div style="height: calc( 100vh - 65px )"><router-outlet></router-outlet></div>'
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
