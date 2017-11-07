System.register(["@angular/core", "@angular/http", "rxjs/add/operator/toPromise", "rxjs/add/operator/map"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, DataService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (_2) {
            }
        ],
        execute: function () {
            DataService = (function () {
                function DataService(_http) {
                    this._http = _http;
                    this.commentsUrl = 'http://frontend-test.pingbull.com/pages/denis.nigegorodcev@gmail.com/comments';
                    this.newCommentUrl = 'http://frontend-test.pingbull.com/pages/denis.nigegorodcev@gmail.com/comments';
                }
                DataService.prototype.getCommentsList = function () {
                    var params = new http_1.URLSearchParams();
                    params.set('count', '5');
                    params.set('offset', '0');
                    console.log('params', params);
                    return this._http.get(this.commentsUrl, {
                        search: params
                    })
                        .map(function (res) { return res.json(); });
                };
                DataService.prototype.sendNewComment = function (content, parent) {
                    var params = new http_1.URLSearchParams();
                    params.set('content', 'check here');
                    params.set('parent', null);
                    console.log('params', params);
                    return this._http.post(this.newCommentUrl, {
                        search: params
                    })
                        .map(function (res) { return res.json(); });
                };
                DataService.prototype.sendNewComment1 = function (content, parent) {
                    var body = JSON.stringify({ "content": content, "parent": parent });
                    // var headers = new Headers();
                    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post(this.newCommentUrl, body, {})
                        .map(function (res) { return res.json(); });
                };
                DataService.prototype.sendNewComment2 = function (content, parent) {
                    var params = new http_1.URLSearchParams();
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
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    console.log('content', content);
                    var body = { "content": content, "parent": parent };
                    return this._http.post(this.newCommentUrl, body, headers)
                        .map(function (res) { return res.json(); });
                };
                DataService.prototype.handleError = function (error) {
                    console.error('Произошла ошибка', error);
                    return Promise.reject(error.message || error);
                };
                return DataService;
            }());
            DataService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], DataService);
            exports_1("DataService", DataService);
        }
    };
});

//# sourceMappingURL=data.service.js.map
