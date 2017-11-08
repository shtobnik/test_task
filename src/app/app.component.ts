import { Component, AfterViewInit } from "@angular/core";
import { DataService } from './data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    styleUrls: ['./app/app.css']
})
export class AppComponent implements AfterViewInit {
    constructor (private _dataService: DataService) {};
    comments: Response;

    newCommentRes: Response;

    ngAfterViewInit() {
        console.log("Application component initialized ...");
    }


    
    /**
     * new comment
     * @param commentForm 
     */
    newComment(commentForm) {
        this._dataService.sendNewComment(null, commentForm.newComment)
        .subscribe(
            () => {
                this._dataService.getCommentsList();
            },
            err => console.error('err', err)
        );
    }

}