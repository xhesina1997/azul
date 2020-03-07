import {Component, OnInit, Input, Output} from '@angular/core';
import {Subject} from "rxjs/Subject";
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

    @Input() listing: any = {};
    @Input() view: any = {};
    @Output() outputEvent = new Subject();
    

    constructor(private router: Router) {
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

    open(){
        let output = {type: "open", target: this.listing};
        this.outputEvent.next(output)
    }

    editPost(listing){
        this.router.navigate(['/mobile/edit-listing'],{queryParams: {postUuid:listing.uuid}});
    }
}
