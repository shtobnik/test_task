import {Injectable}        from "@angular/core";
import {Http, Headers, Response, URLSearchParams, RequestOptions, Request, RequestMethod, ResponseContentType} from '@angular/http';
import {Observable}        from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    constructor (private _http: Http) {}

    private commentsUrl   = 'http://frontend-test.pingbull.com/pages/denis.nigegorodcev@gmail.com/comments';
    private newCommentUrl = 'http://frontend-test.pingbull.com/pages/denis.nigegorodcev@gmail.com/comments';

    getCommentsList() {
        let params: URLSearchParams = new URLSearchParams();
        params.set('count', '5');
        params.set('offset', '0');

        console.log('params', params);

        return this._http.get(this.commentsUrl, {
            search: params
        })
            .map(res => res.json());
    }

    sendNewComment(content: string, parent: any) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('content', 'check here');
        params.set('parent', null);

        console.log('params', params);

        return this._http.post(this.newCommentUrl, {
            search: params
        })
            .map(res => res.json());
    }


    sendNewComment1(content: string, parent: any): Observable<Comment> {
        let body = JSON.stringify({"content": content, "parent": parent});
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.newCommentUrl, body, {})
            .map(res => res.json());
    }



    sendNewComment2(content: string, parent: any) {

        const params = new URLSearchParams();


        // let setHeaders = new Headers();
        // setHeaders.append('Content-Type', 'application/json');

        // const options = new RequestOptions({
        //     responseType: ResponseContentType.Json,
        //     withCredentials: false
        // });

        // let body = JSON.stringify({"content": content, "parent": parent});
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');

        // return this._http.post(this.newCommentUrl, body, {})
        //     .map(res => res.json());


        const headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Content-Type', 'application/json; charset=utf-8');

        console.log('content', content);

        let body = {"content": content, "parent": parent};

        return this._http.post(this.newCommentUrl, body, headers)
        .map(res => res.json());
    }



    private handleError(error: any) {
        console.error('Произошла ошибка', error);
        return Promise.reject(error.message || error);
    }
}