import {Component, OnInit} from "@angular/core";
import {DataService} from './data.service';
import {Subscription} from 'rxjs';

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    styleUrls: ['./app/app.css']
})
export class AppComponent implements OnInit {
    constructor (private _dataService: DataService) {}

    newCommentRes: Response;

    ngOnInit() {
        console.log("Application component initialized ...");
    }

    newComment(form) {
        console.log('form', form);
        this.onSendNewComment(form);
    }


    onSendNewComment(form) {
        this._dataService.sendNewComment()
        .subscribe(
            (response: Response) => this.newCommentRes = response,
            error => alert(error),
                () => console.log("finished", this.newComment)
        );
    }
}