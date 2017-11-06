import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    constructor (private _http: Http) {}

    getCommentsList() {
        let params: URLSearchParams = new URLSearchParams();
        params.set('count', '5');
        params.set('offset', '0');

        console.log('params', params);

        return this._http.get('http://frontend-test.pingbull.com/pages/denis.nigegorodcev@gmail.com/comments', {
            search: params
        })
            .map(res => res.json());
    }

    sendNewComment() {
        let params: URLSearchParams = new URLSearchParams();
        params.set('content', 'check here');
        params.set('parent', null);

        console.log('params', params);

        return this._http.post('http://frontend-test.pingbull.com/pages/denis.nigegorodcev@gmail.com/comments', {
            search: params
        })
            .map(res => res.json());
    }

    private handleError(error: any) {
        console.error('Произошла ошибка', error);
        return Promise.reject(error.message || error);
    }
}