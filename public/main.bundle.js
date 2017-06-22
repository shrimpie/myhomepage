webpackJsonp([1,5],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Broadcaster; });



var Broadcaster = (function () {
    function Broadcaster() {
        this._eventBus = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    Broadcaster.prototype.broadcast = function (key, data) {
        this._eventBus.next({ key: key, data: data });
    };
    Broadcaster.prototype.on = function (key) {
        return this._eventBus.asObservable()
            .filter(function (event) { return event.key === key; })
            .map(function (event) { return event.data; });
    };
    return Broadcaster;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/broadcast.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogService = (function () {
    function BlogService(_http) {
        this._http = _http;
        this._getUrl = "blogs";
        this._postUrl = "blog";
        this._putUrl = "blog/";
        this._deleteUrl = "blog/";
    }
    BlogService.prototype.getBlogs = function (author) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set('author', author);
        return this._http.get(this._getUrl, {
            search: params
        }).map(function (res) { return res.json(); });
    };
    BlogService.prototype.addBlog = function (blog) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(blog), options)
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.updateBlog = function (blog) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this._http.put(this._putUrl + blog._id, JSON.stringify(blog), options)
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.deleteBlog = function (blog) {
        return this._http.delete(this._deleteUrl + blog._id)
            .map(function (res) { return res.json(); });
    };
    BlogService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], BlogService);
    return BlogService;
    var _a;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/blog.service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageService = (function () {
    function MessageService(_http) {
        this._http = _http;
        this._getUrl = "messages";
    }
    MessageService.prototype.getMessages = function (condition) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set('authorId', condition.authorId);
        params.set('toAuthorId', condition.toAuthorId);
        return this._http.get(this._getUrl, {
            search: params
        }).map(function (res) { return res.json(); });
    };
    MessageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], MessageService);
    return MessageService;
    var _a;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/message.service.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined ||
            user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateBlog = function (blog) {
        return !(blog.user == undefined || blog.title == undefined ||
            blog.content == undefined);
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/validate.service.js.map

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 416;


/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(536);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/main.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(750),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/app.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_socket_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_message_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_blog_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_broadcast_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_blogs_blog_center_blog_center_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_blogs_blog_list_blog_list_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_blogs_blog_detail_blog_detail_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_chat_chat_chat_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_chat_chat_input_chat_input_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_chat_chat_list_chat_list_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_chat_online_users_online_users_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_chat_video_chat_video_chat_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_chat_video_container_video_container_component__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_draggable__ = __webpack_require__(556);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'blogs', component: __WEBPACK_IMPORTED_MODULE_20__components_blogs_blog_center_blog_center_component__["a" /* BlogCenterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'textChat', component: __WEBPACK_IMPORTED_MODULE_24__components_chat_chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'videoChat', component: __WEBPACK_IMPORTED_MODULE_28__components_chat_video_chat_video_chat_component__["a" /* VideoChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_blogs_blog_center_blog_center_component__["a" /* BlogCenterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_blogs_blog_list_blog_list_component__["a" /* BlogListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_blogs_blog_detail_blog_detail_component__["a" /* BlogDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_chat_chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_chat_chat_input_chat_input_component__["a" /* ChatInputComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_chat_chat_list_chat_list_component__["a" /* ChatListComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_chat_online_users_online_users_component__["a" /* OnlineUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_chat_video_chat_video_chat_component__["a" /* VideoChatComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_chat_video_container_video_container_component__["a" /* VideoContainerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_30_angular2_draggable__["a" /* AngularDraggableModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__services_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_16__services_blog_service__["a" /* BlogService */],
                __WEBPACK_IMPORTED_MODULE_17__services_broadcast_service__["a" /* Broadcaster */], __WEBPACK_IMPORTED_MODULE_15__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/app.module.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__(346);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogCenterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogCenterComponent = (function () {
    function BlogCenterComponent(_blogService) {
        this._blogService = _blogService;
        this.hideNewBlog = true;
    }
    BlogCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = JSON.parse(localStorage.getItem('user'))['username'];
        // console.log('1. username: ', this.username);
        this._blogService
            .getBlogs(this.username)
            .subscribe(function (resBlogData) {
            console.log('resBlogData: ', resBlogData);
            _this.blogs = resBlogData;
            if (_this.blogs.length > 0) {
                _this.selectedBlog = _this.blogs[0];
            }
        });
    };
    BlogCenterComponent.prototype.onSelectBlog = function (blog) {
        this.selectedBlog = blog;
        this.hideNewBlog = true;
        // console.log(this.selectedBlog);
    };
    BlogCenterComponent.prototype.onSubmitAddBlog = function (blog) {
        var _this = this;
        blog['author'] = this.username;
        // console.log('new blog: ', blog);
        this._blogService
            .addBlog(blog)
            .subscribe(function (resNewBlog) {
            console.log(resNewBlog);
            _this.blogs.push(resNewBlog);
            _this.hideNewBlog = true;
            _this.selectedBlog = resNewBlog;
        });
    };
    BlogCenterComponent.prototype.onUpdateBlogEvent = function (blog) {
        var _this = this;
        // console.log('update blog: ', blog);
        this._blogService
            .updateBlog(blog)
            .subscribe(function (resUpdatedBlog) {
            blog = resUpdatedBlog;
            _this.selectedBlog = resUpdatedBlog;
        });
    };
    BlogCenterComponent.prototype.onDeleteBlogEvent = function (blog) {
        var blogArray = this.blogs;
        this._blogService
            .deleteBlog(blog)
            .subscribe(function (resDeletedBlog) {
            for (var i = 0; i < blogArray.length; ++i) {
                if (blogArray[i]._id === blog._id) {
                    blogArray.splice(i, 1);
                }
            }
        });
        this.selectedBlog = this.blogs.length ? this.blogs[0] : null;
    };
    BlogCenterComponent.prototype.newBlog = function () {
        this.hideNewBlog = false;
    };
    BlogCenterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog-center',
            template: __webpack_require__(751),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === 'function' && _a) || Object])
    ], BlogCenterComponent);
    return BlogCenterComponent;
    var _a;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/blog-center.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogDetailComponent = (function () {
    function BlogDetailComponent() {
        this.editTitle = false;
        this.editFeaturedImgUrl = false;
        this.editContent = false;
        this.updateBlogEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleteBlogEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BlogDetailComponent.prototype.ngOnInit = function () {
    };
    BlogDetailComponent.prototype.ngOnChanges = function () {
        this.editTitle = false;
    };
    BlogDetailComponent.prototype.onTitleClick = function () {
        this.editTitle = true;
    };
    BlogDetailComponent.prototype.onContentClick = function () {
        this.editContent = true;
    };
    BlogDetailComponent.prototype.onEditUrlClick = function () {
        this.editFeaturedImgUrl = true;
    };
    BlogDetailComponent.prototype.onCancelEditUrlClick = function () {
        this.editFeaturedImgUrl = false;
    };
    BlogDetailComponent.prototype.onCancelEditTitleClick = function () {
        this.editTitle = false;
    };
    BlogDetailComponent.prototype.onCancelContentClick = function () {
        this.editContent = false;
    };
    BlogDetailComponent.prototype.updateBlog = function () {
        this.updateBlogEvent.emit(this.blog);
        this.editFeaturedImgUrl = false;
        this.editTitle = false;
        this.editContent = false;
    };
    BlogDetailComponent.prototype.deleteBlog = function () {
        if (confirm("Are you sure to delete this blog?")) {
            // console.log("This blog is about to be deleted");
            this.deleteBlogEvent.emit(this.blog);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BlogDetailComponent.prototype, "blog", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], BlogDetailComponent.prototype, "updateBlogEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], BlogDetailComponent.prototype, "deleteBlogEvent", void 0);
    BlogDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog-detail',
            template: __webpack_require__(752),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [])
    ], BlogDetailComponent);
    return BlogDetailComponent;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/blog-detail.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogListComponent = (function () {
    function BlogListComponent() {
        this.SelectBlog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BlogListComponent.prototype.ngOnInit = function () {
    };
    BlogListComponent.prototype.onSelect = function (blog) {
        console.log(blog.title);
        this.SelectBlog.emit(blog);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BlogListComponent.prototype, "blogs", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], BlogListComponent.prototype, "SelectBlog", void 0);
    BlogListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog-list',
            template: __webpack_require__(753),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [])
    ], BlogListComponent);
    return BlogListComponent;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/blog-list.component.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatInputComponent = (function () {
    function ChatInputComponent(_socketService, _flashMessage) {
        this._socketService = _socketService;
        this._flashMessage = _flashMessage;
        this.NewMessage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ChatInputComponent.prototype.ngOnInit = function () {
    };
    ChatInputComponent.prototype.sendMessage = function () {
        if (!this.toAuthorId) {
            this.messageContent = '';
            this._flashMessage.show('Select a user to chat with', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return;
        }
        this.message = {
            authorId: this.authorId,
            toAuthorId: this.toAuthorId,
            content: this.messageContent,
            toSocketId: this.toSocketId
        };
        this.NewMessage.emit(this.message);
        this._socketService.sendMessage(this.message);
        this.messageContent = '';
    };
    ChatInputComponent.prototype.checkKey = function (event) {
        if (event.keyCode == 13) {
            this.sendMessage();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ChatInputComponent.prototype, "author", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ChatInputComponent.prototype, "authorId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ChatInputComponent.prototype, "toAuthorId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ChatInputComponent.prototype, "toSocketId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ChatInputComponent.prototype, "NewMessage", void 0);
    ChatInputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat-input',
            template: __webpack_require__(754),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object])
    ], ChatInputComponent);
    return ChatInputComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/chat-input.component.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatListComponent = (function () {
    function ChatListComponent() {
    }
    ChatListComponent.prototype.ngOnInit = function () {
    };
    ChatListComponent.prototype.isSelfMessage = function (msg) {
        return this.userId === msg.authorId ? true : false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ChatListComponent.prototype, "messages", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ChatListComponent.prototype, "author", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ChatListComponent.prototype, "userId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ChatListComponent.prototype, "selectedUser", void 0);
    ChatListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat-list',
            template: __webpack_require__(755),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [])
    ], ChatListComponent);
    return ChatListComponent;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/chat-list.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_broadcast_service__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatComponent = (function () {
    function ChatComponent(_socketService, _messageService, _broadcaster) {
        var _this = this;
        this._socketService = _socketService;
        this._messageService = _messageService;
        this._broadcaster = _broadcaster;
        this.selectedUserId = null;
        this.selectedSocketId = null;
        this.selectedUserName = null;
        this.username = 'Default user name';
        this.messages = [];
        this.onlineUsers = [];
        this.socketCon = null;
        this._broadcaster.on('testclickevent')
            .subscribe(function (message) {
            _this._socketService.logout(_this.userId).subscribe(function (res) {
            });
        });
    }
    ChatComponent.prototype.ngOnDestroy = function () {
        this.socketCon.unsubscribe();
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = JSON.parse(localStorage.getItem('user'))['username'];
        this.userId = JSON.parse(localStorage.getItem('user'))['id'];
        this._socketService.connectSocket(this.userId);
        this._socketService.getChatList(this.userId).subscribe(function (res) {
            _this.showChatListFromResponse(res);
        });
        this.subscribeForMessages();
    };
    //
    ChatComponent.prototype.showChatListFromResponse = function (response) {
        if (!response.error) {
            // add newly connected user to chat list
            if (response.singleUser) {
                // remove same user if exists in the chat lists of other users.
                if (this.onlineUsers.length > 0) {
                    this.onlineUsers = this.onlineUsers.filter(function (obj) {
                        return obj._id !== response.chatList._id;
                    });
                }
                // then add it to chat list
                this.onlineUsers.push(response.chatList);
            }
            else if (response.userDisconnected) {
                // when user logs out, (a userDisconnected attribute will be set),
                // remove the user from others' chat lists.
                this.onlineUsers = this.onlineUsers.filter(function (obj) {
                    return obj.socketId !== response.socketId;
                });
            }
            else {
                this.onlineUsers = response.chatList;
            }
        }
        else {
            alert("Chat list failure.");
        }
    };
    ChatComponent.prototype.subscribeForMessages = function () {
        var _this = this;
        this.socketCon = this._socketService.receiveMessages().subscribe(function (response) {
            if (_this.selectedUserId &&
                _this.selectedUserId == response.authorId) {
                console.log('received a message: ', response);
                _this.messages.push(response);
                _this.scrollToBottom();
            }
        });
    };
    ChatComponent.prototype.onSelectUser = function (user) {
        var _this = this;
        this.selectedUserId = user._id;
        this.selectedSocketId = user.socketId;
        this.selectedUserName = user.username;
        // get the messages for selected user.
        this._messageService.getMessages({
            authorId: this.userId,
            toAuthorId: this.selectedUserId
        }).subscribe(function (res) {
            _this.messages = res;
            _this.scrollToBottom();
        });
    };
    ChatComponent.prototype.onNewMessage = function (message) {
        console.log('send a new message: ', message);
        this.messages.push(message);
        this.scrollToBottom();
    };
    ChatComponent.prototype.scrollToBottom = function () {
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#message-container').animate({
                scrollTop: __WEBPACK_IMPORTED_MODULE_3_jquery__('#message-container')[0].scrollHeight
            }, 1000, function () {
                console.log('Animation complete');
            });
        }, 100);
    };
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(756),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_broadcast_service__["a" /* Broadcaster */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_broadcast_service__["a" /* Broadcaster */]) === 'function' && _c) || Object])
    ], ChatComponent);
    return ChatComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/chat.component.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnlineUsersComponent = (function () {
    function OnlineUsersComponent() {
        this.SelectUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    OnlineUsersComponent.prototype.ngOnInit = function () {
    };
    OnlineUsersComponent.prototype.onSelectUser = function (user) {
        this.SelectUser.emit(user);
    };
    OnlineUsersComponent.prototype.isUserSelected = function (userId) {
        if (!this.selectedUserId) {
            return false;
        }
        return this.selectedUserId === userId ? true : false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], OnlineUsersComponent.prototype, "onlineUsers", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], OnlineUsersComponent.prototype, "selectedUserId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], OnlineUsersComponent.prototype, "SelectUser", void 0);
    OnlineUsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-online-users',
            template: __webpack_require__(757),
            styles: [__webpack_require__(740)]
        }), 
        __metadata('design:paramtypes', [])
    ], OnlineUsersComponent);
    return OnlineUsersComponent;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/online-users.component.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_broadcast_service__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoChatComponent = (function () {
    function VideoChatComponent(_socketService, _broadcaster) {
        var _this = this;
        this._socketService = _socketService;
        this._broadcaster = _broadcaster;
        this.selectedUserId = null;
        this.selectedSocketId = null;
        this.selectedUserName = null;
        this.username = 'Default user name';
        this.onlineUsers = [];
        this._broadcaster.on('testclickevent')
            .subscribe(function (message) {
            _this._socketService.logout(_this.userId).subscribe(function (res) {
            });
        });
    }
    VideoChatComponent.prototype.ngOnDestroy = function () {
    };
    VideoChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = JSON.parse(localStorage.getItem('user'))['username'];
        this.userId = JSON.parse(localStorage.getItem('user'))['id'];
        this._socketService.connectSocket(this.userId);
        this._socketService.getChatList(this.userId).subscribe(function (res) {
            _this.showChatListFromResponse(res);
        });
    };
    VideoChatComponent.prototype.showChatListFromResponse = function (response) {
        if (!response.error) {
            if (response.singleUser) {
                if (this.onlineUsers.length > 0) {
                    this.onlineUsers = this.onlineUsers.filter(function (obj) {
                        return obj._id !== response.chatList._id;
                    });
                }
                this.onlineUsers.push(response.chatList);
            }
            else if (response.userDisconnected) {
                this.onlineUsers = this.onlineUsers.filter(function (obj) {
                    return obj.socketId !== response.socketId;
                });
            }
            else {
                this.onlineUsers = response.chatList;
            }
        }
        else {
            alert("Chat list failure.");
        }
    };
    VideoChatComponent.prototype.onSelectUser = function (user) {
        this.selectedUserId = user._id;
        this.selectedSocketId = user.socketId;
        this.selectedUserName = user.username;
    };
    VideoChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-video-chat',
            template: __webpack_require__(758),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_broadcast_service__["a" /* Broadcaster */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_broadcast_service__["a" /* Broadcaster */]) === 'function' && _b) || Object])
    ], VideoChatComponent);
    return VideoChatComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/video-chat.component.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoContainerComponent = (function () {
    function VideoContainerComponent(_socketService) {
        this._socketService = _socketService;
        this.connectStatus = 'not connected';
        this.confirmStatus = "Confirm connection";
        this.gotAConnectionRequest = false;
        this.fromSocketId = null;
        this.toSocketId = null;
        this.audioStatus = 'Turn on Audio';
        this.gotLocalStream = false;
        this.isInitiator = false;
        this.isChannelReady = false;
        this.isStarted = false;
        this.selfVideoConstraints = {
            video: { width: { exact: 640 },
                height: { exact: 480 }
            },
            audio: true
        };
        this.remoteVideoConstraints = {
            audio: true,
            video: true
        };
    }
    VideoContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._socketService.onSocketConnectionRequest().subscribe(function (req) {
            console.log('got a socket connection request: ', req);
            _this.gotAConnectionRequest = true;
            _this.requestGot = req;
            _this.fromSocketId = _this.requestGot.fromSocketId;
            _this.toSocketId = _this.requestGot.fromSocketId;
        });
        this._socketService.onMessage().subscribe(function (data) {
            _this.msgData = data;
            if (_this.msgData.msg === 'got user media') {
                _this.maybeStart();
            }
            else if (_this.msgData.msg.type === 'offer') {
                if (!_this.isInitiator && !_this.isStarted) {
                    _this.maybeStart();
                }
                _this.pc.setRemoteDescription(new RTCSessionDescription(_this.msgData.msg));
                _this.doAnswer();
            }
            else if (_this.msgData.msg.type === 'answer' && _this.isStarted) {
                _this.pc.setRemoteDescription(new RTCSessionDescription(_this.msgData.msg));
            }
            else if (_this.msgData.msg.type === 'candidate' && _this.isStarted) {
                var candidate = new RTCIceCandidate({
                    sdpMLineIndex: _this.msgData.msg.label,
                    candidate: _this.msgData.msg.candidate
                });
                _this.pc.addIceCandidate(candidate);
            }
            else if (_this.msgData.msg === 'bye') {
                _this.stop();
            }
        });
    };
    VideoContainerComponent.prototype.sendMessage = function (data) {
        this._socketService.sendMessageForVideoConnection(data);
    };
    VideoContainerComponent.prototype.stop = function () {
        this.isStarted = false;
        this.isInitiator = false;
        if (this.pc) {
            this.pc.close();
            this.pc = null;
        }
    };
    VideoContainerComponent.prototype.onHandleAudio = function () {
        if (this.audioStatus === 'Turn on Audio') {
            this.localStream.getAudioTracks()[0].enabled = true;
            this.audioStatus = 'Turn off Audio';
        }
        else {
            this.localStream.getAudioTracks()[0].enabled = false;
            this.audioStatus = 'Turn on Audio';
        }
    };
    VideoContainerComponent.prototype.maybeStart = function () {
        console.log('maybeStart():', this.isStarted, this.localStream, this.isChannelReady);
        if (!this.isStarted && typeof this.localStream !== 'undefined' &&
            this.isChannelReady) {
            console.log('>>>>>> creating peer connection');
            if (!this.pc) {
                this.createPeerConnection();
            }
            this.pc.addStream(this.localStream);
            this.isStarted = true;
            console.log('isInitiator', this.isInitiator);
            if (this.isInitiator) {
                this.doCall();
            }
            if (!this.remoteStream) {
                console.log('Have no remote stream yet');
            }
        }
    };
    VideoContainerComponent.prototype.createPeerConnection = function () {
        var _this = this;
        try {
            this.pc = new RTCPeerConnection(null);
            this.pc.onicecandidate = function (event) {
                if (event.candidate) {
                    _this.sendMessage({
                        toSocketId: _this.toSocketId,
                        msg: {
                            type: 'candidate',
                            label: event.candidate.sdpMLineIndex,
                            id: event.candidate.sdpMid,
                            candidate: event.candidate.candidate
                        }
                    });
                }
                else {
                    console.log('End of candidates.');
                }
            };
            this.pc.onaddstream = function (event) {
                var remoteVideo = _this.remotevideo.nativeElement;
                remoteVideo.src = window.URL.createObjectURL(event.stream);
                remoteVideo.play();
                _this.remoteStream = event.stream;
            };
            this.pc.onremovestream = function (event) {
                console.log('Remote stream removed. Event: ', event);
            };
        }
        catch (e) {
            console.log('Failed to create PeerConnection, exception: ' + e.message);
            alert('Cannot create RTCPeerConnection object.');
            return;
        }
    };
    VideoContainerComponent.prototype.doCall = function () {
        var _this = this;
        console.log('Sending offer to peer');
        this.pc.createOffer().then(function (sessionDescription) {
            _this.pc.setLocalDescription(sessionDescription);
            _this.sendMessage({
                toSocketId: _this.toSocketId,
                msg: sessionDescription
            });
        }, function (event) {
            console.log('createOffer() error: ', event);
        });
    };
    VideoContainerComponent.prototype.doAnswer = function () {
        var _this = this;
        console.log('Sending answer to peer.');
        this.pc.createAnswer().then(function (sessionDescription) {
            _this.pc.setLocalDescription(sessionDescription);
            _this.sendMessage({
                toSocketId: _this.toSocketId,
                msg: sessionDescription
            });
        }, function (error) {
            console.log('create session description error: ' + error.toString());
        });
    };
    VideoContainerComponent.prototype.controlConnect = function () {
        var _this = this;
        if (!this.selectedSocketId) {
            alert('select a user first');
        }
        else if (this.connectStatus === 'not connected') {
            // If you try to connect to others, open your own video first.
            this.openVideo(function () {
                console.log('open video for video connection');
                _this.connectStatus = 'connecting';
                // prepare the connect information
                _this.toSocketId = _this.selectedSocketId;
                _this.isInitiator = true;
                _this._socketService.connectToSocketId(_this.selectedSocketId).subscribe(function (reply) {
                    console.log('connect socket reply:', reply);
                    _this.replyGot = reply;
                    if (_this.replyGot.ready === 'Y') {
                        console.log('She said ready');
                        _this.connectStatus = 'connected';
                        _this.isChannelReady = true;
                        _this.maybeStart();
                    }
                });
            });
        }
        else if (this.connectStatus === 'connecting') {
            this.connectStatus = 'not connected';
            this.closeStream();
        }
    };
    VideoContainerComponent.prototype.confirmConnection = function () {
        var _this = this;
        this.openVideo(function () {
            _this._socketService.confirmConnectionToSocketId(_this.fromSocketId);
            _this.isChannelReady = true;
            if (!_this.pc) {
                _this.createPeerConnection();
            }
            _this.connectStatus = 'connected';
            _this.gotAConnectionRequest = false;
        });
    };
    VideoContainerComponent.prototype.getConnectBtnText = function () {
        // console.log('this.connectStatus: ', this.connectStatus);
        if (this.connectStatus === 'connected') {
            return 'Connected!';
        }
        else if (this.connectStatus === 'connecting') {
            return 'connecting... cancel?';
        }
        else if (this.connectStatus === 'not connected') {
            return 'connect';
        }
    };
    VideoContainerComponent.prototype.openVideo = function (onLocalMediaReady) {
        var _this = this;
        if (!this.localStream) {
            navigator.mediaDevices.getUserMedia(this.selfVideoConstraints)
                .then(function (stream) {
                stream.getAudioTracks()[0].enabled = false;
                var video = _this.myvideo.nativeElement;
                video.src = window.URL.createObjectURL(stream);
                console.log('new localStream: ', stream);
                _this.localStream = stream;
                _this.gotLocalStream = true;
                onLocalMediaReady();
            });
        }
        else {
            onLocalMediaReady();
            console.log('Got this.localStream already');
        }
    };
    VideoContainerComponent.prototype.closeStream = function () {
        if (this.localStream) {
            this.localStream.getTracks().forEach(function (track) { return track.stop(); });
            this.localStream = null;
            this.gotLocalStream = false;
        }
        if (this.remoteStream) {
            this.remoteStream.getTracks().forEach(function (track) { return track.stop(); });
            this.remoteStream = null;
        }
        this.toSocketId = '';
        this.fromSocketId = '';
        this.connectStatus = 'not connected';
        this.confirmStatus = 'Confirm connection';
        this.isChannelReady = false;
        this.isStarted = false;
        console.log('video closed');
    };
    VideoContainerComponent.prototype.onHangup = function () {
        console.log('trying to hangup here');
        this.closeVideo();
    };
    VideoContainerComponent.prototype.closeVideo = function () {
        if (this.connectStatus === 'connected') {
            if (confirm("Are you sure to hang up?") == true) {
                this.closeStream();
            }
            else {
                console.log('You cancelled, stay connected');
            }
        }
        else {
            this.closeStream();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], VideoContainerComponent.prototype, "selectedUser", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], VideoContainerComponent.prototype, "selectedSocketId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('localVideo'), 
        __metadata('design:type', Object)
    ], VideoContainerComponent.prototype, "myvideo", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('remoteVideo'), 
        __metadata('design:type', Object)
    ], VideoContainerComponent.prototype, "remotevideo", void 0);
    VideoContainerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-video-container',
            template: __webpack_require__(759),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]) === 'function' && _a) || Object])
    ], VideoContainerComponent);
    return VideoContainerComponent;
    var _a;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/video-container.component.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(760),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.today = new Date();
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(761),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/footer.component.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(762),
            styles: [__webpack_require__(745)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/home.component.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage, socketService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.socketService = socketService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                // this.socketService.connectSocket(data.user.id);
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(763),
            styles: [__webpack_require__(746)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/login.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_broadcast_service__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage, _broadcaster) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this._broadcaster = _broadcaster;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this._broadcaster.broadcast('testclickevent', 'Counting on you!!');
        this.authService.logout();
        this.flashMessage.show('You are now logged out', {
            cssClass: 'alert-success',
            timeout: 2000
        });
        this.router.navigate(['/']);
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(764),
            styles: [__webpack_require__(747)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_broadcast_service__["a" /* Broadcaster */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_broadcast_service__["a" /* Broadcaster */]) === 'function' && _d) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(765),
            styles: [__webpack_require__(748)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/profile.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        // console.log(this.name);
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        }
        // validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        }
        // register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(766),
            styles: [__webpack_require__(749)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/register.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/environment.js.map

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-bottom: 70px;\n}\n"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = ".featuredImg {\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.btn {\n  margin-bottom: 10px;\n}\n\np.content {\n  padding-left: 2em;\n  white-space: pre;\n}\n"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "input {\n  border-right: none;\n}\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = ".message-header {\n  border: 1px solid #eee;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.message-header h4 {\n  margin-left: 20px;\n}\n\n.chat-reminder {\n  text-align: center;\n  opacity: .3;\n}\n\n#message-container {\n  padding-top: 10px;\n  background: #fefefe;\n  border: 1px solid #eee;\n  height: 70vh;\n  overflow: scroll;\n  border-top: none;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\nul, li {\n list-style: none;\n margin: 0;\n padding: 0;\n}\n\nli {\n  display: block;\n  padding: 3px;\n  margin-bottom: 5px;\n}\n\nli .message-item {\n  padding: 3px;\n  border-radius: 5px;\n}\n\n.other-message .message-item {\n  margin-left: 10px;\n  margin-right: 20%;\n  float: left;\n  border: none;\n  background: #eee;\n}\n\n.self-message .message-item {\n  margin-right: 10px;\n  margin-left: 20%;\n  float: right;\n  border: none;\n  background: #A9DFBF;\n}\n\n.self-message::after, .other-message::after {\n  content:\"\";\n  display:table;\n  clear:both;\n}\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = ".chat-container {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  padding-top: 10px;\n  margin-bottom: 70px;\n}\n\n.chat-messages {\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 10px;\n}\n\n.online-users {\n  padding-right: 0;\n  padding-bottom: 10px;\n}\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = ".onlineuser-header {\n  border: 1px solid #eee;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.onlineuser-header h4 {\n  margin-left: 20px;\n}\n\n#online-users {\n  padding-top: 5px;\n  background: #fefefe;\n  border: 1px solid #eee;\n  border-top: none;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  height: 70vh;\n  overflow: auto;\n}\n\nul, li {\n   list-style: none;\n   margin: 0;\n   padding: 0;\n}\n\nli {\n  padding-left: 20px;\n}\n\n.selected-user {\n  background: #eee;\n}\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "video {\n  display: block;\n  margin: 0;\n\tpadding: 0;\n\tborder: 0;\n}\n.video-header {\n  border: 1px solid #eee;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.video-header h4 {\n  margin-left: 20px;\n}\n\n#video-area {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  background: #fefefe;\n  border: 1px solid #eee;\n  height: 65vh;\n  border-top: none;\n}\n\n.video {\n  position: relative;\n  /*border: 3px solid green;*/\n  height: 100%;\n}\n\n#localVideo {\n  width: 160px;\n  height: 120px;\n  border: 1px solid #eee;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  border-radius: 3px;\n\n}\n\n#remoteVideo {\n  width: 100%;\n  max-height: 568px;\n  border: 1px solid #eee;\n  border-radius: 5px;\n\n  position: absolute;\n  top: 0;\n}\n\n\n.video-control {\n  height: 5vh;\n  margin: 0;\n  border: 1px solid #eee;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\nbutton {\n  margin-left: 5px;\n  background: #eee;\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "footer {\n  z-index: 10;\n  padding-top: 5px;\n  text-align: center;\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  background-color: black;\n}\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n<!-- <app-footer></app-footer> -->\n"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Blogs</h2>\n\n<div class=\"row\">\n  <div class=\"col-sm-9\">\n\n    <div *ngIf=\"!hideNewBlog\">\n      <h2>New Blog</h2>\n      <form #form=\"ngForm\" class=\"well\"\n            (ngSubmit)=\"onSubmitAddBlog(form.value)\">\n        <div class=\"form-group\">\n          <label>Title</label>\n          <input type=\"text\" name=\"title\" class=\"form-control\" required ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label>Featured Image URL</label>\n          <input type=\"text\" name=\"featuredImgUrl\" class=\"form-control\" required\n                 ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label>Content</label>\n          <textarea rows=\"5\" name=\"content\" class=\"form-control\" ngModel>\n          </textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\">Save</button>\n      </form>\n    </div>\n\n    <app-blog-detail (updateBlogEvent)=\"onUpdateBlogEvent($event)\"\n                     (deleteBlogEvent)=\"onDeleteBlogEvent($event)\"\n                     *ngIf=\"selectedBlog && hideNewBlog\"\n                     [blog]=\"selectedBlog\">\n    </app-blog-detail>\n  </div>\n  <div class=\"col-sm-3\">\n    <button (click)=\"newBlog()\" style=\"margin-bottom:2px;\" type=\"button\"\n            class=\"btn btn-success btn-block\">+ New Blog</button>\n\n    <app-blog-list (SelectBlog)=\"onSelectBlog($event)\"\n                [blogs]=\"blogs\">\n    </app-blog-list>\n  </div>\n</div>\n"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "<div>\n  <form>\n\n    <!-- Featured Image -->\n    <img class=\"featuredImg\" [src]=\"blog.featuredImgUrl\" alt=\"featured image\"\n         width=\"auto\" height=\"300px\" (click)=\"onEditUrlClick()\">\n    <div *ngIf=\"editFeaturedImgUrl\" class=\"form-group\">\n      <input type=\"input\" class=\"form-control\" name=\"featuredImgUrl\" required\n             placeholder=\"url\" [(ngModel)]=\"blog.featuredImgUrl\">\n    </div>\n    <button *ngIf=\"editFeaturedImgUrl\" class=\"btn btn-sm btn-warning\"\n            (click)=\"onCancelEditUrlClick()\">Cancel Update Image Url\n    </button>\n    <button *ngIf=\"editFeaturedImgUrl\" type=\"button\" (click)=\"updateBlog()\"\n            class=\"btn btn-sm btn-primary\" [disabled]=\"!editFeaturedImgUrl\">\n      Save\n    </button>\n    <hr />\n\n\n    <!-- Title -->\n    <h3 *ngIf=\"!editTitle\" (click)=\"onTitleClick()\">{{ blog.title }}</h3>\n    <div *ngIf=\"editTitle\" class=\"form-group\">\n      <input type=\"input\" class=\"form-control\" name=\"title\" required\n             placeholder=\"title\" [(ngModel)]=\"blog.title\">\n    </div>\n    <button *ngIf=\"editTitle\" class=\"btn btn-sm btn-warning\"\n            (click)=\"onCancelEditTitleClick()\">Cancel Edit Title\n    </button>\n    <button *ngIf=\"editTitle\" type=\"button\" (click)=\"updateBlog()\"\n            class=\"btn btn-sm btn-primary\" [disabled]=\"!editTitle\">\n      Save\n    </button>\n\n    <h4><small>at {{ blog.createdAt | date:'medium'}}</small></h4>\n    <hr />\n\n    <!-- Content -->\n    <div *ngIf=\"editContent\" class=\"form-group\">\n      <textarea class=\"form-control\" rows=\"5\" name=\"content\"\n                [(ngModel)]=\"blog.content\">\n      </textarea>\n    </div>\n    <button *ngIf=\"editContent\" class=\"btn btn-sm btn-warning\"\n            (click)=\"onCancelContentClick()\">Cancel Edit Content\n    </button>\n    <button *ngIf=\"editContent\" type=\"button\" (click)=\"updateBlog()\"\n            class=\"btn btn-sm btn-primary\" [disabled]=\"!editContent\">\n      Save\n    </button>\n    <p class=\"content\" *ngIf=\"!editContent\" (click)=\"onContentClick()\">\n      {{ blog.content }}\n    </p>\n    <hr />\n\n    <!-- Edit buttons -->\n    <button type=\"button\" (click)=\"updateBlog()\" class=\"btn btn-sm btn-primary\"\n            [disabled]=\"!editTitle && !editContent && !editFeaturedImgUrl\">\n      Save\n    </button>\n\n    <button type=\"button\" (click)=\"deleteBlog()\"\n            class=\"btn btn-sm btn-danger pull-right\">\n      Delete\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-stacked\">\n  <li (click)=\"onSelect(blog)\" *ngFor=\"let blog of blogs\">\n    <a>{{ blog.title }}</a>\n  </li>\n</ul>\n\n<!-- <p>Blog list works</p> -->\n"

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = "<form>\n\n  <div class=\"input-group\">\n\n    <span class=\"input-group-addon\" id=\"sizing-addon1\">{{ author }}</span>\n    <input [(ngModel)]=\"messageContent\" name=\"messageContent\"\n           class=\"form-control\" type=\"text\" (keypress)=\"checkKey($event)\"\n           placeholder=\"Type and hit enter…\"/>\n\n    <span class=\"input-group-btn\">\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"sendMessage()\">\n          Send\n        </button>\n    </span>\n\n  </div>\n\n</form>\n"

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = "<div class=\"message-header\">\n  <h4> Messages\n    <span *ngIf=\"selectedUser\">\n      <small>&nbsp;(chatting with {{selectedUser}})</small>\n    </span>\n  </h4>\n</div>\n\n<div id=\"message-container\">\n  <div class=\"chat-reminder\" *ngIf=\"!selectedUser\">\n    <h3>Select a user to chat with</h3>\n  </div>\n  <ul class=\"message-list\">\n    <li *ngFor=\"let message of messages\"\n        [class.self-message]=\"isSelfMessage(message)\"\n        [class.other-message]=\"!isSelfMessage(message)\">\n        <div class=\"message-item\">\n          <span>{{ message.content }}</span>\n        </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Chat</h2>\n\n<div class=\"chat-container\">\n\n  <div class=\"chat-messages col-sm-8\">\n    <app-chat-list [author]=\"username\" [messages]=\"messages\"\n                   [selectedUser]=\"selectedUserName\"\n                   [userId]=\"userId\">\n    </app-chat-list>\n  </div>\n  <div class=\"online-users col-sm-4\">\n    <app-online-users [onlineUsers]=\"onlineUsers\"\n                      [selectedUserId]=\"selectedUserId\"\n                      (SelectUser)=\"onSelectUser($event)\">\n    </app-online-users>\n  </div>\n\n  <div class=\"chat-input\">\n    <app-chat-input [author]=\"username\"\n                    [authorId]=\"userId\" [toAuthorId]=\"selectedUserId\"\n                    [toSocketId]=\"selectedSocketId\"\n                    (NewMessage)=\"onNewMessage($event)\">\n    </app-chat-input>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = "<div class=\"onlineuser-header\">\n  <h4>Online Users</h4>\n</div>\n<div id=\"online-users\">\n  <ul>\n    <li *ngFor=\"let user of onlineUsers\"\n        [class.selected-user]=\"isUserSelected(user._id)\"\n        (click)=\"onSelectUser(user)\">\n      {{user.username}}\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Chat</h2>\n\n<div class=\"video-container\">\n\n  <div class=\"chat-video col-sm-8\">\n    <app-video-container [selectedUser]=\"selectedUserName\"\n                         [selectedSocketId]=\"selectedSocketId\">\n    </app-video-container>\n  </div>\n\n  <div class=\"online-users col-sm-4\">\n    <app-online-users [onlineUsers]=\"onlineUsers\"\n                      [selectedUserId]=\"selectedUserId\"\n                      (SelectUser)=\"onSelectUser($event)\">\n    </app-online-users>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = "<div class=\"video-header\">\n  <h4> Video\n    <span *ngIf=\"selectedUser\">\n      <small>&nbsp;(chatting with {{selectedUser}})</small>\n    </span>\n  </h4>\n</div>\n\n<div id=\"video-area\">\n\n  <div class=\"video\">\n    <video #localVideo ngDraggable id=\"localVideo\" autoplay></video>\n    <video #remoteVideo id=\"remoteVideo\" autoplay></video>\n  </div>\n\n</div>\n\n<div class=\"video-control\">\n  <button type=\"button\" id=\"connectBtn\" class=\"btn btn-secondary btn-sm\"\n          (click)=\"controlConnect()\" [disabled]=\"connectStatus==='connected'\">\n    {{ getConnectBtnText() }}\n  </button>\n  <button *ngIf=\"gotAConnectionRequest && connectStatus!=='connected'\"\n          type=\"button\" id=\"confirmBtn\"\n          class=\"btn btn-secondary btn-sm\" (click)=\"confirmConnection()\">\n    {{ confirmStatus }}\n  </button>\n\n  <button *ngIf=\"connectStatus==='connected'\" type=\"button\"\n          class=\"btn btn-secondary btn-sm\" (click)=\"onHandleAudio()\">\n    {{ audioStatus }}\n  </button>\n\n  <button *ngIf=\"connectStatus==='connected'\" type=\"button\" id=\"hangupBtn\"\n          class=\"btn btn-secondary btn-sm\" (click)=\"onHangup()\">\n    Hang up\n  </button>\n</div>\n"

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your dashboard</p>\n"

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <span class=\"attribution\">\n      &copy; {{ today | date: 'yyyy' }}.\n      An example project of Zhenyu Yang. Code licensed under MIT.\n    </span>\n  </div>\n</footer>\n"

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>My Home Page</h1>\n  <p class=\"lead\">Welcome to my home page</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n    <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Blogs</h3>\n    <p>A blog tutorial to practice with Angular and MongoDB.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Small Apps</h3>\n    <p>This is to showcase some mini apps.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Useful Notes</h3>\n    <p>Write notes down so you can check it out later.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\"\n      [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\"\n      [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\"\n            data-toggle=\"collapse\" data-target=\"#navbar\"\n            aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">My Home Page</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\"\n              [routerLinkActiveOptions] = \"{exact:true}\">\n              <a [routerLink]=\"['/']\">\n                <span class=\"glyphicon glyphicon-home\"></span>\n                &nbsp;Home\n              </a>\n            </li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\"\n              [routerLinkActiveOptions]=\"{exact:true}\">\n              <a [routerLink]=\"['/dashboard']\">\n                <span class=\"glyphicon glyphicon-th\"></span>\n                &nbsp;Dashboard\n              </a>\n            </li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\"\n              [routerLinkActiveOptions]=\"{exact:true}\">\n              <a [routerLink]=\"['/profile']\">\n                <span class=\"glyphicon glyphicon-user\"></span>\n                &nbsp;Profile\n              </a>\n            </li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\"\n              [routerLinkActiveOptions]=\"{exact:true}\">\n              <a [routerLink]=\"['/blogs']\">\n                <span class=\"glyphicon glyphicon-th-list\"></span>\n                &nbsp;Blogs\n              </a>\n            </li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\"\n              [routerLinkActiveOptions]=\"{exact:true}\" class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                 role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                 Chat<span class=\"caret\"></span>\n              </a>\n              <ul class=\"dropdown-menu dropdown-menu-left\">\n                <li>\n                  <a [routerLink]=\"['/textChat']\">\n                    <span class=\"glyphicon glyphicon-edit\"></span>\n                    &nbsp;Text Chat\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/videoChat']\">\n                    <span class=\"glyphicon glyphicon-facetime-video\"></span>\n                    &nbsp;Video Chat\n                  </a>\n                </li>\n                <!-- <li role=\"separator\" class=\"divider\"></li> -->\n              </ul>\n            </li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\"\n              [routerLinkActiveOptions]=\"{exact:true}\">\n              <a [routerLink]=\"['/login']\">\n                <span class=\"glyphicon glyphicon-log-in\"></span>\n                &nbsp;Login\n              </a>\n            </li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\"\n              [routerLinkActiveOptions]=\"{exact:true}\">\n              <a [routerLink]=\"['/register']\">\n                <span class=\"glyphicon glyphicon-registration-mark\"></span>\n                &nbsp;Register\n              </a>\n            </li>\n            <li *ngIf=\"authService.loggedIn()\">\n              <a (click)=\"onLogoutClick()\">\n                <span class=\"glyphicon glyphicon-log-out\"></span>\n                &nbsp;Logout\n              </a>\n            </li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n"

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{ user.name }}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{ user.username }}</li>\n    <li class=\"list-group-item\">Email: {{ user.email }}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(417);


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/auth.service.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = (function () {
    function SocketService() {
        this.BASE_URL = '/';
        this.socket = null;
    }
    SocketService.prototype.connectSocket = function (userId) {
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.BASE_URL, { query: "userId=" + userId });
    };
    SocketService.prototype.getSelfSocketId = function () {
        var _this = this;
        this.socket.emit('self-socket-id');
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('self-socket-id-response', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    SocketService.prototype.getChatList = function (userId) {
        var _this = this;
        this.socket.emit('chat-list', { userId: userId });
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('chat-list-response', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    SocketService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
    };
    SocketService.prototype.receiveMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('add-message-response', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    SocketService.prototype.logout = function (userId) {
        var _this = this;
        if (!this.socket) {
        }
        this.socket.emit('logout', userId);
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('logout-response', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    /// below are for video connection usage
    SocketService.prototype.sendMessageForVideoConnection = function (data) {
        // console.log('Client sending message: ', data.msg);
        this.socket.emit('message', data);
    };
    SocketService.prototype.connectToSocketId = function (sid) {
        var _this = this;
        console.log('trying to connect to socket id: ', sid);
        this.socket.emit('connect-socket-request', {
            toSocketId: sid
        });
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('connect-socket-reply', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    SocketService.prototype.confirmConnectionToSocketId = function (tsid) {
        console.log('Confirm connection to socket id: ', tsid);
        this.socket.emit('connect-socket-answer', {
            ready: 'Y',
            toSocketId: tsid
        });
    };
    SocketService.prototype.onSocketConnectionRequest = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('connect-socket-relay', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    SocketService.prototype.onMessage = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    SocketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], SocketService);
    return SocketService;
}());
//# sourceMappingURL=/Users/andy/Desktop/study/projects/myhomepage/myhomepage/angular-src/src/socket.service.js.map

/***/ })

},[797]);
//# sourceMappingURL=main.bundle.map