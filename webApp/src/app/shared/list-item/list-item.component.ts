import {Component, OnInit, Input, Output} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

    @Input() listing: any = {};
    @Input() view: any = {};
    @Output() outputEvent = new Subject();

    constructor() {
    }

    ngOnInit() {
    }

    deletePost() {
        let output = {type: "delete", target: this.listing};
        this.outputEvent.next(output);
    }

    favourite(){
        let output = {type: "favourite", target: this.listing};
        this.outputEvent.next(output);
    }
    editPost(){
        
    }
}
