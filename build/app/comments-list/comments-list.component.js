System.register(["@angular/core", "../data.service"], function (exports_1, context_1) {
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
    var core_1, data_service_1, CommentsList;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }
        ],
        execute: function () {
            CommentsList = (function () {
                function CommentsList(_dataService) {
                    this._dataService = _dataService;
                }
                CommentsList.prototype.ngAfterViewInit = function () {
                    this._dataService.getCommentsList();
                    this.replyOpen = false;
                };
                /**
                 *
                 * Toggle reply/edit form
                 * @param event
                 * @param isReply
                 */
                CommentsList.prototype.replyToggle = function ($event, isReply) {
                    var formBlock = document.getElementsByName($event.target.id);
                    if (formBlock[0].hidden || (!formBlock[0].hidden && this.isReplyForm === isReply)) {
                        formBlock[0].hidden = !formBlock[0].hidden;
                    }
                    this.isReplyForm = isReply;
                    if (!this.isReplyForm) {
                        document.querySelector('.reply-form')[0].focus();
                    }
                };
                /**
                 * remove Comment
                 * @param  event
                 */
                CommentsList.prototype.removeComment = function ($event) {
                    var _this = this;
                    this._dataService.removeComment($event.target.id)
                        .subscribe(function () {
                        _this._dataService.getCommentsList();
                    });
                };
                /**
                 * edit comment
                 * @param commentId
                 * @param formContent
                 * @param isReply
                 */
                CommentsList.prototype.editComment = function (commentId, formContent, isReply) {
                    var _this = this;
                    if (!isReply) {
                        this._dataService.onEditComment(commentId, formContent.editComment)
                            .subscribe(function () {
                            _this._dataService.getCommentsList();
                        }, function (err) { return console.error('err', err); });
                    }
                    else {
                        this._dataService.sendNewComment(commentId, formContent.editComment)
                            .subscribe(function () {
                            _this._dataService.getCommentsList();
                        }, function (err) { return console.error('err', err); });
                    }
                };
                return CommentsList;
            }());
            CommentsList = __decorate([
                core_1.Component({
                    // moduleId: module.id,
                    selector: "comments-list",
                    templateUrl: './app/comments-list/comments-list.component.html',
                    styleUrls: ['./app/comments-list/comments-list.component.css']
                }),
                __metadata("design:paramtypes", [data_service_1.DataService])
            ], CommentsList);
            exports_1("CommentsList", CommentsList);
        }
    };
});

//# sourceMappingURL=comments-list.component.js.map
