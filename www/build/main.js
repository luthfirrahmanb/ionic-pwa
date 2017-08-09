webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Skills page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SkillsPage = (function () {
    function SkillsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SkillsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad Skills');
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Javascript", "TypeScript", "HTML/CSS", "Python"],
                datasets: [{
                        label: '# of Votes',
                        data: [65, 70, 80, 50],
                        backgroundColor: [
                            'rgba(231, 243, 119, 1)',
                            'rgba(119, 218, 243, 1)',
                            'rgba(243, 162, 119, 1)',
                            'rgba(119, 164, 243, 1)'
                        ],
                        hoverBackgroundColor: [
                            "#ffff1a",
                            "#1a75ff",
                            "#ff751a",
                            "#1a1aff"
                        ]
                    }]
            }
        });
        this.doughnutChart2 = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas2.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Ionic", "Angular", "Yii", "Django"],
                datasets: [{
                        label: '# of Votes',
                        data: [70, 65, 65, 50],
                        backgroundColor: [
                            'rgba(124, 194, 244, 1)',
                            'rgba(244, 124, 124, 1)',
                            'rgba(244, 206, 124, 1)',
                            'rgba(124, 244, 134, 1)'
                        ],
                        hoverBackgroundColor: [
                            "#1a8cff",
                            "#ff3300",
                            "#ff9933",
                            "#33cc33"
                        ]
                    }]
            }
        });
    };
    return SkillsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('doughnutCanvas'),
    __metadata("design:type", Object)
], SkillsPage.prototype, "doughnutCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('doughnutCanvas2'),
    __metadata("design:type", Object)
], SkillsPage.prototype, "doughnutCanvas2", void 0);
SkillsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-skills',template:/*ion-inline-start:"D:\Playground\pwa-ionic-master\src\pages\skills\skills.html"*/'<ion-header>\n  <ion-navbar color="nav">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Skills</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      Programming Language\n    </ion-card-header>\n    <ion-card-content >\n      <canvas style="height:400px;" #doughnutCanvas></canvas>\n\n      <ion-note>\n        On Percentage(%)\n      </ion-note>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Framework\n    </ion-card-header>\n    <ion-card-content>\n      <canvas style="height:400px;" #doughnutCanvas2></canvas>\n\n      <ion-note>\n        On Percentage(%)\n      </ion-note>\n    </ion-card-content>\n  </ion-card> \n\n</ion-content>'/*ion-inline-end:"D:\Playground\pwa-ionic-master\src\pages\skills\skills.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SkillsPage);

//# sourceMappingURL=skills.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutMePage = (function () {
    function AboutMePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.logoState = "in";
        this.loginState = "in";
        this.formState = "in";
        this.backGroundState = "in";
        this.infoState = "in";
        this.age = __WEBPACK_IMPORTED_MODULE_2_moment__().diff('1996-12-04', 'years');
        // console.log(this.age, "umur gua");
    }
    AboutMePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad AboutMe');
    };
    return AboutMePage;
}());
AboutMePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about-me',template:/*ion-inline-start:"D:\Playground\pwa-ionic-master\src\pages\about-me\about-me.html"*/'<ion-header>\n  <ion-navbar color="nav">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Me</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div padding [@flyInBottomFast]="backGroundState" id="cloud-layer">\n\n    <ion-card [@flyInBottomFast]="formState">\n      <ion-card-header>\n        <ion-item [@flyInBottomSlow]="logoState">\n          <ion-avatar item-left>\n            <img src="assets/images/pp.png">\n          </ion-avatar>\n          <h2>Luthfir Rahman</h2>\n          <h1> Bagaskara</h1>\n          <p>December 4, 1996</p>\n        </ion-item>\n      </ion-card-header>\n      <ion-card-content  [@fadeIn]="infoState">\n       Hello, Welcome to my Profile Web, let me introduce myself, My name is Luthfir Rahman Bagaskara, you can call me Luthfir or luthfi,\n        As comfortable as you are. And i\'m {{age}} years old now, i\'m the second child of two siblings, and now i\'m continuing study at Mercu Buana University with \n        Informatics Engineering as my major, and please look around at this web, see ya :)\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\Playground\pwa-ionic-master\src\pages\about-me\about-me.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* trigger */])('flyInBottomSlow', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ transform: 'translate3d(0,2000px,0' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('2000ms ease-in-out')
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* trigger */])('flyInBottomFast', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ transform: 'translate3d(0,2000px,0)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('1000ms ease-in-out')
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* trigger */])('bounceInBottom', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('200ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ transform: 'translate3d(0,2000px,0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ transform: 'translate3d(0,-20px,0)', offset: 0.9 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ transform: 'translate3d(0,0,0)', offset: 1 })
                    ]))
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* trigger */])('flyInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({
                    transform: 'translate3d(150%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('200ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('200ms ease-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* trigger */])('fadeIn', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({
                    opacity: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ opacity: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('2000ms 100ms ease-in')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], AboutMePage);

//# sourceMappingURL=about-me.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Schools page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SchoolsPage = (function () {
    function SchoolsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.school = [];
        this.school = [{ name: 'Mercu Buana University', year: '2015-Now', place: 'West Jakarta', photo: 'assets/images/mercu.png' },
            { name: 'Telkom Jakarta Vocational School', year: '2012-2015', place: 'West Jakarta', photo: 'assets/images/telkom2.png' },
            { name: 'Al-Hasanah Islamic Junior High School', year: '2009-2012', place: 'Tangerang', photo: 'assets/images/alhasanah.jpg' },
            { name: 'Al-Mubarak Islamic Primary School', year: '2003-2009', place: 'South Tangerang', photo: 'assets/images/almubarak.jpg' }];
    }
    SchoolsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad Schools');
    };
    return SchoolsPage;
}());
SchoolsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-schools',template:/*ion-inline-start:"D:\Playground\pwa-ionic-master\src\pages\schools\schools.html"*/'<ion-header>\n\n  <ion-navbar color="nav">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Schools</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="animate-in-primary">\n\n  <ion-list>\n  <ion-item *ngFor = "let s of school" class="item-remove-animate item-avatar item-icon-right list-grow-animation" text-wrap>\n    <ion-avatar item-left >\n      <img src="{{s.photo}}" >\n    </ion-avatar>\n    <h2 class="animate-in-primary">{{s.name}}</h2>\n    <h3 class="animate-in-secondary">{{s.year}}</h3>\n    <p class="slide-in">{{s.place}}</p>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\Playground\pwa-ionic-master\src\pages\schools\schools.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SchoolsPage);

//# sourceMappingURL=schools.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-me/about-me.module": [
		438,
		3
	],
	"../pages/schools/schools.module": [
		439,
		2
	],
	"../pages/skills/skills.module": [
		437,
		1
	],
	"../pages/work-detail/work-detail.module": [
		436,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 152;

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.thumbnailState = "in";
        this.fabButtonState = "in";
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Playground\pwa-ionic-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="nav">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color:white;" padding>\n\n  <div align="center" [@flyInBottomSlow]="fabButtonState" style="margin-top: 90px;">\n    <h1>Welcome To My Web Profile</h1>\n  </div>\n  <div align="center" [@fadeIn]="thumbnailState" style="margin-top: 50px;">\n    <a href="https://github.com/luthfirrahmanb/" target="_blank"> <ion-icon name="logo-github" color="git"  style="font-size: 2.2em;"></ion-icon></a>\n    <a href="https://www.linkedin.com/in/luthfir-rahman-bagaskara-681026110/" target="_blank"> <ion-icon name="logo-linkedin" color="li"  style="font-size: 2.2em;"></ion-icon></a>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\Playground\pwa-ionic-master\src\pages\home\home.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* trigger */])('flyInBottomSlow', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ transform: 'translate3d(0,2000px,0' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('1300ms ease-in-out')
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* trigger */])('fadeIn', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({
                    opacity: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ opacity: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('2000ms 100ms ease-in')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_detail_work_detail__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { StatusBar } from 'ionic-native';

var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.work = [{ id: 1, responsibility: 'Create Internal System with Ionic 3, MariaDB and Fireloop, Normalization Internal Database, and migration from MSSQL to MariaDB',
                name: 'PT Indodev Niaga Internet', year: 'Apr 2017 - Now', as: 'Mobile App Developer', photo: 'assets/images/dataon.png', portofolio: 'Internal System (Ionic 3, Socket.IO, Moment.Js, Loopback)' },
            { id: 2, responsibility: "Customize client's HR System By their order, Support Client on site or on the phone, and give them Training about our HR Systems",
                name: 'PT Indodev Niaga Internet', year: 'Nov 2016 -  Apr 2017', as: 'Software Maintenance Staff Jr', photo: 'assets/images/dataon.png', portofolio: 'none' },
            { id: 3, responsibility: "Assisting My supervisor to create an UI for T-Bike Porject, and create School's system with YII 1 and MySQL",
                name: 'PT Surya Genta Perkasa', year: 'Feb 2016 - Oct 2016', as: 'Web Programmer', photo: 'assets/images/sgp.png', portofolio: 'none' },
            { id: 4, responsibility: "Monitoring Vsat and optic Network and support client on the phone, activate or deactivate Client's Internet Service",
                name: 'PT Infracom Telesarana', year: 'Nov 2015 - Feb 2016', as: 'NOC', photo: 'assets/images/infracom.jpg', portofolio: 'none' },];
    }
    ListPage.prototype.selWorkExperience = function (w) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__work_detail_work_detail__["a" /* WorkDetailPage */], { item: w });
        // console.log(this.work, "work exp dari list")
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"D:\Playground\pwa-ionic-master\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar color="nav">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Work Experience</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content Padding>\n\n  <ion-list>\n    <ion-item *ngFor= " let w of work " (click)="selWorkExperience(w)" text-wrap>\n      <ion-avatar item-left>\n        <img src="{{w.photo}}">\n      </ion-avatar>\n      <h2>{{w.name}}</h2>\n      <p>As {{w.as}}</p>\n      <ion-icon name="md-arrow-dropright" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\Playground\pwa-ionic-master\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(335);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_skills_skills__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_me_about_me__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_schools_schools__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_work_detail_work_detail__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_skills_skills__["a" /* SkillsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_me_about_me__["a" /* AboutMePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_schools_schools__["a" /* SchoolsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_work_detail_work_detail__["a" /* WorkDetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/work-detail/work-detail.module#WorkDetailPageModule', name: 'WorkDetailPage', segment: 'work-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/skills/skills.module#SkillsModule', name: 'SkillsPage', segment: 'skills', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/about-me/about-me.module#AboutMeModule', name: 'AboutMePage', segment: 'about-me', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/schools/schools.module#SchoolsModule', name: 'SchoolsPage', segment: 'schools', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_skills_skills__["a" /* SkillsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_about_me_about_me__["a" /* AboutMePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_schools_schools__["a" /* SchoolsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_work_detail_work_detail__["a" /* WorkDetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 156,
	"./af.js": 156,
	"./ar": 157,
	"./ar-dz": 158,
	"./ar-dz.js": 158,
	"./ar-kw": 159,
	"./ar-kw.js": 159,
	"./ar-ly": 160,
	"./ar-ly.js": 160,
	"./ar-ma": 161,
	"./ar-ma.js": 161,
	"./ar-sa": 162,
	"./ar-sa.js": 162,
	"./ar-tn": 163,
	"./ar-tn.js": 163,
	"./ar.js": 157,
	"./az": 164,
	"./az.js": 164,
	"./be": 165,
	"./be.js": 165,
	"./bg": 166,
	"./bg.js": 166,
	"./bn": 167,
	"./bn.js": 167,
	"./bo": 168,
	"./bo.js": 168,
	"./br": 169,
	"./br.js": 169,
	"./bs": 170,
	"./bs.js": 170,
	"./ca": 171,
	"./ca.js": 171,
	"./cs": 172,
	"./cs.js": 172,
	"./cv": 173,
	"./cv.js": 173,
	"./cy": 174,
	"./cy.js": 174,
	"./da": 175,
	"./da.js": 175,
	"./de": 176,
	"./de-at": 177,
	"./de-at.js": 177,
	"./de-ch": 178,
	"./de-ch.js": 178,
	"./de.js": 176,
	"./dv": 179,
	"./dv.js": 179,
	"./el": 180,
	"./el.js": 180,
	"./en-au": 181,
	"./en-au.js": 181,
	"./en-ca": 182,
	"./en-ca.js": 182,
	"./en-gb": 183,
	"./en-gb.js": 183,
	"./en-ie": 184,
	"./en-ie.js": 184,
	"./en-nz": 185,
	"./en-nz.js": 185,
	"./eo": 186,
	"./eo.js": 186,
	"./es": 187,
	"./es-do": 188,
	"./es-do.js": 188,
	"./es.js": 187,
	"./et": 189,
	"./et.js": 189,
	"./eu": 190,
	"./eu.js": 190,
	"./fa": 191,
	"./fa.js": 191,
	"./fi": 192,
	"./fi.js": 192,
	"./fo": 193,
	"./fo.js": 193,
	"./fr": 194,
	"./fr-ca": 195,
	"./fr-ca.js": 195,
	"./fr-ch": 196,
	"./fr-ch.js": 196,
	"./fr.js": 194,
	"./fy": 197,
	"./fy.js": 197,
	"./gd": 198,
	"./gd.js": 198,
	"./gl": 199,
	"./gl.js": 199,
	"./gom-latn": 200,
	"./gom-latn.js": 200,
	"./he": 201,
	"./he.js": 201,
	"./hi": 202,
	"./hi.js": 202,
	"./hr": 203,
	"./hr.js": 203,
	"./hu": 204,
	"./hu.js": 204,
	"./hy-am": 205,
	"./hy-am.js": 205,
	"./id": 206,
	"./id.js": 206,
	"./is": 207,
	"./is.js": 207,
	"./it": 208,
	"./it.js": 208,
	"./ja": 209,
	"./ja.js": 209,
	"./jv": 210,
	"./jv.js": 210,
	"./ka": 211,
	"./ka.js": 211,
	"./kk": 212,
	"./kk.js": 212,
	"./km": 213,
	"./km.js": 213,
	"./kn": 214,
	"./kn.js": 214,
	"./ko": 215,
	"./ko.js": 215,
	"./ky": 216,
	"./ky.js": 216,
	"./lb": 217,
	"./lb.js": 217,
	"./lo": 218,
	"./lo.js": 218,
	"./lt": 219,
	"./lt.js": 219,
	"./lv": 220,
	"./lv.js": 220,
	"./me": 221,
	"./me.js": 221,
	"./mi": 222,
	"./mi.js": 222,
	"./mk": 223,
	"./mk.js": 223,
	"./ml": 224,
	"./ml.js": 224,
	"./mr": 225,
	"./mr.js": 225,
	"./ms": 226,
	"./ms-my": 227,
	"./ms-my.js": 227,
	"./ms.js": 226,
	"./my": 228,
	"./my.js": 228,
	"./nb": 229,
	"./nb.js": 229,
	"./ne": 230,
	"./ne.js": 230,
	"./nl": 231,
	"./nl-be": 232,
	"./nl-be.js": 232,
	"./nl.js": 231,
	"./nn": 233,
	"./nn.js": 233,
	"./pa-in": 234,
	"./pa-in.js": 234,
	"./pl": 235,
	"./pl.js": 235,
	"./pt": 236,
	"./pt-br": 237,
	"./pt-br.js": 237,
	"./pt.js": 236,
	"./ro": 238,
	"./ro.js": 238,
	"./ru": 239,
	"./ru.js": 239,
	"./sd": 240,
	"./sd.js": 240,
	"./se": 241,
	"./se.js": 241,
	"./si": 242,
	"./si.js": 242,
	"./sk": 243,
	"./sk.js": 243,
	"./sl": 244,
	"./sl.js": 244,
	"./sq": 245,
	"./sq.js": 245,
	"./sr": 246,
	"./sr-cyrl": 247,
	"./sr-cyrl.js": 247,
	"./sr.js": 246,
	"./ss": 248,
	"./ss.js": 248,
	"./sv": 249,
	"./sv.js": 249,
	"./sw": 250,
	"./sw.js": 250,
	"./ta": 251,
	"./ta.js": 251,
	"./te": 252,
	"./te.js": 252,
	"./tet": 253,
	"./tet.js": 253,
	"./th": 254,
	"./th.js": 254,
	"./tl-ph": 255,
	"./tl-ph.js": 255,
	"./tlh": 256,
	"./tlh.js": 256,
	"./tr": 257,
	"./tr.js": 257,
	"./tzl": 258,
	"./tzl.js": 258,
	"./tzm": 259,
	"./tzm-latn": 260,
	"./tzm-latn.js": 260,
	"./tzm.js": 259,
	"./uk": 261,
	"./uk.js": 261,
	"./ur": 262,
	"./ur.js": 262,
	"./uz": 263,
	"./uz-latn": 264,
	"./uz-latn.js": 264,
	"./uz.js": 263,
	"./vi": 265,
	"./vi.js": 265,
	"./x-pseudo": 266,
	"./x-pseudo.js": 266,
	"./yo": 267,
	"./yo.js": 267,
	"./zh-cn": 268,
	"./zh-cn.js": 268,
	"./zh-hk": 269,
	"./zh-hk.js": 269,
	"./zh-tw": 270,
	"./zh-tw.js": 270
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 390;

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_skills_skills__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_me_about_me__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_schools_schools__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icons: 'home' },
            { title: 'About Me', component: __WEBPACK_IMPORTED_MODULE_7__pages_about_me_about_me__["a" /* AboutMePage */], icons: 'person' },
            { title: 'Schools', component: __WEBPACK_IMPORTED_MODULE_8__pages_schools_schools__["a" /* SchoolsPage */], icons: 'school' },
            { title: 'Skills', component: __WEBPACK_IMPORTED_MODULE_6__pages_skills_skills__["a" /* SkillsPage */], icons: 'construct' },
            { title: 'Work Experience', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], icons: 'briefcase' }
        ];
        this.activePage = this.pages[0];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage = page;
    };
    MyApp.prototype.checkActive = function (page) {
        return page == this.activePage;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Playground\pwa-ionic-master\src\app\app.html"*/'<ion-split-pane when="sm">\n  <ion-menu [content]="content" type="push">\n    <ion-header text-wrap>\n      <ion-toolbar color="nav">\n        <ion-title>\n          <ion-icon name="ionic"></ion-icon> Luthfir\'s Web</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content style="background-color: #373737;">\n      <ion-list>\n        <button  menuClose ion-item *ngFor="let p of pages" [class.activeHighlight.item]="checkActive(p)" (click)="openPage(p)" class="app-page sidemenu">\n        <ion-icon item-left name="{{p.icons}}"></ion-icon>\n          <ion-label>{{p.title}}</ion-label>\n      </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"D:\Playground\pwa-ionic-master\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WorkDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WorkDetailPage = (function () {
    function WorkDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = this.navParams.get("item");
        //  console.log(this.item, "item dari list");
    }
    WorkDetailPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad WorkDetailPage');
    };
    return WorkDetailPage;
}());
WorkDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-work-detail',template:/*ion-inline-start:"D:\Playground\pwa-ionic-master\src\pages\work-detail\work-detail.html"*/'<ion-header>\n  <ion-navbar color="nav">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Detail Experience</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content Padding>\n\n <ion-card >\n      <ion-card-header>\n        <ion-item text-wrap>\n          <ion-avatar item-left>\n            <img src="{{item.photo}}">\n          </ion-avatar>\n          <h2>{{item.name}}</h2>\n          <h3>{{item.year}}</h3>\n          <p >{{item.as}}</p>\n        </ion-item>\n      </ion-card-header>\n      <ion-card-content>\n        <h2>Responsibilities:</h2>\n        {{item.responsibility}}\n      </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"D:\Playground\pwa-ionic-master\src\pages\work-detail\work-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], WorkDetailPage);

//# sourceMappingURL=work-detail.js.map

/***/ })

},[316]);
//# sourceMappingURL=main.js.map