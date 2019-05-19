import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {log} from "util";

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {
    public createForm: FormGroup;
  constructor(
      private fb: FormBuilder
  ) {
      this.createForm = fb.group({
          'type': [null, Validators.required],
          'brand': [null, Validators.required],
          'storage': [null, Validators.required],
          'model':[null, Validators.required],
          'factoryState':[null, Validators.required],
          'headphones':[null, Validators.required],
          'charger':[null, Validators.required],
          'cable':[null, Validators.required],

      });
  }

  ngOnInit() {
  }
  createItem(post){
    console.log(post)
  }
}
