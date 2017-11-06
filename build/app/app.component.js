System.register(["@angular/core", "./data.service"], function (exports_1, context_1) {
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
    var core_1, data_service_1, AppComponent;
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
            AppComponent = (function () {
                function AppComponent(_dataService) {
                    this._dataService = _dataService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    console.log("Application component initialized ...");
                };
                AppComponent.prototype.newComment = function (form) {
                    console.log('form', form);
                    this.onSendNewComment(form);
                };
                AppComponent.prototype.onSendNewComment = function (form) {
                    var _this = this;
                    this._dataService.sendNewComment()
                        .subscribe(function (response) { return _this.newCommentRes = response; }, function (error) { return alert(error); }, function () { return console.log("finished", _this.newComment); });
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: "app",
                    templateUrl: "./app/app.html",
                    styleUrls: ['./app/app.css']
                }),
                __metadata("design:paramtypes", [data_service_1.DataService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});

//# sourceMappingURL=app.component.js.map
