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
                }
                /**
                 * comments list
                 */
                DataService.prototype.commentsList = function () {
                    var params = new http_1.URLSearchParams();
                    params.set('count', '5');
                    params.set('offset', '0');
                    return this._http.get(this.commentsUrl, {
                        search: params
                    })
                        .map(function (res) { return res.json(); });
                };
                DataService.prototype.getCommentsList = function () {
                    var _this = this;
                    this.commentsList()
                        .subscribe(function (response) { return _this.comments = response; }, function (error) { return alert(error); }, function () {
                        _this.comments.forEach(function (element) {
                            if (element.author.id === 1) {
                                _this.userId = element.author.id;
                                _this.userImg = element.author.avatar;
                            }
                        });
                    });
                };
                /**
                 * new comment
                 * @param parentId
                 * @param content
                 */
                DataService.prototype.sendNewComment = function (parentId, content) {
                    var params = new http_1.URLSearchParams();
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    var body = { "content": content, "parent": parentId };
                    return this._http.post(this.commentsUrl, body, options)
                        .map(function (res) { return res.json(); });
                };
                /**
                 * remove comment
                 * @param commentId
                 */
                DataService.prototype.removeComment = function (commentId) {
                    return this._http.delete(this.commentsUrl + '/' + commentId)
                        .map(function (res) { return res.json(); });
                };
                /**
                 * edit comment
                 * @param commentId
                 * @param newText
                 */
                DataService.prototype.onEditComment = function (commentId, newText) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var body = { "content": newText };
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.put(this.commentsUrl + '/' + commentId, body, options)
                        .map(function (data) { return data.json(); });
                };
                /**
                 * handle error
                 * @param error
                 */
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
