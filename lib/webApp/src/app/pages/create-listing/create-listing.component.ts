import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { log } from "util";

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
            'prodhuesi': [null, Validators.required],
            'modeli': [null, Validators.required],
            'struktura': [null, Validators.required],
            'viti': [null, Validators.required],
            'ngjyra': [null, Validators.required],
            'kilometrat': [null, Validators.required],
            'kambio': [null, Validators.required],
            'karburanti': [null, Validators.required],
            'targa': [null, Validators.required],
            'qyteti': [null, Validators.required],

        });
    }

    ngOnInit() {
    }
    createItem(post) {
        console.log(post)
    }
    
}
