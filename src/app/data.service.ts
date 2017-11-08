import {Injectable}        from "@angular/core";
import {Http, Headers, Response, URLSearchParams, RequestOptions, Request, RequestMethod, ResponseContentType} from '@angular/http';
import {Observable}        from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    constructor (private _http: Http) {}

    comments;
    userId : string;
    userImg: string;

    private commentsUrl = 'http://frontend-test.pingbull.com/pages/denis.nigegorodcev@gmail.com/comments';

    /**
     * comments list
     */
    commentsList() {
        let params: URLSearchParams = new URLSearchParams();
        params.set('count', '5');
        params.set('offset', '0');

        return this._http.get(this.commentsUrl, {
            search: params
        })
            .map(res => res.json());
    }

    getCommentsList() {
        this.commentsList()
        .subscribe(
            (response: Response) => this.comments = response,
                error => alert(error),

                () => {
                    this.comments.forEach(element => {
                        if ( element.author.id === 1 ) {
                            this.userId  = element.author.id;
                            this.userImg = element.author.avatar;
                        }
                    });
            }
        );
    }



    /**
     * new comment
     * @param parentId 
     * @param content 
     */
    sendNewComment(parentId: any, content: string) {
        const params = new URLSearchParams();

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let body = {"content": content, "parent": parentId};

        return this._http.post(this.commentsUrl, body, options)
        .map(res => res.json());
    }



    /**
     * remove comment
     * @param commentId 
     */
    removeComment(commentId) {
        return this._http.delete(this.commentsUrl + '/' + commentId)
        .map(res => res.json());
    }


    /**
     * edit comment
     * @param commentId 
     * @param newText 
     */
    onEditComment(commentId: number, newText: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let body = {"content": newText};
        let options = new RequestOptions({ headers: headers });

        return this._http.put(this.commentsUrl + '/' + commentId, body, options)
        .map((data:Response) => data.json());
    }


    /**
     * handle error
     * @param error 
     */
    private handleError(error: any) {
        console.error('Произошла ошибка', error);
        return Promise.reject(error.message || error);
    }
}