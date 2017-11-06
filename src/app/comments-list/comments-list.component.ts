import {Component, OnInit} from "@angular/core";
import {DataService} from '../data.service';
import {Subscription} from 'rxjs';

@Component({
    // moduleId: module.id,
    selector: "comments-list",
    templateUrl: './app/comments-list/comments-list.component.html',
    styleUrls: ['./app/comments-list/comments-list.component.css']
})
export class CommentsList implements OnInit {
    constructor (private _dataService: DataService) {}
    comments: Response;

    replyOpen: boolean;

    ngOnInit() {
        this.onGetList();

        this.replyOpen = false;
    }


    onGetList() {
        this._dataService.getCommentsList()
            .subscribe(
                (response: Response) => this.comments = response,
                error => alert(error),
                    () => console.log("Finished", this.comments)
            );

    }

    replyToggle($event) {
        document.getElementsByName($event.target.id)[0].hidden = !document.getElementsByName($event.target.id)[0].hidden;
    }

}