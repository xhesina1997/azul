import {Component, OnInit, Input, Output} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {CarService} from "../../api/car.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {


  @Input() listing: any = {};
  @Output() outputEvent = new Subject();
    constructor(private carService: CarService) { }

    ngOnInit() {
    }

    deletePost(post) {
        let output = {
            type: "delete",
            target: post
        };
        this.outputEvent.next(output);
    }


}
