import {Component, OnInit} from "@angular/core";
import {DataService} from './data.service';
import {Subscription} from 'rxjs';

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    styleUrls: ['./app/app.css']
})
export class AppComponent implements OnInit {
    constructor (private _dataService: DataService) {};
    comments: Response;

    newCommentRes: Response;

    ngOnInit() {
        console.log("Application component initialized ...");
    }

    newComment(commentForm) {
        console.log('form', commentForm.newComment);
        // this.onSendNewComment(form);
        this._dataService.sendNewComment2(commentForm.newComment, null)
        .subscribe(
            () => {
                console.log('yes!', Response);
                this._dataService.getCommentsList().subscribe(
                    (response: Response) => this.comments = response,
                    error => alert(error),
                        () => console.log("Finished", this.comments)
                );
            },
            err => console.error('err', err)
        );
    }


    // onSendNewComment(form) {
    //     // this._dataService.sendNewComment()
    //     .subscribe(
    //         (response: Response) => this.newCommentRes = response,
    //         error => alert(error),
    //             () => console.log("finished", this.newComment)
    //     );
    // }
}