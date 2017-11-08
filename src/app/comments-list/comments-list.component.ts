import { Component, AfterViewInit, Input } from "@angular/core";
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
    // moduleId: module.id,
    selector: "comments-list",
    templateUrl: './app/comments-list/comments-list.component.html',
    styleUrls: ['./app/comments-list/comments-list.component.css']
})
export class CommentsList implements AfterViewInit {
    constructor (private _dataService: DataService) {}

    replyOpen:   boolean;
    isReplyForm: boolean;
    response;

    ngAfterViewInit() {
        this._dataService.getCommentsList();

        this.replyOpen = false;
    }


    /**
     * 
     * Toggle reply/edit form
     * @param event
     * @param isReply 
     */
    replyToggle($event, isReply) {

        let formBlock = document.getElementsByName($event.target.id);

        if ( formBlock[0].hidden || (!formBlock[0].hidden && this.isReplyForm === isReply) ) {
            formBlock[0].hidden = !formBlock[0].hidden;
        }

        this.isReplyForm = isReply;

        if ( !this.isReplyForm ) {
            document.querySelector('.reply-form')[0].focus();
        }

    }


    /**
     * remove Comment
     * @param  event
     */
    removeComment($event) {
        this._dataService.removeComment($event.target.id)
            .subscribe(
                () => {
                    this._dataService.getCommentsList();
                }
            );
    }


    /**
     * edit comment
     * @param commentId 
     * @param formContent 
     * @param isReply 
     */
    editComment(commentId, formContent, isReply) {
        if ( !isReply ) {
            this._dataService.onEditComment(commentId, formContent.editComment)
            .subscribe(
                () => {
                    this._dataService.getCommentsList();
                },
                err => console.error('err', err)
            );
        } else {
            this._dataService.sendNewComment(commentId, formContent.editComment)
            .subscribe(
                () => {
                    this._dataService.getCommentsList();
                },
                err => console.error('err', err)
            );
        }
    }

}