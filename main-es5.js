function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/basic/basic.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic/basic.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBasicBasicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- <script id=\"Arnold\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script> -->\n<div class = \"bgchitta\">\n  <header id=\"header\" id=\"home\" >\n    <!-- <br> -->\n    <div class=\"container\" #home>\n        <br>\n        <div class=\"row header-top align-items-center\">\n            \n            <div class=\"col-lg-4 col-sm-4 menu-top-left\">\n                \n                <span>\n                    GET FIT WITH 3 GYMNESIUM. <br>\n                PLANNING IS ALL YOU NEED!\n                </span>\n            </div>\n            \n            <div class=\"col-lg-4 menu-top-middle justify-content-center d-flex\">\n                <a  title=\"Go Back to MainPage\" routerLink=\"/main\">\n                    <img class=\"img-fluid\" src=\"assets/img/logo.png\" alt=\"\">\t\n                </a>\n                              \n            </div>\n            <div class=\"col-lg-4 col-sm-4 menu-top-right\">\n                {{message}} &nbsp;&nbsp;&nbsp;\n                <a class=\"tel\" href=\"tel:+91 9915902685\">+91 9915902685</a>\n                <a  height=\"50px\" href=\"+91 9915902685\"><span class=\"lnr lnr-phone-handset\"></span></a> \n            </div>\n            \n        \n        </div>\n        <br>\n    </div>\t\n  </header>\n      \n  <img  src=\"https://wallpapercave.com/wp/wp2861312.jpg\" width=\"1440\" height=\"600\"><br>\n  <br><br><br>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  <i style=\"font-size:25px;\">“The worst thing I can be is the same as everybody else.” – <strong>Arnold Schwarzenegger</strong></i>\n  <div class=\"container\">\n    <br><br><br>\n    <p class=\"varjish\">Workouts</p>\n  <h1>Abs</h1>\n  <div class=\"row\">\n    &nbsp;&nbsp;&nbsp;\n  <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic1()\" id='img1' src=\"assets/img/abs1.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Bent Knee Abdominal Crunches</p>\n      <div *ngIf=\"flag1==1\"><p (click)=\"hidepic1()\" class=\"exerciseInfo1\" ><strong>Muscles Targeted:</strong> The bent knee abdominal hip raises target the rectus abdominis which is the muscle group also known as the “abs”. Its helps to strengthen the lower and middle abdominals very well and is great for working the key muscles that help build up the core. The secondary muscles targeted in this exercise include the thighs and the hip flexors.</p>\n      <p (click)=\"hidepic1()\" class=\"exerciseInfo1\" ><strong>Exercise Instructions:</strong>Begin by lying on your back onto an exercise mat with your hands at your sides and your knees bent with your feet raised two inches off the floor. Bring your pelvis up and your knees up towards your chest, contracting your abdominals and hold for a 1-count. Return to the start position and repeat until failure.</p></div>\n    </div>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic2()\" id='img2' src=\"assets/img/abs2.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Decline Abdominal Crunches </p>\n      <div *ngIf=\"flag2==1\"><p (click)=\"hidepic2()\" class=\"exerciseInfo2\" ><strong> Muscles Targeted:</strong> Decline abdominal crunches target the rectus abdominis, or abdominal muscles. In addition, you will work your hip flexors as a secondary muscle.</p>\n      <p (click)=\"hidepic2()\" class=\"exerciseInfo2\" ><strong> Exercise Instructions: </strong> Using a decline bench, position yourself with your feet locked in at the top. Place your hands on either side of your head, without locking your fingers. Raise your body slowly while you contract your abs. Crunch up, bringing your elbows to either side of your thighs. At the top of the movement, flex your abs for a one-count and then slowly lower your body back down to the starting position. Be sure to keep at least an inch or two of space between your back and the bench at the bottom of the movement. For more intensity, hold a weight plate across your chest for added resistance.</p></div>\n    </div>\n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic3()\" id='img3' src=\"assets/img/abs3.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Reverse Decline Crunches</p>\n      <div *ngIf=\"flag3==1\"><p (click)=\"hidepic3()\" class=\"exerciseInfo3\" ><strong>Muscles Targeted: </strong> Reverse decline crunches help to keep your core stronger since it targets the most important muscles of the midsection. It works the rectus abdominis with a primary focus on the lower abdominal muscles. It extends from the chest area to the pelvis. Traditional crunches target mainly the middle and upper portion of abs. By performing reverse decline crunches, you are able to isolate the lower abs very well.</p>\n      <p (click)=\"hidepic3()\" class=\"exerciseInfo3\" ><strong>Exercise Instructions: </strong>Using a decline bench, lie on your back with your head at the top of the bench, near where your feet usually go. Next, hold the top of the bench with both hands. Hold your legs straight out together in the air, parallel to the floor using your abs to hold them there. Slowly bring your pelvis up and in towards your chest, having your abs control the movement. Slowly lower yourself back to the starting position while keeping constant tension on your abdominal muscles. </p></div>\n    </div>\n  </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n  \n  <h1>Back</h1>\n  <div class=\"row\">\n    &nbsp;&nbsp;&nbsp;\n  <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic4()\" id='img4' src=\"assets/img/back1.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Pullups</p>\n      <div *ngIf=\"flag4==1\"><p (click)=\"hidepic4()\" class=\"exerciseInfo4\" ><strong>Muscles Targeted: </strong> Standard pull-ups, when performed properly, can hit up to six muscle groups on every repetition. Proper form when performing a pull-up requires no swinging or kipping, which is when you try to generate some momentum upwards by moving your legs. The obvious two muscle groups that pull-ups target are your biceps and lats (latissimus dorsi), which give you the broad look in your back. The biceps are not the only muscles in your arms that get a burn though. Your forearm muscles, depending on your grip, gets a great workout too. The shoulder muscles (deltoids) get a workout as well, with proper reps hitting your delts, traps and your rhomboids, which are the muscles by your scapula. The abdominal and pelvic floor muscles help stabilize your torso and legs during each rep. Lastly, your grip strength is improved when doing proper pull-ups by having to hold all your body weight during each rep.</p>\n      <p (click)=\"hidepic4()\" class=\"exerciseInfo4\" ><strong>Exercise Instructions:  </strong>To perform a pullup, grab onto a secure bar (or a machine) using an overhand grip with your hands just beyond shoulder width apart. Slowly lift your entire body upward as high as you can. Lower your body back down to the starting position and repeat with a slow and controlled tempo at all times. </p></div>\n    </div>\n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic5()\" id='img5' src=\"assets/img/back2.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">V-Bar Pullups</p>\n      <div *ngIf=\"flag5==1\"><p (click)=\"hidepic5()\" class=\"exerciseInfo5\" ><strong>Muscles Targeted: </strong>V-bar pullups target your latissimus dorsi muscles (also known as “lats”) which are located along the sides of your back. This exercise also targets your bicep muscles, forearms and deltoids (shoulders) as secondary muscle groups. </p>\n     <p (click)=\"hidepic5()\" class=\"exerciseInfo5\" ><strong>Exercise Instructions: </strong>Grab a V-bar and place it on a pullup bar so that the handles of the V-bar are hanging over the sides so that you can grip it safely with both hands and support your body weight. Slowly pull your body up to the top and try to touch your chest to the pullup bar. Always use a slow and controlled tempo as you perform this exercise. Pause at the top for a brief moment and then slowly lower your body back down to the starting position and repeat until failure. </p></div>\n    </div>\n   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic6()\" id='img6' src=\"assets/img/back3.gif\" \n      width=\"300\" height=\"240\" >\n     <p style=\"text-align: center;\">Assisted Pull-Ups Machine</p>\n     <div *ngIf=\"flag6==1\"><p (click)=\"hidepic6()\" class=\"exerciseInfo6\" ><strong> Muscles Targeted:</strong>The movement involved during wide grip pull-ups is associated with the contraction of the latissimus dorsi or commonly called the “lats”. The contraction of the upper back enables the wide grip pull-ups to be performed in conjunction with the retraction of the scapula, leading the entire body to move up and down along one plane. Assisting the upper back and scapula throughout the exercise are the deltoid muscles (shoulders). The stability and effort coming from the shoulders continues the chain of movement for the upper back, especially during the initial pulling moment up to the final phase of this exercise. Wide grip pull-ups also use the secondary muscles of the arms and forearms to keep a firm grip throughout the entire exercise. </p>\n     <p (click)=\"hidepic6()\" class=\"exerciseInfo6\" ><strong>Exercise Instructions: </strong>Find a pull-up bar (or machine) and grab the bar using a secure overhand grip with your hands as wide apart as comfortably possible. Next, slowly pull your body up as high as possible and try to touch your chin to the pullup bar. Slowly return back down to the starting position and repeat. This is a difficult exercise so don’t get frustrated if you can only perform a few repetitions when you’re first starting out. </p></div>\n    </div>\n  </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n  \n  <h1>Chest</h1>\n  <div class=\"row\">\n    &nbsp;&nbsp;&nbsp;\n  <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic7()\" id='img7' src=\"assets/img/chest1.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Dips</p>\n      <div *ngIf=\"flag7==1\"><p (click)=\"hidepic7()\" class=\"exerciseInfo7\" ><strong>Exercise Advice: </strong> Firmly grasp the handles on the dip machine and raise your body up to the starting position. Your arms should be almost extended in the starting position but make sure to have a little bend in your arms to keep the tension on the triceps. Slowly lower your body downwards, keeping your elbows in at your sides. If you keep your elbows out, you will be working more of the pectoral muscles. You should lower yourself down so that your arms are in a 90 degree position as illustrated in the photo. Slowly raise your body back up to the starting position, while keeping your elbows in and tension on your triceps.</p></div>\n    </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic8()\" id='img8' src=\"assets/img/chest2.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Narrow Grip Push Ups</p>\n      <div *ngIf=\"flag8==1\"><p (click)=\"hidepic8()\" class=\"exerciseInfo8\" ><strong>Exercise Advice: </strong> This exercise is your basic pushup, but with varying widths of hand positioning. For the close hand position, you are going to place your hands on the ground about 2 inches apart and perform regular pushups until failure. For the wide hand position, you will perform the exact same exercise, but your hands will be on the ground as far apart from one another as possible while still allowing you to execute the pushup.</p></div>\n    </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic9()\" id='img9' src=\"assets/img/chest3.gif\" \n      width=\"300\" height=\"240\" >\n     <p style=\"text-align: center;\">Pushups</p>\n     <div *ngIf=\"flag9==1\"><p (click)=\"hidepic9()\" class=\"exerciseInfo9\" ><strong>Muscles Targeted: </strong> Push-ups are one of the simplest yet one of the most beneficial bodyweight exercises that can be performed virtually anywhere in order to gain both strength and size in the upper body. While performing push-ups, you will be using your own body weight without the need for any equipment or machines. The upper body and the core work together while performing this exercise and the key muscles utilized include:</p>\n     <p (click)=\"hidepic9()\" class=\"exerciseInfo9\" ><strong>Primary Muscles – Pectoralis Major </strong>These are the primary muscles that the push-up targets. The pectoralis major muscles, more specifically the muscles called sternal heads, make up the bulk of the chest. The pectoralis major muscles are commonly referred to as “pecs” and they are the primary muscles targeted when doing this pressing movement. Having strength in the pecs helps you perform a variety of movements which includes the internal rotation and extension of your shoulder. </p></div>\n    </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n  </div>\n  \n  <h1>Triceps</h1>\n  <div class=\"row\">\n    &nbsp;&nbsp;&nbsp;\n  <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic10()\" id='img10' src=\"assets/img/tricep1.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Bench Dips</p>\n      <div *ngIf=\"flag10==1\"><p (click)=\"hidepic10()\" class=\"exerciseInfo10\" ><strong>Exercise Advice: </strong> Position your hands shoulder width apart on a secured bench. Move your feet out as far out in front of you as possible. Straighten out your arms and keep a little bend in your elbows in order to always keep tension on your triceps and off your elbow joints. Slowly lower your upper body down towards the floor and keep your elbows tucked into your sides. Once you reach the bottom of the movement, slowly press off with your hands and push yourself back up to the starting position with your triceps.</p></div>\n    </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic11()\" id='img11' src=\"assets/img/tricep2.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Dips</p>\n      <div *ngIf=\"flag11==1\"><p (click)=\"hidepic11()\" class=\"exerciseInfo11\" ><strong>Exercise Advice: </strong>Firmly grasp the handles on the dip machine and raise your body up to the starting position. Your arms should be almost extended in the starting position but make sure to have a little bend in your arms to keep the tension on the triceps. Slowly lower your body downwards, keeping your elbows in at your sides. If you keep your elbows out, you will be working more of the pectoral muscles. You should lower yourself down so that your arms are in a 90 degree position as illustrated in the photo. Slowly raise your body back up to the starting position, while keeping your elbows in and tension on your triceps. </p></div>\n    </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic12()\" id='img12' src=\"assets/img/tricep3.gif\" \n      width=\"300\" height=\"240\" >\n     <p style=\"text-align: center;\">Close Grip Pushups</p>\n     <div *ngIf=\"flag12==1\"><p (click)=\"hidepic12()\" class=\"exerciseInfo12\" ><strong> Exercise Advice: </strong> This exercise is your basic pushup, but with your hands positioned close together. As you lower your body down, make sure to keep your elbows in to keep all the tension on the triceps muscle. If you let your elbows turn out, you will be working more of the pectoral muscles (chest) than your triceps. Push up to the starting position while keeping your elbows in during the entire range of the movement.</p></div>\n    </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n  </div>\n  \n  <h1>Hamstrings</h1>\n  <div class=\"row\">\n    &nbsp;&nbsp;&nbsp;\n  <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic13()\" id='img13' src=\"assets/img/hamstring1.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Elastic Band Kickbacks</p>\n      <div *ngIf=\"flag13==1\"><p (click)=\"hidepic13()\" class=\"exerciseInfo13\" ><strong>Exercise Instructions:</strong>This exercise is similar to the one-legged cable kickbacks except that you will be using an elastic exercise band. Keeping your leg straight, smoothly kick your heel backward about one foot. Hold your leg at the top of this movement for a one-count. Slowly lower your leg back to the starting position and repeat. </p></div>\n    </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic14()\" id='img14' src=\"assets/img/hamstring2.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Exercise Ball Curls</p>\n      <div *ngIf=\"flag14==1\"><p (click)=\"hidepic14()\" class=\"exerciseInfo14\" id='hidden'><strong>Exercise Instructions: </strong>Lie on your back on a mat on the floor and place your heels on the front upper edge of a large exercise ball. By doing this, your back will actually be lifted off of the floor and only your upper back and the back of your shoulders will be on the floor. In a slow and controlled fashion, bring your heels toward your body so as to roll the exercise ball underneath your legs. Move your heels and the exercise ball about 6 – 12 inches and then return your legs to the fully extended start position. Repeat until you have performed the desired amount of repetitions. </p></div>\n    </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic15()\" id='img15' src=\"assets/img/hamstring3.gif\" \n      width=\"300\" height=\"240\" >\n     <p style=\"text-align: center;\">Lying Leg Curls</p>\n     <div *ngIf=\"flag15==1\"><p (click)=\"hidepic15()\" class=\"exerciseInfo15\" id='hidden'><strong>Exercise Instructions:</strong> This exercise is also known as hamstring curls. Lie on your stomach on the hamstring machine. If you are not sure how to position yourself, simply ask a trainer at your gym to assist you. Begin by curling the weight upward so as to touch your heels to your butt. Return to the start position in a slow and controlled fashion and repeat.</p>\n     </div> \n  </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n  </div>\n  \n  <h1>Gluteus</h1>\n  <div class=\"row\">\n    &nbsp;&nbsp;&nbsp;\n  <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic16()\" id='img16' src=\"assets/img/butt1.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Dumbbell Bench Step Ups</p>\n      <div *ngIf=\"flag16==1\"><p (click)=\"hidepic16()\" class=\"exerciseInfo16\" id='hidden'><strong> Exercise Advice: </strong>Stand next to a flat bench with dumbbells in each hand hanging at your sides. Step up onto the bench with one foot and then bring up the other foot so that you end up standing on the bench with both feet. To return to the floor, carefully step backward off of the bench with the same foot you started with. Repeat the movement with the opposite foot first and alternate for 10 repetitions on each leg. </p>\n      </div>\n      </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic17()\" id='img17' src=\"assets/img/butt2.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Single Dumbbell Plie Squat</p>\n      <div *ngIf=\"flag17==1\"><p (click)=\"hidepic17()\" class=\"exerciseInfo17\" id='hidden'><strong>Exercise Instructions:</strong>Stand next to a flat bench with a dumbbell in each hand hanging at your sides. Step up onto the bench with one foot and then bring up the other foot so that you end up standing on the bench with both feet. To return to the floor, carefully step backward off of the bench with the same foot you started with. Repeat the movement with the opposite foot first and alternate for 10 repetitions on each leg. </p>\n      </div>\n      </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic18()\" id='img18' src=\"assets/img/butt3.gif\" \n      width=\"300\" height=\"240\" >\n     <p style=\"text-align: center;\">Walking Dumbbell Lunge</p>\n     <div *ngIf=\"flag18==1\"><p (click)=\"hidepic18()\" class=\"exerciseInfo18\" id='hidden'><strong>Exercise Instructions: </strong>Grab a dumbbell in each hand and find an area where you can walk for about 20 feet unobstructed. Beginning with one foot, simply stride forward (walk) as far as you comfortably can while keeping the dumbbells hanging down at your sides. It is very important that when you plant your striding foot that your knee stays perpendicular to the floor and does not extend past that point. Continue to alternate strides for 10 steps on each leg. </p>\n     </div>  \n  </div>\n  </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n  \n  <h1>Forearms</h1>\n  <div class=\"row\">\n    &nbsp;&nbsp;&nbsp;\n  <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic19()\" id='img19' src=\"assets/img/forearm1.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Two Arm Palms Down Wrist Curls</p>\n      <div *ngIf=\"flag19==1\"><p (click)=\"hidepic19()\" class=\"exerciseInfo19\" id='hidden'><strong>Exercise Advice:</strong>Kneel next to a flat bench and lay your forearms across the bench while holding a two dumbbells palms down. Using only your hands and wrists, lift the dumbbells up toward the ceiling as high as possible, keeping your forearms flat on the bench. When you return to the start position, allow the dumbbells to come down to the starting position and then repeat. </p>\n      </div>\n      </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic20()\" id='img20' src=\"assets/img/forearm2.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Two Arm Palms Up Wrist Curls</p>\n      <div *ngIf=\"flag20==1\"><p (click)=\"hidepic20()\" class=\"exerciseInfo20\" id='hidden'><strong>Exercise Advice: </strong>Kneel next to a flat bench and lay your forearms across the bench while holding a two dumbbells palms up. Using only your hands and wrists, curl the dumbbells up toward the ceiling as high as possible, keeping your forearms flat on the bench. When you return to the start position, allow the dumbbells to roll all the way down into your fingertips and then repeat. </p>\n    </div>\n      </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic21()\" id='img21' src=\"assets/img/forearm3.gif\" \n      width=\"300\" height=\"240\" >\n     <p style=\"text-align: center;\">Reverse Barbell Preacher Curls</p>\n     <div *ngIf=\"flag21==1\"><p (click)=\"hidepic21()\" class=\"exerciseInfo21\" id='hidden'><strong>Exercise Advice: </strong>Using a preacher curl machine, grab an EZ curl bar with both hands, palms down. Using an overhand grip, simply curl the bar up toward your chin. Slowly return to the start position and repeat. </p>\n     </div>  \n  </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n  </div>\n  \n  <h1>Biceps</h1>\n  <div class=\"row\">\n    &nbsp;&nbsp;&nbsp;\n  <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic22()\" id='img22' src=\"assets/img/bicep1.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Chin Ups</p>\n      <div *ngIf=\"flag22==1\"><p (click)=\"hidepic22()\"  class=\"exerciseInfo22\" id='hidden'><strong>Muscles Targeted:  </strong>Chin ups, also called “underhand pull-ups” are the perfect bodyweight exercise for your biceps and they target every major muscle group in the back including the latissimus dorsi (lats) and rear deltoids. They also work the spinal erectors and abdominals with some slight variations. Because chin ups are a pulling exercise, they require a high level of grip strength therefore adding functional strength and muscle to the forearms and hands. If you are a beginner and you are unable to do a regular pull-up, doing chin ups should allow you to gain the amount of strength needed to accomplish a pull-up.  </p>\n      <p (click)=\"hidepic22()\"  class=\"exerciseInfo\" id='hidden'><strong>Exercise Instructions: </strong>Find a secure bar to hang from that allows you to safely place all of your body weight onto it. Begin by either grabbing the bar or jumping up to grab it and securely grip the bar with both hands using an underhand grip. Place your hands at a width that you feel comfortable with and let your body naturally hang down with your arms extended. Bend your knees and pick your feet up off the ground if necessary to clear your feet from the ground. Slowly pull yourself up until your upper chest is close to your elbows with your chin level with the bar. Pause and slowly lower yourself down to the starting position and repeat for the desired number of reps. </p>\n  </div>  \n  </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic23()\" id='img23' src=\"assets/img/bicep2.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Seated Dumbbell Curls</p>\n      <div *ngIf=\"flag23==1\"><p (click)=\"hidepic23()\" class=\"exerciseInfo23\" id='hidden'><strong>Muscles Targeted:  </strong>This exercise targets the brachialis which lies beneath the biceps muscle, the brachioradialis (forearms), and the biceps brachii (2 heads of the biceps). These three individual muscles all make up the upper arm. Using this exercise results in a total biceps workout. The forearms are mainly targeted as a secondary muscle group along with the anterior deltoids but their involvement will be minimal when this exercise is performed properly. </p>\n      <p (click)=\"hidepic23()\" class=\"exerciseInfo\" id='hidden'><strong> Exercise Instructions:</strong>Sit at the end of a flat bench, or a seated utility bench with back support, and place your feet flat on the floor for stability with your back upright, shoulders back and your chest out. Grab a dumbbell with each hand using an overhand grip and let your arms hang down naturally at your sides with both palms facing inward toward the bench. Simultaneously curl the dumbbells up while twisting (supinating) your wrists upwards on the way up. Be sure to squeeze your biceps at the top for a one-count and then slowly return the dumbbells back down to the starting position and repeat. </p>\n  </div>  \n  </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic24()\" id='img24' src=\"assets/img/bicep3.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">EZ Bar Preacher Curls</p>\n      <div *ngIf=\"flag24==1\"><p (click)=\"hidepic24()\" class=\"exerciseInfo24\" id='hidden'><strong>Muscles Targeted: </strong>The EZ bar preacher curl is an exercise that is used strictly for isolating the muscles of the upper arm. This is not a compound exercise that works many muscle groups across multiple joints. This exercise strictly targets your biceps and your forearms along with improving wrist and grip strength. You can increase the stress on your forearms by grabbing the inner bar with an overhand grip (palms down) for a reverse EZ bar preacher curl. The stabilizing muscles include the anterior deltoids (front shoulders). </p>\n      <p (click)=\"hidepic24()\" class=\"exerciseInfo24\" id='hidden'><strong>Exercise Instructions: </strong>Using a regular preacher bench, grab an EZ Curl bar with both hands using an underhand grip (palms facing upwards). Slowly curl the bar up to the top and bring it a few inches from your chin. Return the weight back down with a slow and controlled tempo to the starting position allowing some resistance (negative) on the way back down. Repeat the movement for the desired number of repetitions. </p>\n  </div>  \n  </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n  </div>\n  \n  <h1>Quadriceps</h1>\n  <div class=\"row\">\n    &nbsp;&nbsp;&nbsp;\n  <div class=\"column\" id=\"polaroid\" >\n      <img (click)=\"loadpic25()\" id='img25' src=\"assets/img/quad1.gif\" \n       width=\"300\" height=\"240\" >\n      <p style=\"text-align: center;\">Jump Squats</p>\n      <div *ngIf=\"flag25==1\"><p (click)=\"hidepic25()\" class=\"exerciseInfo25\" id='hidden'><strong>Exercise Advice: </strong>Start in a deep squat position with your folded out in front of your body. From this position, explosively jump up as high as you can and reach for the ceiling with your hands as you jump. Repeat this until failure. </p>\n        <br>\n      </div>\n      </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n      <div class=\"column\" id=\"polaroid\" >\n        <img (click)=\"loadpic46()\" id='img46' src=\"assets/img/quad3.gif\" \n         width=\"300\" height=\"240\" >\n        <p style=\"text-align: center;\">Dumbbell Squats</p>\n        <div *ngIf=\"flag46==1\"><p (click)=\"hidepic46()\"  class=\"exerciseInfo46\" id='hidden'><strong>Muscles Targeted: </strong>The dumbbell squat is a highly effective exercise which helps develop the major muscles of the lower body. These muscles include the quadriceps (4 large muscles on the front of the thighs), the hamstrings (back of thighs), the gluteus maximum (butt muscles) and the calves (lower part of the leg). This is one of the best exercises you can use if you want to build muscle and strength in your legs.</p>\n          <p (click)=\"hidepic46()\"  class=\"exerciseInfo46\" id='hidden'><strong>Exercise Instructions: </strong>Stand up straight and place your feet at about shoulder width apart. Grab a dumbbell in both hands and let them naturally hang at your sides. Begin by squatting as though you are going to sit down in a chair while keeping your back flat and your chest out while looking straight ahead. At the bottom of the squat, your legs should be about parallel to the ground. If you don’t have the range of motion or flexibility to go to parallel then don’t. Return to the starting position by pushing off the feet and back up. Be sure to keep your back upright and straight throughout this exercise and keep your overall balance to ensure you maintain a safe and athletic stance.</p>\n          <br>\n        </div>\n    </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <div class=\"column\" id=\"polaroid\" >\n        <img (click)=\"loadpic45()\" id='img45' src=\"assets/img/quad2.gif\" \n         width=\"300\" height=\"240\" >\n        <p style=\"text-align: center;\">Barbell Bench Squats </p>\n        <div *ngIf=\"flag45==1\"><p (click)=\"hidepic45()\"  class=\"exerciseInfo45\" id='hidden'><strong>Muscles Targeted: </strong>The squat exercise targets so many different muscles of the lower body and it’s one of the most important compound movements to include in your weight training program. The primary muscle group it targets is the quadriceps which are the 4 muscles on the front of your thighs. This exercise also hits the hamstrings (back of legs), gluteus maximus (butt) and also strengthens the secondary muscles of the lower back.</p>\n        <p (click)=\"hidepic45()\"  class=\"exerciseInfo45\" id='hidden'><strong>Exercise Instructions: </strong>Stand in an area just in front of a squat rack and place a flat bench right behind where you are standing. Place a barbell behind your neck (on your trapezius muscles) and securely rest it on your shoulders. Your feet should be just beyond shoulder width apart. Begin this exercise by squatting to sit down on the bench behind you. Slowly lower the weight down and softly touch your butt onto the bench for a second and then return to the starting position. It is very important that you keep your back as straight as possible throughout this movement. One way to help do this is to keep your shoulders back and your chest out while focusing your eyes on a spot in front of you throughout the entire exercise.</p>\n        <br>\n      </div>\n      </div>\n  </div>\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  <br><br><br><br><br>\n  <div class=\"example-button-row\">\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  \n    <button (click) = \"dietPlan()\" mat-raised-button color=\"basic\" class = \"plan\">Diet Plan</button>\n    &nbsp;&nbsp;&nbsp;&nbsp;\n    <button (click) = \"dietPlan()\" mat-raised-button color=\"warn\" class = \"plan\">Workout Plan</button>\n  </div>\n  \n  <br><br><br>\n  <div *ngIf = \"flagweight==1\">\n  <h2 style=\"text-align: center;\" id=\"diet-plan\"><b>Fat Loss Diet Plan</b></h2>\n  <p>A lot can be spoken about what goes into an ideal diet chart. However, one’s nutritional requirement varies based on various factors. It could change depending on gender, for example, male dietary requirements vary from that of a female. Geography can play a role as well, with North Indian diets being largely different from South Indian ones. Meal preferences come into play since the consumption of food by a vegetarian or a vegan differing largely from that by a non-vegetarian.</p> \n  <p>However, we have put together a diet plan for weight loss with Indian food. This 7 day diet plan, 1200 calorie diet plan is a sample, and should not be followed by any individual without consulting with a nutritionist.</p>\n  <br><br><h3><strong>Day 1:</strong></h3>\n  <ul>\n    <li>After starting your day with cucumber water, have oats porridge and mixed nuts for breakfast.</li>\n    <li>Have a roti with dal and gajar matar sabzi for lunch.</li>\n    <li>Follow that up with dal and lauki sabzi to go with a roti for dinner.</li>\n    </ul>\n  \n    <table align=\"center\" style=\"text-align: center;\">\n      <tbody>\n      <tr>\n      <td><span style=\"font-weight: bold;\">Day 1</span></td>\n      <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n      </tr>\n      <tr>\n      <td>6:30 AM</td>\n      <td>Cucumber Detox Water(1 glass)</td>\n      </tr>\n      <tr>\n      <td>8:00 AM</td>\n      <td>Oats Porridge in Skimmed Milk(1 bowl)<p></p>\n      <p>Mixed Nuts(25 grams)</p></td>\n      </tr>\n      <tr>\n      <td>12:00 PM</td>\n      <td>Skimmed Milk Paneer(100 grams)</td>\n      </tr>\n      <tr>\n      <td>2:00 PM</td>\n      <td>Mixed Vegetable Salad(1 katori)</td>\n      </tr>\n      <tr>\n      <td>2:10 PM</td>\n      <td>Dal(1 katori)Gajar Matar Sabzi(1 katori)<p></p>\n      <p>Roti (1 roti/chapati)</p></td>\n      </tr>\n      <tr>\n      <td>4:00 PM</td>\n      <td>Cut Fruits(1 cup)Buttermilk(1 glass)</td>\n      </tr>\n      <tr>\n      <td>5:30 PM</td>\n      <td>Tea with Less Sugar and Milk(1 teacup)</td>\n      </tr>\n      <tr>\n      <td>8:50 PM</td>\n      <td>Mixed Vegetable Salad(1 katori)</td>\n      </tr>\n      <tr>\n      <td>9:00 PM</td>\n      <td>Dal(1 katori)Lauki Sabzi(1 katori)<p></p>\n      <p>Roti (1 roti/chapati)</p></td>\n      </tr>\n      </tbody>\n      </table> \n      <br><br>\n      <h3><strong>Day 2:</strong></h3>\n      <ul>\n        <li>On the second day, eat a mixed vegetable stuffed roti with curd for breakfast.</li>\n        <li>For lunch, have half a katori of methi rice along with lentil curry.</li>\n        <li>End your day with sauteed vegetables and green chutney.</li>\n        </ul>\n        <table align=\"center\" style=\"text-align: center;\">\n          <tbody>\n          <tr>\n          <td><span style=\"font-weight: bold;\">Day 2</span></td>\n          <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n          </tr>\n          <tr>\n          <td>6:30 AM</td>\n          <td>Cucumber Detox Water(1 glass)</td>\n          </tr>\n          <tr>\n          <td>8:00 AM</td>\n          <td>Curd(1.5 katori)Mixed Vegetable Stuffed Roti(2 piece)</td>\n          </tr>\n          <tr>\n          <td>12:00 PM</td>\n          <td>Skimmed Milk Paneer(100 grams)</td>\n          </tr>\n          <tr>\n          <td>2:00 PM</td>\n          <td>Mixed Vegetable Salad(1 katori)</td>\n          </tr>\n          <tr>\n          <td>2:10 PM</td>\n          <td>Lentil Curry(0.75 bowl)Methi Rice(0.5 katori)</td>\n          </tr>\n          <tr>\n          <td>4:00 PM</td>\n          <td>Apple(0.5 small (2-3/4″ dia))Buttermilk(1 glass)</td>\n          </tr>\n          <tr>\n          <td>5:30 PM</td>\n          <td>Coffee with Milk and Less Sugar(0.5 tea cup)</td>\n          </tr>\n          <tr>\n          <td>8:50 PM</td>\n          <td>Mixed Vegetable Salad(1 katori)</td>\n          </tr>\n          <tr>\n          <td>9:00 PM</td>\n          <td>Sauteed Vegetables with Paneer(1 katori)Roti (1 roti/chapati)<p></p>\n          <p>Green Chutney(2 tablespoon)</p></td>\n          </tr>\n          </tbody>\n          </table>\n          <br><br>    \n          <h3><strong>Day 3:</strong></h3>\n          <ul>\n            <li>Breakfast on day 3 would include Multigrain Toast and Skim Milk Yogurt.</li>\n            <li>In the afternoon, have sauteed vegetables with paneer and some green chutney.</li>\n            <li>Half a katori of methi rice and some lentil curry to make sure you end the day on a healthy note.</li>\n            </ul>\n            <table align=\"center\" style=\"text-align: center;\">\n              <tbody>\n              <tr>\n              <td><span style=\"font-weight: bold;\">Day 3</span></td>\n              <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n              </tr>\n              <tr>\n              <td>6:30 AM</td>\n              <td>Cucumber Detox Water(1 glass)</td>\n              </tr>\n              <tr>\n              <td>8:00 AM</td>\n              <td>Skim Milk Yoghurt(1 cup (8 fl oz))Multigrain Toast(2 toast)</td>\n              </tr>\n              <tr>\n              <td>12:00 PM</td>\n              <td>Skimmed Milk Paneer(100 grams)</td>\n              </tr>\n              <tr>\n              <td>2:00 PM</td>\n              <td>Mixed Vegetable Salad(1 katori)</td>\n              </tr>\n              <tr>\n              <td>2:10 PM</td>\n              <td>Sauteed Vegetables with Paneer(1 katori)Roti (1 roti/chapati)<p></p>\n              <p>Green Chutney(2 tablespoon)</p></td>\n              </tr>\n              <tr>\n              <td>4:00 PM</td>\n              <td>Banana(0.5 small (6″ to 6-7/8″ long))Buttermilk(1 glass)</td>\n              </tr>\n              <tr>\n              <td>5:30 PM</td>\n              <td>Tea with Less Sugar and Milk(1 teacup)</td>\n              </tr>\n              <tr>\n              <td>8:50 PM</td>\n              <td>Mixed Vegetable Salad(1 katori)</td>\n              </tr>\n              <tr>\n              <td>9:00 PM</td>\n              <td>Lentil Curry(0.75 bowl)Methi Rice(0.5 katori)</td>\n              </tr>\n              </tbody>\n              </table>\n              <br><br>\n              <h3><strong>Day 4:</strong></h3>\n              <ul>\n                <li>Start Day 4 with a Fruit and Nuts Yogurt Smoothie and Egg Omelette</li>\n                <li>Follow that up with Moong Dal, Bhindi Sabzi, and roti.</li>\n                <li>Complete the day’s food intake with steamed rice and palak chole.</li>\n                </ul>\n                <table align=\"center\" style=\"text-align: center;\">\n                  <tbody>\n                  <tr>\n                  <td><span style=\"font-weight: bold;\">Day 4</span></td>\n                  <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                  </tr>\n                  <tr>\n                  <td>6:30 AM</td>\n                  <td>Cucumber Detox Water(1 glass)</td>\n                  </tr>\n                  <tr>\n                  <td>8:00 AM</td>\n                  <td>Fruit and Nuts Yogurt Smoothie(0.75 glass)<p></p>\n                  <p>Egg Omelette(1 serve(one egg))</p></td>\n                  </tr>\n                  <tr>\n                  <td>12:00 PM</td>\n                  <td>Skimmed Milk Paneer(100 grams)</td>\n                  </tr>\n                  <tr>\n                  <td>2:00 PM</td>\n                  <td>Mixed Vegetable Salad(1 katori)</td>\n                  </tr>\n                  <tr>\n                  <td>2:10 PM</td>\n                  <td>Green Gram Whole Dal Cooked(1 katori)Bhindi sabzi(1 katori)<p></p>\n                  <p>Roti (1 roti/chapati)</p></td>\n                  </tr>\n                  <tr>\n                  <td>4:00 PM</td>\n                  <td>Orange(1 fruit (2-5/8″ dia))Buttermilk(1 glass)</td>\n                  </tr>\n                  <tr>\n                  <td>5:30 PM</td>\n                  <td>Coffee with Milk and Less Sugar(0.5 tea cup)</td>\n                  </tr>\n                  <tr>\n                  <td>8:50 PM</td>\n                  <td>Mixed Vegetable Salad(1 katori)</td>\n                  </tr>\n                  <tr>\n                  <td>9:00 PM</td>\n                  <td>Palak Chole(1 bowl)Steamed Rice(0.5 katori)</td>\n                  </tr>\n                  </tbody>\n                  </table>\n                  <br><br>\n                  <h3><strong>Day 5:</strong></h3>\n                  <ul>\n                    <li>Have a glass of skimmed milk and peas poha for breakfast on the fifth day.</li>\n                    <li>Eat a missi roti with low fat paneer curry in the afternoon.</li>\n                    <li>End the day with roti, curd and aloo baingan tamatar ki sabzi.</li>\n                    </ul>\n                    <table align=\"center\" style=\"text-align: center;\">\n                      <tbody>\n                      <tr>\n                      <td><span style=\"font-weight: bold;\">Day 5</span></td>\n                      <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                      </tr>\n                      <tr>\n                      <td>6:30 AM</td>\n                      <td>Cucumber Detox Water(1 glass)</td>\n                      </tr>\n                      <tr>\n                      <td>8:00 AM</td>\n                      <td>Skimmed Milk(1 glass)Peas Poha(1.5 katori)</td>\n                      </tr>\n                      <tr>\n                      <td>12:00 PM</td>\n                      <td>Skimmed Milk Paneer(100 grams)</td>\n                      </tr>\n                      <tr>\n                      <td>2:00 PM</td>\n                      <td>Mixed Vegetable Salad(1 katori)</td>\n                      </tr>\n                      <tr>\n                      <td>2:10 PM</td>\n                      <td>Low Fat Paneer Curry(1.5 katori)Missi Roti(1 roti)</td>\n                      </tr>\n                      <tr>\n                      <td>4:00 PM</td>\n                      <td>Papaya(1 cup 1″ pieces)Buttermilk(1 glass)</td>\n                      </tr>\n                      <tr>\n                      <td>5:30 PM</td>\n                      <td>Tea with Less Sugar and Milk(1 teacup)</td>\n                      </tr>\n                      <tr>\n                      <td>8:50 PM</td>\n                      <td>Mixed Vegetable Salad(1 katori)</td>\n                      </tr>\n                      <tr>\n                      <td>9:00 PM</td>\n                      <td>Curd(1.5 katori)Aloo Baingan Tamatar Ki Sabzi(1 katori)<p></p>\n                      <p>Roti (1 roti/chapati)</p></td>\n                      </tr>\n                      </tbody>\n                      </table>\n                      <br><br>\n                      <h3><strong>Day 6:</strong></h3>\n                      <ul>\n                        <li>On Day 6, have idli with sambar for breakfast</li>\n                        <li>For lunch, roti with curd and aloo baingan tamatar ki sabzi</li>\n                        <li>To end Day 6, eat green gram with roti and bhindi sabzi</li>\n                        </ul>\n                        <table align=\"center\" style=\"text-align: center;\">\n                          <tbody>\n                          <tr>\n                          <td><span style=\"font-weight: bold;\">Day 6</span></td>\n                          <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                          </tr>\n                          <tr>\n                          <td>6:30 AM</td>\n                          <td>Cucumber Detox Water(1 glass)</td>\n                          </tr>\n                          <tr>\n                          <td>8:00 AM</td>\n                          <td>Mixed Sambar(1 bowl)Idli(2 idli)</td>\n                          </tr>\n                          <tr>\n                          <td>12:00 PM</td>\n                          <td>Skimmed Milk Paneer(100 grams)</td>\n                          </tr>\n                          <tr>\n                          <td>2:00 PM</td>\n                          <td>Mixed Vegetable Salad(1 katori)</td>\n                          </tr>\n                          <tr>\n                          <td>2:10 PM</td>\n                          <td>Curd(1.5 katori)Aloo Baingan Tamatar Ki Sabzi(1 katori)<p></p>\n                          <p>Roti (1 roti/chapati)</p></td>\n                          </tr>\n                          <tr>\n                          <td>4:00 PM</td>\n                          <td>Cut Fruits(1 cup)Buttermilk(1 glass)</td>\n                          </tr>\n                          <tr>\n                          <td>5:30 PM</td>\n                          <td>Coffee with Milk and Less Sugar(0.5 tea cup)</td>\n                          </tr>\n                          <tr>\n                          <td>8:50 PM</td>\n                          <td>Mixed Vegetable Salad(1 katori)</td>\n                          </tr>\n                          <tr>\n                          <td>9:00 PM</td>\n                          <td>Green Gram Whole Dal Cooked(1 katori)Bhindi sabzi(1 katori)<p></p>\n                          <p>Roti (1 roti/chapati)</p></td>\n                          </tr>\n                          </tbody>\n                          </table>\n                          <br><br>\n                          <h3><strong>Day 7:</strong></h3>\n                          <ul>\n                            <li>On the seventh day, start with besan chilla and green garlic chutney.</li>\n                            <li>Have steamed rice and palak chole for lunch.</li>\n                            <li>End the week on a healthy note with low fat paneer curry and missi roti.</li>\n                            </ul>\n                            <table align=\"center\" style=\"text-align: center;\">\n                              <tbody>\n                              <tr>\n                              <td><span style=\"font-weight: bold;\">Day 7</span></td>\n                              <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                              </tr>\n                              <tr>\n                              <td>6:30 AM</td>\n                              <td>Cucumber Detox Water(1 glass)</td>\n                              </tr>\n                              <tr>\n                              <td>8:00 AM</td>\n                              <td>Besan Chilla(2 cheela)Green Garlic Chutney(3 tablespoon)</td>\n                              </tr>\n                              <tr>\n                              <td>12:00 PM</td>\n                              <td>Skimmed Milk Paneer(100 grams)</td>\n                              </tr>\n                              <tr>\n                              <td>2:00 PM</td>\n                              <td>Mixed Vegetable Salad(1 katori)</td>\n                              </tr>\n                              <tr>\n                              <td>2:10 PM</td>\n                              <td>Palak Chole(1 bowl)Steamed Rice(0.5 katori)</td>\n                              </tr>\n                              <tr>\n                              <td>4:00 PM</td>\n                              <td>Apple(0.5 small (2-3/4″ dia))Buttermilk(1 glass)</td>\n                              </tr>\n                              <tr>\n                              <td>5:30 PM</td>\n                              <td>Tea with Less Sugar and Milk(1 teacup)</td>\n                              </tr>\n                              <tr>\n                              <td>8:50 PM</td>\n                              <td>Mixed Vegetable Salad(1 katori)</td>\n                              </tr>\n                              <tr>\n                              <td>9:00 PM</td>\n                              <td>Low Fat Paneer Curry(1 katori)Missi Roti(1 roti)</td>\n                              </tr>\n                              </tbody>\n                              </table>  \n                              </div>\n                              <div *ngIf = \"flagmuscle==1\">\n                                <h2 style=\"text-align: center;\" id=\"diet-plan\"><b>Muscle Building Workout Plan</b></h2>\n  <br><br>\n  \n  <h3><strong>Monday - Chest</strong></h3>\n    <table align=\"center\" style=\"text-align: center;\">\n      <tbody>\n      <tr>\n      <td><span style=\"font-weight: bold;\">Exercise</span></td>\n      <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n      </tr>\n      <tr>\n      <td>Push Ups (Wide Grip)</td>\n      <td>2</td>\n      </tr>\n      <tr>\n        <td>Bench Press</td>\n        <td>4</td>\n      </tr>\n      <tr>\n        <td>Incline Dumbbell Press</td>\n        <td>3</td>\n      </tr>\n      <tr>\n        <td>Chest Flys</td>\n        <td>3</td>\n      </tr>\n      <tr>\n        <td>Chest Press</td>\n        <td>3</td>\n      </tr>\n      <tr>\n        <td>Pec-Dec Flys</td>\n        <td>3</td>\n      </tr>\n      \n      </tbody>\n      </table>\n      <br><br> \n      <h3><strong>Tuesday - Back</strong></h3>\n        <table align=\"center\" style=\"text-align: center;\">\n          <tbody>\n            <tr>\n            <td><span style=\"font-weight: bold;\">Exercise</span></td>\n            <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n            </tr>\n            <tr>\n            <td>Pull Ups (Wide Grip)</td>\n            <td>2</td>\n            </tr>\n            <tr>\n              <td>Lat Pull Downs</td>\n              <td>3</td>\n            </tr>\n            <tr>\n              <td>Seated Rows</td>\n              <td>3</td>\n            </tr>\n            <tr>\n              <td>Straight Arm Push Downs</td>\n              <td>3</td>\n            </tr>\n            <tr>\n              <td>Barbell Rows</td>\n              <td>3</td>\n            </tr>\n            <tr>\n              <td>Dumbbell Pullovers</td>\n              <td>2</td>\n            </tr>\n            \n            </tbody>\n          </table>\n          <br><br>     \n          <h3><strong>Wednesday - Shoulders</strong></h3>\n  \n            <table align=\"center\" style=\"text-align: center;\">\n              <tbody>\n                <tr>\n                <td><span style=\"font-weight: bold;\">Exercise</span></td>\n                <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n                </tr>\n                <tr>\n                  <td>Dumbbell Press</td>\n                  <td>4</td>\n                </tr>\n                <tr>\n                  <td>Front Raises</td>\n                  <td>3</td>\n                </tr>\n                <tr>\n                  <td>Lateral Raises</td>\n                  <td>3</td>\n                </tr>\n                <tr>\n                  <td>Rear Delt Flys</td>\n                  <td>3</td>\n                </tr>\n                <tr>\n                  <td>Shrugs</td>\n                  <td>3</td>\n                </tr>\n                \n                </tbody>\n              </table>\n              <br><br>\n              <h3><strong>Thursday - Arms</strong></h3>\n  \n                <table align=\"center\" style=\"text-align: center;\">\n                  <tbody>\n                    <tr>\n                    <td><span style=\"font-weight: bold;\">Exercise</span></td>\n                    <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n                    </tr>\n                    <tr>\n                    <td>Barbell Curls</td>\n                    <td>4</td>\n                    </tr>\n                    <tr>\n                      <td>Cable Curls (Close Grip)</td>\n                      <td>3</td>\n                    </tr>\n                    <tr>\n                      <td>Hammer Curls</td>\n                      <td>3</td>\n                    </tr>\n                    <tr>\n                      <td>Tricep Push Downs</td>\n                      <td>4</td>\n                    </tr>\n                    <tr>\n                      <td>Overhead Extensions</td>\n                      <td>3</td>\n                    </tr>\n                    <tr>\n                      <td>Bench Dips</td>\n                      <td>3</td>\n                    </tr>\n                    \n                    </tbody>\n                  </table>\n                  <br><br>\n                  <h3><strong>Friday - Legs</strong></h3>\n  \n                    <table align=\"center\" style=\"text-align: center;\">\n                      <tbody>\n                        <tr>\n                        <td><span style=\"font-weight: bold;\">Exercise</span></td>\n                        <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n                        </tr>\n                        <tr>\n                        <td>Squats</td>\n                        <td>4</td>\n                        </tr>\n                        <tr>\n                          <td>Leg Extensions</td>\n                          <td>3</td>\n                        </tr>\n                        <tr>\n                          <td>Weighted Lunges</td>\n                          <td>3</td>\n                        </tr>\n                        <tr>\n                          <td>Leg Curls</td>\n                          <td>3</td>\n                        </tr>\n                        <tr>\n                          <td>Calf Raises</td>\n                          <td>4</td>\n                        </tr>\n                        \n                        </tbody>\n                      </table>\n                      <br><br>\n                              \n                              </div>\n                              <br><br><br>  \n                              <hr class=\"laalhr\">               \n                          </div>\n                         \n                          <footer class=\"footer-area section-gap\">\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-lg-3  col-md-6 col-sm-6\">\n                                        <div class=\"single-footer-widget\">\n                                            <h4>About Us</h4>\n                                            <p>\n                                                Sidakdeep Singh\n                                            <br>Jatinvir Singh\n                                            <br>Jaspreet Singh\n                                            <br>Ishika Sindhi\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-lg-4  col-md-6 col-sm-6\">\n                                        <div class=\"single-footer-widget\">\n                                            <h4>Contact Us</h4>\n                                            \n                                            <p class=\"number\">\n                                                +91 7973245205 <br>\n                                                +91 9915902685\n                                            </p>\n                                        </div>\n                                    </div>\t\t\t\t\t\t\n                                    <div class=\"col-lg-5  col-md-6 col-sm-6\">\n                                        <div class=\"single-footer-widget\">\n                                            <h4>Newsletter</h4>\n                                            <p>You can trust us. we only send  offers, not a single spam.</p>\n                                            <div class=\"d-flex flex-row\" id=\"mc_embed_signup\">\n                        \n                        \n                                                  <form class=\"navbar-form\" novalidate=\"true\">\n                                                    <div class=\"input-group add-on\">\n                                                          <input class=\"form-control\" name=\"EMAIL\" placeholder=\"Email address\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Email address'\" required=\"\" type=\"email\">\n                                                        <div style=\"position: absolute; left: -5000px;\">\n                                                            <input name=\"b_36c4fd991d266f23781ded980_aefe40901a\" tabindex=\"-1\" value=\"\" type=\"text\">\n                                                        </div>\n                                                      <div class=\"input-group-btn\">\n                                                        <button (click)=\"subs()\" class=\"genric-btn\"><span class=\"lnr lnr-arrow-right\"></span></button>\n                                                      </div>\n                                                    </div>\n                                                      <div class=\"info mt-20\"></div>\t\t\t\t\t\t\t\t\t    \n                                                  </form>\n                                            </div>\n                                        </div>\n                                    </div>\t\t\t\t\t\t\n                                </div>\n                                <div class=\"footer-bottom row\">\n                                    <p class=\"footer-text m-0 col-lg-6\">\n                                        \n                                    </p>\n                                    <div class=\"footer-social col-lg-6\">\n                                      <a target=\"_blank\" href=\"https://www.facebook.com\"><i class=\"fa fa-facebook\"></i></a>\n                                      <a target=\"_blank\" href=\"https://twitter.com/home\"><i class=\"fa fa-twitter\"></i></a>\n                                      <a title=\"Click here to chat with the bot\" (click)=\"chatbot()\"><i class=\"fa fa-wechat\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </footer>\t\n                       \n                      </div>             \n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/basiclogin/basiclogin.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basiclogin/basiclogin.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBasicloginBasicloginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class = \"kaim\" style = \"text-align: center;\" mat-dialog-title>Beginner Login</h1>\n<mat-dialog-content class=\"mat-typography\">\n          <form class=\"example-form\" (ngSubmit) = \"onAddPost(loginForm)\" #loginForm = \"ngForm\">\n            <div>\n              <mat-form-field class=\"example-full-width\">\n                <mat-label>Email</mat-label>\n                <input matInput   type = \"email\" \n                 placeholder=\"Enter your email\"\n                 pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"\n                 required\n                 #email = \"ngModel\" ngModel name = \"email\">\n                 <mat-error *ngIf = \"email.invalid\">\n                  <mat-error *ngIf=\"email.errors.required\">\n                   Please enter your email\n                 </mat-error>\n                 <mat-error *ngIf=\"email.errors.pattern\">\n                   Please enter valid email\n                 </mat-error>\n                 </mat-error>\n                 </mat-form-field>\n            </div>\n            <br>\n            \n            \n            <div >\n              <mat-form-field class=\"example-full-width\">\n                <mat-label>Password</mat-label>\n                <input matInput  type = \"password\" \n                placeholder=\"Password\"\n                pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}\" \n                required showHideInput\n                 #password = \"ngModel\" ngModel name = \"password\">\n                 <mat-error *ngIf = \"password.invalid\">\n                  <mat-error *ngIf=\"password.errors.required\">\n                   Please enter your password\n                 </mat-error>\n                 <mat-error *ngIf=\"password.errors.pattern\">\n                  Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters\n                 </mat-error>\n               </mat-error>\n            </mat-form-field>\n            </div>\n            <br>\n            <div>\n            \n             </div>\n             <br>\n            \n          </form>\n   \n  \n</mat-dialog-content>\n    <mat-dialog-actions align=\"end\">\n        <button mat-button mat-dialog-close mat-stroked-button color=\"warn\" style=\"background-color: whitesmoke;\">Cancel</button>\n        <button mat-raised-button mat-dialog-close color=\"warn\"   class=\"example-button-row\"  (click)=\"onLogin(loginForm)\">Log In</button> <!--(click)=\"login()\"-->\n    </mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chatbot/chatbot.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatbot/chatbot.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatbotChatbotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p mat-dialog-title style=\"text-align: center;\">ChatFit AI</p>\n<mat-dialog-content class=\"mat-typography\">\n    \n    <h3 mat-dialog-content id=\"add_to_me\">Welcome to 3 Gymnesium Chat Support.</h3>\n    <br><br><br>\n</mat-dialog-content>\n\n<mat-dialog-actions  align='center'>\n   \n    <form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n            <div class=\"container\"> <input matInput type=\"text\" placeholder=\"Write here\" [(ngModel)]=\"chat\" [ngModelOptions]=\"{standalone: true}\" ></div></mat-form-field>\n        <button mat-raised-button color=\"primary\" class=\"example-button-row\"  (click)=\"kargall()\">Chat</button>\n    </form>\n\n</mat-dialog-actions>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/intermediate/intermediate.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intermediate/intermediate.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIntermediateIntermediateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class = \"bgchitta\">\n\n  <header id=\"header\" id=\"home\" >\n    <!-- <br> -->\n    <div class=\"container\" #home>\n        <br>\n        <div class=\"row header-top align-items-center\">\n            \n            <div class=\"col-lg-4 col-sm-4 menu-top-left\">\n                \n                <span>\n                    GET FIT WITH 3 GYMNESIUM. <br>\n                PLANNING IS ALL YOU NEED!\n                </span>\n            </div>\n            \n            <div class=\"col-lg-4 menu-top-middle justify-content-center d-flex\">\n                <a href=\"#\">\n                    <img class=\"img-fluid\" src=\"assets/img/logo.png\" alt=\"\">\t\n                </a>\n                \t\t    \t\t\t\n            </div>\n            <div class=\"col-lg-4 col-sm-4 menu-top-right\">\n                {{message}} &nbsp;&nbsp;&nbsp;\n                <a class=\"tel\" href=\"tel:+91 9915902685\">+91 9915902685</a>\n                <a  height=\"50px\" href=\"+91 9915902685\"><span class=\"lnr lnr-phone-handset\"></span></a> \n            </div>\n            \n        \n        </div>\n        <br>\n    </div>\t\n   \n  </header>\n\n\n\n  <slideshow  [height]=\"1000\"\n  [minHeight]=\"'600px'\"\n  [autoPlay]=\"true\"\n  [showArrows]=\"true\"\n  [showDots]=\"false\"\n  [imageUrls]=imageUrls\n  [disableSwiping]=false\n  [lazyLoad]=\"imageSources?.length > 1\"\n  [autoPlayWaitForLazyLoad]=\"true\">\n  </slideshow><br><br><br><br><br><br>\n  \n  <h2 style=\"text-align: center;\"><i title=\"Go Back to MainPage\" routerLink=\"/main\" class=\"i\" style=\"font-size:25px;\" > \n      {{quote[i]}}</i></h2>\n      <div class=\"container\">\n        <h1 style=\"text-align: center;\" id=\"diet-plan\" class=\"varjish\"><b>Workouts</b></h1>\n        <h1>Abs</h1>\n        <div class=\"row\">\n        <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic1()\" id='img1' src=\"assets/img/abs1.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Bent Knee Abdominal Hip Raises</p>\n            <div *ngIf=\"flag1==1\"><p (click)=\"hidepic1()\" class=\"exerciseInfo1\" ><strong>Muscles Targeted:</strong> The bent knee abdominal hip raises target the rectus abdominis which is the muscle group also known as the “abs”. Its helps to strengthen the lower and middle abdominals very well and is great for working the key muscles that help build up the core. The secondary muscles targeted in this exercise include the thighs and the hip flexors.</p>\n            <p (click)=\"hidepic1()\" class=\"exerciseInfo1\" ><strong>Exercise Instructions:</strong>Begin by lying on your back onto an exercise mat with your hands at your sides and your knees bent with your feet raised two inches off the floor. Bring your pelvis up and your knees up towards your chest, contracting your abdominals and hold for a 1-count. Return to the start position and repeat until failure.</p></div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic2()\" id='img2' src=\"assets/img/abs2.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Decline Abdominal Crunches </p>\n            <div *ngIf=\"flag2==1\"><p (click)=\"hidepic2()\" class=\"exerciseInfo2\" ><strong> Muscles Targeted:</strong> Decline abdominal crunches target the rectus abdominis, or abdominal muscles. In addition, you will work your hip flexors as a secondary muscle.</p>\n            <p (click)=\"hidepic2()\" class=\"exerciseInfo2\" ><strong> Exercise Instructions: </strong> Using a decline bench, position yourself with your feet locked in at the top. Place your hands on either side of your head, without locking your fingers. Raise your body slowly while you contract your abs. Crunch up, bringing your elbows to either side of your thighs. At the top of the movement, flex your abs for a one-count and then slowly lower your body back down to the starting position. Be sure to keep at least an inch or two of space between your back and the bench at the bottom of the movement. For more intensity, hold a weight plate across your chest for added resistance.</p></div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic3()\" id='img3' src=\"assets/img/abs3.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Reverse Decline Crunches</p>\n            <div *ngIf=\"flag3==1\"><p (click)=\"hidepic3()\" class=\"exerciseInfo3\" ><strong>Muscles Targeted: </strong> Reverse decline crunches help to keep your core stronger since it targets the most important muscles of the midsection. It works the rectus abdominis with a primary focus on the lower abdominal muscles. It extends from the chest area to the pelvis. Traditional crunches target mainly the middle and upper portion of abs. By performing reverse decline crunches, you are able to isolate the lower abs very well.</p>\n            <p (click)=\"hidepic3()\" class=\"exerciseInfo3\" ><strong>Exercise Instructions: </strong>Using a decline bench, lie on your back with your head at the top of the bench, near where your feet usually go. Next, hold the top of the bench with both hands. Hold your legs straight out together in the air, parallel to the floor using your abs to hold them there. Slowly bring your pelvis up and in towards your chest, having your abs control the movement. Slowly lower yourself back to the starting position while keeping constant tension on your abdominal muscles. </p></div>\n          </div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"row\">\n            <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic26()\" id='img26' src=\"assets/img/abs4.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Flat Bench Abdominal Leg Pull Ins</p>\n                <div *ngIf=\"flag26==1\"><p (click)=\"hidepic26()\" class=\"exerciseInfo26\" id='hidden'><strong>Muscles Targeted: </strong>The flat bench abdominal leg pull ins target your abdominal muscles (rectus abdominis) and provide minor tension to your hip flexors. This exercise works your lower abs very well, which provides a contrast to most ab exercises that place most of the resistance on the middle and upper abs.</p>\n                <p (click)=\"hidepic26()\" class=\"exerciseInfo26\" id='hidden'><strong>Exercise Instructions: </strong>Sit on a flat bench with your legs off the end. Place your hands to your sides, grasping the edge of the bench with each hand. Extend your legs straight out and lean your back at a 45 degree angle. Bring your knees in toward your midsection, making sure that your abs are doing the work in a slow and controlled fashion. Return to the starting position.</p>\n              </div>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic27()\" id='img27' src=\"assets/img/abs5.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Flat Bench Abdominal Leg Raises </p>\n                <div *ngIf=\"flag27==1\"><p (click)=\"hidepic27()\" class=\"exerciseInfo27\" id='hidden'><strong>Muscles Targeted:</strong> The main muscle groups targeted by the flat bench abdominal leg raises are the rectus abdominis, the internal abdominal obliques and the transverse abdominis which are three of the main components of the lower abdominal group. If additional movements or angles are added to this exercise, then other muscle groups can be added. This exercise can be performed anywhere with a flat bench and its perfect for anyone looking for an ab exercise they can do at home.</p>\n                <p (click)=\"hidepic27()\" class=\"exerciseInfo27\" id='hidden'><strong>Exercise Instructions: </strong>Lie flat on your back on a bench with your legs off the end, remaining parallel to the ground. Place your hands back next to your head and grab the edge of the bench. Keeping your legs as straight as possible, raise your legs as high as possible, making sure that your abs are doing the work. Lower legs back down to the start position and repeat.</p>\n            </div>  \n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic28()\" id='img28' src=\"assets/img/abs6.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Hanging Knees To Chin Raises</p>\n                <div *ngIf=\"flag28==1\"><p (click)=\"hidepic28()\" class=\"exerciseInfo28\" id='hidden'><strong>Muscles Targeted: </strong>All muscles in the core area are targeted with hanging knees to chin raises. The upper, middle, and lower abdominal regions work against gravity as the body crunches in an upward motion. This movement strengthens the muscles in these areas and also helps to stretch out the lower back. As the knees bend upward towards the chin, the hamstrings and quadriceps will also be engaged. The muscles in the forearms and shoulders will also build strength by simply hanging from the bar, which will also improve the participant’s grip strength over time.</p>\n                <p (click)=\"hidepic28()\" class=\"exerciseInfo28\" id='hidden'><strong>Exercise Instructions: </strong>Hang from a pullup bar with your knees slightly bent. Slowly raise your legs up and bring your knees up toward your chest. You should finish with your knees as for up as your chin at the top. Make sure to keep a tight grip and avoid swinging back and forth. Slowly lower your legs down and return to the starting position.</p>\n            </div>  \n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </div>\n        <h1>Back</h1>\n        <div class=\"row\">\n        <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic4()\" id='img4' src=\"assets/img/back1.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Pullups</p>\n            <div *ngIf=\"flag4==1\"><p (click)=\"hidepic4()\" class=\"exerciseInfo4\" ><strong>Muscles Targeted: </strong> Standard pull-ups, when performed properly, can hit up to six muscle groups on every repetition. Proper form when performing a pull-up requires no swinging or kipping, which is when you try to generate some momentum upwards by moving your legs. The obvious two muscle groups that pull-ups target are your biceps and lats (latissimus dorsi), which give you the broad look in your back. The biceps are not the only muscles in your arms that get a burn though. Your forearm muscles, depending on your grip, gets a great workout too. The shoulder muscles (deltoids) get a workout as well, with proper reps hitting your delts, traps and your rhomboids, which are the muscles by your scapula. The abdominal and pelvic floor muscles help stabilize your torso and legs during each rep. Lastly, your grip strength is improved when doing proper pull-ups by having to hold all your body weight during each rep.</p>\n            <p (click)=\"hidepic4()\" class=\"exerciseInfo4\" ><strong>Exercise Instructions:  </strong>To perform a pullup, grab onto a secure bar (or a machine) using an overhand grip with your hands just beyond shoulder width apart. Slowly lift your entire body upward as high as you can. Lower your body back down to the starting position and repeat with a slow and controlled tempo at all times. </p></div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic5()\" id='img5' src=\"assets/img/back2.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">V-Bar Pullups</p>\n            <div *ngIf=\"flag5==1\"><p (click)=\"hidepic5()\" class=\"exerciseInfo5\" ><strong>Muscles Targeted: </strong>V-bar pullups target your latissimus dorsi muscles (also known as “lats”) which are located along the sides of your back. This exercise also targets your bicep muscles, forearms and deltoids (shoulders) as secondary muscle groups. </p>\n           <p (click)=\"hidepic5()\" class=\"exerciseInfo5\" ><strong>Exercise Instructions: </strong>Grab a V-bar and place it on a pullup bar so that the handles of the V-bar are hanging over the sides so that you can grip it safely with both hands and support your body weight. Slowly pull your body up to the top and try to touch your chest to the pullup bar. Always use a slow and controlled tempo as you perform this exercise. Pause at the top for a brief moment and then slowly lower your body back down to the starting position and repeat until failure. </p></div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic6()\" id='img6' src=\"assets/img/back3.gif\" \n            width=\"300\" height=\"240\" >\n           <p style=\"text-align: center;\">Assisted Pull-Ups Machine</p>\n           <div *ngIf=\"flag6==1\"><p (click)=\"hidepic6()\" class=\"exerciseInfo6\" ><strong> Muscles Targeted:</strong>The movement involved during wide grip pull-ups is associated with the contraction of the latissimus dorsi or commonly called the “lats”. The contraction of the upper back enables the wide grip pull-ups to be performed in conjunction with the retraction of the scapula, leading the entire body to move up and down along one plane. Assisting the upper back and scapula throughout the exercise are the deltoid muscles (shoulders). The stability and effort coming from the shoulders continues the chain of movement for the upper back, especially during the initial pulling moment up to the final phase of this exercise. Wide grip pull-ups also use the secondary muscles of the arms and forearms to keep a firm grip throughout the entire exercise. </p>\n           <p (click)=\"hidepic6()\" class=\"exerciseInfo6\" ><strong>Exercise Instructions: </strong>Find a pull-up bar (or machine) and grab the bar using a secure overhand grip with your hands as wide apart as comfortably possible. Next, slowly pull your body up as high as possible and try to touch your chin to the pullup bar. Slowly return back down to the starting position and repeat. This is a difficult exercise so don’t get frustrated if you can only perform a few repetitions when you’re first starting out. </p></div>\n          </div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"row\">\n            <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic29()\" id='img29' src=\"assets/img/back4.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Hyperextensions</p>\n                <div *ngIf=\"flag29==1\"><p (click)=\"hidepic29()\" class=\"exerciseInfo29\" id='hidden'><strong>Muscles Targeted:</strong>Hyperextensions mainly target your lower back muscles consisting of the erector spinae which are the large paired muscles (known as “extensor muscles”) in the lower back that hold up the spine. This exercise also targets your hamstrings and glutes as secondary muscle groups.</p>\n                <p (click)=\"hidepic29()\" class=\"exerciseInfo29\" id='hidden'><strong>Exercise Instructions:</strong>Position yourself on a Roman Chair facing forward. If you are not sure what a Roman Chair is, ask a trainer at your gym to point one out to you. Cross your arms in front of your chest and slowly lower your upper body down and try to touch your nose to the floor. Once your torso is completely bent over and virtually perpendicular to the floor, slowly return to the starting position and repeat. Be sure that when you return to the starting position that you do not go past parallel and arch your back at the top.</p>\n            </div>  \n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic30()\"  id='img30' src=\"assets/img/back5.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Lying Back Presses</p>\n                <div *ngIf=\"flag30==1\"><p (click)=\"hidepic30()\" class=\"exerciseInfo30\" id='hidden'><strong>Muscles Targeted: </strong>The execution of lying back presses (also called “Supermans”) involves the contraction and direct movement from the quadratus lumborum or more commonly known as the lower back muscles of the lumbar spine. More importantly the erector spinae, which is the main muscle group responsible for keeping the spine erect also contributes into keeping the movement controlled. The latissimus dorsi or upper back muscles are also a key muscle group that keeps the movement of the lying back press more stable and it additionally helps the entire back throughout the movement.</p>\n                <p (click)=\"hidepic30()\" class=\"exerciseInfo30\" id='hidden'><strong>Exercise Instructions: </strong>Lie flat on your stomach onto a mat on the floor with your legs out straight and your arms outstretched over your head, parallel to the floor. To perform this exercise, simultaneously bring both of your hands up toward the ceiling as high as you can go while bringing your feet up off the ground as well. Imagine that your body is nearly forming the letter ‘U’ and you are flying like Superman!</p>\n            </div> \n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </div>\n        \n        <h1>Chest</h1>\n        <div class=\"row\">\n        <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic7()\" id='img7' src=\"assets/img/chest1.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Dips</p>\n            <div *ngIf=\"flag7==1\"><p (click)=\"hidepic7()\" class=\"exerciseInfo7\" ><strong>Exercise Advice: </strong> Firmly grasp the handles on the dip machine and raise your body up to the starting position. Your arms should be almost extended in the starting position but make sure to have a little bend in your arms to keep the tension on the triceps. Slowly lower your body downwards, keeping your elbows in at your sides. If you keep your elbows out, you will be working more of the pectoral muscles. You should lower yourself down so that your arms are in a 90 degree position as illustrated in the photo. Slowly raise your body back up to the starting position, while keeping your elbows in and tension on your triceps.</p></div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic8()\" id='img8' src=\"assets/img/chest2.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Narrow Grip Push Ups</p>\n            <div *ngIf=\"flag8==1\"><p (click)=\"hidepic8()\" class=\"exerciseInfo8\" ><strong>Exercise Advice: </strong> This exercise is your basic pushup, but with varying widths of hand positioning. For the close hand position, you are going to place your hands on the ground about 2 inches apart and perform regular pushups until failure. For the wide hand position, you will perform the exact same exercise, but your hands will be on the ground as far apart from one another as possible while still allowing you to execute the pushup.</p></div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic9()\" id='img9' src=\"assets/img/chest3.gif\" \n            width=\"300\" height=\"240\" >\n           <p style=\"text-align: center;\">Pushups</p>\n           <div *ngIf=\"flag9==1\"><p (click)=\"hidepic9()\" class=\"exerciseInfo9\" ><strong>Muscles Targeted: </strong> Push-ups are one of the simplest yet one of the most beneficial bodyweight exercises that can be performed virtually anywhere in order to gain both strength and size in the upper body. While performing push-ups, you will be using your own body weight without the need for any equipment or machines. The upper body and the core work together while performing this exercise and the key muscles utilized include:</p>\n           <p (click)=\"hidepic9()\" class=\"exerciseInfo9\" ><strong>Primary Muscles – Pectoralis Major </strong>These are the primary muscles that the push-up targets. The pectoralis major muscles, more specifically the muscles called sternal heads, make up the bulk of the chest. The pectoralis major muscles are commonly referred to as “pecs” and they are the primary muscles targeted when doing this pressing movement. Having strength in the pecs helps you perform a variety of movements which includes the internal rotation and extension of your shoulder. </p></div>\n          </div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"row\">\n            <div  class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic31()\" id='img31' src=\"assets/img/chest4.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Declined Push Ups</p>\n                <div *ngIf=\"flag31==1\"><p (click)=\"hidepic31()\" class=\"exerciseInfo31\" id='hidden'><strong>Exercise Advice: </strong>This is a regular pushup except that your feet will be lying across a flat bench. Be sure that when you are executing this movement that you keep your back very straight and flat. You can use varying degrees of hand widths as well when performing this exercise.</p>\n                </div>\n                </div>\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <div  class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic32()\" id='img32' src=\"assets/img/chest5.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Isometric Chest Presses</p>\n                <div *ngIf=\"flag32==1\"><p (click)=\"hidepic32()\" class=\"exerciseInfo32\" id='hidden'><strong>Exercise Advice: </strong>You can either stand or sit (with your back upright) to perform this exercise. Simply clasp your hands together and push them together as hard as you can for at least 10-15 seconds, focusing on completely flexing your pec muscles the entire time. Relax and repeat.</p>\n            </div>  \n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </div>\n        \n        <h1>Triceps</h1>\n        <div class=\"row\">\n        <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic10()\" id='img10' src=\"assets/img/tricep1.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Bench Dips</p>\n            <div *ngIf=\"flag10==1\"><p (click)=\"hidepic10()\" class=\"exerciseInfo10\" ><strong>Exercise Advice: </strong> Position your hands shoulder width apart on a secured bench. Move your feet out as far out in front of you as possible. Straighten out your arms and keep a little bend in your elbows in order to always keep tension on your triceps and off your elbow joints. Slowly lower your upper body down towards the floor and keep your elbows tucked into your sides. Once you reach the bottom of the movement, slowly press off with your hands and push yourself back up to the starting position with your triceps.</p></div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic11()\" id='img11' src=\"assets/img/tricep2.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Dips</p>\n            <div *ngIf=\"flag11==1\"><p (click)=\"hidepic11()\" class=\"exerciseInfo11\" ><strong>Exercise Advice: </strong>Firmly grasp the handles on the dip machine and raise your body up to the starting position. Your arms should be almost extended in the starting position but make sure to have a little bend in your arms to keep the tension on the triceps. Slowly lower your body downwards, keeping your elbows in at your sides. If you keep your elbows out, you will be working more of the pectoral muscles. You should lower yourself down so that your arms are in a 90 degree position as illustrated in the photo. Slowly raise your body back up to the starting position, while keeping your elbows in and tension on your triceps. </p></div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic12()\" id='img12' src=\"assets/img/tricep3.gif\" \n            width=\"300\" height=\"240\" >\n           <p style=\"text-align: center;\">Close Grip Pushups</p>\n           <div *ngIf=\"flag12==1\"><p (click)=\"hidepic12()\" class=\"exerciseInfo12\" ><strong> Exercise Advice: </strong> This exercise is your basic pushup, but with your hands positioned close together. As you lower your body down, make sure to keep your elbows in to keep all the tension on the triceps muscle. If you let your elbows turn out, you will be working more of the pectoral muscles (chest) than your triceps. Push up to the starting position while keeping your elbows in during the entire range of the movement.</p></div>\n          </div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"row\">\n            <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic33()\" id='img33' src=\"assets/img/tricep4.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Bent Over Two Arm Dumbbell Extension</p>\n                <div *ngIf=\"flag33==1\"><p (click)=\"hidepic33()\" class=\"exerciseInfo33\" id='hidden'><strong>Exercise Advice: </strong>While standing and holding two dumbbells, slowly lean over at the waist. Keep your arms tucked into your sides at a 90 degree angle. Slowly extend both arms out while keeping your elbows in a fixed position and close to your sides. Make sure to keep all of the tension directly on your triceps as you extend your arms out to the top position. Slowly lower the dumbbells back to the starting position and repeat for a certain number of repetitions.</p>\n                </div>\n                </div>\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic34()\" id='img34' src=\"assets/img/tricep5.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Cable Lying Extensions </p>\n                <div *ngIf=\"flag34==1\"><p (click)=\"hidepic34()\" class=\"exerciseInfo34\" id='hidden'><strong>Exercise Advice: </strong>Position flat bench in line with a cable machine. Attach a straight bar to the bottom part of the cable machine. Lay flat on your back on the bench. In this position, the best thing is to have someone hand you the straight bar but if you are training solo, reach back and grab the straight bar from the cable machine. Hold the straight bar with your palms up and position the bar just above your head with your elbow in. Slowly extend your arms upwards, keeping your elbows in and flexing your triceps at the top of the movement. Slowly lower the bar back to the starting position while always keeping your elbow in.</p>\n                </div>\n                </div>\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic35()\" id='img35' src=\"assets/img/tricep6.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Decline Dumbbell Extensions</p>\n                <div *ngIf=\"flag35==1\"><p (click)=\"hidepic35()\" class=\"exerciseInfo35\" id='hidden'><strong>Exercise Advice: </strong>Position yourself on a decline bench and lay back completely flat. Have someone carefully hand you two dumbbells and position them above your head with your palms facing each other and your arms straightened out. Make sure to always keep a little bend in your arms to keep tension on the triceps muscle. Slowly lower both dumbbells to a few inches above your eyes and focus on keeping your elbows in towards you throughout the movement. Finally, extend your arms back up the starting position while keeping your elbows in.</p>\n                </div>\n                </div>\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </div>\n        \n        <h1>Hamstrings</h1>\n        <div class=\"row\">\n        <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic13()\" id='img13' src=\"assets/img/hamstring1.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Elastic Band Kickbacks</p>\n            <div *ngIf=\"flag13==1\"><p (click)=\"hidepic13()\" class=\"exerciseInfo13\" ><strong>Exercise Instructions:</strong>This exercise is similar to the one-legged cable kickbacks except that you will be using an elastic exercise band. Keeping your leg straight, smoothly kick your heel backward about one foot. Hold your leg at the top of this movement for a one-count. Slowly lower your leg back to the starting position and repeat. </p></div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic14()\" id='img14' src=\"assets/img/hamstring2.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Exercise Ball Curls</p>\n            <div *ngIf=\"flag14==1\"><p (click)=\"hidepic14()\" class=\"exerciseInfo14\" id='hidden'><strong>Exercise Instructions: </strong>Lie on your back on a mat on the floor and place your heels on the front upper edge of a large exercise ball. By doing this, your back will actually be lifted off of the floor and only your upper back and the back of your shoulders will be on the floor. In a slow and controlled fashion, bring your heels toward your body so as to roll the exercise ball underneath your legs. Move your heels and the exercise ball about 6 – 12 inches and then return your legs to the fully extended start position. Repeat until you have performed the desired amount of repetitions. </p></div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic15()\" id='img15' src=\"assets/img/hamstring3.gif\" \n            width=\"300\" height=\"240\" >\n           <p style=\"text-align: center;\">Lying Leg Curls</p>\n           <div *ngIf=\"flag15==1\"><p (click)=\"hidepic15()\" class=\"exerciseInfo15\" id='hidden'><strong>Exercise Instructions:</strong> This exercise is also known as hamstring curls. Lie on your stomach on the hamstring machine. If you are not sure how to position yourself, simply ask a trainer at your gym to assist you. Begin by curling the weight upward so as to touch your heels to your butt. Return to the start position in a slow and controlled fashion and repeat.</p>\n           </div> \n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        </div>\n        <div class=\"row\">\n            <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic36()\" id='img36' src=\"assets/img/hamstring4.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Barbell Romanian Deadlifts</p>\n                <div *ngIf=\"flag36==1\"><p (click)=\"hidepic36()\" class=\"exerciseInfo36\" id='hidden'><strong>Exercise Instructions: </strong>Grab a barbell with both hands using an overhand grip about shoulder width apart and let the barbell hang down in front of your body. Begin this movement by bending at your hips to lower the barbell to the floor and bend knees during the descent. It is very important to keep your back straight and rigid throughout this exercise and let your hamstrings and butt do all the work.</p>\n                </div>\n                </div>\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic37()\" id='img37' src=\"assets/img/hamstring5.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Seated Leg Curls </p>\n                <div *ngIf=\"flag37==1\"><p (click)=\"hidepic37()\" class=\"exerciseInfo37\" id='hidden'><strong>Exercise Instructions: </strong>This is another version of hamstring curls. The difference with this exercise is that you are in a seated position when you execute the movement. If you are not sure how to position yourself, simply ask a trainer at your gym to assist you. Simply bring the weight down toward the ground so as to try to touch your heels to the back of your hamstrings. Slowly return to the start position and repeat.</p>\n              </div>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic38()\" id='img38' src=\"assets/img/hamstring6.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Smith Machine Stiff Leg Deadlifts</p>\n                <div *ngIf=\"flag38==1\"><p (click)=\"hidepic38()\" class=\"exerciseInfo38\" id='hidden'><strong>Exercise Instructions: </strong>Using the Smith Machine, grab the barbell with both hands using an overhand grip about shoulder width apart and let the barbell hang down in front of your body. Begin this movement by bending at the waist and lowering the barbell to the floor. Be sure to keep your legs as straight as possible (a slight bend is ok) and really let the weight of the barbell bring you down. On the way up, really focus on your butt and hamstrings to pull the weight back up. It is very important to keep your back straight and rigid throughout this exercise and to let your legs and butt do the work.</p>\n              </div>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </div>\n        \n        <h1>Gluteus</h1>\n        <div class=\"row\">\n        <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic16()\" id='img16' src=\"assets/img/butt1.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Dumbbell Bench Step Ups</p>\n            <div *ngIf=\"flag16==1\"><p (click)=\"hidepic16()\" class=\"exerciseInfo16\" id='hidden'><strong> Exercise Advice: </strong>Stand next to a flat bench with dumbbells in each hand hanging at your sides. Step up onto the bench with one foot and then bring up the other foot so that you end up standing on the bench with both feet. To return to the floor, carefully step backward off of the bench with the same foot you started with. Repeat the movement with the opposite foot first and alternate for 10 repetitions on each leg. </p>\n            </div>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic17()\" id='img17' src=\"assets/img/butt2.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Single Dumbbell Plie Squat</p>\n            <div *ngIf=\"flag17==1\"><p (click)=\"hidepic17()\" class=\"exerciseInfo17\" id='hidden'><strong>Exercise Instructions:</strong>Stand next to a flat bench with a dumbbell in each hand hanging at your sides. Step up onto the bench with one foot and then bring up the other foot so that you end up standing on the bench with both feet. To return to the floor, carefully step backward off of the bench with the same foot you started with. Repeat the movement with the opposite foot first and alternate for 10 repetitions on each leg. </p>\n            </div>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic18()\" id='img18' src=\"assets/img/butt3.gif\" \n            width=\"300\" height=\"240\" >\n           <p style=\"text-align: center;\">Walking Dumbbell Lunge</p>\n           <div *ngIf=\"flag18==1\"><p (click)=\"hidepic18()\" class=\"exerciseInfo18\" id='hidden'><strong>Exercise Instructions: </strong>Grab a dumbbell in each hand and find an area where you can walk for about 20 feet unobstructed. Beginning with one foot, simply stride forward (walk) as far as you comfortably can while keeping the dumbbells hanging down at your sides. It is very important that when you plant your striding foot that your knee stays perpendicular to the floor and does not extend past that point. Continue to alternate strides for 10 steps on each leg. </p>\n           </div>  \n        </div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"row\">\n            <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic39()\" id='img39' src=\"assets/img/butt4.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Leg Press</p>\n                <div *ngIf=\"flag39==1\"><p (click)=\"hidepic39()\" class=\"exerciseInfo39\" id='hidden'><strong>Exercise Instructions: </strong>Be sure to check with a trainer at your gym to assist you with how to properly use the leg press machine if you are not familiar with it. Position yourself on the leg press machine with your feet firmly on the platform just beyond shoulder width apart. Lower the platform by slowly bringing your knees to your chest. Next, press the platform upward in an explosive fashion and repeat.</p>\n             </div>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic40()\" id='img40' src=\"assets/img/butt5.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Exercise Ball Leg Raises</p>\n                <div *ngIf=\"flag40==1\"><p (click)=\"hidepic40()\" class=\"exerciseInfo40\" id='hidden'><strong>Exercise Instructions: </strong>Lie on your side on a mat on the floor with your arms crossed in front of your body. Place a large exercise ball in between your feet and slowly lift the ball up toward the ceiling using only your hips and butt. Return to the start position and repeat.</p>\n              </div>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic41()\" id='img41' src=\"assets/img/butt6.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Glute Kickbacks</p>\n                <div *ngIf=\"flag41==1\"><p (click)=\"hidepic41()\" class=\"exerciseInfo41\" id='hidden'><strong>Exercise Instructions: </strong>Get on your hands and knees on a mat on the floor with your back parallel to the ground. In a controlled motion, thrust one of your feet backwards as though you are kicking like a horse. Be sure to really flex your butt for a one-count when your leg is fully extended back behind you. Return to the start position and repeat with the opposite leg.</p>\n              </div>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </div>\n        \n        <h1>Forearms</h1>\n        <div class=\"row\">\n        <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic19()\" id='img19' src=\"assets/img/forearm1.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Two Arm Palms Down Wrist Curls</p>\n            <div *ngIf=\"flag19==1\"><p (click)=\"hidepic19()\" class=\"exerciseInfo19\" id='hidden'><strong>Exercise Advice:</strong>Kneel next to a flat bench and lay your forearms across the bench while holding a two dumbbells palms down. Using only your hands and wrists, lift the dumbbells up toward the ceiling as high as possible, keeping your forearms flat on the bench. When you return to the start position, allow the dumbbells to come down to the starting position and then repeat. </p>\n            </div>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic20()\" id='img20' src=\"assets/img/forearm2.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Two Arm Palms Up Wrist Curls</p>\n            <div *ngIf=\"flag20==1\"><p (click)=\"hidepic20()\" class=\"exerciseInfo20\" id='hidden'><strong>Exercise Advice: </strong>Kneel next to a flat bench and lay your forearms across the bench while holding a two dumbbells palms up. Using only your hands and wrists, curl the dumbbells up toward the ceiling as high as possible, keeping your forearms flat on the bench. When you return to the start position, allow the dumbbells to roll all the way down into your fingertips and then repeat. </p>\n          </div>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic21()\" id='img21' src=\"assets/img/forearm3.gif\" \n            width=\"300\" height=\"240\" >\n           <p style=\"text-align: center;\">Reverse Barbell Preacher Curls</p>\n           <div *ngIf=\"flag21==1\"><p (click)=\"hidepic21()\" class=\"exerciseInfo21\" id='hidden'><strong>Exercise Advice: </strong>Using a preacher curl machine, grab an EZ curl bar with both hands, palms down. Using an overhand grip, simply curl the bar up toward your chin. Slowly return to the start position and repeat. </p>\n           </div>  \n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        </div>\n        \n        <h1>Biceps</h1>\n        <div class=\"row\">\n        <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic22()\" id='img22' src=\"assets/img/bicep1.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Chin Ups</p>\n            <div *ngIf=\"flag22==1\"><p (click)=\"hidepic22()\"  class=\"exerciseInfo22\" id='hidden'><strong>Muscles Targeted:  </strong>Chin ups, also called “underhand pull-ups” are the perfect bodyweight exercise for your biceps and they target every major muscle group in the back including the latissimus dorsi (lats) and rear deltoids. They also work the spinal erectors and abdominals with some slight variations. Because chin ups are a pulling exercise, they require a high level of grip strength therefore adding functional strength and muscle to the forearms and hands. If you are a beginner and you are unable to do a regular pull-up, doing chin ups should allow you to gain the amount of strength needed to accomplish a pull-up.  </p>\n            <p (click)=\"hidepic22()\"  class=\"exerciseInfo\" id='hidden'><strong>Exercise Instructions: </strong>Find a secure bar to hang from that allows you to safely place all of your body weight onto it. Begin by either grabbing the bar or jumping up to grab it and securely grip the bar with both hands using an underhand grip. Place your hands at a width that you feel comfortable with and let your body naturally hang down with your arms extended. Bend your knees and pick your feet up off the ground if necessary to clear your feet from the ground. Slowly pull yourself up until your upper chest is close to your elbows with your chin level with the bar. Pause and slowly lower yourself down to the starting position and repeat for the desired number of reps. </p>\n        </div>  \n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic23()\" id='img23' src=\"assets/img/bicep2.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Seated Dumbbell Curls</p>\n            <div *ngIf=\"flag23==1\"><p (click)=\"hidepic23()\" class=\"exerciseInfo23\" id='hidden'><strong>Muscles Targeted:  </strong>This exercise targets the brachialis which lies beneath the biceps muscle, the brachioradialis (forearms), and the biceps brachii (2 heads of the biceps). These three individual muscles all make up the upper arm. Using this exercise results in a total biceps workout. The forearms are mainly targeted as a secondary muscle group along with the anterior deltoids but their involvement will be minimal when this exercise is performed properly. </p>\n            <p (click)=\"hidepic23()\" class=\"exerciseInfo\" id='hidden'><strong> Exercise Instructions:</strong>Sit at the end of a flat bench, or a seated utility bench with back support, and place your feet flat on the floor for stability with your back upright, shoulders back and your chest out. Grab a dumbbell with each hand using an overhand grip and let your arms hang down naturally at your sides with both palms facing inward toward the bench. Simultaneously curl the dumbbells up while twisting (supinating) your wrists upwards on the way up. Be sure to squeeze your biceps at the top for a one-count and then slowly return the dumbbells back down to the starting position and repeat. </p>\n        </div>  \n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic24()\" id='img24' src=\"assets/img/bicep3.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">EZ Bar Preacher Curls</p>\n            <div *ngIf=\"flag24==1\"><p (click)=\"hidepic24()\" class=\"exerciseInfo24\" id='hidden'><strong>Muscles Targeted: </strong>The EZ bar preacher curl is an exercise that is used strictly for isolating the muscles of the upper arm. This is not a compound exercise that works many muscle groups across multiple joints. This exercise strictly targets your biceps and your forearms along with improving wrist and grip strength. You can increase the stress on your forearms by grabbing the inner bar with an overhand grip (palms down) for a reverse EZ bar preacher curl. The stabilizing muscles include the anterior deltoids (front shoulders). </p>\n            <p (click)=\"hidepic24()\" class=\"exerciseInfo24\" id='hidden'><strong>Exercise Instructions: </strong>Using a regular preacher bench, grab an EZ Curl bar with both hands using an underhand grip (palms facing upwards). Slowly curl the bar up to the top and bring it a few inches from your chin. Return the weight back down with a slow and controlled tempo to the starting position allowing some resistance (negative) on the way back down. Repeat the movement for the desired number of repetitions. </p>\n        </div>  \n        </div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"row\">\n            <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic42()\" id='img42' src=\"assets/img/bicep4.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Hammer Dumbbell Curls</p>\n                <div *ngIf=\"flag42==1\"><p (click)=\"hidepic42()\" class=\"exerciseInfo42\" id='hidden'><strong>Muscles Targeted: </strong>Hammer dumbbell curls primarily target the biceps brachii (2 headed muscle of the upper arm) brachioradialis (forearms) and the brachialis (front of the upper arm). The secondary muscle groups targeted include the anterior deltoids, and to a lesser extent, the coracobrachialis and upper pectorals.</p>\n                <p (click)=\"hidepic42()\" class=\"exerciseInfo42\" id='hidden'><strong>Exercise Instructions: </strong>This is virtually the same exercise as the dumbbell biceps curls except that you keep your wrists in a fixed or locked position throughout the movement with no supination (twisting of the wrists). You can perform this exercise by either standing or sitting on a bench, whichever you prefer. Grab a dumbbell in each hand with a secure grip and let your arms hang naturally down at your sides. Slowly curl the dumbbells simultaneously up to the top. While you are performing the movement, keep your wrists locked with your thumbs pointing up. Be sure to squeeze your biceps for a one-count at the top of the movement. Slowly lower the dumbbell back down to the starting position and repeat.</p>\n              </div>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic43()\" id='img43' src=\"assets/img/bicep5.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Incline Angled Dumbbell Curls</p>\n                <div *ngIf=\"flag43==1\"><p (click)=\"hidepic43()\" class=\"exerciseInfo43\" id='hidden'><strong>Muscles Targeted: </strong>Incline angle dumbbell curls target the bicep muscles and the forearms. They also hit the anterior deltoids (front of shoulders) as a secondary stabilizer muscle group. This exercise also brings in the short head of the biceps (inner head) and allows a maximum stretch in the muscle as the arms are extended slightly behind the body.</p>\n                <p (click)=\"hidepic43()\" class=\"exerciseInfo43\" id='hidden'><strong>Exercise Instructions: </strong>Adjust a bench to about 45 degrees. Grab a pair of dumbbells and carefully lie back on the bench while holding a dumbbell in each hand. Simultaneously, curl the dumbbells up and out with both hands, slowly turning (supinating) your wrists outward as you raise the dumbbells. Keep your back flat against the bench at all times. Slowly return the dumbbells back down to the starting position and repeat.</p>\n              </div>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <div class=\"column\" id=\"polaroid\" >\n                <img (click)=\"loadpic44()\" id='img44' src=\"assets/img/bicep6.gif\" \n                 width=\"300\" height=\"240\" >\n                <p style=\"text-align: center;\">Seated Angled Dumbbell Curls</p>\n                <div *ngIf=\"flag44==1\"><p (click)=\"hidepic44()\" class=\"exerciseInfo44\" id='hidden'><strong>Muscles Targeted: </strong>Seated angled dumbbell curls is a very effective exercise for the development of your biceps. This exercise targets the biceps brachii muscles that are composed of a short head and a long head, with the emphasis on the short head located on the inner portion of the arm due to the angled nature of the forearms and wrist position during the execution. The brachialis muscle is also impacted and is located between the biceps and the triceps. The brachioradialis muscle which is in the forearm near the elbow is also targeted when the elbow is bent to bring the hand up to the shoulder during upwards portion of the curl.</p>\n                <p (click)=\"hidepic44()\" class=\"exerciseInfo44\" id='hidden'><strong>Exercise Instructions: </strong>This exercise is very similar to the regular seated dumbbell curls except that you will be angling your forearms outward on the upper portion of the exercise. Grasp a dumbbell in each hand and sit at the end of a bench (ideally a seated utility bench with back support) with your feet securely placed on the floor for stability. Simultaneously curl the dumbbells up and out with both hands, slowly turning (supinating) your wrists outward as you raise the dumbbells up to the top. Slowly return to dumbbells back down to the starting position and try to maximize the eccentric “negative” portion to add additional tension on your biceps.</p>\n              </div>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </div>\n        \n        <h1>Quadriceps</h1>\n        <div class=\"row\">\n        <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic25()\" id='img25' src=\"assets/img/quad1.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Jump Squats</p>\n            <div *ngIf=\"flag25==1\"><p (click)=\"hidepic25()\" class=\"exerciseInfo25\" id='hidden'><strong>Exercise Advice: </strong>Start in a deep squat position with your folded out in front of your body. From this position, explosively jump up as high as you can and reach for the ceiling with your hands as you jump. Repeat this until failure. </p>\n            </div>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic45()\" id='img45' src=\"assets/img/quad2.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Barbell Bench Squats </p>\n            <div *ngIf=\"flag45==1\"><p (click)=\"hidepic45()\"  class=\"exerciseInfo45\" id='hidden'><strong>Muscles Targeted: </strong>The squat exercise targets so many different muscles of the lower body and it’s one of the most important compound movements to include in your weight training program. The primary muscle group it targets is the quadriceps which are the 4 muscles on the front of your thighs. This exercise also hits the hamstrings (back of legs), gluteus maximus (butt) and also strengthens the secondary muscles of the lower back.</p>\n            <p (click)=\"hidepic45()\"  class=\"exerciseInfo45\" id='hidden'><strong>Exercise Instructions: </strong>Stand in an area just in front of a squat rack and place a flat bench right behind where you are standing. Place a barbell behind your neck (on your trapezius muscles) and securely rest it on your shoulders. Your feet should be just beyond shoulder width apart. Begin this exercise by squatting to sit down on the bench behind you. Slowly lower the weight down and softly touch your butt onto the bench for a second and then return to the starting position. It is very important that you keep your back as straight as possible throughout this movement. One way to help do this is to keep your shoulders back and your chest out while focusing your eyes on a spot in front of you throughout the entire exercise.</p>\n          </div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <div class=\"column\" id=\"polaroid\" >\n            <img (click)=\"loadpic46()\" id='img46' src=\"assets/img/quad3.gif\" \n             width=\"300\" height=\"240\" >\n            <p style=\"text-align: center;\">Dumbbell Squats</p>\n            <div *ngIf=\"flag46==1\"><p (click)=\"hidepic46()\"  class=\"exerciseInfo46\" id='hidden'><strong>Muscles Targeted: </strong>The dumbbell squat is a highly effective exercise which helps develop the major muscles of the lower body. These muscles include the quadriceps (4 large muscles on the front of the thighs), the hamstrings (back of thighs), the gluteus maximum (butt muscles) and the calves (lower part of the leg). This is one of the best exercises you can use if you want to build muscle and strength in your legs.</p>\n            <p (click)=\"hidepic46()\"  class=\"exerciseInfo46\" id='hidden'><strong>Exercise Instructions: </strong>Stand up straight and place your feet at about shoulder width apart. Grab a dumbbell in both hands and let them naturally hang at your sides. Begin by squatting as though you are going to sit down in a chair while keeping your back flat and your chest out while looking straight ahead. At the bottom of the squat, your legs should be about parallel to the ground. If you don’t have the range of motion or flexibility to go to parallel then don’t. Return to the starting position by pushing off the feet and back up. Be sure to keep your back upright and straight throughout this exercise and keep your overall balance to ensure you maintain a safe and athletic stance.</p>\n          </div>\n        </div>\n        </div>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<br><br><br>\n<div class=\"example-button-row\">\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n\n\n<button (click) = \"dietPlan()\" mat-raised-button color=\"basic\" class = \"plan\">Diet Plan</button>\n&nbsp;&nbsp;&nbsp;&nbsp;\n<button (click) = \"dietPlan()\" mat-raised-button color=\"warn\" class = \"plan\">Workout Plan</button>\n&nbsp;&nbsp;&nbsp;&nbsp;\n<a class=\"vich\" (click)=\"scroll(nutritionfact)\">  <button (click) = \"food()\" mat-raised-button color=\"primary\" class = \"plan\">Nutrition Facts</button></a>\n\n<br><br><br><br><br>\n<div #nutritionfact>\n  <div *ngIf=\"flagnutri==1\">\n  <h1 class = \"suppguide2\" style=\"text-align: center;\" id=\"titlerec\"></h1>\n  \n  <br>\n  <img class=\"center\" id=\"image\" width=\"400px\">\n  <br>\n  <h2 class = \"sg4\" style=\"text-align: center;\" id=\"fcontent1\"></h2>\n  <br>\n  <h2 class = \"sg4\" style=\"text-align: center;\" id=\"ul1\"></h2>\n  <br>\n  <ul>\n      <li ><p id=\"li1\"></p></li>\n      <li ><p id=\"li2\"></p></li>\n      <li ><p id=\"li3\"></p></li>\n      <li ><p id=\"li4\"></p></li>\n      <li ><p id=\"li5\"></p></li>\n      </ul>\n  </div>  \n     </div> \n\n</div>  \n  \n<br><br><br>\n<div *ngIf = \"flagweight==1\">\n  <h2 style=\"text-align: center;\" id=\"diet-plan\"><b>Fat Loss Diet Plan</b></h2>\n  <p>A lot can be spoken about what goes into an ideal diet chart. However, one’s nutritional requirement varies based on various factors. It could change depending on gender, for example, male dietary requirements vary from that of a female. Geography can play a role as well, with North Indian diets being largely different from South Indian ones. Meal preferences come into play since the consumption of food by a vegetarian or a vegan differing largely from that by a non-vegetarian.</p> \n  <p>However, we have put together a diet plan for weight loss with Indian food. This 7 day diet plan, 1200 calorie diet plan is a sample, and should not be followed by any individual without consulting with a nutritionist.</p>\n  <br><br><h3><strong>Day 1:</strong></h3>\n  <ul>\n    <li>After starting your day with cucumber water, have oats porridge and mixed nuts for breakfast.</li>\n    <li>Have a roti with dal and gajar matar sabzi for lunch.</li>\n    <li>Follow that up with dal and lauki sabzi to go with a roti for dinner.</li>\n    </ul>\n  \n    <table align=\"center\" style=\"text-align: center;\">\n      <tbody>\n      <tr>\n      <td><span style=\"font-weight: bold;\">Day 1</span></td>\n      <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n      </tr>\n      <tr>\n      <td>6:30 AM</td>\n      <td>Cucumber Detox Water(1 glass)</td>\n      </tr>\n      <tr>\n      <td>8:00 AM</td>\n      <td>Oats Porridge in Skimmed Milk(1 bowl)<p></p>\n      <p>Mixed Nuts(25 grams)</p></td>\n      </tr>\n      <tr>\n      <td>12:00 PM</td>\n      <td>Skimmed Milk Paneer(100 grams)</td>\n      </tr>\n      <tr>\n      <td>2:00 PM</td>\n      <td>Mixed Vegetable Salad(1 katori)</td>\n      </tr>\n      <tr>\n      <td>2:10 PM</td>\n      <td>Dal(1 katori)Gajar Matar Sabzi(1 katori)<p></p>\n      <p>Roti (1 roti/chapati)</p></td>\n      </tr>\n      <tr>\n      <td>4:00 PM</td>\n      <td>Cut Fruits(1 cup)Buttermilk(1 glass)</td>\n      </tr>\n      <tr>\n      <td>5:30 PM</td>\n      <td>Tea with Less Sugar and Milk(1 teacup)</td>\n      </tr>\n      <tr>\n      <td>8:50 PM</td>\n      <td>Mixed Vegetable Salad(1 katori)</td>\n      </tr>\n      <tr>\n      <td>9:00 PM</td>\n      <td>Dal(1 katori)Lauki Sabzi(1 katori)<p></p>\n      <p>Roti (1 roti/chapati)</p></td>\n      </tr>\n      </tbody>\n      </table> \n      <br><br>\n      <h3><strong>Day 2:</strong></h3>\n      <ul>\n        <li>On the second day, eat a mixed vegetable stuffed roti with curd for breakfast.</li>\n        <li>For lunch, have half a katori of methi rice along with lentil curry.</li>\n        <li>End your day with sauteed vegetables and green chutney.</li>\n        </ul>\n        <table align=\"center\" style=\"text-align: center;\">\n          <tbody>\n          <tr>\n          <td><span style=\"font-weight: bold;\">Day 2</span></td>\n          <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n          </tr>\n          <tr>\n          <td>6:30 AM</td>\n          <td>Cucumber Detox Water(1 glass)</td>\n          </tr>\n          <tr>\n          <td>8:00 AM</td>\n          <td>Curd(1.5 katori)Mixed Vegetable Stuffed Roti(2 piece)</td>\n          </tr>\n          <tr>\n          <td>12:00 PM</td>\n          <td>Skimmed Milk Paneer(100 grams)</td>\n          </tr>\n          <tr>\n          <td>2:00 PM</td>\n          <td>Mixed Vegetable Salad(1 katori)</td>\n          </tr>\n          <tr>\n          <td>2:10 PM</td>\n          <td>Lentil Curry(0.75 bowl)Methi Rice(0.5 katori)</td>\n          </tr>\n          <tr>\n          <td>4:00 PM</td>\n          <td>Apple(0.5 small (2-3/4″ dia))Buttermilk(1 glass)</td>\n          </tr>\n          <tr>\n          <td>5:30 PM</td>\n          <td>Coffee with Milk and Less Sugar(0.5 tea cup)</td>\n          </tr>\n          <tr>\n          <td>8:50 PM</td>\n          <td>Mixed Vegetable Salad(1 katori)</td>\n          </tr>\n          <tr>\n          <td>9:00 PM</td>\n          <td>Sauteed Vegetables with Paneer(1 katori)Roti (1 roti/chapati)<p></p>\n          <p>Green Chutney(2 tablespoon)</p></td>\n          </tr>\n          </tbody>\n          </table>\n          <br><br>    \n          <h3><strong>Day 3:</strong></h3>\n          <ul>\n            <li>Breakfast on day 3 would include Multigrain Toast and Skim Milk Yogurt.</li>\n            <li>In the afternoon, have sauteed vegetables with paneer and some green chutney.</li>\n            <li>Half a katori of methi rice and some lentil curry to make sure you end the day on a healthy note.</li>\n            </ul>\n            <table align=\"center\" style=\"text-align: center;\">\n              <tbody>\n              <tr>\n              <td><span style=\"font-weight: bold;\">Day 3</span></td>\n              <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n              </tr>\n              <tr>\n              <td>6:30 AM</td>\n              <td>Cucumber Detox Water(1 glass)</td>\n              </tr>\n              <tr>\n              <td>8:00 AM</td>\n              <td>Skim Milk Yoghurt(1 cup (8 fl oz))Multigrain Toast(2 toast)</td>\n              </tr>\n              <tr>\n              <td>12:00 PM</td>\n              <td>Skimmed Milk Paneer(100 grams)</td>\n              </tr>\n              <tr>\n              <td>2:00 PM</td>\n              <td>Mixed Vegetable Salad(1 katori)</td>\n              </tr>\n              <tr>\n              <td>2:10 PM</td>\n              <td>Sauteed Vegetables with Paneer(1 katori)Roti (1 roti/chapati)<p></p>\n              <p>Green Chutney(2 tablespoon)</p></td>\n              </tr>\n              <tr>\n              <td>4:00 PM</td>\n              <td>Banana(0.5 small (6″ to 6-7/8″ long))Buttermilk(1 glass)</td>\n              </tr>\n              <tr>\n              <td>5:30 PM</td>\n              <td>Tea with Less Sugar and Milk(1 teacup)</td>\n              </tr>\n              <tr>\n              <td>8:50 PM</td>\n              <td>Mixed Vegetable Salad(1 katori)</td>\n              </tr>\n              <tr>\n              <td>9:00 PM</td>\n              <td>Lentil Curry(0.75 bowl)Methi Rice(0.5 katori)</td>\n              </tr>\n              </tbody>\n              </table>\n              <br><br>\n              <h3><strong>Day 4:</strong></h3>\n              <ul>\n                <li>Start Day 4 with a Fruit and Nuts Yogurt Smoothie and Egg Omelette</li>\n                <li>Follow that up with Moong Dal, Bhindi Sabzi, and roti.</li>\n                <li>Complete the day’s food intake with steamed rice and palak chole.</li>\n                </ul>\n                <table align=\"center\" style=\"text-align: center;\">\n                  <tbody>\n                  <tr>\n                  <td><span style=\"font-weight: bold;\">Day 4</span></td>\n                  <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                  </tr>\n                  <tr>\n                  <td>6:30 AM</td>\n                  <td>Cucumber Detox Water(1 glass)</td>\n                  </tr>\n                  <tr>\n                  <td>8:00 AM</td>\n                  <td>Fruit and Nuts Yogurt Smoothie(0.75 glass)<p></p>\n                  <p>Egg Omelette(1 serve(one egg))</p></td>\n                  </tr>\n                  <tr>\n                  <td>12:00 PM</td>\n                  <td>Skimmed Milk Paneer(100 grams)</td>\n                  </tr>\n                  <tr>\n                  <td>2:00 PM</td>\n                  <td>Mixed Vegetable Salad(1 katori)</td>\n                  </tr>\n                  <tr>\n                  <td>2:10 PM</td>\n                  <td>Green Gram Whole Dal Cooked(1 katori)Bhindi sabzi(1 katori)<p></p>\n                  <p>Roti (1 roti/chapati)</p></td>\n                  </tr>\n                  <tr>\n                  <td>4:00 PM</td>\n                  <td>Orange(1 fruit (2-5/8″ dia))Buttermilk(1 glass)</td>\n                  </tr>\n                  <tr>\n                  <td>5:30 PM</td>\n                  <td>Coffee with Milk and Less Sugar(0.5 tea cup)</td>\n                  </tr>\n                  <tr>\n                  <td>8:50 PM</td>\n                  <td>Mixed Vegetable Salad(1 katori)</td>\n                  </tr>\n                  <tr>\n                  <td>9:00 PM</td>\n                  <td>Palak Chole(1 bowl)Steamed Rice(0.5 katori)</td>\n                  </tr>\n                  </tbody>\n                  </table>\n                  <br><br>\n                  <h3><strong>Day 5:</strong></h3>\n                  <ul>\n                    <li>Have a glass of skimmed milk and peas poha for breakfast on the fifth day.</li>\n                    <li>Eat a missi roti with low fat paneer curry in the afternoon.</li>\n                    <li>End the day with roti, curd and aloo baingan tamatar ki sabzi.</li>\n                    </ul>\n                    <table align=\"center\" style=\"text-align: center;\">\n                      <tbody>\n                      <tr>\n                      <td><span style=\"font-weight: bold;\">Day 5</span></td>\n                      <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                      </tr>\n                      <tr>\n                      <td>6:30 AM</td>\n                      <td>Cucumber Detox Water(1 glass)</td>\n                      </tr>\n                      <tr>\n                      <td>8:00 AM</td>\n                      <td>Skimmed Milk(1 glass)Peas Poha(1.5 katori)</td>\n                      </tr>\n                      <tr>\n                      <td>12:00 PM</td>\n                      <td>Skimmed Milk Paneer(100 grams)</td>\n                      </tr>\n                      <tr>\n                      <td>2:00 PM</td>\n                      <td>Mixed Vegetable Salad(1 katori)</td>\n                      </tr>\n                      <tr>\n                      <td>2:10 PM</td>\n                      <td>Low Fat Paneer Curry(1.5 katori)Missi Roti(1 roti)</td>\n                      </tr>\n                      <tr>\n                      <td>4:00 PM</td>\n                      <td>Papaya(1 cup 1″ pieces)Buttermilk(1 glass)</td>\n                      </tr>\n                      <tr>\n                      <td>5:30 PM</td>\n                      <td>Tea with Less Sugar and Milk(1 teacup)</td>\n                      </tr>\n                      <tr>\n                      <td>8:50 PM</td>\n                      <td>Mixed Vegetable Salad(1 katori)</td>\n                      </tr>\n                      <tr>\n                      <td>9:00 PM</td>\n                      <td>Curd(1.5 katori)Aloo Baingan Tamatar Ki Sabzi(1 katori)<p></p>\n                      <p>Roti (1 roti/chapati)</p></td>\n                      </tr>\n                      </tbody>\n                      </table>\n                      <br><br>\n                      <h3><strong>Day 6:</strong></h3>\n                      <ul>\n                        <li>On Day 6, have idli with sambar for breakfast</li>\n                        <li>For lunch, roti with curd and aloo baingan tamatar ki sabzi</li>\n                        <li>To end Day 6, eat green gram with roti and bhindi sabzi</li>\n                        </ul>\n                        <table align=\"center\" style=\"text-align: center;\">\n                          <tbody>\n                          <tr>\n                          <td><span style=\"font-weight: bold;\">Day 6</span></td>\n                          <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                          </tr>\n                          <tr>\n                          <td>6:30 AM</td>\n                          <td>Cucumber Detox Water(1 glass)</td>\n                          </tr>\n                          <tr>\n                          <td>8:00 AM</td>\n                          <td>Mixed Sambar(1 bowl)Idli(2 idli)</td>\n                          </tr>\n                          <tr>\n                          <td>12:00 PM</td>\n                          <td>Skimmed Milk Paneer(100 grams)</td>\n                          </tr>\n                          <tr>\n                          <td>2:00 PM</td>\n                          <td>Mixed Vegetable Salad(1 katori)</td>\n                          </tr>\n                          <tr>\n                          <td>2:10 PM</td>\n                          <td>Curd(1.5 katori)Aloo Baingan Tamatar Ki Sabzi(1 katori)<p></p>\n                          <p>Roti (1 roti/chapati)</p></td>\n                          </tr>\n                          <tr>\n                          <td>4:00 PM</td>\n                          <td>Cut Fruits(1 cup)Buttermilk(1 glass)</td>\n                          </tr>\n                          <tr>\n                          <td>5:30 PM</td>\n                          <td>Coffee with Milk and Less Sugar(0.5 tea cup)</td>\n                          </tr>\n                          <tr>\n                          <td>8:50 PM</td>\n                          <td>Mixed Vegetable Salad(1 katori)</td>\n                          </tr>\n                          <tr>\n                          <td>9:00 PM</td>\n                          <td>Green Gram Whole Dal Cooked(1 katori)Bhindi sabzi(1 katori)<p></p>\n                          <p>Roti (1 roti/chapati)</p></td>\n                          </tr>\n                          </tbody>\n                          </table>\n                          <br><br>\n                          <h3><strong>Day 7:</strong></h3>\n                          <ul>\n                            <li>On the seventh day, start with besan chilla and green garlic chutney.</li>\n                            <li>Have steamed rice and palak chole for lunch.</li>\n                            <li>End the week on a healthy note with low fat paneer curry and missi roti.</li>\n                            </ul>\n                            <table align=\"center\" style=\"text-align: center;\">\n                              <tbody>\n                              <tr>\n                              <td><span style=\"font-weight: bold;\">Day 7</span></td>\n                              <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                              </tr>\n                              <tr>\n                              <td>6:30 AM</td>\n                              <td>Cucumber Detox Water(1 glass)</td>\n                              </tr>\n                              <tr>\n                              <td>8:00 AM</td>\n                              <td>Besan Chilla(2 cheela)Green Garlic Chutney(3 tablespoon)</td>\n                              </tr>\n                              <tr>\n                              <td>12:00 PM</td>\n                              <td>Skimmed Milk Paneer(100 grams)</td>\n                              </tr>\n                              <tr>\n                              <td>2:00 PM</td>\n                              <td>Mixed Vegetable Salad(1 katori)</td>\n                              </tr>\n                              <tr>\n                              <td>2:10 PM</td>\n                              <td>Palak Chole(1 bowl)Steamed Rice(0.5 katori)</td>\n                              </tr>\n                              <tr>\n                              <td>4:00 PM</td>\n                              <td>Apple(0.5 small (2-3/4″ dia))Buttermilk(1 glass)</td>\n                              </tr>\n                              <tr>\n                              <td>5:30 PM</td>\n                              <td>Tea with Less Sugar and Milk(1 teacup)</td>\n                              </tr>\n                              <tr>\n                              <td>8:50 PM</td>\n                              <td>Mixed Vegetable Salad(1 katori)</td>\n                              </tr>\n                              <tr>\n                              <td>9:00 PM</td>\n                              <td>Low Fat Paneer Curry(1 katori)Missi Roti(1 roti)</td>\n                              </tr>\n                              </tbody>\n                              </table>  \n                              </div>\n                              <div *ngIf = \"flagmuscle==1\">\n                                <h2 style=\"text-align: center;\" id=\"diet-plan\"><b>Muscle Building Workout Plan</b></h2>\n  <br><br>\n  \n  <h3><strong>Monday - Chest</strong></h3>\n    <table align=\"center\" style=\"text-align: center;\">\n      <tbody>\n      <tr>\n      <td><span style=\"font-weight: bold;\">Exercise</span></td>\n      <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n      </tr>\n      <tr>\n      <td>Push Ups (Wide Grip)</td>\n      <td>2</td>\n      </tr>\n      <tr>\n        <td>Bench Press</td>\n        <td>4</td>\n      </tr>\n      <tr>\n        <td>Incline Dumbbell Press</td>\n        <td>3</td>\n      </tr>\n      <tr>\n        <td>Chest Flys</td>\n        <td>3</td>\n      </tr>\n      <tr>\n        <td>Chest Press</td>\n        <td>3</td>\n      </tr>\n      <tr>\n        <td>Pec-Dec Flys</td>\n        <td>3</td>\n      </tr>\n      \n      </tbody>\n      </table>\n      <br><br> \n      <h3><strong>Tuesday - Back</strong></h3>\n        <table align=\"center\" style=\"text-align: center;\">\n          <tbody>\n            <tr>\n            <td><span style=\"font-weight: bold;\">Exercise</span></td>\n            <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n            </tr>\n            <tr>\n            <td>Pull Ups (Wide Grip)</td>\n            <td>2</td>\n            </tr>\n            <tr>\n              <td>Lat Pull Downs</td>\n              <td>3</td>\n            </tr>\n            <tr>\n              <td>Seated Rows</td>\n              <td>3</td>\n            </tr>\n            <tr>\n              <td>Straight Arm Push Downs</td>\n              <td>3</td>\n            </tr>\n            <tr>\n              <td>Barbell Rows</td>\n              <td>3</td>\n            </tr>\n            <tr>\n              <td>Dumbbell Pullovers</td>\n              <td>2</td>\n            </tr>\n            \n            </tbody>\n          </table>\n          <br><br>     \n          <h3><strong>Wednesday - Shoulders</strong></h3>\n  \n            <table align=\"center\" style=\"text-align: center;\">\n              <tbody>\n                <tr>\n                <td><span style=\"font-weight: bold;\">Exercise</span></td>\n                <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n                </tr>\n                <tr>\n                  <td>Dumbbell Press</td>\n                  <td>4</td>\n                </tr>\n                <tr>\n                  <td>Front Raises</td>\n                  <td>3</td>\n                </tr>\n                <tr>\n                  <td>Lateral Raises</td>\n                  <td>3</td>\n                </tr>\n                <tr>\n                  <td>Rear Delt Flys</td>\n                  <td>3</td>\n                </tr>\n                <tr>\n                  <td>Shrugs</td>\n                  <td>3</td>\n                </tr>\n                \n                </tbody>\n              </table>\n              <br><br>\n              <h3><strong>Thursday - Arms</strong></h3>\n  \n                <table align=\"center\" style=\"text-align: center;\">\n                  <tbody>\n                    <tr>\n                    <td><span style=\"font-weight: bold;\">Exercise</span></td>\n                    <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n                    </tr>\n                    <tr>\n                    <td>Barbell Curls</td>\n                    <td>4</td>\n                    </tr>\n                    <tr>\n                      <td>Cable Curls (Close Grip)</td>\n                      <td>3</td>\n                    </tr>\n                    <tr>\n                      <td>Hammer Curls</td>\n                      <td>3</td>\n                    </tr>\n                    <tr>\n                      <td>Tricep Push Downs</td>\n                      <td>4</td>\n                    </tr>\n                    <tr>\n                      <td>Overhead Extensions</td>\n                      <td>3</td>\n                    </tr>\n                    <tr>\n                      <td>Bench Dips</td>\n                      <td>3</td>\n                    </tr>\n                    \n                    </tbody>\n                  </table>\n                  <br><br>\n                  <h3><strong>Friday - Legs</strong></h3>\n  \n                    <table align=\"center\" style=\"text-align: center;\">\n                      <tbody>\n                        <tr>\n                        <td><span style=\"font-weight: bold;\">Exercise</span></td>\n                        <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n                        </tr>\n                        <tr>\n                        <td>Squats</td>\n                        <td>4</td>\n                        </tr>\n                        <tr>\n                          <td>Leg Extensions</td>\n                          <td>3</td>\n                        </tr>\n                        <tr>\n                          <td>Weighted Lunges</td>\n                          <td>3</td>\n                        </tr>\n                        <tr>\n                          <td>Leg Curls</td>\n                          <td>3</td>\n                        </tr>\n                        <tr>\n                          <td>Calf Raises</td>\n                          <td>4</td>\n                        </tr>\n                        \n                        </tbody>\n                      </table>\n                      <br><br>\n                              \n                              </div>                                                 \n<hr class=\"laalhr\">               \n</div>\n\n<footer class=\"footer-area section-gap\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-lg-3  col-md-6 col-sm-6\">\n              <div class=\"single-footer-widget\">\n                  <h4>About Us</h4>\n                  <p>\n                      Sidakdeep Singh\n                  <br>Jatinvir Singh\n                  <br>Jaspreet Singh\n                  <br>Ishika Sindhi\n                  </p>\n              </div>\n          </div>\n          <div class=\"col-lg-4  col-md-6 col-sm-6\">\n              <div class=\"single-footer-widget\">\n                  <h4>Contact Us</h4>\n                  \n                  <p class=\"number\">\n                      +91 7973245205 <br>\n                      +91 9915902685\n                  </p>\n              </div>\n          </div>\t\t\t\t\t\t\n          <div class=\"col-lg-5  col-md-6 col-sm-6\">\n              <div class=\"single-footer-widget\">\n                  <h4>Newsletter</h4>\n                  <p>You can trust us. we only send  offers, not a single spam.</p>\n                  <div class=\"d-flex flex-row\" id=\"mc_embed_signup\">\n\n\n                        <form class=\"navbar-form\" novalidate=\"true\">\n                          <div class=\"input-group add-on\">\n                                <input [(ngModel)]=\"newsletter\" class=\"form-control\" name=\"EMAIL\" placeholder=\"Email address\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Email address'\" required=\"\" type=\"email\">\n                              <div style=\"position: absolute; left: -5000px;\">\n                                  <input name=\"b_36c4fd991d266f23781ded980_aefe40901a\" tabindex=\"-1\" value=\"\" type=\"text\">\n                              </div>\n                            <div class=\"input-group-btn\">\n                              <button (click)=\"subs()\" class=\"genric-btn\"><span class=\"lnr lnr-arrow-right\"></span></button>\n                            </div>\n                          </div>\n                            <div class=\"info mt-20\"></div>\t\t\t\t\t\t\t\t\t    \n                        </form>\n                  </div>\n              </div>\n          </div>\t\t\t\t\t\t\n      </div>\n      <div class=\"footer-bottom row\">\n          <p class=\"footer-text m-0 col-lg-6\">\n              \n          </p>\n          <div class=\"footer-social col-lg-6\">\n            <a target=\"_blank\" href=\"https://www.facebook.com\"><i class=\"fa fa-facebook\"></i></a>\n            <a target=\"_blank\" href=\"https://twitter.com/home\"><i class=\"fa fa-twitter\"></i></a>\n            <a title=\"Click here to chat with the bot\" (click)=\"chatbot()\"><i class=\"fa fa-wechat\"></i></a>\n          </div>\n      </div>\n  </div>\n</footer>\t\n\n</div>             \n\n                       \n                        \n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/intermediatelogin/intermediatelogin.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intermediatelogin/intermediatelogin.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIntermediateloginIntermediateloginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class = \"kaim\" style = \"text-align: center;\" mat-dialog-title>Intermediate Login</h1>\n<mat-dialog-content class=\"mat-typography\">\n          <form class=\"example-form\" (ngSubmit) = \"onAddPost(loginForm)\" #loginForm = \"ngForm\">\n            <div>\n              <mat-form-field class=\"example-full-width\">\n                <mat-label>Email</mat-label>\n                <input matInput   type = \"email\" \n                 placeholder=\"Enter your email\"\n                 pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"\n                 required\n                 #email = \"ngModel\" ngModel name = \"email\">\n                 <mat-error *ngIf = \"email.invalid\">\n                  <mat-error *ngIf=\"email.errors.required\">\n                   Please enter your email\n                 </mat-error>\n                 <mat-error *ngIf=\"email.errors.pattern\">\n                   Please enter valid email\n                 </mat-error>\n                 </mat-error>\n                 </mat-form-field>\n            </div>\n            <br>\n            \n            \n            <div >\n              <mat-form-field class=\"example-full-width\">\n                <mat-label>Password</mat-label>\n                <input matInput  type = \"password\" \n                placeholder=\"Password\"\n                pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}\" \n                required showHideInput\n                 #password = \"ngModel\" ngModel name = \"password\">\n                 <mat-error *ngIf = \"password.invalid\">\n                  <mat-error *ngIf=\"password.errors.required\">\n                   Please enter your password\n                 </mat-error>\n                 <mat-error *ngIf=\"password.errors.pattern\">\n                  Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters\n                 </mat-error>\n               </mat-error>\n            </mat-form-field>\n            </div>\n            <br>\n            <div>\n            \n             </div>\n             <br>\n            \n          </form>\n   \n  \n</mat-dialog-content>\n    <mat-dialog-actions align=\"end\">\n        <button mat-button mat-dialog-close mat-stroked-button color=\"warn\" style=\"background-color: whitesmoke;\">Cancel</button>\n        <button mat-raised-button mat-dialog-close color=\"warn\"   class=\"example-button-row\"  (click)=\"onLogin(loginForm)\">Log In</button> <!--(click)=\"login()\"-->\n    </mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mainpage/mainpage.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainpage/mainpage.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainpageMainpageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- #header -->\n\n<header id=\"header\" id=\"home\" >\n    <!-- <br> -->\n    <div class=\"container\" #home>\n        <br>\n        <div class=\"row header-top align-items-center\">\n            \n            <div class=\"col-lg-4 col-sm-4 menu-top-left\">\n                \n                <span>\n                    GET FIT WITH 3 GYMNESIUM. <br>\n                PLANNING IS ALL YOU NEED!\n                </span>\n            </div>\n            \n            <div class=\"col-lg-4 menu-top-middle justify-content-center d-flex\">\n                <a href=\"#\">\n                    <img class=\"img-fluid\" src=\"assets/img/logo.png\" alt=\"\">\t\n                </a>\n                \t\t    \t\t\t\n            </div>\n            <div class=\"col-lg-4 col-sm-4 menu-top-right\">\n                <a class=\"tel\" href=\"tel:+91 9915902685\">+91 9915902685</a>\n                <a  height=\"50px\" href=\"tel:+91 9915902685\"><span class=\"lnr lnr-phone-handset\"></span></a> \n            </div>\n            \n        \n        </div>\n        <br>\n    </div>\t\n        <hr>\n    <div class=\"container\">\t\n        <div class=\"row align-items-center justify-content-center d-flex\">\n          <nav id=\"nav-menu-container\">\n            <ul class=\"nav-menu\">\n              <li class=\"menu-active\"><a (click)=\"scroll(home)\">Home</a></li>\n              <li><a (click)=\"scroll(offer)\">we offer</a></li>\n              <li><a (click)=\"scroll(topcourse)\">Top Course</a></li>\t\t\t\t          \n              <li><a (click)=\"scroll(schedule)\">Schedule</a></li>\n              <li><a (click)=\"scroll(trainer)\">Trainers</a></li>\n              <li><a (click)=\"scroll(plan)\">Plans</a></li>\n              <li> <a (click)=\"scroll(home)\" [matMenuTriggerFor]=\"belowMenu\">Display</a></li>\n                \n                <li><a (click)=\"scroll(home)\" [matMenuTriggerFor]=\"belowMenu1\">Delete</a></li>\n                \n            </ul>\n          </nav><!-- #nav-menu-container -->\t\t    \t\t\n        </div>\n    </div>\n  </header>\n  <mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\n    <button mat-menu-item (click)=\"findbyna()\">Display a user</button>\n    <button mat-menu-item (click)=\"show()\">Display all users</button>\n  </mat-menu>\n  <mat-menu #belowMenu1=\"matMenu\" yPosition=\"below\">\n    <button mat-menu-item (click)=\"delbyname()\">Delete a user</button>\n    <button mat-menu-item (click)=\"deleteUsers()\">Delete all users</button>\n  </mat-menu>\n\n\n  <!-- <form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Favorite food</mat-label>\n      <input matInput placeholder=\"Ex. Pizza\" value=\"Sushi\">\n    </mat-form-field>\n  \n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Leave a comment</mat-label>\n      <textarea matInput placeholder=\"Ex. It makes me feel...\"></textarea>\n    </mat-form-field>\n  </form> -->\n\n\n\n<div  class=\"tableclass\" *ngIf=\"flagshow==1\">\n    <div class=\"container\">\n    <table id=\"customers\">\n        <tr *ngIf=\"flag==1\">\n          <th ><font size=\"20px\">Name</font></th>\n          <th ><font size=\"20px\">Email</font></th>\n          <th ><font size=\"20px\">Age</font></th>\n          <th ><font size=\"20px\">Plan</font></th>\n        </tr>\n          <tr *ngIf=\"message1!=null\">\n            <td><font size=\"20px\">{{message1.firstName}}</font></td>\n            <td><font size=\"20px\">{{message1.eMail}}</font></td>\n            <td><font size=\"20px\">{{message1.age}}</font></td>\n            <td><font size=\"20px\">{{message1.plan}}</font></td>\n          </tr>\n      </table>\n     <div *ngIf=\"flag==1\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <button  class=\"primary-btn\" (click)=\"closetable()\">Hide data</button></div>\n    </div>\n</div>\n<br>\n\n<!-- start banner Area -->\n<section class=\"banner-area relative\" id=\"home\">\n    <div class=\"overlay overlay-bg\"></div>\t\t\n    <div class=\"container\">\n        <div class=\"row fullscreen d-flex align-items-center justify-content-start\">\n            <div class=\"banner-content col-lg-12 col-md-12\">\n                \n                <h1 class=\"text-uppercase\"><br><br><br><br>\n                    DEDICATE YOURSELF <br>\n                    TO BECOME YOUR BEST\t\t\t\t\t\n                </h1>\n                <h2><p class=\"text-white text-uppercase pt-20 pb-20\">\n                    Shape your mind & body well.<br><br><br><br><br><br>\n                </p></h2>\n            </div>\t\t\t\t\t\t\t\t\t\t\t\t\n        </div>\n    </div>\n\n</section>\n<!-- End banner Area -->\t\n\n<!-- Start offer Area -->\n<section class=\"offer-area section-gap\" id=\"offer\">\n    <div class=\"container\" #offer>\t\n        <div class=\"row d-flex justify-content-center\">\n            <div class=\"menu-content pb-70 col-lg-8\">\n                <div class=\"title text-center\">\n                    <h1 class=\" mb-10\">What we offer</h1>\n                    <p>There are many offerings from our side, you can choose any one depending on your fitness goal.</p>\n                </div>\n            </div>\n        </div>\t\t\t\t\t\t\t\t\t\n        <div class=\"row\">\n            <div class=\"col-lg-4\">\n                <div class=\"single-offer\">\n                    <img class=\"img-fluid\" src=\"assets/img/o1.png\" alt=\"\">\n                    <h4>Regular Exercise</h4>\n                    <p>\n                        This program is best suitable for people who are slightly active & want to remain fit. It includes full body workouts & Muscle Building/Fat Loss plans. It will cover people of all groups who want to improve their fitness levels & improve their Body Composition.</p>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"single-offer\">\n                    <img class=\"img-fluid\" src=\"assets/img/o2.png\" alt=\"\">\n                    <h4>Training on the go</h4>\n                    <p>\n                        This program is mainly for travellers or the people who don't have much time to workout. It includes simple body weight workouts which require no equipment. So, they can be performed at anytime, anywhere. Customised meal plans are also available in this program. </p>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"single-offer\">\n                    <img class=\"img-fluid\" src=\"assets/img/o3.png\" alt=\"\">\n                    <h4>Body Building Packages</h4>\n                    <p>\n                        This program is best suitable for athletes who want to put on serious amount of muscle mass. Heavy and intense training workout along with protein rich diet plans are available in this program. Along with that, supplementation & injury guide is also included in the program.</p>\n                </div>\n            </div>\t\t\t\t\t\t\t\t\t\t\t\t\n        </div>\n    </div>\t\n</section>\n<!-- End offer Area -->\n\n<!-- Start convert Area -->\n<section class=\"convert-area\" id=\"convert\">\n    <div class=\"container\">\n        <div class=\"convert-wrap\">\n            <div class=\"row d-flex justify-content-center\">\n                <div class=\"menu-content pb-70 col-lg-8\">\n                    <div class=\"title text-center\">\n                        <h1 class=\"text-white mb-10\">Calclulate Your Basal Metabolic Rate (BMR)</h1>\n                        <p class=\"text-white\">It is a measure of the calories burned by your body at rest.</p>\n                    </div>\n                </div>\n            </div>\t\t\t\t\t\t\n            <div class=\"row justify-content-center align-items-start\">\n                <div class=\"col-lg-3 col-md-6 cols-img\">\n                    <input [(ngModel)]=\"ht\" type=\"text\" name=\"cms\" placeholder=\"Height (cms)\" class=\"form-control mb-20\">\n                </div>\n                <div class=\"col-lg-3 col-md-6 cols\">\n                    <input [(ngModel)]=\"wt\" type=\"text\" name=\"kgs\" placeholder=\"Weight (kgs)\" class=\"form-control mb-20\">\n                </div>\n                <div class=\"col-lg-3 col-md-6 cols\">\n                    <input [(ngModel)]=\"age\" type=\"text\" name=\"age\" placeholder=\"Age\" class=\"form-control mb-20\">\n                </div>\n                <div class=\"col-lg-3 col-md-6 cols\">\n                    <input [(ngModel)]=\"gender\" type=\"text\" name=\"gender\" placeholder=\"gender\" class=\"form-control mb-20\">\n                </div>\n                <br><br><br><br><br>\n                <div class=\"col-lg-3 col-md-6 cols\">\t\n                    <button  (click)=\"bmr()\" class=\"primary-btn header-btn text-uppercase\">Calculate Your BMR</button>\n                </div>\n                \n                \n            </div>\t\n            <br><br>\n            <div *ngIf = \"flagBMR == 1\">\n                <p class=\"bmresult\">Your BMR is {{Bmr}} </p>\n            </div>\t\t\t\t\t\n        </div>\n    </div>\t\n</section>\n<!-- End convert Area -->\n\n<!-- Start top-course Area -->\n<section class=\"top-course-area section-gap\" id=\"top-course\">\n    <div class=\"container\" #topcourse>\n        <div class=\"row d-flex justify-content-center\">\n            <div class=\"menu-content pb-70 col-lg-9\">\n                <div class=\"title text-center\">\n                    <h1 class=\"mb-10\">Top Courses that are open for Everyone</h1>\n                    <p>People who want to get fit can choose any of these programs to achieve their fitness goal.</p>\n                </div>\n            </div>\n        </div>\t\t\t\t\t\t\t\t\t\t\t\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"single-course\">\n                    <div class=\"thumb\">\n                        <img class=\"img-fluid\" src=\"assets/img/c1.jpg\" alt=\"\">\n                    </div>\n                    <span class=\"course-status\">Course Available</span>\n                    <h4>Running Classes <span>Rs. 500</span></h4>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"single-course\">\n                    <div class=\"thumb\">\n                        <img class=\"img-fluid\" src=\"assets/img/c2.jpg\" alt=\"\">\n                    </div>\n                    <span class=\"course-status\">Course Available</span>\n                    <h4>Weight Lifting Classes <span>Rs. 1000</span></h4>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"single-course\">\n                    <div class=\"thumb\">\n                        <img class=\"img-fluid\" src=\"assets/img/c3.jpg\" alt=\"\">\n                    </div>\n                    <span class=\"course-status\">Course Available</span>\n                    <h4>Body Combat Classes <span>Rs. 1200</span></h4>\n                </div>\n            </div>\t\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"single-course\">\n                    <div class=\"thumb\">\n                        <img class=\"img-fluid\" src=\"assets/img/c4.jpg\" alt=\"\">\n                    </div>\n                    <span class=\"course-status\">Course Available</span>\n                    <h4>Yoga Classes <span>Rs. 1500</span></h4>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"single-course\">\n                    <div class=\"thumb\">\n                        <img class=\"img-fluid\" src=\"assets/img/c5.jpg\" alt=\"\">\n                    </div>\n                    <span class=\"course-status\">Course Available</span>\n                    <h4>Raw Fitness Classes <span>Rs. 1700</span></h4>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"single-course\">\n                    <div class=\"thumb\">\n                        <img class=\"img-fluid\" src=\"assets/img/c6.jpg\" alt=\"\">\n                    </div>\n                    <span class=\"course-status\">Course Available</span>\n                    <h4>Body Building Classes <span>Rs. 2000</span></h4>\n                </div>\n            </div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n        </div>\n    </div>\t\n</section>\n<!-- End top-course Area -->\n                \n\n<!-- Start feature Area -->\n<section class=\"feature-area\">\n    <div class=\"container-fluid\">\n        <div class=\"row justify-content-center align-items-center\">\n            <div class=\"col-lg-3 feat-img no-padding\">\n                <img class=\"img-fluid\" src=\"assets/img/f1.jpg\" alt=\"\">\n            </div>\n            <div class=\"col-lg-3 no-padding feat-txt\">\n                \n                <h6 class=\"suppguide3\">BASIC & ADVANCED</h6>\n                <h3 class = \"suppguide2\" title = \"Click here to view guide\" routerLink = \"/supplement\">Supplements Guide</h3>\n                <p class = \"suppguide\"> \n                    We provide guidance for all supplements. Whether you want to compete professionally or achieve a certain physique goal, supplementation can help a lot. \n                </p>\n            </div>\n            <div class=\"col-lg-3 feat-img no-padding\">\n                <img class=\"img-fluid\" src=\"assets/img/f2.jpg\" alt=\"\">\t\t\t\t\t\t\t\n            </div>\n            <div class=\"col-lg-3 no-padding feat-txt\">\n                <h6 class=\"suppguide3\">BASIC & COMMON INJURIES</h6>\n                <h3 class = \"suppguide2\" title = \"Click here to view guide\" routerLink = \"/injury\">Injury Guide</h3>\n                <p class=\"suppguide\">\n                    We have specially skilled trainers which can deal with injuries. Best treatment is available which help to recover the injury in an effective manner. \n                </p>\n            </div>\n        </div>\n    </div>\t\n</section>\n<!-- End feature Area -->\n\n<!-- Start schedule Area -->\n<section class=\"schedule-area section-gap\" id=\"schedule\">\n    <div class=\"container\" #schedule>\n        <div class=\"row d-flex justify-content-center\">\n            <div class=\"menu-content pb-70 col-lg-8\">\n                <div class=\"title text-center\">\n                    <h1 class=\"mb-10\">Schedule your Fitness Process</h1>\n                    <p>We have schedules for different programs. You can workout at the time which suits you best. </p>\n                </div>\n            </div>\n        </div>\t\t\t\t\t\t\n        <div class=\"row\">\n            <div class=\"table-wrap col-lg-12\">\n                <table class=\"schdule-table table table-bordered\">\n                      <thead class=\"thead-light\">\n                        <tr>\n                          <th class=\"head\" scope=\"col\">Course name</th>\n                          <th class=\"head\" scope=\"col\">mon</th>\n                          <th class=\"head\" scope=\"col\">tue</th>\n                          <th class=\"head\" scope=\"col\">wed</th>\n                          <th class=\"head\" scope=\"col\">thu</th>\n                          <th class=\"head\" scope=\"col\">fri</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <th class=\"name\" scope=\"row\">Running Classes</th>\n                          <td>10:00AM to <br> 5:00PM</td>\t\t\t\t      \n                          <td>10:00AM to <br> 5:00PM</td>\t\t\t\t\t      \n                          <td>10:00AM to <br> 5:00PM</td>\t\t\t\t\t      \n                          <td>10:00AM to <br> 5:00PM</td>\t\t\t\t\t      \n                          <td>10:00AM to <br> 5:00PM</td>\t\t\t\t\t      \n                        </tr>\n                        <tr>\n                          <th class=\"name\" scope=\"row\">Weight Lifting Classes</th>\n                          <td>4:00PM to <br> 8:00PM</td>\t\t\t\t      \n                          <td>4:00PM to <br> 8:00PM</td>\t\t\t\t      \n                          <td>4:00PM to <br> 8:00PM</td>\t\t\t\t      \n                          <td>4:00PM to <br> 8:00PM</td>\t\t\t\t      \n                          <td>4:00PM to <br> 8:00PM</td>\t\t\t\t\t\t      \n                        </tr>\n                        <tr>\n                          <th class=\"name\" scope=\"row\">Body Combat Classes</th>\n                          <td>5:00PM to <br> 7:00PM</td>\t\t\t\t      \n                          <td>5:00PM to <br> 7:00PM</td>\t\t\t\t      \n                          <td>5:00PM to <br> 7:00PM</td>\t\t\t\t      \n                          <td>5:00PM to <br> 7:00PM</td>\t\t\t\t      \n                          <td>5:00PM to <br> 7:00PM</td>\t\t\t\t\t\t\t      \n                        </tr>\n                        <tr>\n                          <th class=\"name\" scope=\"row\">Yoga Classes</th>\n                          <td>6:00AM to <br> 8:00AM</td>\t\t\t\t      \n                          <td>6:00AM to <br> 8:00AM</td>\t\t\t\t      \n                          <td>6:00AM to <br> 8:00AM</td>\t\t\t\t      \n                          <td>6:00AM to <br> 8:00AM</td>\t\t\t\t      \n                          <td>6:00AM to <br> 8:00AM</td>\t\t\t\t\t\t\t      \n                        </tr>\n                        <tr>\n                          <th class=\"name\" scope=\"row\">Raw Fitness Classes</th>\n                          <td>8:00AM to <br> 8:00PM</td>\t\t\t\t      \n                          <td>8:00AM to <br> 8:00PM</td>\t\t\t\t      \n                          <td>8:00AM to <br> 8:00PM</td>\t\t\t\t      \n                          <td>8:00AM to <br> 8:00PM</td>\t\t\t\t      \n                          <td>8:00AM to <br> 8:00PM</td>\t\t\t\t\t\t      \n                        </tr>\n                        <tr>\n                          <th class=\"name\" scope=\"row\">Body Building Classes</th>\n                          <td>6:00AM to <br> 10:00PM</td>\t\t\t\t      \n                          <td>6:00AM to <br> 10:00PM</td>\t\t\t\t\t      \n                          <td>6:00AM to <br> 10:00PM</td>\t\t\t\t\t      \n                          <td>6:00AM to <br> 10:00PM</td>\t\t\t\t\t      \n                          <td>6:00AM to <br> 10:00PM</td>\t\t\t\t\t\t\t      \n                        </tr>\t\t\t\t\t\t\t    \t\t\t\t\t\t\t    \t\t\t\t\t\t\t    \t\t\t\t\t\t\t    \n                      </tbody>\n                </table>\t\t\t\t\t\t\t\n            </div>\n        </div>\n    </div>\t\n</section>\n<!-- End schedule Area -->\n\n\n<!-- Start team Area -->\n\n<!-- End schedule Area -->\n\n\n<!-- Start team Area -->\n<section class=\"team-area section-gap\" id=\"trainer\">\n    <div class=\"container\" #trainer>\n        <div class=\"row d-flex justify-content-center\">\n            <div class=\"menu-content pb-70 col-lg-8\">\n                <div class=\"title text-center\">\n                    <h1 class=\"mb-10\">Team 3 Gymnesium</h1>\n                    <p>Who are in extreme love with fitness.</p>\n                </div>\n            </div>\n        </div>\t\t\t\t\t\t\n        <div class=\"row justify-content-center d-flex align-items-center\">\n            <div class=\"col-md-3 single-team\">\n                <div class=\"thumb\">\n                    <div class=\"align-items-center justify-content-center d-flex\">\n                        <a href=\"#\"><i class=\"fa fa-github\"></i></a>\n                        <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                        <a href=\"#\"><i class=\"fa fa-instagram\"></i></a>\n                    </div>\n                </div>\n                \n            </div>\n            <div class=\"single-team\">\n                <div class=\"thumb\">\n                    <img class=\"bodybuilder\" src=\"assets/img/t2.jpg\" alt=\"\">\n                    <div class=\"laal justify-content-center d-flex\">\n                        <a target=\"_blank\" href=\"https://github.com/sidak28\"><i class=\"laal2 fa fa-github\"></i></a>\n                        <a target=\"_blank\" href=\"https://www.linkedin.com/in/sidak-singh-b18547190/\"><i class=\"laal2 fa fa-linkedin\"></i></a>\n                        <a target=\"_blank\" href=\"https://www.instagram.com/sidak.28/\"><i class=\"laal2 fa fa-instagram\"></i></a>\n                    </div>\n                </div>\n                <div class=\"meta-text mt-30 text-marji\">\n                    <h2>Sidak Singh</h2>\n                    <h5 class=\"text-kam\">Certified Fitness Coach</h5>\t\t\t    \t\n                </div>\n            </div>\t\n            <div class=\"single-team\">\n                <div class=\"thumb\">\n                    <img class=\"bodybuilder2\" src=\"assets/img/t3.jpg\" alt=\"\">\n                    <div class=\"laal3 justify-content-center d-flex\">\n                        <a target=\"_blank\" href=\"https://github.com/robinjatin\"><i class=\"laal2 fa fa-github\"></i></a>\n                        <a target=\"_blank\" href=\"https://www.linkedin.com/in/jatinvir-singh-008636190/\"><i class=\"laal2 fa fa-linkedin\"></i></a>\n                        <a target=\"_blank\" href=\"https://www.instagram.com/robinjatin/\"><i class=\"laal2 fa fa-instagram\"></i></a>\n                    </div>\n                </div>\n                <div class=\"meta-text mt-30 text-marji2\">\n                    <h2>Jatinvir Singh</h2>\n                    <h5 class=\"text-kam2\">Fitness Athlete</h5>\t\t\t    \t\n                </div>\n            </div>\n            <div class=\"col-md-3 single-team\">\n                <div class=\"thumb\">\n                    <div class=\"align-items-center justify-content-center d-flex\">\n                        <a href=\"#\"><i class=\"fa fa-github\"></i></a>\n                        <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                        <a href=\"#\"><i class=\"fa fa-instagram\"></i></a>\n                    </div>\n                </div>\n                \n            </div>\n            <div class=\"single-team\">\n                <div class=\"thumb\">\n                    <img class=\"bodybuilder3\" src=\"assets/img/JStar.jpg\" alt=\"\">\n                    <div class=\"laal4 justify-content-center d-flex\">\n                        <a target=\"_blank\" href=\"https://github.com/jaspreet171356\"><i class=\"laal2 fa fa-github\"></i></a>\n                        <a target=\"_blank\" href=\"https://www.linkedin.com/in/jaspreet-singh-2521261a4/\"><i class=\"laal2 fa fa-linkedin\"></i></a>\n                        <a target=\"_blank\" href=\"https://www.instagram.com/bamb____jatt/\"><i class=\"laal2 fa fa-instagram\"></i></a>\n                    </div>\n                </div>\n                <div class=\"meta-text mt-30 text-marji3\">\n                    <h2>Jaspreet Singh</h2>\n                    <h5 class=\"text-kam3\">Certified Trainer</h5>\t\t\t    \t\n                </div>\n            </div>\t\n            <div class=\"single-team\">\n                <div class=\"thumb\">\n                    <img class=\"bodybuilder4\" src=\"assets/img/Ishika.jpg\" alt=\"\">\n                    <div class=\"laal5 justify-content-center d-flex\">\n                        <a target=\"_blank\" href=\"https://github.com/Ishika999\"><i class=\"laal2 fa fa-github\"></i></a>\n                        <a target=\"_blank\" href=\"https://www.linkedin.com/in/ishika-sindhi-722b14197/\"><i class=\"laal2 fa fa-linkedin\"></i></a>\n                        <a target=\"_blank\" href=\"https://www.instagram.com/ishika_sindhii/\"><i class=\"laal2 fa fa-instagram\"></i></a>\n                    </div>\n                </div>\n                <div class=\"meta-text mt-30 text-marji4\">\n                    <h2>Ishika Sindhi</h2>\n                    <h5 class=\"text-kam4\">Yoga Coach</h5>\t\t\t    \t\n                </div>\n            </div>\n\n\n                    \n            \n        </div>\n    </div>\t\n</section>\n<!-- End team Area -->\t\n\n<!-- Start price Area -->\n<section class=\"price-area pt-100\" id=\"plan\">\n    <div class=\"container\" #plan>\n        <div class=\"row d-flex justify-content-center\">\n            <div class=\"menu-content pb-60 col-lg-8\">\n                <div class=\"title text-center\">\n                    <h1 class=\"mb-10\">Visit the plan you have chosen</h1>\n                </div>\n            </div>\n        </div>\t\t\t\t\t\n        <div class=\"row\">\n            <div class=\"col-lg-4\">\n                <div class=\"single-price\">\n                    <div class=\"top-sec d-flex justify-content-between\">\n                        <div class=\"top-left\">\n                            <h4>Beginner</h4>\n                            <p>For people who've just started</p>\n                        </div>\n                        <div class=\"top-right\">\n                            <h1>Free</h1>\n                        </div>\n                    </div>\n                    <div class=\"bottom-sec\">\n                        <p>\n                            This plan is a very polished guide for beginners. Achieve your basic physique goal for free! Grab the opportunity. \n                        </p>\n                    </div>\n                    <div class=\"end-sec\">\n                        <ul>\n                            <li>Basic Workout Plan</li>\n                            <li>Basic Nutrition Plan</li>\n                            <li>BCA Test</li>\n                            <li>A free diet <br> counselling session</li>\n                            \n                        </ul>\n                        <button routerLink=\"/basic\" class=\"primary-btn price-btn mt-20\">Visit Plan<span class=\"lnr lnr-arrow-right\"></span></button>\n                    </div>\t\t\t\t\t\t\t\t\n                </div> \n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"single-price\">\n                    <div class=\"top-sec d-flex justify-content-between\">\n                        <div class=\"top-left\">\n                            <h4>Intermediate</h4>\n                            <p>For the goal achievers</p>\n                        </div>\n                        <div class=\"top-right\">\n                            <h3>Rs. 3000</h3>\n                        </div>\n                    </div>\n                    <div class=\"bottom-sec\">\n                        <p>\n                            Intermediate plan is for people who have a serious goal in their mind & will work hard to achieve it. \n                        </p>\n                    </div>\n                    <div class=\"end-sec\">\n                        <ul>\n                            <li>Customised Workout Plan</li>\n                            <li>Customised Nutrition Plan</li>\n                            <li>4 Diet Counselling Sessions</li>\n                            <li>BCA test (Monthly)</li>\n                            <li>Supplementation Guide</li>\n                        </ul>\n                        <button routerLink=\"/intermediate\" class=\"primary-btn price-btn mt-20\">Visit Plan<span class=\"lnr lnr-arrow-right\"></span></button>\n                    </div>\t\t\t\t\t\t\t\t\n                </div> \n            </div>\t\n            <div class=\"col-lg-4\">\n                <div class=\"single-price\">\n                    <div class=\"top-sec d-flex justify-content-between\">\n                        <div class=\"top-left\">\n                            <h4>Advanced</h4>\n                            <p>For the serious lifters</p>\n                        </div>\n                        <div class=\"top-right\">\n                            <h3>Rs. 5000</h3>\n                        </div>\n                    </div>\n                    <div class=\"bottom-sec\">\n                        <p>\n                            Advanced training methods & strict macro-based diet plan. It also contains preparation for peek week.\n                        </p>\n                    </div>\n                    <div class=\"end-sec\">\n                        <ul>\n                            <li>Advanced Workout Plan</li>\n                            <li>Advanced Nutrition Plan</li>\n                            <li>8 Diet Counselling Sessions</li>\n                            <li>BCA Test, E2 test, Lipid Profile Test</li>\n                            <li>Supplementation & Competition Guide</li>\n                        </ul>\n                        <button routerLink=\"/premium\" class=\"primary-btn price-btn mt-20\">Visit Plan<span class=\"lnr lnr-arrow-right\"></span></button>\n                    </div>\t\t\t\t\t\t\t\t\n                </div> \n            </div>\t\t\t\t\t\t\t\n                                                                            \n        </div>\n    </div>\t\n</section>\n\n<br><br><br><br>\n\n<section class=\"callto-area section-gap relative\">\n    <div class=\"overlay overlay-bg\"></div>\t\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"text-white\">Get Fit! LOOK GOOD,FEEL GOOD!</h1>\n                <p class=\"text-white pt-20 pb-20\">\n                    HARD WORK IS THE ONLY BARRIER BETWEEN YOU AND YOUR FITNESS GOAL. WORK HARD CONSISTENTLY & KEEP FOCUS TO ACHIEVE YOUR GOAL. \n                </p>\n                <button class=\"primary-btn\" (click)=\"openDialog()\">Become a Member</button>\t\t\t\t\t\t\t\n            </div>\n        </div>\n    </div>\t\n</section>\n<!-- End callto Area -->\n\n<!-- start footer Area -->\t\t\n<footer class=\"footer-area section-gap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-3  col-md-6 col-sm-6\">\n                <div class=\"single-footer-widget\">\n                    <h4>About Us</h4>\n                    <p>\n                        Sidak Singh\n                    <br>Jatinvir Singh\n                    <br>Jaspreet Singh\n                    <br>Ishika Sindhi\n                    </p>\n                </div>\n            </div>\n            <div class=\"col-lg-4  col-md-6 col-sm-6\">\n                <div class=\"single-footer-widget\">\n                    <h4>Contact Us</h4>\n                    \n                    <p class=\"number\">\n                        +91 7973245205 <br>\n                        +91 9915902685\n                    </p>\n                </div>\n            </div>\t\t\t\t\t\t\n            <div class=\"col-lg-5  col-md-6 col-sm-6\">\n                <div class=\"single-footer-widget\">\n                    <h4>Newsletter</h4>\n                    <p>You can trust us. we only send  offers, not a single spam.</p>\n                    <div class=\"d-flex flex-row\" id=\"mc_embed_signup\">\n\n\n                          <form class=\"navbar-form\" novalidate=\"true\">\n                            <div class=\"input-group add-on\">\n                                  <input [(ngModel)]=\"newsletter\" class=\"form-control\" name=\"EMAIL\" placeholder=\"Email address\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Email address'\" required=\"\" type=\"email\">\n                                <div style=\"position: absolute; left: -5000px;\">\n                                    <input name=\"emails\" tabindex=\"-1\" value=\"\" type=\"text\">\n                                </div>\n                              <div class=\"input-group-btn\">\n                                <button (click)=\"subs()\" class=\"genric-btn\"><span class=\"lnr lnr-arrow-right\"></span></button>\n                              </div>\n                            </div>\n                              <div class=\"info mt-20\"></div>\t\t\t\t\t\t\t\t\t    \n                          </form>\n                    </div>\n                </div>\n            </div>\t\t\t\t\t\t\n        </div>\n        <div class=\"footer-bottom row\">\n            <p class=\"footer-text m-0 col-lg-6\">\n                \n            </p>\n            <div class=\"footer-social col-lg-6\">\n                <a target=\"_blank\" href=\"https://www.facebook.com\"><i class=\"fa fa-facebook\"></i></a>\n                <a target=\"_blank\" href=\"https://twitter.com/home\"><i class=\"fa fa-twitter\"></i></a>\n                <a title=\"Click here to chat with the bot\" (click)=\"chatbot()\"><i class=\"fa fa-wechat\"></i></a>\n            </div>\n        </div>\n    </div>\n</footer>\t\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/premium/premium.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/premium/premium.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPremiumPremiumComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class = \"bgchitta\">\n  <header id=\"header\" id=\"home\" >\n    <!-- <br> -->\n    <div class=\"container\" #home>\n        <br>\n        <div class=\"row header-top align-items-center\">\n            \n            <div class=\"col-lg-4 col-sm-4 menu-top-left\">\n                \n                <span>\n                    GET FIT WITH 3 GYMNESIUM. <br>\n                PLANNING IS ALL YOU NEED!\n                </span>\n            </div>\n            \n            <div class=\"col-lg-4 menu-top-middle justify-content-center d-flex\">\n                <a  title=\"Go Back to MainPage\" routerLink=\"/main\">\n                    <img class=\"img-fluid\" src=\"assets/img/logo.png\" alt=\"\">\t\n                </a>\n                              \n            </div>\n            <div class=\"col-lg-4 col-sm-4 menu-top-right\">\n                {{message}} &nbsp;&nbsp;&nbsp;\n                <a class=\"tel\" href=\"tel:+91 9915902685\">+91 9915902685</a>\n                <a  height=\"50px\" href=\"+91 9915902685\"><span class=\"lnr lnr-phone-handset\"></span></a> \n            </div>\n            \n        \n        </div>\n        <br>\n    </div>\t\n  </header>\n    <slideshow  [height]=\"1000\"\n    [minHeight]=\"'730px'\"\n    [autoPlay]=\"true\"\n    [showArrows]=\"true\"\n    [showDots]=\"true\"\n    [imageUrls]=imageUrls\n    [disableSwiping]=false\n    [lazyLoad]=\"imageSources?.length > 1\"\n    [autoPlayWaitForLazyLoad]=\"true\">\n    </slideshow>\n    \n    <h2 style=\"text-align: center;\"><i  class=\"i\" style=\"font-size:25px;\" > \n        {{quote[i]}}</i></h2><br>\n         \n  <div class=\"container\">\n      <h1 style=\"text-align: center;\" id=\"diet-plan\" class=\"varjish\"><b>Workouts</b></h1>\n      <h1>Abs</h1>\n      <div class=\"row\">\n      <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic1()\" id='img1' src=\"assets/img/abs1.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Bent Knee Abdominal Hip Raises</p>\n          <div *ngIf=\"flag1==1\"><p (click)=\"hidepic1()\" class=\"exerciseInfo1\" ><strong>Muscles Targeted:</strong> The bent knee abdominal hip raises target the rectus abdominis which is the muscle group also known as the “abs”. Its helps to strengthen the lower and middle abdominals very well and is great for working the key muscles that help build up the core. The secondary muscles targeted in this exercise include the thighs and the hip flexors.</p>\n          <p (click)=\"hidepic1()\" class=\"exerciseInfo1\" ><strong>Exercise Instructions:</strong>Begin by lying on your back onto an exercise mat with your hands at your sides and your knees bent with your feet raised two inches off the floor. Bring your pelvis up and your knees up towards your chest, contracting your abdominals and hold for a 1-count. Return to the start position and repeat until failure.</p></div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic2()\" id='img2' src=\"assets/img/abs2.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Decline Abdominal Crunches </p>\n          <div *ngIf=\"flag2==1\"><p (click)=\"hidepic2()\" class=\"exerciseInfo2\" ><strong> Muscles Targeted:</strong> Decline abdominal crunches target the rectus abdominis, or abdominal muscles. In addition, you will work your hip flexors as a secondary muscle.</p>\n          <p (click)=\"hidepic2()\" class=\"exerciseInfo2\" ><strong> Exercise Instructions: </strong> Using a decline bench, position yourself with your feet locked in at the top. Place your hands on either side of your head, without locking your fingers. Raise your body slowly while you contract your abs. Crunch up, bringing your elbows to either side of your thighs. At the top of the movement, flex your abs for a one-count and then slowly lower your body back down to the starting position. Be sure to keep at least an inch or two of space between your back and the bench at the bottom of the movement. For more intensity, hold a weight plate across your chest for added resistance.</p></div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic3()\" id='img3' src=\"assets/img/abs3.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Reverse Decline Crunches</p>\n          <div *ngIf=\"flag3==1\"><p (click)=\"hidepic3()\" class=\"exerciseInfo3\" ><strong>Muscles Targeted: </strong> Reverse decline crunches help to keep your core stronger since it targets the most important muscles of the midsection. It works the rectus abdominis with a primary focus on the lower abdominal muscles. It extends from the chest area to the pelvis. Traditional crunches target mainly the middle and upper portion of abs. By performing reverse decline crunches, you are able to isolate the lower abs very well.</p>\n          <p (click)=\"hidepic3()\" class=\"exerciseInfo3\" ><strong>Exercise Instructions: </strong>Using a decline bench, lie on your back with your head at the top of the bench, near where your feet usually go. Next, hold the top of the bench with both hands. Hold your legs straight out together in the air, parallel to the floor using your abs to hold them there. Slowly bring your pelvis up and in towards your chest, having your abs control the movement. Slowly lower yourself back to the starting position while keeping constant tension on your abdominal muscles. </p></div>\n        </div>\n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"row\">\n          <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic26()\" id='img26' src=\"assets/img/abs4.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Flat Bench Abdominal Leg Pull Ins</p>\n              <div *ngIf=\"flag26==1\"><p (click)=\"hidepic26()\" class=\"exerciseInfo26\" id='hidden'><strong>Muscles Targeted: </strong>The flat bench abdominal leg pull ins target your abdominal muscles (rectus abdominis) and provide minor tension to your hip flexors. This exercise works your lower abs very well, which provides a contrast to most ab exercises that place most of the resistance on the middle and upper abs.</p>\n              <p (click)=\"hidepic26()\" class=\"exerciseInfo26\" id='hidden'><strong>Exercise Instructions: </strong>Sit on a flat bench with your legs off the end. Place your hands to your sides, grasping the edge of the bench with each hand. Extend your legs straight out and lean your back at a 45 degree angle. Bring your knees in toward your midsection, making sure that your abs are doing the work in a slow and controlled fashion. Return to the starting position.</p>\n            </div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic27()\" id='img27' src=\"assets/img/abs5.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Flat Bench Abdominal Leg Raises </p>\n              <div *ngIf=\"flag27==1\"><p (click)=\"hidepic27()\" class=\"exerciseInfo27\" id='hidden'><strong>Muscles Targeted:</strong> The main muscle groups targeted by the flat bench abdominal leg raises are the rectus abdominis, the internal abdominal obliques and the transverse abdominis which are three of the main components of the lower abdominal group. If additional movements or angles are added to this exercise, then other muscle groups can be added. This exercise can be performed anywhere with a flat bench and its perfect for anyone looking for an ab exercise they can do at home.</p>\n              <p (click)=\"hidepic27()\" class=\"exerciseInfo27\" id='hidden'><strong>Exercise Instructions: </strong>Lie flat on your back on a bench with your legs off the end, remaining parallel to the ground. Place your hands back next to your head and grab the edge of the bench. Keeping your legs as straight as possible, raise your legs as high as possible, making sure that your abs are doing the work. Lower legs back down to the start position and repeat.</p>\n          </div>  \n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic28()\" id='img28' src=\"assets/img/abs6.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Hanging Knees To Chin Raises</p>\n              <div *ngIf=\"flag28==1\"><p (click)=\"hidepic28()\" class=\"exerciseInfo28\" id='hidden'><strong>Muscles Targeted: </strong>All muscles in the core area are targeted with hanging knees to chin raises. The upper, middle, and lower abdominal regions work against gravity as the body crunches in an upward motion. This movement strengthens the muscles in these areas and also helps to stretch out the lower back. As the knees bend upward towards the chin, the hamstrings and quadriceps will also be engaged. The muscles in the forearms and shoulders will also build strength by simply hanging from the bar, which will also improve the participant’s grip strength over time.</p>\n              <p (click)=\"hidepic28()\" class=\"exerciseInfo28\" id='hidden'><strong>Exercise Instructions: </strong>Hang from a pullup bar with your knees slightly bent. Slowly raise your legs up and bring your knees up toward your chest. You should finish with your knees as for up as your chin at the top. Make sure to keep a tight grip and avoid swinging back and forth. Slowly lower your legs down and return to the starting position.</p>\n          </div>  \n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          </div>\n      <h1>Back</h1>\n      <div class=\"row\">\n      <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic4()\" id='img4' src=\"assets/img/back1.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Pullups</p>\n          <div *ngIf=\"flag4==1\"><p (click)=\"hidepic4()\" class=\"exerciseInfo4\" ><strong>Muscles Targeted: </strong> Standard pull-ups, when performed properly, can hit up to six muscle groups on every repetition. Proper form when performing a pull-up requires no swinging or kipping, which is when you try to generate some momentum upwards by moving your legs. The obvious two muscle groups that pull-ups target are your biceps and lats (latissimus dorsi), which give you the broad look in your back. The biceps are not the only muscles in your arms that get a burn though. Your forearm muscles, depending on your grip, gets a great workout too. The shoulder muscles (deltoids) get a workout as well, with proper reps hitting your delts, traps and your rhomboids, which are the muscles by your scapula. The abdominal and pelvic floor muscles help stabilize your torso and legs during each rep. Lastly, your grip strength is improved when doing proper pull-ups by having to hold all your body weight during each rep.</p>\n          <p (click)=\"hidepic4()\" class=\"exerciseInfo4\" ><strong>Exercise Instructions:  </strong>To perform a pullup, grab onto a secure bar (or a machine) using an overhand grip with your hands just beyond shoulder width apart. Slowly lift your entire body upward as high as you can. Lower your body back down to the starting position and repeat with a slow and controlled tempo at all times. </p></div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic5()\" id='img5' src=\"assets/img/back2.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">V-Bar Pullups</p>\n          <div *ngIf=\"flag5==1\"><p (click)=\"hidepic5()\" class=\"exerciseInfo5\" ><strong>Muscles Targeted: </strong>V-bar pullups target your latissimus dorsi muscles (also known as “lats”) which are located along the sides of your back. This exercise also targets your bicep muscles, forearms and deltoids (shoulders) as secondary muscle groups. </p>\n         <p (click)=\"hidepic5()\" class=\"exerciseInfo5\" ><strong>Exercise Instructions: </strong>Grab a V-bar and place it on a pullup bar so that the handles of the V-bar are hanging over the sides so that you can grip it safely with both hands and support your body weight. Slowly pull your body up to the top and try to touch your chest to the pullup bar. Always use a slow and controlled tempo as you perform this exercise. Pause at the top for a brief moment and then slowly lower your body back down to the starting position and repeat until failure. </p></div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic6()\" id='img6' src=\"assets/img/back3.gif\" \n          width=\"300\" height=\"240\" >\n         <p style=\"text-align: center;\">Assisted Pull-Ups Machine</p>\n         <div *ngIf=\"flag6==1\"><p (click)=\"hidepic6()\" class=\"exerciseInfo6\" ><strong> Muscles Targeted:</strong>The movement involved during wide grip pull-ups is associated with the contraction of the latissimus dorsi or commonly called the “lats”. The contraction of the upper back enables the wide grip pull-ups to be performed in conjunction with the retraction of the scapula, leading the entire body to move up and down along one plane. Assisting the upper back and scapula throughout the exercise are the deltoid muscles (shoulders). The stability and effort coming from the shoulders continues the chain of movement for the upper back, especially during the initial pulling moment up to the final phase of this exercise. Wide grip pull-ups also use the secondary muscles of the arms and forearms to keep a firm grip throughout the entire exercise. </p>\n         <p (click)=\"hidepic6()\" class=\"exerciseInfo6\" ><strong>Exercise Instructions: </strong>Find a pull-up bar (or machine) and grab the bar using a secure overhand grip with your hands as wide apart as comfortably possible. Next, slowly pull your body up as high as possible and try to touch your chin to the pullup bar. Slowly return back down to the starting position and repeat. This is a difficult exercise so don’t get frustrated if you can only perform a few repetitions when you’re first starting out. </p></div>\n        </div>\n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"row\">\n          <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic29()\" id='img29' src=\"assets/img/back4.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Hyperextensions</p>\n              <div *ngIf=\"flag29==1\"><p (click)=\"hidepic29()\" class=\"exerciseInfo29\" id='hidden'><strong>Muscles Targeted:</strong>Hyperextensions mainly target your lower back muscles consisting of the erector spinae which are the large paired muscles (known as “extensor muscles”) in the lower back that hold up the spine. This exercise also targets your hamstrings and glutes as secondary muscle groups.</p>\n              <p (click)=\"hidepic29()\" class=\"exerciseInfo29\" id='hidden'><strong>Exercise Instructions:</strong>Position yourself on a Roman Chair facing forward. If you are not sure what a Roman Chair is, ask a trainer at your gym to point one out to you. Cross your arms in front of your chest and slowly lower your upper body down and try to touch your nose to the floor. Once your torso is completely bent over and virtually perpendicular to the floor, slowly return to the starting position and repeat. Be sure that when you return to the starting position that you do not go past parallel and arch your back at the top.</p>\n          </div>  \n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic30()\"  id='img30' src=\"assets/img/back5.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Lying Back Presses</p>\n              <div *ngIf=\"flag30==1\"><p (click)=\"hidepic30()\" class=\"exerciseInfo30\" id='hidden'><strong>Muscles Targeted: </strong>The execution of lying back presses (also called “Supermans”) involves the contraction and direct movement from the quadratus lumborum or more commonly known as the lower back muscles of the lumbar spine. More importantly the erector spinae, which is the main muscle group responsible for keeping the spine erect also contributes into keeping the movement controlled. The latissimus dorsi or upper back muscles are also a key muscle group that keeps the movement of the lying back press more stable and it additionally helps the entire back throughout the movement.</p>\n              <p (click)=\"hidepic30()\" class=\"exerciseInfo30\" id='hidden'><strong>Exercise Instructions: </strong>Lie flat on your stomach onto a mat on the floor with your legs out straight and your arms outstretched over your head, parallel to the floor. To perform this exercise, simultaneously bring both of your hands up toward the ceiling as high as you can go while bringing your feet up off the ground as well. Imagine that your body is nearly forming the letter ‘U’ and you are flying like Superman!</p>\n          </div> \n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          </div>\n      \n      <h1>Chest</h1>\n      <div class=\"row\">\n      <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic7()\" id='img7' src=\"assets/img/chest1.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Dips</p>\n          <div *ngIf=\"flag7==1\"><p (click)=\"hidepic7()\" class=\"exerciseInfo7\" ><strong>Exercise Advice: </strong> Firmly grasp the handles on the dip machine and raise your body up to the starting position. Your arms should be almost extended in the starting position but make sure to have a little bend in your arms to keep the tension on the triceps. Slowly lower your body downwards, keeping your elbows in at your sides. If you keep your elbows out, you will be working more of the pectoral muscles. You should lower yourself down so that your arms are in a 90 degree position as illustrated in the photo. Slowly raise your body back up to the starting position, while keeping your elbows in and tension on your triceps.</p></div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic8()\" id='img8' src=\"assets/img/chest2.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Narrow Grip Push Ups</p>\n          <div *ngIf=\"flag8==1\"><p (click)=\"hidepic8()\" class=\"exerciseInfo8\" ><strong>Exercise Advice: </strong> This exercise is your basic pushup, but with varying widths of hand positioning. For the close hand position, you are going to place your hands on the ground about 2 inches apart and perform regular pushups until failure. For the wide hand position, you will perform the exact same exercise, but your hands will be on the ground as far apart from one another as possible while still allowing you to execute the pushup.</p></div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic9()\" id='img9' src=\"assets/img/chest3.gif\" \n          width=\"300\" height=\"240\" >\n         <p style=\"text-align: center;\">Pushups</p>\n         <div *ngIf=\"flag9==1\"><p (click)=\"hidepic9()\" class=\"exerciseInfo9\" ><strong>Muscles Targeted: </strong> Push-ups are one of the simplest yet one of the most beneficial bodyweight exercises that can be performed virtually anywhere in order to gain both strength and size in the upper body. While performing push-ups, you will be using your own body weight without the need for any equipment or machines. The upper body and the core work together while performing this exercise and the key muscles utilized include:</p>\n         <p (click)=\"hidepic9()\" class=\"exerciseInfo9\" ><strong>Primary Muscles – Pectoralis Major </strong>These are the primary muscles that the push-up targets. The pectoralis major muscles, more specifically the muscles called sternal heads, make up the bulk of the chest. The pectoralis major muscles are commonly referred to as “pecs” and they are the primary muscles targeted when doing this pressing movement. Having strength in the pecs helps you perform a variety of movements which includes the internal rotation and extension of your shoulder. </p></div>\n        </div>\n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"row\">\n          <div  class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic31()\" id='img31' src=\"assets/img/chest4.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Declined Push Ups</p>\n              <div *ngIf=\"flag31==1\"><p (click)=\"hidepic31()\" class=\"exerciseInfo31\" id='hidden'><strong>Exercise Advice: </strong>This is a regular pushup except that your feet will be lying across a flat bench. Be sure that when you are executing this movement that you keep your back very straight and flat. You can use varying degrees of hand widths as well when performing this exercise.</p>\n              </div>\n              </div>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div  class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic32()\" id='img32' src=\"assets/img/chest5.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Isometric Chest Presses</p>\n              <div *ngIf=\"flag32==1\"><p (click)=\"hidepic32()\" class=\"exerciseInfo32\" id='hidden'><strong>Exercise Advice: </strong>You can either stand or sit (with your back upright) to perform this exercise. Simply clasp your hands together and push them together as hard as you can for at least 10-15 seconds, focusing on completely flexing your pec muscles the entire time. Relax and repeat.</p>\n          </div>  \n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          </div>\n      \n      <h1>Triceps</h1>\n      <div class=\"row\">\n      <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic10()\" id='img10' src=\"assets/img/tricep1.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Bench Dips</p>\n          <div *ngIf=\"flag10==1\"><p (click)=\"hidepic10()\" class=\"exerciseInfo10\" ><strong>Exercise Advice: </strong> Position your hands shoulder width apart on a secured bench. Move your feet out as far out in front of you as possible. Straighten out your arms and keep a little bend in your elbows in order to always keep tension on your triceps and off your elbow joints. Slowly lower your upper body down towards the floor and keep your elbows tucked into your sides. Once you reach the bottom of the movement, slowly press off with your hands and push yourself back up to the starting position with your triceps.</p></div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic11()\" id='img11' src=\"assets/img/tricep2.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Dips</p>\n          <div *ngIf=\"flag11==1\"><p (click)=\"hidepic11()\" class=\"exerciseInfo11\" ><strong>Exercise Advice: </strong>Firmly grasp the handles on the dip machine and raise your body up to the starting position. Your arms should be almost extended in the starting position but make sure to have a little bend in your arms to keep the tension on the triceps. Slowly lower your body downwards, keeping your elbows in at your sides. If you keep your elbows out, you will be working more of the pectoral muscles. You should lower yourself down so that your arms are in a 90 degree position as illustrated in the photo. Slowly raise your body back up to the starting position, while keeping your elbows in and tension on your triceps. </p></div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic12()\" id='img12' src=\"assets/img/tricep3.gif\" \n          width=\"300\" height=\"240\" >\n         <p style=\"text-align: center;\">Close Grip Pushups</p>\n         <div *ngIf=\"flag12==1\"><p (click)=\"hidepic12()\" class=\"exerciseInfo12\" ><strong> Exercise Advice: </strong> This exercise is your basic pushup, but with your hands positioned close together. As you lower your body down, make sure to keep your elbows in to keep all the tension on the triceps muscle. If you let your elbows turn out, you will be working more of the pectoral muscles (chest) than your triceps. Push up to the starting position while keeping your elbows in during the entire range of the movement.</p></div>\n        </div>\n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"row\">\n          <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic33()\" id='img33' src=\"assets/img/tricep4.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Bent Over Two Arm Dumbbell Extension</p>\n              <div *ngIf=\"flag33==1\"><p (click)=\"hidepic33()\" class=\"exerciseInfo33\" id='hidden'><strong>Exercise Advice: </strong>While standing and holding two dumbbells, slowly lean over at the waist. Keep your arms tucked into your sides at a 90 degree angle. Slowly extend both arms out while keeping your elbows in a fixed position and close to your sides. Make sure to keep all of the tension directly on your triceps as you extend your arms out to the top position. Slowly lower the dumbbells back to the starting position and repeat for a certain number of repetitions.</p>\n              </div>\n              </div>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic34()\" id='img34' src=\"assets/img/tricep5.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Cable Lying Extensions </p>\n              <div *ngIf=\"flag34==1\"><p (click)=\"hidepic34()\" class=\"exerciseInfo34\" id='hidden'><strong>Exercise Advice: </strong>Position flat bench in line with a cable machine. Attach a straight bar to the bottom part of the cable machine. Lay flat on your back on the bench. In this position, the best thing is to have someone hand you the straight bar but if you are training solo, reach back and grab the straight bar from the cable machine. Hold the straight bar with your palms up and position the bar just above your head with your elbow in. Slowly extend your arms upwards, keeping your elbows in and flexing your triceps at the top of the movement. Slowly lower the bar back to the starting position while always keeping your elbow in.</p>\n              </div>\n              </div>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic35()\" id='img35' src=\"assets/img/tricep6.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Decline Dumbbell Extensions</p>\n              <div *ngIf=\"flag35==1\"><p (click)=\"hidepic35()\" class=\"exerciseInfo35\" id='hidden'><strong>Exercise Advice: </strong>Position yourself on a decline bench and lay back completely flat. Have someone carefully hand you two dumbbells and position them above your head with your palms facing each other and your arms straightened out. Make sure to always keep a little bend in your arms to keep tension on the triceps muscle. Slowly lower both dumbbells to a few inches above your eyes and focus on keeping your elbows in towards you throughout the movement. Finally, extend your arms back up the starting position while keeping your elbows in.</p>\n              </div>\n              </div>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          </div>\n      \n      <h1>Hamstrings</h1>\n      <div class=\"row\">\n      <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic13()\" id='img13' src=\"assets/img/hamstring1.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Elastic Band Kickbacks</p>\n          <div *ngIf=\"flag13==1\"><p (click)=\"hidepic13()\" class=\"exerciseInfo13\" ><strong>Exercise Instructions:</strong>This exercise is similar to the one-legged cable kickbacks except that you will be using an elastic exercise band. Keeping your leg straight, smoothly kick your heel backward about one foot. Hold your leg at the top of this movement for a one-count. Slowly lower your leg back to the starting position and repeat. </p></div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic14()\" id='img14' src=\"assets/img/hamstring2.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Exercise Ball Curls</p>\n          <div *ngIf=\"flag14==1\"><p (click)=\"hidepic14()\" class=\"exerciseInfo14\" id='hidden'><strong>Exercise Instructions: </strong>Lie on your back on a mat on the floor and place your heels on the front upper edge of a large exercise ball. By doing this, your back will actually be lifted off of the floor and only your upper back and the back of your shoulders will be on the floor. In a slow and controlled fashion, bring your heels toward your body so as to roll the exercise ball underneath your legs. Move your heels and the exercise ball about 6 – 12 inches and then return your legs to the fully extended start position. Repeat until you have performed the desired amount of repetitions. </p></div>\n        </div>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic15()\" id='img15' src=\"assets/img/hamstring3.gif\" \n          width=\"300\" height=\"240\" >\n         <p style=\"text-align: center;\">Lying Leg Curls</p>\n         <div *ngIf=\"flag15==1\"><p (click)=\"hidepic15()\" class=\"exerciseInfo15\" id='hidden'><strong>Exercise Instructions:</strong> This exercise is also known as hamstring curls. Lie on your stomach on the hamstring machine. If you are not sure how to position yourself, simply ask a trainer at your gym to assist you. Begin by curling the weight upward so as to touch your heels to your butt. Return to the start position in a slow and controlled fashion and repeat.</p>\n         </div> \n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      </div>\n      <div class=\"row\">\n          <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic36()\" id='img36' src=\"assets/img/hamstring4.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Barbell Romanian Deadlifts</p>\n              <div *ngIf=\"flag36==1\"><p (click)=\"hidepic36()\" class=\"exerciseInfo36\" id='hidden'><strong>Exercise Instructions: </strong>Grab a barbell with both hands using an overhand grip about shoulder width apart and let the barbell hang down in front of your body. Begin this movement by bending at your hips to lower the barbell to the floor and bend knees during the descent. It is very important to keep your back straight and rigid throughout this exercise and let your hamstrings and butt do all the work.</p>\n              </div>\n              </div>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic37()\" id='img37' src=\"assets/img/hamstring5.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Seated Leg Curls </p>\n              <div *ngIf=\"flag37==1\"><p (click)=\"hidepic37()\" class=\"exerciseInfo37\" id='hidden'><strong>Exercise Instructions: </strong>This is another version of hamstring curls. The difference with this exercise is that you are in a seated position when you execute the movement. If you are not sure how to position yourself, simply ask a trainer at your gym to assist you. Simply bring the weight down toward the ground so as to try to touch your heels to the back of your hamstrings. Slowly return to the start position and repeat.</p>\n            </div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic38()\" id='img38' src=\"assets/img/hamstring6.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Smith Machine Stiff Leg Deadlifts</p>\n              <div *ngIf=\"flag38==1\"><p (click)=\"hidepic38()\" class=\"exerciseInfo38\" id='hidden'><strong>Exercise Instructions: </strong>Using the Smith Machine, grab the barbell with both hands using an overhand grip about shoulder width apart and let the barbell hang down in front of your body. Begin this movement by bending at the waist and lowering the barbell to the floor. Be sure to keep your legs as straight as possible (a slight bend is ok) and really let the weight of the barbell bring you down. On the way up, really focus on your butt and hamstrings to pull the weight back up. It is very important to keep your back straight and rigid throughout this exercise and to let your legs and butt do the work.</p>\n            </div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          </div>\n      \n      <h1>Gluteus</h1>\n      <div class=\"row\">\n      <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic16()\" id='img16' src=\"assets/img/butt1.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Dumbbell Bench Step Ups</p>\n          <div *ngIf=\"flag16==1\"><p (click)=\"hidepic16()\" class=\"exerciseInfo16\" id='hidden'><strong> Exercise Advice: </strong>Stand next to a flat bench with dumbbells in each hand hanging at your sides. Step up onto the bench with one foot and then bring up the other foot so that you end up standing on the bench with both feet. To return to the floor, carefully step backward off of the bench with the same foot you started with. Repeat the movement with the opposite foot first and alternate for 10 repetitions on each leg. </p>\n          </div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic17()\" id='img17' src=\"assets/img/butt2.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Single Dumbbell Plie Squat</p>\n          <div *ngIf=\"flag17==1\"><p (click)=\"hidepic17()\" class=\"exerciseInfo17\" id='hidden'><strong>Exercise Instructions:</strong>Stand next to a flat bench with a dumbbell in each hand hanging at your sides. Step up onto the bench with one foot and then bring up the other foot so that you end up standing on the bench with both feet. To return to the floor, carefully step backward off of the bench with the same foot you started with. Repeat the movement with the opposite foot first and alternate for 10 repetitions on each leg. </p>\n          </div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic18()\" id='img18' src=\"assets/img/butt3.gif\" \n          width=\"300\" height=\"240\" >\n         <p style=\"text-align: center;\">Walking Dumbbell Lunge</p>\n         <div *ngIf=\"flag18==1\"><p (click)=\"hidepic18()\" class=\"exerciseInfo18\" id='hidden'><strong>Exercise Instructions: </strong>Grab a dumbbell in each hand and find an area where you can walk for about 20 feet unobstructed. Beginning with one foot, simply stride forward (walk) as far as you comfortably can while keeping the dumbbells hanging down at your sides. It is very important that when you plant your striding foot that your knee stays perpendicular to the floor and does not extend past that point. Continue to alternate strides for 10 steps on each leg. </p>\n         </div>  \n      </div>\n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"row\">\n          <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic39()\" id='img39' src=\"assets/img/butt4.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Leg Press</p>\n              <div *ngIf=\"flag39==1\"><p (click)=\"hidepic39()\" class=\"exerciseInfo39\" id='hidden'><strong>Exercise Instructions: </strong>Be sure to check with a trainer at your gym to assist you with how to properly use the leg press machine if you are not familiar with it. Position yourself on the leg press machine with your feet firmly on the platform just beyond shoulder width apart. Lower the platform by slowly bringing your knees to your chest. Next, press the platform upward in an explosive fashion and repeat.</p>\n           </div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic40()\" id='img40' src=\"assets/img/butt5.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Exercise Ball Leg Raises</p>\n              <div *ngIf=\"flag40==1\"><p (click)=\"hidepic40()\" class=\"exerciseInfo40\" id='hidden'><strong>Exercise Instructions: </strong>Lie on your side on a mat on the floor with your arms crossed in front of your body. Place a large exercise ball in between your feet and slowly lift the ball up toward the ceiling using only your hips and butt. Return to the start position and repeat.</p>\n            </div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic41()\" id='img41' src=\"assets/img/butt6.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Glute Kickbacks</p>\n              <div *ngIf=\"flag41==1\"><p (click)=\"hidepic41()\" class=\"exerciseInfo41\" id='hidden'><strong>Exercise Instructions: </strong>Get on your hands and knees on a mat on the floor with your back parallel to the ground. In a controlled motion, thrust one of your feet backwards as though you are kicking like a horse. Be sure to really flex your butt for a one-count when your leg is fully extended back behind you. Return to the start position and repeat with the opposite leg.</p>\n            </div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          </div>\n      \n      <h1>Forearms</h1>\n      <div class=\"row\">\n      <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic19()\" id='img19' src=\"assets/img/forearm1.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Two Arm Palms Down Wrist Curls</p>\n          <div *ngIf=\"flag19==1\"><p (click)=\"hidepic19()\" class=\"exerciseInfo19\" id='hidden'><strong>Exercise Advice:</strong>Kneel next to a flat bench and lay your forearms across the bench while holding a two dumbbells palms down. Using only your hands and wrists, lift the dumbbells up toward the ceiling as high as possible, keeping your forearms flat on the bench. When you return to the start position, allow the dumbbells to come down to the starting position and then repeat. </p>\n          </div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic20()\" id='img20' src=\"assets/img/forearm2.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Two Arm Palms Up Wrist Curls</p>\n          <div *ngIf=\"flag20==1\"><p (click)=\"hidepic20()\" class=\"exerciseInfo20\" id='hidden'><strong>Exercise Advice: </strong>Kneel next to a flat bench and lay your forearms across the bench while holding a two dumbbells palms up. Using only your hands and wrists, curl the dumbbells up toward the ceiling as high as possible, keeping your forearms flat on the bench. When you return to the start position, allow the dumbbells to roll all the way down into your fingertips and then repeat. </p>\n        </div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic21()\" id='img21' src=\"assets/img/forearm3.gif\" \n          width=\"300\" height=\"240\" >\n         <p style=\"text-align: center;\">Reverse Barbell Preacher Curls</p>\n         <div *ngIf=\"flag21==1\"><p (click)=\"hidepic21()\" class=\"exerciseInfo21\" id='hidden'><strong>Exercise Advice: </strong>Using a preacher curl machine, grab an EZ curl bar with both hands, palms down. Using an overhand grip, simply curl the bar up toward your chin. Slowly return to the start position and repeat. </p>\n         </div>  \n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      </div>\n      \n      <h1>Biceps</h1>\n      <div class=\"row\">\n      <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic22()\" id='img22' src=\"assets/img/bicep1.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Chin Ups</p>\n          <div *ngIf=\"flag22==1\"><p (click)=\"hidepic22()\"  class=\"exerciseInfo22\" id='hidden'><strong>Muscles Targeted:  </strong>Chin ups, also called “underhand pull-ups” are the perfect bodyweight exercise for your biceps and they target every major muscle group in the back including the latissimus dorsi (lats) and rear deltoids. They also work the spinal erectors and abdominals with some slight variations. Because chin ups are a pulling exercise, they require a high level of grip strength therefore adding functional strength and muscle to the forearms and hands. If you are a beginner and you are unable to do a regular pull-up, doing chin ups should allow you to gain the amount of strength needed to accomplish a pull-up.  </p>\n          <p (click)=\"hidepic22()\"  class=\"exerciseInfo\" id='hidden'><strong>Exercise Instructions: </strong>Find a secure bar to hang from that allows you to safely place all of your body weight onto it. Begin by either grabbing the bar or jumping up to grab it and securely grip the bar with both hands using an underhand grip. Place your hands at a width that you feel comfortable with and let your body naturally hang down with your arms extended. Bend your knees and pick your feet up off the ground if necessary to clear your feet from the ground. Slowly pull yourself up until your upper chest is close to your elbows with your chin level with the bar. Pause and slowly lower yourself down to the starting position and repeat for the desired number of reps. </p>\n      </div>  \n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic23()\" id='img23' src=\"assets/img/bicep2.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Seated Dumbbell Curls</p>\n          <div *ngIf=\"flag23==1\"><p (click)=\"hidepic23()\" class=\"exerciseInfo23\" id='hidden'><strong>Muscles Targeted:  </strong>This exercise targets the brachialis which lies beneath the biceps muscle, the brachioradialis (forearms), and the biceps brachii (2 heads of the biceps). These three individual muscles all make up the upper arm. Using this exercise results in a total biceps workout. The forearms are mainly targeted as a secondary muscle group along with the anterior deltoids but their involvement will be minimal when this exercise is performed properly. </p>\n          <p (click)=\"hidepic23()\" class=\"exerciseInfo\" id='hidden'><strong> Exercise Instructions:</strong>Sit at the end of a flat bench, or a seated utility bench with back support, and place your feet flat on the floor for stability with your back upright, shoulders back and your chest out. Grab a dumbbell with each hand using an overhand grip and let your arms hang down naturally at your sides with both palms facing inward toward the bench. Simultaneously curl the dumbbells up while twisting (supinating) your wrists upwards on the way up. Be sure to squeeze your biceps at the top for a one-count and then slowly return the dumbbells back down to the starting position and repeat. </p>\n      </div>  \n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic24()\" id='img24' src=\"assets/img/bicep3.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">EZ Bar Preacher Curls</p>\n          <div *ngIf=\"flag24==1\"><p (click)=\"hidepic24()\" class=\"exerciseInfo24\" id='hidden'><strong>Muscles Targeted: </strong>The EZ bar preacher curl is an exercise that is used strictly for isolating the muscles of the upper arm. This is not a compound exercise that works many muscle groups across multiple joints. This exercise strictly targets your biceps and your forearms along with improving wrist and grip strength. You can increase the stress on your forearms by grabbing the inner bar with an overhand grip (palms down) for a reverse EZ bar preacher curl. The stabilizing muscles include the anterior deltoids (front shoulders). </p>\n          <p (click)=\"hidepic24()\" class=\"exerciseInfo24\" id='hidden'><strong>Exercise Instructions: </strong>Using a regular preacher bench, grab an EZ Curl bar with both hands using an underhand grip (palms facing upwards). Slowly curl the bar up to the top and bring it a few inches from your chin. Return the weight back down with a slow and controlled tempo to the starting position allowing some resistance (negative) on the way back down. Repeat the movement for the desired number of repetitions. </p>\n      </div>  \n      </div>\n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"row\">\n          <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic42()\" id='img42' src=\"assets/img/bicep4.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Hammer Dumbbell Curls</p>\n              <div *ngIf=\"flag42==1\"><p (click)=\"hidepic42()\" class=\"exerciseInfo42\" id='hidden'><strong>Muscles Targeted: </strong>Hammer dumbbell curls primarily target the biceps brachii (2 headed muscle of the upper arm) brachioradialis (forearms) and the brachialis (front of the upper arm). The secondary muscle groups targeted include the anterior deltoids, and to a lesser extent, the coracobrachialis and upper pectorals.</p>\n              <p (click)=\"hidepic42()\" class=\"exerciseInfo42\" id='hidden'><strong>Exercise Instructions: </strong>This is virtually the same exercise as the dumbbell biceps curls except that you keep your wrists in a fixed or locked position throughout the movement with no supination (twisting of the wrists). You can perform this exercise by either standing or sitting on a bench, whichever you prefer. Grab a dumbbell in each hand with a secure grip and let your arms hang naturally down at your sides. Slowly curl the dumbbells simultaneously up to the top. While you are performing the movement, keep your wrists locked with your thumbs pointing up. Be sure to squeeze your biceps for a one-count at the top of the movement. Slowly lower the dumbbell back down to the starting position and repeat.</p>\n            </div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic43()\" id='img43' src=\"assets/img/bicep5.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Incline Angled Dumbbell Curls</p>\n              <div *ngIf=\"flag43==1\"><p (click)=\"hidepic43()\" class=\"exerciseInfo43\" id='hidden'><strong>Muscles Targeted: </strong>Incline angle dumbbell curls target the bicep muscles and the forearms. They also hit the anterior deltoids (front of shoulders) as a secondary stabilizer muscle group. This exercise also brings in the short head of the biceps (inner head) and allows a maximum stretch in the muscle as the arms are extended slightly behind the body.</p>\n              <p (click)=\"hidepic43()\" class=\"exerciseInfo43\" id='hidden'><strong>Exercise Instructions: </strong>Adjust a bench to about 45 degrees. Grab a pair of dumbbells and carefully lie back on the bench while holding a dumbbell in each hand. Simultaneously, curl the dumbbells up and out with both hands, slowly turning (supinating) your wrists outward as you raise the dumbbells. Keep your back flat against the bench at all times. Slowly return the dumbbells back down to the starting position and repeat.</p>\n            </div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div class=\"column\" id=\"polaroid\" >\n              <img (click)=\"loadpic44()\" id='img44' src=\"assets/img/bicep6.gif\" \n               width=\"300\" height=\"240\" >\n              <p style=\"text-align: center;\">Seated Angled Dumbbell Curls</p>\n              <div *ngIf=\"flag44==1\"><p (click)=\"hidepic44()\" class=\"exerciseInfo44\" id='hidden'><strong>Muscles Targeted: </strong>Seated angled dumbbell curls is a very effective exercise for the development of your biceps. This exercise targets the biceps brachii muscles that are composed of a short head and a long head, with the emphasis on the short head located on the inner portion of the arm due to the angled nature of the forearms and wrist position during the execution. The brachialis muscle is also impacted and is located between the biceps and the triceps. The brachioradialis muscle which is in the forearm near the elbow is also targeted when the elbow is bent to bring the hand up to the shoulder during upwards portion of the curl.</p>\n              <p (click)=\"hidepic44()\" class=\"exerciseInfo44\" id='hidden'><strong>Exercise Instructions: </strong>This exercise is very similar to the regular seated dumbbell curls except that you will be angling your forearms outward on the upper portion of the exercise. Grasp a dumbbell in each hand and sit at the end of a bench (ideally a seated utility bench with back support) with your feet securely placed on the floor for stability. Simultaneously curl the dumbbells up and out with both hands, slowly turning (supinating) your wrists outward as you raise the dumbbells up to the top. Slowly return to dumbbells back down to the starting position and try to maximize the eccentric “negative” portion to add additional tension on your biceps.</p>\n            </div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          </div>\n      \n      <h1>Quadriceps</h1>\n      <div class=\"row\">\n      <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic25()\" id='img25' src=\"assets/img/quad1.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Jump Squats</p>\n          <div *ngIf=\"flag25==1\"><p (click)=\"hidepic25()\" class=\"exerciseInfo25\" id='hidden'><strong>Exercise Advice: </strong>Start in a deep squat position with your folded out in front of your body. From this position, explosively jump up as high as you can and reach for the ceiling with your hands as you jump. Repeat this until failure. </p>\n          </div>\n          </div>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic45()\" id='img45' src=\"assets/img/quad2.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Barbell Bench Squats </p>\n          <div *ngIf=\"flag45==1\"><p (click)=\"hidepic45()\"  class=\"exerciseInfo45\" id='hidden'><strong>Muscles Targeted: </strong>The squat exercise targets so many different muscles of the lower body and it’s one of the most important compound movements to include in your weight training program. The primary muscle group it targets is the quadriceps which are the 4 muscles on the front of your thighs. This exercise also hits the hamstrings (back of legs), gluteus maximus (butt) and also strengthens the secondary muscles of the lower back.</p>\n          <p (click)=\"hidepic45()\"  class=\"exerciseInfo45\" id='hidden'><strong>Exercise Instructions: </strong>Stand in an area just in front of a squat rack and place a flat bench right behind where you are standing. Place a barbell behind your neck (on your trapezius muscles) and securely rest it on your shoulders. Your feet should be just beyond shoulder width apart. Begin this exercise by squatting to sit down on the bench behind you. Slowly lower the weight down and softly touch your butt onto the bench for a second and then return to the starting position. It is very important that you keep your back as straight as possible throughout this movement. One way to help do this is to keep your shoulders back and your chest out while focusing your eyes on a spot in front of you throughout the entire exercise.</p>\n        </div>\n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <div class=\"column\" id=\"polaroid\" >\n          <img (click)=\"loadpic46()\" id='img46' src=\"assets/img/quad3.gif\" \n           width=\"300\" height=\"240\" >\n          <p style=\"text-align: center;\">Dumbbell Squats</p>\n          <div *ngIf=\"flag46==1\"><p (click)=\"hidepic46()\"  class=\"exerciseInfo46\" id='hidden'><strong>Muscles Targeted: </strong>The dumbbell squat is a highly effective exercise which helps develop the major muscles of the lower body. These muscles include the quadriceps (4 large muscles on the front of the thighs), the hamstrings (back of thighs), the gluteus maximum (butt muscles) and the calves (lower part of the leg). This is one of the best exercises you can use if you want to build muscle and strength in your legs.</p>\n          <p (click)=\"hidepic46()\"  class=\"exerciseInfo46\" id='hidden'><strong>Exercise Instructions: </strong>Stand up straight and place your feet at about shoulder width apart. Grab a dumbbell in both hands and let them naturally hang at your sides. Begin by squatting as though you are going to sit down in a chair while keeping your back flat and your chest out while looking straight ahead. At the bottom of the squat, your legs should be about parallel to the ground. If you don’t have the range of motion or flexibility to go to parallel then don’t. Return to the starting position by pushing off the feet and back up. Be sure to keep your back upright and straight throughout this exercise and keep your overall balance to ensure you maintain a safe and athletic stance.</p>\n        </div>\n      </div>\n      </div>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <br><br><br>\n      <div class=\"example-button-row\">\n        &nbsp;&nbsp;&nbsp;\n      \n      \n        <button (click) = \"dietPlan()\" mat-raised-button color=\"basic\" class = \"plan\">Diet Plan</button>\n        &nbsp;&nbsp;&nbsp;&nbsp;\n        <button (click) = \"dietPlan()\" mat-raised-button color=\"warn\" class = \"plan\">Workout Plan</button>\n        &nbsp;&nbsp;&nbsp;&nbsp;\n        <a class=\"vich\" (click)=\"scroll(nutritionfact)\">  <button (click) = \"food()\" mat-raised-button color=\"primary\" class = \"plan\">Nutrition Facts</button></a>\n        &nbsp;&nbsp;&nbsp;&nbsp;\n        <a (click)=\"scroll(foodrecipe)\"><button (click)=\"rcpe()\" mat-raised-button color=\"warn\" class = \"plan\">Recipe</button></a>\n        &nbsp;&nbsp;&nbsp;&nbsp;\n        <a (click)=\"scroll(vids)\"><button (click)=\"checkfunc()\" mat-raised-button color=\"basic\" class = \"plan\">Videos/GIFs</button></a>\n      </div>\n      \n                                <div #nutritionfact>  \n                                  <div *ngIf=\"flagnutri==1\">\n                                    <br>\n                                  <h1 class = \"suppguide2\" style=\"text-align: center;\" id=\"titlerec\"></h1>   \n                                  \n                                  <!-- first -->\n                                  \n                                    <!-- <h1 id=\"category\"></h1>\n                                  <h3 id=\"label\"></h3> -->\n                                  <img class=\"center\" id=\"image1\" >\n                                  <h2 class = \"sg4\" style=\"text-align: center;\" id=\"fcontent1\"></h2>\n                                  <h2 class = \"sg4\" style=\"text-align: center;\" id=\"ul1\"></h2>\n                                  <ul>\n                                      <li ><p id=\"li1\"></p></li>\n                                      <li ><p id=\"li2\"></p></li>\n                                      <li ><p id=\"li3\"></p></li>\n                                      <li ><p id=\"li4\"></p></li>\n                                      <li ><p id=\"li5\"></p></li>\n                                      </ul>\n                                   \n                                     \n                              \n                              </div>                       \n                                </div>                                  \n                                  <div #foodrecipe>\n                                      <div *ngIf=\"flagrec==1\">\n                                    <h1 class = \"suppguide2\" style=\"text-align: center;\" id=\"titlerec1\"></h1> \n                                    <div class=\"row\"> \n                                      <div class=\"column\" id=\"polaroid1\">\n                                          <div><h3 id=\"title1\"></h3>\n                                              <a target=\"_blank\" id=\"link1\"><img id=\"img111\"></a>\n                                              <p id=\"ing1\"></p></div>\n                                      </div>\n                                      <div class=\"column\" id=\"polaroid1\">\n                                          <div><h3 id=\"title2\"></h3>\n                                          <a target=\"_blank\" id=\"link2\"><img id=\"img222\"></a>\n                                          <p id=\"ing2\"></p></div>\n                                      </div>\n                                      <div class=\"column\" id=\"polaroid1\">\n                                          <div><h3 id=\"title3\"></h3>\n                                              <a target=\"_blank\" id=\"link3\"><img id=\"img333\"></a>\n                                              <p id=\"ing3\"></p></div>\n                                      </div>  \n                                  </div>\n                                  \n                                  <div class=\"row\">\n                                      <div class=\"column\" id=\"polaroid1\">\n                                          <div><h3 id=\"title4\"></h3>\n                                              <a target=\"_blank\" id=\"link4\"><img id=\"img444\"></a>\n                                                <p id=\"ing4\"></p></div>\n                                      </div>\n                                      <div class=\"column\" id=\"polaroid1\">\n                                          <div><h3 id=\"title5\"></h3>\n                                               <a target=\"_blank\" id=\"link5\"><img id=\"img555\"></a>\n                                                  <p id=\"ing5\"></p></div>\n                                       </div>\n                                       <div class=\"column\" id=\"polaroid1\">\n                                          <div><h3 id=\"title6\"></h3>\n                                                  <a target=\"_blank\" id=\"link6\"><img id=\"img666\"></a>\n                                                        <p id=\"ing6\"></p></div>\n                                      </div>\n                                  </div>\n                                  \n                                  <div class=\"row\">\n                                      <div class=\"column\" id=\"polaroid1\">\n                                          <div><h3 id=\"title7\"></h3>\n                                               <a target=\"_blank\" id=\"link7\"><img id=\"img777\"></a>\n                                                      <p id=\"ing7\"></p></div>\n                                      </div>\n                                      <div class=\"column\" id=\"polaroid1\">\n                                         <div><h3 id=\"title8\"></h3>\n                                               <a target=\"_blank\" id=\"link8\"><img id=\"img888\"></a>\n                                                                <p id=\"ing8\"></p></div>\n                                      </div>\n                                      <div class=\"column\" id=\"polaroid1\">\n                                          <div><h3 id=\"title9\"></h3>\n                                                  <a target=\"_blank\" id=\"link9\"><img id=\"img999\"></a>\n                                                          <p id=\"ing9\"></p></div>\n                                      </div>\n                                  </div>\n                                  </div>\n                                  </div>                               \n<div #vids>\n                                  <div *ngIf=\"flagvid==1\"> \n                                      <h1 class = \"suppguide2\" style=\"text-align: center;\" id=\"titleyoutube\"></h1>                      \n                                    <div class=\"row\">\n                                        <div class=\"column\" id=\"polaroid1\">\n                                          <a target=\"_blank\" id=\"asrch1\"><img id=\"vid1\" width=80% ></a><br><br>\n                                        </div>\n                                        <div class=\"column\" id=\"polaroid1\">\n                                             <a target=\"_blank\" id=\"asrch2\"><img id=\"vid2\" width=80% ></a><br><br>\n                                        </div>\n                                        <div class=\"column\" id=\"polaroid1\">\n                                           <a target=\"_blank\" id=\"asrch3\"><img id=\"vid3\" width=80% ></a><br><br>\n                                        </div>\n                                    </div>\n                                                           \n                                    <div class=\"row\">\n                                        <div class=\"column\" id=\"polaroid1\">\n                                             <a target=\"_blank\" id=\"asrch4\"><img id=\"vid4\" width=80% ></a><br><br>\n                                        </div>\n                                        <div class=\"column\" id=\"polaroid1\">\n                                            <a target=\"_blank\" id=\"asrch5\"><img id=\"vid5\" width=80% ></a><br><br>\n                                        </div>\n                                        <div class=\"column\" id=\"polaroid1\">\n                                             <a target=\"_blank\" id=\"asrch6\"><img id=\"vid6\" width=80% ></a><br><br>\n                                        </div>\n                                    </div>\n                                                           \n                                     <div class=\"row\">\n                                        <div class=\"column\" id=\"polaroid1\">\n                                              <a target=\"_blank\" id=\"asrch7\"><img id=\"vid7\" width=80% ></a><br><br>\n                                        </div>\n                                        <div class=\"column\" id=\"polaroid1\">\n                                               <a target=\"_blank\" id=\"asrch8\"><img id=\"vid8\" width=80% ></a><br><br>\n                                         </div>\n                                         <div class=\"column\" id=\"polaroid1\">\n                                                <a target=\"_blank\" id=\"asrch9\"><img id=\"vid9\" width=80% ></a><br><br>\n                                          </div>\n                                    </div>\n                                                           \n                                    <div class=\"row\">\n                                        <div class=\"column\" id=\"polaroid1\">\n                                              <a target=\"_blank\" id=\"asrch10\"><img id=\"vid10\" width=80% ></a><br><br>\n                                         </div>\n                                         <div class=\"column\" id=\"polaroid1\">\n                                               <a target=\"_blank\" id=\"asrch11\"><img id=\"vid11\" width=80% ></a><br><br>\n                                         </div>\n                                         <div class=\"column\" id=\"polaroid1\">\n                                               <a target=\"_blank\" id=\"asrch12\"><img id=\"vid12\" width=80% ></a><br><br>\n                                        </div>\n                                    </div>\n                                                               \n                                    <div class=\"row\">\n                                         <div class=\"column\" id=\"polaroid1\">\n                                              <a target=\"_blank\" id=\"asrch13\"><img id=\"vid13\" width=80% ></a><br><br>\n                                         </div>\n                                          <div class=\"column\" id=\"polaroid1\">\n                                              <a target=\"_blank\" id=\"asrch14\"><img id=\"vid14\" width=80% ></a><br><br>\n                                          </div>\n                                           <div class=\"column\" id=\"polaroid1\">\n                                              <a target=\"_blank\" id=\"asrch15\"><img id=\"vid15\" width=80% ></a><br><br>\n                                          </div>\n                                    </div>\n                                                           \n                                     <div class=\"row\">\n                                          <div class=\"column\" id=\"polaroid1\">\n                                              <a target=\"_blank\" id=\"asrch16\"><img id=\"vid16\" width=80% ></a><br><br>\n                                          </div>\n                                           <div class=\"column\" id=\"polaroid1\">\n                                              <a target=\"_blank\" id=\"asrch17\"><img id=\"vid17\" width=80% ></a><br><br>\n                                          </div>\n                                           <div class=\"column\" id=\"polaroid1\">\n                                                  <a target=\"_blank\" id=\"asrch18\"><img id=\"vid18\" width=80% ></a><br><br>\n                                          </div>\n                                     </div>\n                                    </div> \n                                    <div *ngIf=\"flaggif==1\"> \n                                        <h1 class = \"suppguide2\" style=\"text-align: center;\" id=\"titlegif\"></h1>\n                                            <div class=\"row\">\n                                                <div class=\"column\" id=\"polaroid1\">\n                                            <a target=\"_blank\" id=\"linkk1\"><video id=\"vidd1\" width=80% controls autoplay loop></video></a><br><br>\n                                            </div>\n                                                <div class=\"column\" id=\"polaroid1\">\n                                                <a target=\"_blank\" id=\"linkk2\"><video id=\"vidd2\" width=80% controls autoplay loop></video></a><br><br>\n                                                </div>\n                                                <div class=\"column\" id=\"polaroid1\">\n                                                    <a target=\"_blank\" id=\"linkk3\"><video id=\"vidd3\" width=80% controls autoplay loop></video></a><br><br>\n                                                    </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                    <div class=\"column\" id=\"polaroid1\">\n                                                        <a target=\"_blank\" id=\"linkk4\"><video id=\"vidd4\" width=80% controls autoplay loop></video></a><br><br>\n                                                        </div>\n                                                        <div class=\"column\" id=\"polaroid1\">\n                                                            <a target=\"_blank\" id=\"linkk5\"><video id=\"vidd5\" width=80% controls autoplay loop></video></a><br><br>\n                                                            </div>\n                                                            <div class=\"column\" id=\"polaroid1\">\n                                                                <a target=\"_blank\" id=\"linkk6\"><video id=\"vidd6\" width=80% controls autoplay loop></video></a><br><br>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"row\">\n                                                                <div class=\"column\" id=\"polaroid1\">\n                                                                    <a target=\"_blank\" id=\"linkk7\"><video id=\"vidd7\" width=80% controls autoplay loop></video></a><br><br>\n                                                                    </div>\n                                                                    <div class=\"column\" id=\"polaroid1\">\n                                                                        <a target=\"_blank\" id=\"linkk8\"><video id=\"vidd8\" width=80% controls autoplay loop></video></a><br><br>\n                                                                        </div>\n                                                                        <div class=\"column\" id=\"polaroid1\">\n                                                                            <a target=\"_blank\" id=\"linkk9\"><video id=\"vidd9\" width=80% controls autoplay loop></video></a><br><br>\n                                                                            </div>\n                                                                        </div>\n                                                                        <div class=\"row\">\n                                                                            <div class=\"column\" id=\"polaroid1\">\n                                                                                <a target=\"_blank\" id=\"link10\"><video id=\"vidd10\" width=80% controls autoplay loop></video></a><br><br>\n                                                                                </div>\n                                                                                <div class=\"column\" id=\"polaroid1\">\n                                                                                    <a target=\"_blank\" id=\"link11\"><video id=\"vidd11\" width=80% controls autoplay loop></video></a><br><br>\n                                                                                    </div>\n                                                                                    <div class=\"column\" id=\"polaroid1\">\n                                                                                        <a target=\"_blank\" id=\"link12\"><video id=\"vidd12\" width=80% controls autoplay loop></video></a><br><br>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                    <div class=\"row\">\n                                                                                        <div class=\"column\" id=\"polaroid1\">\n                                                                                            <a target=\"_blank\" id=\"link13\"><video id=\"vidd13\" width=80% controls autoplay loop></video></a><br><br>\n                                                                                            </div>\n                                                                                            <div class=\"column\" id=\"polaroid1\">\n                                                                                                <a target=\"_blank\" id=\"link14\"><video id=\"vidd14\" width=80% controls autoplay loop></video></a><br><br>\n                                                                                                </div>\n                                                                                                <div class=\"column\" id=\"polaroid1\">\n                                                                                                    <a target=\"_blank\" id=\"link15\"><video id=\"vidd15\" width=80% controls autoplay loop></video></a><br><br>\n                                                                                                    </div>\n                                                                                                </div>\n                                                                                                <div class=\"row\">\n                                                                                                    <div class=\"column\" id=\"polaroid1\">\n                                                                                                        <a target=\"_blank\" id=\"link16\"><video id=\"vidd16\" width=80% controls autoplay loop></video></a><br><br>\n                                                                                                        </div>\n                                                                                                        <div class=\"column\" id=\"polaroid1\">\n                                                                                                            <a target=\"_blank\" id=\"link17\"><video id=\"vidd17\" width=80% controls autoplay loop></video></a><br><br>\n                                                                                                            </div>\n                                                                                                            <div class=\"column\" id=\"polaroid1\">\n                                                                                                                <a target=\"_blank\" id=\"link18\"><video id=\"vidd18\" width=80% controls autoplay loop></video></a><br><br>\n                                                                                                                </div>\n                                                                                                            </div>\n                                                                                                                                                       \n                                                                                                                \n                                    </div>\n                                </div>\n                                <div *ngIf = \"flagweight==1\">\n                                  <h2 style=\"text-align: center;\" id=\"diet-plan\"><b>Fat Loss Diet Plan</b></h2>\n                                  <p>A lot can be spoken about what goes into an ideal diet chart. However, one’s nutritional requirement varies based on various factors. It could change depending on gender, for example, male dietary requirements vary from that of a female. Geography can play a role as well, with North Indian diets being largely different from South Indian ones. Meal preferences come into play since the consumption of food by a vegetarian or a vegan differing largely from that by a non-vegetarian.</p> \n                                  <p>However, we have put together a diet plan for weight loss with Indian food. This 7 day diet plan, 1200 calorie diet plan is a sample, and should not be followed by any individual without consulting with a nutritionist.</p>\n                                  <br><br><h3><strong>Day 1:</strong></h3>\n                                  <ul>\n                                    <li>After starting your day with cucumber water, have oats porridge and mixed nuts for breakfast.</li>\n                                    <li>Have a roti with dal and gajar matar sabzi for lunch.</li>\n                                    <li>Follow that up with dal and lauki sabzi to go with a roti for dinner.</li>\n                                    </ul>\n                                  \n                                    <table align=\"center\" style=\"text-align: center;\">\n                                      <tbody>\n                                      <tr>\n                                      <td><span style=\"font-weight: bold;\">Day 1</span></td>\n                                      <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                                      </tr>\n                                      <tr>\n                                      <td>6:30 AM</td>\n                                      <td>Cucumber Detox Water(1 glass)</td>\n                                      </tr>\n                                      <tr>\n                                      <td>8:00 AM</td>\n                                      <td>Oats Porridge in Skimmed Milk(1 bowl)<p></p>\n                                      <p>Mixed Nuts(25 grams)</p></td>\n                                      </tr>\n                                      <tr>\n                                      <td>12:00 PM</td>\n                                      <td>Skimmed Milk Paneer(100 grams)</td>\n                                      </tr>\n                                      <tr>\n                                      <td>2:00 PM</td>\n                                      <td>Mixed Vegetable Salad(1 katori)</td>\n                                      </tr>\n                                      <tr>\n                                      <td>2:10 PM</td>\n                                      <td>Dal(1 katori)Gajar Matar Sabzi(1 katori)<p></p>\n                                      <p>Roti (1 roti/chapati)</p></td>\n                                      </tr>\n                                      <tr>\n                                      <td>4:00 PM</td>\n                                      <td>Cut Fruits(1 cup)Buttermilk(1 glass)</td>\n                                      </tr>\n                                      <tr>\n                                      <td>5:30 PM</td>\n                                      <td>Tea with Less Sugar and Milk(1 teacup)</td>\n                                      </tr>\n                                      <tr>\n                                      <td>8:50 PM</td>\n                                      <td>Mixed Vegetable Salad(1 katori)</td>\n                                      </tr>\n                                      <tr>\n                                      <td>9:00 PM</td>\n                                      <td>Dal(1 katori)Lauki Sabzi(1 katori)<p></p>\n                                      <p>Roti (1 roti/chapati)</p></td>\n                                      </tr>\n                                      </tbody>\n                                      </table> \n                                      <br><br>\n                                      <h3><strong>Day 2:</strong></h3>\n                                      <ul>\n                                        <li>On the second day, eat a mixed vegetable stuffed roti with curd for breakfast.</li>\n                                        <li>For lunch, have half a katori of methi rice along with lentil curry.</li>\n                                        <li>End your day with sauteed vegetables and green chutney.</li>\n                                        </ul>\n                                        <table align=\"center\" style=\"text-align: center;\">\n                                          <tbody>\n                                          <tr>\n                                          <td><span style=\"font-weight: bold;\">Day 2</span></td>\n                                          <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                                          </tr>\n                                          <tr>\n                                          <td>6:30 AM</td>\n                                          <td>Cucumber Detox Water(1 glass)</td>\n                                          </tr>\n                                          <tr>\n                                          <td>8:00 AM</td>\n                                          <td>Curd(1.5 katori)Mixed Vegetable Stuffed Roti(2 piece)</td>\n                                          </tr>\n                                          <tr>\n                                          <td>12:00 PM</td>\n                                          <td>Skimmed Milk Paneer(100 grams)</td>\n                                          </tr>\n                                          <tr>\n                                          <td>2:00 PM</td>\n                                          <td>Mixed Vegetable Salad(1 katori)</td>\n                                          </tr>\n                                          <tr>\n                                          <td>2:10 PM</td>\n                                          <td>Lentil Curry(0.75 bowl)Methi Rice(0.5 katori)</td>\n                                          </tr>\n                                          <tr>\n                                          <td>4:00 PM</td>\n                                          <td>Apple(0.5 small (2-3/4″ dia))Buttermilk(1 glass)</td>\n                                          </tr>\n                                          <tr>\n                                          <td>5:30 PM</td>\n                                          <td>Coffee with Milk and Less Sugar(0.5 tea cup)</td>\n                                          </tr>\n                                          <tr>\n                                          <td>8:50 PM</td>\n                                          <td>Mixed Vegetable Salad(1 katori)</td>\n                                          </tr>\n                                          <tr>\n                                          <td>9:00 PM</td>\n                                          <td>Sauteed Vegetables with Paneer(1 katori)Roti (1 roti/chapati)<p></p>\n                                          <p>Green Chutney(2 tablespoon)</p></td>\n                                          </tr>\n                                          </tbody>\n                                          </table>\n                                          <br><br>    \n                                          <h3><strong>Day 3:</strong></h3>\n                                          <ul>\n                                            <li>Breakfast on day 3 would include Multigrain Toast and Skim Milk Yogurt.</li>\n                                            <li>In the afternoon, have sauteed vegetables with paneer and some green chutney.</li>\n                                            <li>Half a katori of methi rice and some lentil curry to make sure you end the day on a healthy note.</li>\n                                            </ul>\n                                            <table align=\"center\" style=\"text-align: center;\">\n                                              <tbody>\n                                              <tr>\n                                              <td><span style=\"font-weight: bold;\">Day 3</span></td>\n                                              <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                                              </tr>\n                                              <tr>\n                                              <td>6:30 AM</td>\n                                              <td>Cucumber Detox Water(1 glass)</td>\n                                              </tr>\n                                              <tr>\n                                              <td>8:00 AM</td>\n                                              <td>Skim Milk Yoghurt(1 cup (8 fl oz))Multigrain Toast(2 toast)</td>\n                                              </tr>\n                                              <tr>\n                                              <td>12:00 PM</td>\n                                              <td>Skimmed Milk Paneer(100 grams)</td>\n                                              </tr>\n                                              <tr>\n                                              <td>2:00 PM</td>\n                                              <td>Mixed Vegetable Salad(1 katori)</td>\n                                              </tr>\n                                              <tr>\n                                              <td>2:10 PM</td>\n                                              <td>Sauteed Vegetables with Paneer(1 katori)Roti (1 roti/chapati)<p></p>\n                                              <p>Green Chutney(2 tablespoon)</p></td>\n                                              </tr>\n                                              <tr>\n                                              <td>4:00 PM</td>\n                                              <td>Banana(0.5 small (6″ to 6-7/8″ long))Buttermilk(1 glass)</td>\n                                              </tr>\n                                              <tr>\n                                              <td>5:30 PM</td>\n                                              <td>Tea with Less Sugar and Milk(1 teacup)</td>\n                                              </tr>\n                                              <tr>\n                                              <td>8:50 PM</td>\n                                              <td>Mixed Vegetable Salad(1 katori)</td>\n                                              </tr>\n                                              <tr>\n                                              <td>9:00 PM</td>\n                                              <td>Lentil Curry(0.75 bowl)Methi Rice(0.5 katori)</td>\n                                              </tr>\n                                              </tbody>\n                                              </table>\n                                              <br><br>\n                                              <h3><strong>Day 4:</strong></h3>\n                                              <ul>\n                                                <li>Start Day 4 with a Fruit and Nuts Yogurt Smoothie and Egg Omelette</li>\n                                                <li>Follow that up with Moong Dal, Bhindi Sabzi, and roti.</li>\n                                                <li>Complete the day’s food intake with steamed rice and palak chole.</li>\n                                                </ul>\n                                                <table align=\"center\" style=\"text-align: center;\">\n                                                  <tbody>\n                                                  <tr>\n                                                  <td><span style=\"font-weight: bold;\">Day 4</span></td>\n                                                  <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                                                  </tr>\n                                                  <tr>\n                                                  <td>6:30 AM</td>\n                                                  <td>Cucumber Detox Water(1 glass)</td>\n                                                  </tr>\n                                                  <tr>\n                                                  <td>8:00 AM</td>\n                                                  <td>Fruit and Nuts Yogurt Smoothie(0.75 glass)<p></p>\n                                                  <p>Egg Omelette(1 serve(one egg))</p></td>\n                                                  </tr>\n                                                  <tr>\n                                                  <td>12:00 PM</td>\n                                                  <td>Skimmed Milk Paneer(100 grams)</td>\n                                                  </tr>\n                                                  <tr>\n                                                  <td>2:00 PM</td>\n                                                  <td>Mixed Vegetable Salad(1 katori)</td>\n                                                  </tr>\n                                                  <tr>\n                                                  <td>2:10 PM</td>\n                                                  <td>Green Gram Whole Dal Cooked(1 katori)Bhindi sabzi(1 katori)<p></p>\n                                                  <p>Roti (1 roti/chapati)</p></td>\n                                                  </tr>\n                                                  <tr>\n                                                  <td>4:00 PM</td>\n                                                  <td>Orange(1 fruit (2-5/8″ dia))Buttermilk(1 glass)</td>\n                                                  </tr>\n                                                  <tr>\n                                                  <td>5:30 PM</td>\n                                                  <td>Coffee with Milk and Less Sugar(0.5 tea cup)</td>\n                                                  </tr>\n                                                  <tr>\n                                                  <td>8:50 PM</td>\n                                                  <td>Mixed Vegetable Salad(1 katori)</td>\n                                                  </tr>\n                                                  <tr>\n                                                  <td>9:00 PM</td>\n                                                  <td>Palak Chole(1 bowl)Steamed Rice(0.5 katori)</td>\n                                                  </tr>\n                                                  </tbody>\n                                                  </table>\n                                                  <br><br>\n                                                  <h3><strong>Day 5:</strong></h3>\n                                                  <ul>\n                                                    <li>Have a glass of skimmed milk and peas poha for breakfast on the fifth day.</li>\n                                                    <li>Eat a missi roti with low fat paneer curry in the afternoon.</li>\n                                                    <li>End the day with roti, curd and aloo baingan tamatar ki sabzi.</li>\n                                                    </ul>\n                                                    <table align=\"center\" style=\"text-align: center;\">\n                                                      <tbody>\n                                                      <tr>\n                                                      <td><span style=\"font-weight: bold;\">Day 5</span></td>\n                                                      <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                                                      </tr>\n                                                      <tr>\n                                                      <td>6:30 AM</td>\n                                                      <td>Cucumber Detox Water(1 glass)</td>\n                                                      </tr>\n                                                      <tr>\n                                                      <td>8:00 AM</td>\n                                                      <td>Skimmed Milk(1 glass)Peas Poha(1.5 katori)</td>\n                                                      </tr>\n                                                      <tr>\n                                                      <td>12:00 PM</td>\n                                                      <td>Skimmed Milk Paneer(100 grams)</td>\n                                                      </tr>\n                                                      <tr>\n                                                      <td>2:00 PM</td>\n                                                      <td>Mixed Vegetable Salad(1 katori)</td>\n                                                      </tr>\n                                                      <tr>\n                                                      <td>2:10 PM</td>\n                                                      <td>Low Fat Paneer Curry(1.5 katori)Missi Roti(1 roti)</td>\n                                                      </tr>\n                                                      <tr>\n                                                      <td>4:00 PM</td>\n                                                      <td>Papaya(1 cup 1″ pieces)Buttermilk(1 glass)</td>\n                                                      </tr>\n                                                      <tr>\n                                                      <td>5:30 PM</td>\n                                                      <td>Tea with Less Sugar and Milk(1 teacup)</td>\n                                                      </tr>\n                                                      <tr>\n                                                      <td>8:50 PM</td>\n                                                      <td>Mixed Vegetable Salad(1 katori)</td>\n                                                      </tr>\n                                                      <tr>\n                                                      <td>9:00 PM</td>\n                                                      <td>Curd(1.5 katori)Aloo Baingan Tamatar Ki Sabzi(1 katori)<p></p>\n                                                      <p>Roti (1 roti/chapati)</p></td>\n                                                      </tr>\n                                                      </tbody>\n                                                      </table>\n                                                      <br><br>\n                                                      <h3><strong>Day 6:</strong></h3>\n                                                      <ul>\n                                                        <li>On Day 6, have idli with sambar for breakfast</li>\n                                                        <li>For lunch, roti with curd and aloo baingan tamatar ki sabzi</li>\n                                                        <li>To end Day 6, eat green gram with roti and bhindi sabzi</li>\n                                                        </ul>\n                                                        <table align=\"center\" style=\"text-align: center;\">\n                                                          <tbody>\n                                                          <tr>\n                                                          <td><span style=\"font-weight: bold;\">Day 6</span></td>\n                                                          <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                                                          </tr>\n                                                          <tr>\n                                                          <td>6:30 AM</td>\n                                                          <td>Cucumber Detox Water(1 glass)</td>\n                                                          </tr>\n                                                          <tr>\n                                                          <td>8:00 AM</td>\n                                                          <td>Mixed Sambar(1 bowl)Idli(2 idli)</td>\n                                                          </tr>\n                                                          <tr>\n                                                          <td>12:00 PM</td>\n                                                          <td>Skimmed Milk Paneer(100 grams)</td>\n                                                          </tr>\n                                                          <tr>\n                                                          <td>2:00 PM</td>\n                                                          <td>Mixed Vegetable Salad(1 katori)</td>\n                                                          </tr>\n                                                          <tr>\n                                                          <td>2:10 PM</td>\n                                                          <td>Curd(1.5 katori)Aloo Baingan Tamatar Ki Sabzi(1 katori)<p></p>\n                                                          <p>Roti (1 roti/chapati)</p></td>\n                                                          </tr>\n                                                          <tr>\n                                                          <td>4:00 PM</td>\n                                                          <td>Cut Fruits(1 cup)Buttermilk(1 glass)</td>\n                                                          </tr>\n                                                          <tr>\n                                                          <td>5:30 PM</td>\n                                                          <td>Coffee with Milk and Less Sugar(0.5 tea cup)</td>\n                                                          </tr>\n                                                          <tr>\n                                                          <td>8:50 PM</td>\n                                                          <td>Mixed Vegetable Salad(1 katori)</td>\n                                                          </tr>\n                                                          <tr>\n                                                          <td>9:00 PM</td>\n                                                          <td>Green Gram Whole Dal Cooked(1 katori)Bhindi sabzi(1 katori)<p></p>\n                                                          <p>Roti (1 roti/chapati)</p></td>\n                                                          </tr>\n                                                          </tbody>\n                                                          </table>\n                                                          <br><br>\n                                                          <h3><strong>Day 7:</strong></h3>\n                                                          <ul>\n                                                            <li>On the seventh day, start with besan chilla and green garlic chutney.</li>\n                                                            <li>Have steamed rice and palak chole for lunch.</li>\n                                                            <li>End the week on a healthy note with low fat paneer curry and missi roti.</li>\n                                                            </ul>\n                                                            <table align=\"center\" style=\"text-align: center;\">\n                                                              <tbody>\n                                                              <tr>\n                                                              <td><span style=\"font-weight: bold;\">Day 7</span></td>\n                                                              <td><span style=\"font-weight: bold;\">Diet Chart</span></td>\n                                                              </tr>\n                                                              <tr>\n                                                              <td>6:30 AM</td>\n                                                              <td>Cucumber Detox Water(1 glass)</td>\n                                                              </tr>\n                                                              <tr>\n                                                              <td>8:00 AM</td>\n                                                              <td>Besan Chilla(2 cheela)Green Garlic Chutney(3 tablespoon)</td>\n                                                              </tr>\n                                                              <tr>\n                                                              <td>12:00 PM</td>\n                                                              <td>Skimmed Milk Paneer(100 grams)</td>\n                                                              </tr>\n                                                              <tr>\n                                                              <td>2:00 PM</td>\n                                                              <td>Mixed Vegetable Salad(1 katori)</td>\n                                                              </tr>\n                                                              <tr>\n                                                              <td>2:10 PM</td>\n                                                              <td>Palak Chole(1 bowl)Steamed Rice(0.5 katori)</td>\n                                                              </tr>\n                                                              <tr>\n                                                              <td>4:00 PM</td>\n                                                              <td>Apple(0.5 small (2-3/4″ dia))Buttermilk(1 glass)</td>\n                                                              </tr>\n                                                              <tr>\n                                                              <td>5:30 PM</td>\n                                                              <td>Tea with Less Sugar and Milk(1 teacup)</td>\n                                                              </tr>\n                                                              <tr>\n                                                              <td>8:50 PM</td>\n                                                              <td>Mixed Vegetable Salad(1 katori)</td>\n                                                              </tr>\n                                                              <tr>\n                                                              <td>9:00 PM</td>\n                                                              <td>Low Fat Paneer Curry(1 katori)Missi Roti(1 roti)</td>\n                                                              </tr>\n                                                              </tbody>\n                                                              </table>  \n                                                              </div>\n                                                              <div *ngIf = \"flagmuscle==1\">\n                                                                <h2 style=\"text-align: center;\" id=\"diet-plan\"><b>Muscle Building Workout Plan</b></h2>\n                                  <br><br>\n                                  \n                                  <h3><strong>Monday - Chest</strong></h3>\n                                    <table align=\"center\" style=\"text-align: center;\">\n                                      <tbody>\n                                      <tr>\n                                      <td><span style=\"font-weight: bold;\">Exercise</span></td>\n                                      <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n                                      </tr>\n                                      <tr>\n                                      <td>Push Ups (Wide Grip)</td>\n                                      <td>2</td>\n                                      </tr>\n                                      <tr>\n                                        <td>Bench Press</td>\n                                        <td>4</td>\n                                      </tr>\n                                      <tr>\n                                        <td>Incline Dumbbell Press</td>\n                                        <td>3</td>\n                                      </tr>\n                                      <tr>\n                                        <td>Chest Flys</td>\n                                        <td>3</td>\n                                      </tr>\n                                      <tr>\n                                        <td>Chest Press</td>\n                                        <td>3</td>\n                                      </tr>\n                                      <tr>\n                                        <td>Pec-Dec Flys</td>\n                                        <td>3</td>\n                                      </tr>\n                                      \n                                      </tbody>\n                                      </table>\n                                      <br><br> \n                                      <h3><strong>Tuesday - Back</strong></h3>\n                                        <table align=\"center\" style=\"text-align: center;\">\n                                          <tbody>\n                                            <tr>\n                                            <td><span style=\"font-weight: bold;\">Exercise</span></td>\n                                            <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n                                            </tr>\n                                            <tr>\n                                            <td>Pull Ups (Wide Grip)</td>\n                                            <td>2</td>\n                                            </tr>\n                                            <tr>\n                                              <td>Lat Pull Downs</td>\n                                              <td>3</td>\n                                            </tr>\n                                            <tr>\n                                              <td>Seated Rows</td>\n                                              <td>3</td>\n                                            </tr>\n                                            <tr>\n                                              <td>Straight Arm Push Downs</td>\n                                              <td>3</td>\n                                            </tr>\n                                            <tr>\n                                              <td>Barbell Rows</td>\n                                              <td>3</td>\n                                            </tr>\n                                            <tr>\n                                              <td>Dumbbell Pullovers</td>\n                                              <td>2</td>\n                                            </tr>\n                                            \n                                            </tbody>\n                                          </table>\n                                          <br><br>     \n                                          <h3><strong>Wednesday - Shoulders</strong></h3>\n                                  \n                                            <table align=\"center\" style=\"text-align: center;\">\n                                              <tbody>\n                                                <tr>\n                                                <td><span style=\"font-weight: bold;\">Exercise</span></td>\n                                                <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n                                                </tr>\n                                                <tr>\n                                                  <td>Dumbbell Press</td>\n                                                  <td>4</td>\n                                                </tr>\n                                                <tr>\n                                                  <td>Front Raises</td>\n                                                  <td>3</td>\n                                                </tr>\n                                                <tr>\n                                                  <td>Lateral Raises</td>\n                                                  <td>3</td>\n                                                </tr>\n                                                <tr>\n                                                  <td>Rear Delt Flys</td>\n                                                  <td>3</td>\n                                                </tr>\n                                                <tr>\n                                                  <td>Shrugs</td>\n                                                  <td>3</td>\n                                                </tr>\n                                                \n                                                </tbody>\n                                              </table>\n                                              <br><br>\n                                              <h3><strong>Thursday - Arms</strong></h3>\n                                  \n                                                <table align=\"center\" style=\"text-align: center;\">\n                                                  <tbody>\n                                                    <tr>\n                                                    <td><span style=\"font-weight: bold;\">Exercise</span></td>\n                                                    <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n                                                    </tr>\n                                                    <tr>\n                                                    <td>Barbell Curls</td>\n                                                    <td>4</td>\n                                                    </tr>\n                                                    <tr>\n                                                      <td>Cable Curls (Close Grip)</td>\n                                                      <td>3</td>\n                                                    </tr>\n                                                    <tr>\n                                                      <td>Hammer Curls</td>\n                                                      <td>3</td>\n                                                    </tr>\n                                                    <tr>\n                                                      <td>Tricep Push Downs</td>\n                                                      <td>4</td>\n                                                    </tr>\n                                                    <tr>\n                                                      <td>Overhead Extensions</td>\n                                                      <td>3</td>\n                                                    </tr>\n                                                    <tr>\n                                                      <td>Bench Dips</td>\n                                                      <td>3</td>\n                                                    </tr>\n                                                    \n                                                    </tbody>\n                                                  </table>\n                                                  <br><br>\n                                                  <h3><strong>Friday - Legs</strong></h3>\n                                  \n                                                    <table align=\"center\" style=\"text-align: center;\">\n                                                      <tbody>\n                                                        <tr>\n                                                        <td><span style=\"font-weight: bold;\">Exercise</span></td>\n                                                        <td><span style=\"font-weight: bold;\">Number of Sets</span></td>\n                                                        </tr>\n                                                        <tr>\n                                                        <td>Squats</td>\n                                                        <td>4</td>\n                                                        </tr>\n                                                        <tr>\n                                                          <td>Leg Extensions</td>\n                                                          <td>3</td>\n                                                        </tr>\n                                                        <tr>\n                                                          <td>Weighted Lunges</td>\n                                                          <td>3</td>\n                                                        </tr>\n                                                        <tr>\n                                                          <td>Leg Curls</td>\n                                                          <td>3</td>\n                                                        </tr>\n                                                        <tr>\n                                                          <td>Calf Raises</td>\n                                                          <td>4</td>\n                                                        </tr>\n                                                        \n                                                        </tbody>\n                                                      </table>\n                                                      <br><br>\n                                                              \n                                                              </div>\n                                <hr class=\"laalhr\">   \n                            </div>\n                            <footer class=\"footer-area section-gap\">\n                              <div class=\"container\">\n                                  <div class=\"row\">\n                                      <div class=\"col-lg-3  col-md-6 col-sm-6\">\n                                          <div class=\"single-footer-widget\">\n                                              <h4>About Us</h4>\n                                              <p>\n                                                  Sidakdeep Singh\n                                              <br>Jatinvir Singh\n                                              <br>Jaspreet Singh\n                                              <br>Ishika Sindhi\n                                              </p>\n                                          </div>\n                                      </div>\n                                      <div class=\"col-lg-4  col-md-6 col-sm-6\">\n                                          <div class=\"single-footer-widget\">\n                                              <h4>Contact Us</h4>\n                                              \n                                              <p class=\"number\">\n                                                  +91 7973245205 <br>\n                                                  +91 9915902685\n                                              </p>\n                                          </div>\n                                      </div>\t\t\t\t\t\t\n                                      <div class=\"col-lg-5  col-md-6 col-sm-6\">\n                                          <div class=\"single-footer-widget\">\n                                              <h4>Newsletter</h4>\n                                              <p>You can trust us. we only send  offers, not a single spam.</p>\n                                              <div class=\"d-flex flex-row\" id=\"mc_embed_signup\">\n                          \n                          \n                                                    <form class=\"navbar-form\" novalidate=\"true\">\n                                                      <div class=\"input-group add-on\">\n                                                            <input [(ngModel)]=\"newsletter\" class=\"form-control\" name=\"EMAIL\" placeholder=\"Email address\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Email address'\" required=\"\" type=\"email\">\n                                                          <div style=\"position: absolute; left: -5000px;\">\n                                                              <input name=\"b_36c4fd991d266f23781ded980_aefe40901a\" tabindex=\"-1\" value=\"\" type=\"text\">\n                                                          </div>\n                                                        <div class=\"input-group-btn\">\n                                                          <button (click)=\"subs()\" class=\"genric-btn\"><span class=\"lnr lnr-arrow-right\"></span></button>\n                                                        </div>\n                                                      </div>\n                                                        <div class=\"info mt-20\"></div>\t\t\t\t\t\t\t\t\t    \n                                                    </form>\n                                              </div>\n                                          </div>\n                                      </div>\t\t\t\t\t\t\n                                  </div>\n                                  <div class=\"footer-bottom row\">\n                                      <p class=\"footer-text m-0 col-lg-6\">\n                                          \n                                      </p>\n                                      <div class=\"footer-social col-lg-6\">\n                                        <a target=\"_blank\" href=\"https://www.facebook.com\"><i class=\"fa fa-facebook\"></i></a>\n                                        <a target=\"_blank\" href=\"https://twitter.com/home\"><i class=\"fa fa-twitter\"></i></a>\n                                        <a title=\"Click here to chat with the bot\" (click)=\"chatbot()\"><i class=\"fa fa-wechat\"></i></a>\n                                      </div>\n                                  </div>\n                              </div>\n                          </footer>\t\n    \n\n</div>\n    \n                         \n                          \n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/premiumlogin/premiumlogin.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/premiumlogin/premiumlogin.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPremiumloginPremiumloginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class = \"kaim\" style = \"text-align: center;\" mat-dialog-title>Advanced Login</h1>\n<mat-dialog-content class=\"mat-typography\">\n          <form class=\"example-form\" (ngSubmit) = \"onAddPost(loginForm)\" #loginForm = \"ngForm\">\n            <div>\n              <mat-form-field class=\"example-full-width\">\n                <mat-label>Email</mat-label>\n                <input matInput   type = \"email\" \n                 placeholder=\"Enter your email\"\n                 pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"\n                 required\n                 #email = \"ngModel\" ngModel name = \"email\">\n                 <mat-error *ngIf = \"email.invalid\">\n                  <mat-error *ngIf=\"email.errors.required\">\n                   Please enter your email\n                 </mat-error>\n                 <mat-error *ngIf=\"email.errors.pattern\">\n                   Please enter valid email\n                 </mat-error>\n                 </mat-error>\n                 </mat-form-field>\n            </div>\n            <br>\n            \n            \n            <div >\n              <mat-form-field class=\"example-full-width\">\n                <mat-label>Password</mat-label>\n                <input matInput  type = \"password\" \n                placeholder=\"Password\"\n                pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}\" \n                required showHideInput\n                 #password = \"ngModel\" ngModel name = \"password\">\n                 <mat-error *ngIf = \"password.invalid\">\n                  <mat-error *ngIf=\"password.errors.required\">\n                   Please enter your password\n                 </mat-error>\n                 <mat-error *ngIf=\"password.errors.pattern\">\n                  Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters\n                 </mat-error>\n               </mat-error>\n            </mat-form-field>\n            </div>\n            <br>\n            <div>\n            \n             </div>\n             <br>\n            \n          </form>\n   \n  \n</mat-dialog-content>\n    <mat-dialog-actions align=\"end\">\n        <button mat-button mat-dialog-close mat-stroked-button color=\"warn\" style=\"background-color: whitesmoke;\">Cancel</button>\n        <button mat-raised-button mat-dialog-close color=\"warn\"   class=\"example-button-row\"  (click)=\"onLogin(loginForm)\">Log In</button> <!--(click)=\"login()\"-->\n    </mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"flag2==0\">\n<h1 class = \"kaim\" style = \"text-align: center;\" mat-dialog-title>Become A Member</h1>\n</div>\n\n<p class =\"nau\" style=\"color:white;\">{{message}}</p>\n<mat-dialog-content class=\"mat-typography\">\n        <div class=\"container\">\n           <div class=\"farum\">  \n             <div> \n               <p class=\"siraa\" >Fill in this form to start your fitness journey.</p>\n             </div>\n             <hr>\n             <form class=\"example-form\" (ngSubmit) = \"onAddPost(signupForm)\" #signupForm = \"ngForm\">\n                 <div>\n                 <mat-form-field class=\"example-full-width\">\n                   <mat-label>Name</mat-label>\n                   <input matInput minlength = \"4\"  type = \"text\" \n                   required \n                   [(ngModel)]=\"user.firstName\" [ngModelOptions]=\"{standalone: true}\"\n                    #name = \"ngModel\" ngModel name = \"name\">\n                        <mat-placeholder class=\"placeholder\">Search</mat-placeholder>\n                   <mat-error *ngIf = \"name.invalid\">\n                    <mat-error *ngIf=\"name.errors.required\">\n                     Please enter your username\n                   </mat-error>\n                   <mat-error *ngIf=\"name.errors.minlength\">\n                       Name's length should at least be 4\n                   </mat-error>\n                 </mat-error>\n                  </mat-form-field><br>\n                 </div>\n                 <br>\n                 <div>\n                   <!-- <mat-label class=\"sub\">Age</mat-label>  -->\n                 <mat-form-field class=\"example-full-width\">\n                   <mat-label>Age</mat-label>\n                   <input matInput maxlength = \"2\"  type = \"text\" \n                  placeholder=\"Enter your age\"\n                   [(ngModel)]=\"user.age\" [ngModelOptions]=\"{standalone: true}\"\n                    #age = \"ngModel\" ngModel name = \"age\"   required>\n                    <mat-error *ngIf = \"age.invalid\">\n                     <mat-error *ngIf=\"age.errors.required\">\n                       Please enter your age\n                     </mat-error>\n                    <mat-error *ngIf=\"age.errors.maxlength\">\n                        Age's maximum length should not be more than 2\n                    </mat-error>\n                  </mat-error>\n                  </mat-form-field><br>\n                 </div>\n                 <br>\n                 <div>\n                   <!-- <p class=\"sub\">Email</p> -->\n                   <mat-form-field class=\"example-full-width\">\n                     <mat-label>Email</mat-label>\n                     <input matInput  type = \"email\" \n                      placeholder=\"Enter your email\"\n                     pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" required\n                     [(ngModel)]=\"user.eMail\" [ngModelOptions]=\"{standalone: true}\"\n                      #email = \"ngModel\" ngModel name = \"email\">\n                      <mat-error *ngIf = \"email.invalid\">\n                       <mat-error *ngIf=\"email.errors.required\">\n                        Please enter your email\n                      </mat-error>\n                      <mat-error *ngIf=\"email.errors.pattern\">\n                        Please enter valid email\n                      </mat-error>\n                      </mat-error>\n                      </mat-form-field>\n                 </div>\n                 <br>\n                 <div>\n                   <!-- <p class=\"sub\">Contact Number</p> -->\n                  <mat-form-field class=\"example-full-width\">\n                   <mat-label>Contact Number</mat-label>\n                    <input matInput minlength = \"10\" maxlength=\"10\"  type = \"text\" \n                    required placeholder=\"Enter your number\"\n                    [(ngModel)]=\"user.number\" [ngModelOptions]=\"{standalone: true}\"\n                     #mnum = \"ngModel\" ngModel name = \"mnum\">\n                     <mat-error *ngIf = \"mnum.invalid\">\n                       <mat-error *ngIf=\"mnum.errors.required\">\n                        Please enter your number\n                      </mat-error>\n                      <mat-error *ngIf=\"mnum.errors.minlength\">\n                         Number's length should at least be 10\n                      </mat-error>\n                    </mat-error>\n                   </mat-form-field><br>\n                  </div>\n                  <br>\n                  <div>\n                    <!-- <p class=\"sub\">Password</p> -->\n                   <mat-form-field  class=\"example-full-width\">\n                    <mat-label>Password</mat-label>\n                    <input matInput  type = \"password\" \n                     placeholder=\"Enter your password\"\n                     pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}\" required showHideInput\n                    [(ngModel)]=\"user.password\" [ngModelOptions]=\"{standalone: true}\"\n                     #password = \"ngModel\" ngModel name = \"password\">\n                     <mat-error *ngIf = \"password.invalid\">\n                      <mat-error *ngIf=\"password.errors.required\">\n                       Please enter your password\n                     </mat-error>\n                     <mat-error *ngIf=\"password.errors.pattern\">\n                      Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters\n                     </mat-error>\n                   </mat-error>\n                   </mat-form-field><br/><br/>\n                  </div>\n                 <div>\n                   <!-- <p class=\"sub\">Plan Chosen</p> -->\n                  <mat-form-field  class=\"example-full-width\">\n                   <mat-label>Choose a Plan</mat-label>\n                   <mat-select placeholder=\"Choose your plan\" [(ngModel)]=\"user.plan\" [ngModelOptions]=\"{standalone: true}\"  #plan = \"ngModel\" ngModel name = \"plan\" required>\n                    \n                    <mat-option *ngFor=\"let plan of plans\" [value]=\"plan.value\"  >{{plan.viewValue}}</mat-option>\n                    \n                    </mat-select>\n                    <mat-error *ngIf = \"plan.invalid\">\n                     <mat-error *ngIf=\"plan.errors.required\">\n                      Please choose your plan\n                    </mat-error>\n                     <!-- <mat-error *ngIf=\"mnum.errors.minlength\">\n                       Number's length should at least be 7\n                    </mat-error> -->\n                  </mat-error> \n                  </mat-form-field><br/><br/><br/>\n                 </div>\n                 <br>\n                 \n                  <br><br>\n                  \n\n             </form>\n           </div>\n           \n             <br><br>\n           <br>\n           <br> \n       </div>\n       \n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n    <div *ngIf = \"flag2==0\">\n        \n  <button mat-button mat-dialog-close mat-stroked-button color=\"warn\" style=\"background-color: whitesmoke;\">Cancel</button>\n  <button mat-raised-button color=\"warn\" class=\"example-button-row\" (click)=\"registerProcess()\">Let's Go!</button> \n\n</div>\n  <div *ngIf = \"flag1==1\">\n  <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"true\" cdkFocusInitial>Continue</button>\n  \n</div>\n<br><br>\n</mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/supplement/supplement.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supplement/supplement.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSupplementSupplementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<header id=\"header\" id=\"home\" >\n     <br>\n    <div class=\"container\" #home>\n        <br>\n        <div class=\"row header-top align-items-center\">\n            \n            <div class=\"col-lg-4 col-sm-4 menu-top-left\">\n                \n                <span>\n                    GET FIT WITH 3 GYMNESIUM. <br>\n                PLANNING IS ALL YOU NEED!\n                </span>\n            </div>\n            \n            <div class=\"col-lg-4 menu-top-middle justify-content-center d-flex\">\n                <a title=\"Go to MainPage\" routerLink=\"/main\">\n                    <img class=\"img-fluid\" src=\"assets/img/logo.png\" alt=\"\">\t\n                </a>\n                \t\t    \t\t\t\n            </div>\n            <div class=\"col-lg-4 col-sm-4 menu-top-right\">\n                {{message}} &nbsp;&nbsp;&nbsp;\n                <a class=\"tel\" href=\"tel:+91 9915902685\">+91 9915902685</a>\n                <a  height=\"50px\" href=\"+91 9915902685\"><span class=\"lnr lnr-phone-handset\"></span></a> \n            </div>\n            \n        \n        </div>\n        <br>\n    </div>\t\n        <hr>\n    \n</header>  \n<!-- End callto Area -->\n<br>\n<p class=\"suppguide2\">SUPPLEMENT GUIDE</p>\n<br><br><br>\n<div class=\"container\">\n<p class=\"sg4\">5 Supplements You Need Now</p>\n<p class=\"sg5\">Supplement stacks can intimidate newcomers to nutrition and training. This is your beginner's guide, starting with the main ingredients! Supplements will never replace proper nutrition, but they can help you hit your fitness goals faster! Supplements complement your diet and help cover nutrient gaps, ensuring that your body has what it needs for peak performance. No matter what your training goals are, the right supplements can help improve your health, performance and physique.</p>\n<br><br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<img class=\"img-supp\" src=\"assets/img/supplements.jpg\">\n<br><br><br><br><br><br>\n\n<p class=\"supphead\">1. Whey Protein</p>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<img class=\"img-whey\" src=\"assets/img/whey.jpg\">\n\n<p class=\"sg5\">Pop open the protein section of a 20-year-old diet book. It looks nothing like today's nutrition literature! It was thought that the human body needed 10-to-15 percent of its daily caloric intake from protein, a number still propagated by official government guidelines.\n    Now, after extensive study and testing, it's commonly thought that 20-to-30 percent is a more accurate intake, especially for hard-training athletes and weekend warriors.\n    Because they've been educated by strength trainers and coaches, athletes eat high amounts of protein. Their coaches discovered what works best through decades of trial and error. Just recently has this information been absorbed by the general public. The first and most obvious step to getting enough daily protein is through food—preferably through animal sources, complete proteins. This can be time-consuming and expensive.\n    Eating every 2-to-3 hours isn't possible for some people, while others just don't want to eat that frequently. That's where protein supplementation factors in.\n    Protein supplements act fast and enable you to comfortably and affordably meet your daily protein goals, even when you're busy at work.\n    At certain times, especially after a workout, protein supplements may even be more beneficial than food. Because whey protein is digested quickly and easily, it's the ideal post-workout protein source.</p>\n\n\n<br><br><br>\n<p class=\"supphead\">2. Fish Oil (Omega-3s)</p>\n<br><br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<img class=\"img-fishoil\" src=\"assets/img/fishoil.jpg\">\n\n<p class=\"sg5\">Fish oil's numerous benefits come from its high levels of omega-3 fatty acids, particularly EPA and DHA. Omega-3s are considered \"essential fatty acids,\" which means they're necessary for human health, but aren't made by the body.\n    Omega-3 fats are found most abundantly in oily fish, eggs, grass-fed beef and wild animals (deer, elk, etc.). Omega-3 fatty acids are also present in various non-animal products, such as Brazil nuts, walnuts and flaxseeds. In Palaeolithic times, omega-3 fats were found more abundantly in numerous animals. Due to industrial farming, modern preservation methods and reduced soil quality, today's animal products typically contain fewer total omega-3 fatty acids.\n    Because of their rich EPA and DHA content, fish oil supplements are an ideal omega-3 source. Fish oil is an essential supplement, whether you're trying to build muscle, burn fat, or boost overall health.</p>\n    <p class=\"sg5\">Fish oil supports:</p>\n        <li>Cognitive function</li>\n        <li>Normal, healthy immune system function</li>\n        <li>Heart health</li>\n        <li>Healthy skin</li>\n        <li>Vision</li>\n        <li>Joint Health</li>\n\n<br><br><br>\n<p class=\"supphead\">3. Branched Chain Amino Acids</p>\n<br><br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<img class=\"img-whey\" src=\"assets/img/bcaa.jpg\">\n<br><br>\n<p class=\"sg5\">The branched chain amino acids are leucine, isoleucine and valine. When taken during training, BCAAs can improve prolonged performance and promote recovery. BCAAs may also reduce muscle breakdown (catabolism), potentially leading to more total muscle growth. Naturally found in foods high in protein, BCAAs are already part of anyone's diet. As a supplement, however, BCAAs are particularly useful during a workout for increased energy, less total muscle breakdown, and improved recovery.\n    They're also useful on non-training days to help maintain lean body mass.</p>\n\n\n<br><br><br>\n<p class=\"supphead\">4. Glutamine</p>\n<br><br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<img class=\"img-gluta\" src=\"assets/img/glutamine.jpg\">\n<br><br><br><br>\n<p class=\"sg5\">Glutamine is an adaptogenic amino acid found in protein. It's the most abundant amino acid in skeletal muscle, and also plays a vital role in immune system\n    health and the wellbeing of the entire body.\n    In supplement form, glutamine can yield additional benefits to help build muscle mass. Glutamine is particularly beneficial after workouts because it has the ability to re-synthesize muscle glycogen and glutamine levels lost during exercise without the release of insulin.\n    This is great news for people who workout several time per week, especially on a low-carb diet. Longer recovery time means a longer time to reach your goals. Start supplementing with glutamine!</p>\n\n<br><br><br>\n<p class=\"supphead\">5. Creatine</p>\n<br><br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<img class=\"img-gluta\" src=\"assets/img/creatine.jpg\">\n<br><br><br><br>\n<p class=\"sg5\">Creatine is one of the most-well-studied supplements on the market. It has been shown to improve sprint times and boost the performance of athletes engaged in high-intensity activity, such as weightlifting and strength training.\n    Creatine can boost maximal strength and energy output during exercise, allowing you to lift heavier, longer. It also acts as a \"cell volumizer,\" making muscles fuller.\n    Creatine is a by-product of amino acid metabolites found in the liver, kidneys, and pancreas. Approximately 95 percent of creatine is stored in skeletal muscle, and the remaining five percent in the liver, kidneys, brain and testes. While there are multiple forms of creatine available, creatine monohydrate has been around longest and is the best-tested.\n    These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>\n\n<br><br><br>\n\n<hr class=\"laalhr\">\n\n</div>\n<!-- start footer Area -->\t\t\n<footer class=\"footer-area section-gap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-3  col-md-6 col-sm-6\">\n                <div class=\"single-footer-widget\">\n                    <h4>About Us</h4>\n                    <p>\n                        Sidakdeep Singh\n                    <br>Jatinvir Singh\n                    <br>Jaspreet Singh\n                    <br>Ishika Sindhi\n                    </p>\n                </div>\n            </div>\n            <div class=\"col-lg-4  col-md-6 col-sm-6\">\n                <div class=\"single-footer-widget\">\n                    <h4>Contact Us</h4>\n                    \n                    <p class=\"number\">\n                        +91 7973245205 <br>\n                        +91 9915902685\n                    </p>\n                </div>\n            </div>\t\t\t\t\t\t\n            <div class=\"col-lg-5  col-md-6 col-sm-6\">\n                <div class=\"single-footer-widget\">\n                    <h4>Newsletter</h4>\n                    <p>You can trust us. we only send  offers, not a single spam.</p>\n                    <div class=\"d-flex flex-row\" id=\"mc_embed_signup\">\n\n\n                          <form class=\"navbar-form\" novalidate=\"true\">\n                            <div class=\"input-group add-on\">\n                                  <input class=\"form-control\" name=\"EMAIL\" placeholder=\"Email address\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Email address'\" required=\"\" type=\"email\">\n                                <div style=\"position: absolute; left: -5000px;\">\n                                    <input name=\"b_36c4fd991d266f23781ded980_aefe40901a\" tabindex=\"-1\" value=\"\" type=\"text\">\n                                </div>\n                              <div class=\"input-group-btn\">\n                                <button (click)=\"subs()\" class=\"genric-btn\"><span class=\"lnr lnr-arrow-right\"></span></button>\n                              </div>\n                            </div>\n                              <div class=\"info mt-20\"></div>\t\t\t\t\t\t\t\t\t    \n                          </form>\n                    </div>\n                </div>\n            </div>\t\t\t\t\t\t\n        </div>\n        <div class=\"footer-bottom row\">\n            <p class=\"footer-text m-0 col-lg-6\">\n                \n            </p>\n            <div class=\"footer-social col-lg-6\">\n                <a target=\"_blank\" href=\"https://www.facebook.com\"><i class=\"fa fa-facebook\"></i></a>\n                                        <a target=\"_blank\" href=\"https://twitter.com/home\"><i class=\"fa fa-twitter\"></i></a>\n                                        <a title=\"Click here to chat with the bot\" (click)=\"chatbot()\"><i class=\"fa fa-wechat\"></i></a>\n            </div>\n        </div>\n    </div>\n</footer>\t \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/userdata/userdata.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userdata/userdata.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserdataUserdataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content>\n<div class=\"tableclass\">\n    <div class=\"container\">\n    <table id=\"customers\">\n        <tr>\n          <th ><font size=\"20px\">Name</font></th>\n          <th ><font size=\"20px\">Email</font></th>\n          <th ><font size=\"20px\">Age</font></th>\n          <th ><font size=\"20px\">Plan</font></th>\n        </tr>\n        <tr *ngFor=\"let u of user1 | async\" style=\"width: 300px;\">\n          <td ><font size=\"20px\">{{u.firstName}}</font></td>\n          <td ><font size=\"20px\">{{u.eMail}}</font></td>\n          <td ><font size=\"20px\">{{u.age}}</font></td>\n          <td ><font size=\"20px\">{{u.plan}}</font></td>\n          </tr>\n      </table>\n    </div>\n</div>\n<div *ngIf=\"user1==null\">\n    <h1 style=\"color: whitesmoke;\">NO DATA!</h1>\n</div>\n\n</mat-dialog-content>\n<br>\n<mat-dialog-actions align=\"end\">\n    <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"true\" cdkFocusInitial>Continue</button>\n  </mat-dialog-actions>\n  <br>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mainpage/mainpage.component */
    "./src/app/mainpage/mainpage.component.ts");
    /* harmony import */


    var _basic_basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./basic/basic.component */
    "./src/app/basic/basic.component.ts");
    /* harmony import */


    var _intermediate_intermediate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./intermediate/intermediate.component */
    "./src/app/intermediate/intermediate.component.ts");
    /* harmony import */


    var _premium_premium_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./premium/premium.component */
    "./src/app/premium/premium.component.ts");
    /* harmony import */


    var _supplement_supplement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./supplement/supplement.component */
    "./src/app/supplement/supplement.component.ts");

    var routes = [{
      path: 'main',
      component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_3__["MainpageComponent"]
    }, {
      path: 'basic',
      component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_4__["BasicComponent"]
    }, {
      path: 'intermediate',
      component: _intermediate_intermediate_component__WEBPACK_IMPORTED_MODULE_5__["IntermediateComponent"]
    }, {
      path: 'premium',
      component: _premium_premium_component__WEBPACK_IMPORTED_MODULE_6__["PremiumComponent"]
    }, {
      path: 'supplement',
      component: _supplement_supplement_component__WEBPACK_IMPORTED_MODULE_7__["SupplementComponent"]
    }, {
      path: '',
      redirectTo: '/main',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_3__["MainpageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'fitness1';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mainpage/mainpage.component */
    "./src/app/mainpage/mainpage.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _basic_basic_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./basic/basic.component */
    "./src/app/basic/basic.component.ts");
    /* harmony import */


    var _intermediate_intermediate_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./intermediate/intermediate.component */
    "./src/app/intermediate/intermediate.component.ts");
    /* harmony import */


    var _premium_premium_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./premium/premium.component */
    "./src/app/premium/premium.component.ts");
    /* harmony import */


    var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ng-simple-slideshow */
    "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
    /* harmony import */


    var _supplement_supplement_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./supplement/supplement.component */
    "./src/app/supplement/supplement.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./userdata/userdata.component */
    "./src/app/userdata/userdata.component.ts");
    /* harmony import */


    var _basiclogin_basiclogin_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./basiclogin/basiclogin.component */
    "./src/app/basiclogin/basiclogin.component.ts");
    /* harmony import */


    var _intermediatelogin_intermediatelogin_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./intermediatelogin/intermediatelogin.component */
    "./src/app/intermediatelogin/intermediatelogin.component.ts");
    /* harmony import */


    var _premiumlogin_premiumlogin_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./premiumlogin/premiumlogin.component */
    "./src/app/premiumlogin/premiumlogin.component.ts");
    /* harmony import */


    var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./chatbot/chatbot.component */
    "./src/app/chatbot/chatbot.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_6__["MainpageComponent"], _basic_basic_component__WEBPACK_IMPORTED_MODULE_34__["BasicComponent"], _intermediate_intermediate_component__WEBPACK_IMPORTED_MODULE_35__["IntermediateComponent"], _premium_premium_component__WEBPACK_IMPORTED_MODULE_36__["PremiumComponent"], _supplement_supplement_component__WEBPACK_IMPORTED_MODULE_38__["SupplementComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_39__["SignupComponent"], _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_40__["UserdataComponent"], _basiclogin_basiclogin_component__WEBPACK_IMPORTED_MODULE_41__["BasicloginComponent"], _intermediatelogin_intermediatelogin_component__WEBPACK_IMPORTED_MODULE_42__["IntermediateloginComponent"], _premiumlogin_premiumlogin_component__WEBPACK_IMPORTED_MODULE_43__["PremiumloginComponent"], _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_44__["ChatbotComponent"]],
      imports: [ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_37__["SlideshowModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      entryComponents: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_39__["SignupComponent"], _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_40__["UserdataComponent"], _basiclogin_basiclogin_component__WEBPACK_IMPORTED_MODULE_41__["BasicloginComponent"], _intermediatelogin_intermediatelogin_component__WEBPACK_IMPORTED_MODULE_42__["IntermediateloginComponent"], _premiumlogin_premiumlogin_component__WEBPACK_IMPORTED_MODULE_43__["PremiumloginComponent"], _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_44__["ChatbotComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/basic/basic.component.css":
  /*!*******************************************!*\
    !*** ./src/app/basic/basic.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppBasicBasicComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* :host{\n    \n    background: #E9E9E9;\n  } */\n  \n  \n  /* #polaroid {\n    margin: 20px;\n    width: 320px;\n    padding: 10px 10px 20px 10px;\n    border: 1px solid #BFBFBF;\n    background-color: white;\n    box-shadow: 10px 10px 5px #aaaaaa;\n  } */\n  \n  \n  /* #polaroid1{\n    width: 400px;\n    padding: 10px 10px 20px 10px;\n  } */\n  \n  \n  /* .column {\n    float: left;\n    width: 40%;\n    padding: 5px;\n  }\n  \n  /* Clearfix (clear floats) */\n  \n  \n  /* .row::after {\n    content: \"\";\n    clear: both;\n    display: table;\n  } */\n  \n  \n  /*Working up there*/\n  \n  \n  /*Working up ther*/\n  \n  \n  .bgchitta{\n  background-color: white;\n}\n  \n  \n  .laalhr{\n  background-color: red;\n  height: 2px;\n}\n  \n  \n  .varjish{\n  color:rgb(218, 13, 13);\n  font-family: Stencil Std, fantasy;\n  font-variant: small-caps;\n  font-size: 70px;\n  text-align: center;\n}\n  \n  \n  ul{list-style-type: none;\ntext-align: center;\n}\n  \n  \n  td,  th {\n  border: 1px solid black;\n  padding: 8px;\n  \n}\n  \n  \n  tr:nth-child(even){background-color: #bebcbc;}\n  \n  \n  tr:hover {background-color: #ddd;}\n  \n  \n  th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white;\n}\n  \n  \n  p{\n  font-family: \"Trebuchet MS\";\n}\n  \n  \n  li\n{\n  font-family: \"Trebuchet MS\";\n}\n  \n  \n  button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 10px 42px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n  \n  \n  h1{\n    text-align: left;\n    color:black;\n    font-family: sans-serif;\n    font-size: 35px;\n}\n  \n  \n  .plan{\n  font-size: 20px; \n}\n  \n  \n  h3{\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWMvYmFzaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0tBR0s7OztFQUdIOzs7Ozs7O0tBT0c7OztFQUNIOzs7S0FHRzs7O0VBQ0g7Ozs7Ozs4QkFNNEI7OztFQUM1Qjs7OztLQUlHOzs7RUFFTCxtQkFBbUI7OztFQUduQixrQkFBa0I7OztFQUVsQjtFQUNFLHVCQUF1QjtBQUN6Qjs7O0VBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOzs7RUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7OztFQUVBLEdBQUcscUJBQXFCO0FBQ3hCLGtCQUFrQjtBQUNsQjs7O0VBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTs7QUFFZDs7O0VBRUEsbUJBQW1CLHlCQUF5QixDQUFDOzs7RUFFN0MsVUFBVSxzQkFBc0IsQ0FBQzs7O0VBRWpDO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7O0VBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7OztFQUNBOztFQUVFLDJCQUEyQjtBQUM3Qjs7O0VBQ0E7RUFDRSx5QkFBeUIsRUFBRSxVQUFVO0VBQ3JDLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7OztFQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7O0VBQ0E7RUFDRSxlQUFlO0FBQ2pCOzs7RUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljL2Jhc2ljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA6aG9zdHtcbiAgICBcbiAgICBiYWNrZ3JvdW5kOiAjRTlFOUU5O1xuICB9ICovXG4gIFxuICBcbiAgLyogI3BvbGFyb2lkIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAyMHB4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JGQkZCRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4ICNhYWFhYWE7XG4gIH0gKi9cbiAgLyogI3BvbGFyb2lkMXtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDIwcHggMTBweDtcbiAgfSAqL1xuICAvKiAuY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgLyogQ2xlYXJmaXggKGNsZWFyIGZsb2F0cykgKi9cbiAgLyogLnJvdzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH0gKi8gXG5cbi8qV29ya2luZyB1cCB0aGVyZSovXG5cblxuLypXb3JraW5nIHVwIHRoZXIqL1xuXG4uYmdjaGl0dGF7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmxhYWxocntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDJweDtcbn1cblxuLnZhcmppc2h7XG4gIGNvbG9yOnJnYigyMTgsIDEzLCAxMyk7XG4gIGZvbnQtZmFtaWx5OiBTdGVuY2lsIFN0ZCwgZmFudGFzeTtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBmb250LXNpemU6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudWx7bGlzdC1zdHlsZS10eXBlOiBub25lO1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZCwgIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgXG59XG5cbnRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjYmViY2JjO31cblxudHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuXG50aCB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xufVxucHtcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCI7XG59XG5saVxue1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbn1cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7IC8qIEdyZWVuICovXG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDQycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaDF7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG4ucGxhbntcbiAgZm9udC1zaXplOiAyMHB4OyBcbn1cbmgze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/basic/basic.component.ts":
  /*!******************************************!*\
    !*** ./src/app/basic/basic.component.ts ***!
    \******************************************/

  /*! exports provided: BasicComponent */

  /***/
  function srcAppBasicBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicComponent", function () {
      return BasicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../chatbot/chatbot.component */
    "./src/app/chatbot/chatbot.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var BasicComponent = /*#__PURE__*/function () {
      // @Inject(DOCUMENT) private _document
      function BasicComponent(dialog) {
        _classCallCheck(this, BasicComponent);

        this.dialog = dialog;
        this.flag1 = 0;
        this.flag2 = 0;
        this.flag3 = 0;
        this.flag4 = 0;
        this.flag5 = 0;
        this.flag6 = 0;
        this.flag7 = 0;
        this.flag8 = 0;
        this.flag9 = 0;
        this.flag10 = 0;
        this.flag11 = 0;
        this.flag12 = 0;
        this.flag13 = 0;
        this.flag14 = 0;
        this.flag15 = 0;
        this.flag16 = 0;
        this.flag17 = 0;
        this.flag18 = 0;
        this.flag19 = 0;
        this.flag20 = 0;
        this.flag21 = 0;
        this.flag22 = 0;
        this.flag23 = 0;
        this.flag24 = 0;
        this.flag25 = 0;
        this.flag45 = 0;
        this.flag46 = 0;
        this.flagweight = 0;
        this.flagmuscle = 0;
        this.newsletter = "";
      }

      _createClass(BasicComponent, [{
        key: "dietPlan",
        value: function dietPlan() {
          var a = prompt("Fat Loss/Muscle Building");

          if (a == "Fat Loss") {
            this.flagweight = 1;
            this.flagmuscle = 0;
          } else if (a == "Muscle Building") {
            this.flagmuscle = 1;
            this.flagweight = 0;
          } else {
            alert("Invalid Credentials");
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// this._document.body.style.background = '#E9E9E9';
        }
      }, {
        key: "loadpic1",
        value: function loadpic1() {
          this.flag1 = 1;
        }
      }, {
        key: "hidepic1",
        value: function hidepic1() {
          this.flag1 = 0;
        }
      }, {
        key: "loadpic2",
        value: function loadpic2() {
          this.flag2 = 1;
        }
      }, {
        key: "hidepic2",
        value: function hidepic2() {
          this.flag2 = 0;
        }
      }, {
        key: "loadpic3",
        value: function loadpic3() {
          this.flag3 = 1;
        }
      }, {
        key: "hidepic3",
        value: function hidepic3() {
          this.flag3 = 0;
        }
      }, {
        key: "loadpic4",
        value: function loadpic4() {
          this.flag4 = 1;
        }
      }, {
        key: "hidepic4",
        value: function hidepic4() {
          this.flag4 = 0;
        }
      }, {
        key: "loadpic5",
        value: function loadpic5() {
          this.flag5 = 1;
        }
      }, {
        key: "hidepic5",
        value: function hidepic5() {
          this.flag5 = 0;
        }
      }, {
        key: "loadpic6",
        value: function loadpic6() {
          this.flag6 = 1;
        }
      }, {
        key: "hidepic6",
        value: function hidepic6() {
          this.flag6 = 0;
        }
      }, {
        key: "loadpic7",
        value: function loadpic7() {
          this.flag7 = 1;
        }
      }, {
        key: "hidepic7",
        value: function hidepic7() {
          this.flag7 = 0;
        }
      }, {
        key: "loadpic8",
        value: function loadpic8() {
          this.flag8 = 1;
        }
      }, {
        key: "hidepic8",
        value: function hidepic8() {
          this.flag8 = 0;
        }
      }, {
        key: "loadpic9",
        value: function loadpic9() {
          this.flag9 = 1;
        }
      }, {
        key: "hidepic9",
        value: function hidepic9() {
          this.flag9 = 0;
        }
      }, {
        key: "loadpic10",
        value: function loadpic10() {
          this.flag10 = 1;
        }
      }, {
        key: "hidepic10",
        value: function hidepic10() {
          this.flag10 = 0;
        }
      }, {
        key: "loadpic11",
        value: function loadpic11() {
          this.flag11 = 1;
        }
      }, {
        key: "hidepic11",
        value: function hidepic11() {
          this.flag11 = 0;
        }
      }, {
        key: "loadpic12",
        value: function loadpic12() {
          this.flag12 = 1;
        }
      }, {
        key: "hidepic12",
        value: function hidepic12() {
          this.flag12 = 0;
        }
      }, {
        key: "loadpic13",
        value: function loadpic13() {
          this.flag13 = 1;
        }
      }, {
        key: "hidepic13",
        value: function hidepic13() {
          this.flag13 = 0;
        }
      }, {
        key: "loadpic14",
        value: function loadpic14() {
          this.flag14 = 1;
        }
      }, {
        key: "hidepic14",
        value: function hidepic14() {
          this.flag14 = 0;
        }
      }, {
        key: "loadpic15",
        value: function loadpic15() {
          this.flag15 = 1;
        }
      }, {
        key: "hidepic15",
        value: function hidepic15() {
          this.flag15 = 0;
        }
      }, {
        key: "loadpic16",
        value: function loadpic16() {
          this.flag16 = 1;
        }
      }, {
        key: "hidepic16",
        value: function hidepic16() {
          this.flag16 = 0;
        }
      }, {
        key: "loadpic17",
        value: function loadpic17() {
          this.flag17 = 1;
        }
      }, {
        key: "hidepic17",
        value: function hidepic17() {
          this.flag17 = 0;
        }
      }, {
        key: "loadpic18",
        value: function loadpic18() {
          this.flag18 = 1;
        }
      }, {
        key: "hidepic18",
        value: function hidepic18() {
          this.flag18 = 0;
        }
      }, {
        key: "loadpic19",
        value: function loadpic19() {
          this.flag19 = 1;
        }
      }, {
        key: "hidepic19",
        value: function hidepic19() {
          this.flag19 = 0;
        }
      }, {
        key: "loadpic20",
        value: function loadpic20() {
          this.flag20 = 1;
        }
      }, {
        key: "hidepic20",
        value: function hidepic20() {
          this.flag20 = 0;
        }
      }, {
        key: "loadpic21",
        value: function loadpic21() {
          this.flag21 = 1;
        }
      }, {
        key: "hidepic21",
        value: function hidepic21() {
          this.flag21 = 0;
        }
      }, {
        key: "loadpic22",
        value: function loadpic22() {
          this.flag22 = 1;
        }
      }, {
        key: "hidepic22",
        value: function hidepic22() {
          this.flag22 = 0;
        }
      }, {
        key: "loadpic23",
        value: function loadpic23() {
          this.flag23 = 1;
        }
      }, {
        key: "hidepic23",
        value: function hidepic23() {
          this.flag23 = 0;
        }
      }, {
        key: "loadpic24",
        value: function loadpic24() {
          this.flag24 = 1;
        }
      }, {
        key: "hidepic24",
        value: function hidepic24() {
          this.flag24 = 0;
        }
      }, {
        key: "loadpic25",
        value: function loadpic25() {
          this.flag25 = 1;
        }
      }, {
        key: "hidepic25",
        value: function hidepic25() {
          this.flag25 = 0;
        }
      }, {
        key: "loadpic45",
        value: function loadpic45() {
          this.flag45 = 1;
        }
      }, {
        key: "hidepic45",
        value: function hidepic45() {
          this.flag45 = 0;
        }
      }, {
        key: "loadpic46",
        value: function loadpic46() {
          this.flag46 = 1;
        }
      }, {
        key: "hidepic46",
        value: function hidepic46() {
          this.flag46 = 0;
        }
      }, {
        key: "subs",
        value: function subs() {
          if (this.newsletter != "") alert("Thanks for subscribing");else {
            alert("Please mention your email");
          }
        }
      }, {
        key: "chatbot",
        value: function chatbot() {
          var dialogRef = this.dialog.open(_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_2__["ChatbotComponent"]);
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }]);

      return BasicComponent;
    }();

    BasicComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    BasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./basic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/basic/basic.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./basic.component.css */
      "./src/app/basic/basic.component.css"))["default"]]
    })], BasicComponent);
    /***/
  },

  /***/
  "./src/app/basiclogin/basiclogin.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/basiclogin/basiclogin.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBasicloginBasicloginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".kaim{\n    color:red;\n    font-family: Stencil Std, fantasy;\n    font-variant: small-caps;\n    font-size: 40px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWNsb2dpbi9iYXNpY2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYmFzaWNsb2dpbi9iYXNpY2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2FpbXtcbiAgICBjb2xvcjpyZWQ7XG4gICAgZm9udC1mYW1pbHk6IFN0ZW5jaWwgU3RkLCBmYW50YXN5O1xuICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/basiclogin/basiclogin.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/basiclogin/basiclogin.component.ts ***!
    \****************************************************/

  /*! exports provided: BasicloginComponent */

  /***/
  function srcAppBasicloginBasicloginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicloginComponent", function () {
      return BasicloginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");

    var BasicloginComponent = /*#__PURE__*/function () {
      function BasicloginComponent(router, service) {
        var _this = this;

        _classCallCheck(this, BasicloginComponent);

        this.router = router;
        this.service = service;
        var response = this.service.userData();
        response.subscribe(function (data) {
          return _this.credentials = data;
        });
      }

      _createClass(BasicloginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAddPost",
        value: function onAddPost(form) {
          if (form.invalid) {
            console.log("Invalid");
            return;
          }

          var post = {
            pssword: form.value.password,
            email_id: form.value.email
          };
          console.log(post);
        }
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          var flag = 0;
          var email = form.value.email;
          var password = form.value.password; // console.log(email);
          // console.log(password);

          console.log(form.valid);

          for (var i in this.credentials) {
            // console.log(this.credentials[i].eMail)
            // console.log(this.credentials[i].password)
            if (email == this.credentials[i].eMail && password == this.credentials[i].password) {
              if (this.credentials[i].plan == "Beginner") {
                flag = 1; // this.sendname.emit(this.credentials[i].firstName);

                this.router.navigateByUrl('basic');
              } else {
                flag = -1;
              }
            } else {}
          }

          if (flag == 0) {
            alert("Invalid Credentials");
          } else if (flag == -1) {
            alert("You do not have a beginner membership");
          }
        }
      }]);

      return BasicloginComponent;
    }();

    BasicloginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"]
      }];
    };

    BasicloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basiclogin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./basiclogin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/basiclogin/basiclogin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./basiclogin.component.css */
      "./src/app/basiclogin/basiclogin.component.css"))["default"]]
    })], BasicloginComponent);
    /***/
  },

  /***/
  "./src/app/chatbot/chatbot.component.css":
  /*!***********************************************!*\
    !*** ./src/app/chatbot/chatbot.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatbotChatbotComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p{\n    color:white;\n}\nh3{\n    color:white;\n}\n/* input[type=text]{\n    border: 5px solid white; \n    -webkit-box-shadow: \n      inset 0 0 8px  rgba(0,0,0,0.1),\n            0 0 16px rgba(0,0,0,0.1); \n    -moz-box-shadow: \n      inset 0 0 8px  rgba(0,0,0,0.1),\n            0 0 16px rgba(0,0,0,0.1); \n    box-shadow: \n      inset 0 0 8px  rgba(0,0,0,0.1),\n            0 0 16px rgba(0,0,0,0.1); \n    padding: 15px;\n    background: rgba(255,255,255,0.5);\n    margin: 0 0 10px 0;\n} */\nmat-dialog-actions{\n    display:flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9jaGF0Ym90LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0g7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2hhdGJvdC9jaGF0Ym90LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIGNvbG9yOndoaXRlO1xufVxuaDN7XG4gICAgY29sb3I6d2hpdGU7XG59XG4vKiBpbnB1dFt0eXBlPXRleHRde1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlOyBcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IFxuICAgICAgaW5zZXQgMCAwIDhweCAgcmdiYSgwLDAsMCwwLjEpLFxuICAgICAgICAgICAgMCAwIDE2cHggcmdiYSgwLDAsMCwwLjEpOyBcbiAgICAtbW96LWJveC1zaGFkb3c6IFxuICAgICAgaW5zZXQgMCAwIDhweCAgcmdiYSgwLDAsMCwwLjEpLFxuICAgICAgICAgICAgMCAwIDE2cHggcmdiYSgwLDAsMCwwLjEpOyBcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIGluc2V0IDAgMCA4cHggIHJnYmEoMCwwLDAsMC4xKSxcbiAgICAgICAgICAgIDAgMCAxNnB4IHJnYmEoMCwwLDAsMC4xKTsgXG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xufSAqL1xubWF0LWRpYWxvZy1hY3Rpb25ze1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/chatbot/chatbot.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/chatbot/chatbot.component.ts ***!
    \**********************************************/

  /*! exports provided: ChatbotComponent */

  /***/
  function srcAppChatbotChatbotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function () {
      return ChatbotComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChatbotComponent = /*#__PURE__*/function () {
      function ChatbotComponent() {
        _classCallCheck(this, ChatbotComponent);
      }

      _createClass(ChatbotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "kargall",
        value: function kargall() {
          var xhr = new XMLHttpRequest();
          var a = "https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=";
          var c = a + this.chat;
          var ch = this.chat;
          xhr.open("GET", c);
          xhr.setRequestHeader("x-rapidapi-host", "acobot-brainshop-ai-v1.p.rapidapi.com");
          xhr.setRequestHeader("x-rapidapi-key", "23afcb7ce7msh54dd1061c86521cp1c66bejsn627983c745fb");
          xhr.onreadystatechange = test;

          function test() {
            if (this.status == 200 && this.readyState == 4) {
              var res_data = JSON.parse(this.responseText);
              console.log(res_data); //  var ans=document.getElementById('etherakh');
              //  ans.innerHTML=res_data.cnt;

              if (ch == "hi" || ch == "hello" || ch == "hey" || ch == "Hi" || ch == "Hello" || ch == "Hey") {
                document.getElementById("add_to_me").innerHTML += "</br>" + "You: " + ch + "</br>" + "Hello, how can we help you?";
              } else if (ch == "I want to know about the plans" || ch == "What plans do you have?" || ch == "fitness plans" || ch == "i want to know about the plans" || ch == "what plans do you have?" || ch == "Fitness plans" || ch == "Fitness Plans" || ch == "bodybuilding plans" || ch == "Bodybuilding plans" || ch == "fitness plans" || ch == "Bodybuilding Plans" || ch == "bodybuilding Plans" || ch == "Plans" || ch == "plans") {
                document.getElementById("add_to_me").innerHTML += "</br>" + "You: " + ch + "</br>" + "We have three plans: Beginner, Intermediate and Advanced plans. Click on become a member on our website to subscribe to any of them.";
              } else if (ch == "fatloss" || ch == "fatloss guide" || ch == "Fatloss programs" || ch == "Are fatloss programs available?" || ch == "muscle building" || ch == "muscle building guide" || ch == "Muscle building programs" || ch == "Are muscle building programs available?" || ch == "FatLoss" || ch == "Fat Loss" || ch == "Fat loss" || ch == "MuscleBuilding" || ch == "Muscle Building") {
                document.getElementById("add_to_me").innerHTML += "</br>" + "You: " + ch + "</br>" + "Yes, you can check our website for the programs.";
              } else if (ch == "Contact" || ch == "contact" || ch == "How can I contact you?" || ch == "how can i contact you?" || ch == "I have queries" || ch == "I want to talk to you" || ch == "I want to message you") {
                document.getElementById("add_to_me").innerHTML += "</br>" + "You: " + ch + "</br>" + "You can contact us at +91 9915902685, +91 7973245205.";
              } else {
                document.getElementById("add_to_me").innerHTML += "</br>" + "You: " + ch + "</br>" + "" + res_data.cnt + "";
              }
            }
          }

          xhr.send();
        }
      }]);

      return ChatbotComponent;
    }();

    ChatbotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chatbot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chatbot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chatbot/chatbot.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chatbot.component.css */
      "./src/app/chatbot/chatbot.component.css"))["default"]]
    })], ChatbotComponent);
    /***/
  },

  /***/
  "./src/app/intermediate/intermediate.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/intermediate/intermediate.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIntermediateIntermediateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* :host{\n    \n    background: #E9E9E9;\n  } */\n\n  /* #polaroid {\n    margin: 20px;\n    width: 320px;\n    height:300px;\n    padding: 10px 10px 20px 10px;\n    border: 1px solid #BFBFBF;\n    background-color: white;\n    box-shadow: 10px 10px 5px #aaaaaa;\n  } */\n\n  /* button {\n  background-color: #4CAF50; /* Green */\n\n  /* border: none;\n  color: white;\n  padding: 10px 42px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n} */\n\n  .center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n  .suppguide2{\n  color:red;\n  font-family: Stencil Std, fantasy;\n  font-variant: small-caps;\n  font-size: 50px;\n  text-align: center;\n}\n\n  .sg4{\n  color:black;\n  font-family: sans-serif;\n  font-size: 35px;\n}\n\n  .bgchitta{\n  background-color: white;\n}\n\n  .laalhr{\n  background-color: red;\n  height: 2px;\n}\n\n  .varjish{\n  color:rgb(218, 13, 13);\n  font-family: Stencil Std, fantasy;\n  font-variant: small-caps;\n  font-size: 70px;\n  text-align: center;\n}\n\n  ul{list-style-type: none;\ntext-align: center;\n}\n\n  td,  th {\n  border: 1px solid black;\n  padding: 8px;\n  \n}\n\n  tr:nth-child(even){background-color: #bebcbc;}\n\n  tr:hover {background-color: #ddd;}\n\n  th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white;\n}\n\n  p{\n  font-family: \"Trebuchet MS\";\n}\n\n  li\n{\n  font-family: \"Trebuchet MS\";\n}\n\n  button {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 10px 42px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\n  h1{\n    text-align: left;\n    color:black;\n    font-family: sans-serif;\n    font-size: 35px;\n}\n\n  .plan{\n  font-size: 20px; \n}\n\n  h3{\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJtZWRpYXRlL2ludGVybWVkaWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7S0FHSzs7RUFFSDs7Ozs7Ozs7S0FRRzs7RUFHTDt1Q0FDdUM7O0VBQ3JDOzs7Ozs7O0dBT0M7O0VBQ0g7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0VBQ0E7RUFDRSxTQUFTO0VBQ1QsaUNBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztFQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztFQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7RUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0VBRUEsR0FBRyxxQkFBcUI7QUFDeEIsa0JBQWtCO0FBQ2xCOztFQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7O0FBRWQ7O0VBRUEsbUJBQW1CLHlCQUF5QixDQUFDOztFQUU3QyxVQUFVLHNCQUFzQixDQUFDOztFQUVqQztFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0VBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0VBQ0E7O0VBRUUsMkJBQTJCO0FBQzdCOztFQUVBO0VBQ0UseUJBQXlCLEVBQUUsVUFBVTtFQUNyQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztFQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7RUFDQTtFQUNFLGVBQWU7QUFDakI7O0VBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9pbnRlcm1lZGlhdGUvaW50ZXJtZWRpYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA6aG9zdHtcbiAgICBcbiAgICBiYWNrZ3JvdW5kOiAjRTlFOUU5O1xuICB9ICovXG5cbiAgLyogI3BvbGFyb2lkIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDozMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMjBweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAjYWFhYWFhO1xuICB9ICovXG4gXG4gXG4vKiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAvKiBHcmVlbiAqL1xuICAvKiBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCA0MnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG59ICovIFxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuLnN1cHBndWlkZTJ7XG4gIGNvbG9yOnJlZDtcbiAgZm9udC1mYW1pbHk6IFN0ZW5jaWwgU3RkLCBmYW50YXN5O1xuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2c0e1xuICBjb2xvcjpibGFjaztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbi5iZ2NoaXR0YXtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubGFhbGhye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGhlaWdodDogMnB4O1xufVxuXG4udmFyamlzaHtcbiAgY29sb3I6cmdiKDIxOCwgMTMsIDEzKTtcbiAgZm9udC1mYW1pbHk6IFN0ZW5jaWwgU3RkLCBmYW50YXN5O1xuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG51bHtsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkLCAgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogOHB4O1xuICBcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNiZWJjYmM7fVxuXG50cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XG5cbnRoIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG59XG5we1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbn1cbmxpXG57XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAvKiBHcmVlbiAqL1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCA0MnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmgxe1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuLnBsYW57XG4gIGZvbnQtc2l6ZTogMjBweDsgXG59XG5oM3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/intermediate/intermediate.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/intermediate/intermediate.component.ts ***!
    \********************************************************/

  /*! exports provided: IntermediateComponent */

  /***/
  function srcAppIntermediateIntermediateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntermediateComponent", function () {
      return IntermediateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../chatbot/chatbot.component */
    "./src/app/chatbot/chatbot.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var IntermediateComponent = /*#__PURE__*/function () {
      // @Inject(DOCUMENT) private _document
      function IntermediateComponent(dialog) {
        _classCallCheck(this, IntermediateComponent);

        this.dialog = dialog;
        this.quote = ["Once you learn to quit, it becomes a habit. ― Vince Lombardi Jr.", "Want to be respected? Be consistent.", "Love yourself enough to live a healthy lifestyle.", "Starve your distractions. Feed your focus. – Unknown", "If it doesn’t challenge you it wont change you. – Unknown", "When I lost all of my excuses I found my results.", "A year from now you may wish you had started today. – Karen Lamb", "When you feel like stopping…think about why you started.", "You are the only one who can limit your greatness. – Unknown", "It’s never too late and you’re never too old to become better.", "Don’t give up on your dreams, or your dreams will give up on you. – John Wooden", "There are no shortcuts to living your greatest life and becoming your best self.", "Your desire to change must be greater than your desire to stay the same.", "Most people fail, not because of lack of desire, but, because of lack of commitment. – Vince Lombardi", "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson", "Don’t stop until you’re proud.", "If you get tired, learn to rest, not quit.", "Look in the mirror. That’s your competition. – John Assaraf", "You are much stronger than you think.", "Tough times don’t last. Tough people do. – Robert H. Schuller", "You are what you do, not what you say you’ll do.", "Someone busier than you is working out right now.", "Put all excuses aside and remember this: YOU are capable. – Zig Ziglar", "If you want it, you’ll find a way. If you don’t, you’ll find an excuse.", "Start where you are. Do what you can. Never stop. Keep going.", "Stop doubting yourself. Work hard and make it happen. – Unknown", "You will never always be motivated. You have to learn to be disciplined. – Unknown", "When your body feels like giving up, that’s when your workout really starts.", "Some people want it to happen, some wish it would happen, others make it happen. – Michael Jordan", "Fall in love with taking care of your body.", "What you eat in private will show up in public. – Unknown", "If you think living healthy is expensive, try illness. – Unknown", "The groundwork for all happiness is good health. – Leigh Hunt", "A healthy mind and fit body is how you express your soul.", "Our bodies are our gardens – our wills are our gardeners. – William Shakespeare", "Eat well. Move daily. Hydrate often. Sleep lots. Love your body.", "Sweat is magic. Cover yourself in it daily to grant your health wishes.", "Losing weight is hard. Being overweight is hard. Choose your hard.", "Workout because you love yourself, not because you hate your body.", "Health is like money, we never have a true idea of its value until we lose it.", "Want to be happy? Working out releases endorphins and endorphins make you happy.", "Exercise is king. Nutrition is queen. Put them together and you’ve got a kingdom. – Jack LaLanne", "Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity. – John F. Kennedy", "You said ‘tomorrow’ yesterday. – Unknown", "Strive for progress, not perfection.", "Don’t shrink your goal. Increase your effort.", "One day I’ll be at the place I always wanted to be.", "Focus on your goal. Don’t look in any direction but ahead.", "Success is what comes after your stop making excuses. – Luis Galarza", "You don’t get what you wish for. You get what you work for. – Unknown", "Discipline is the bridge between goals and accomplishment. – Jim Rohn", "To achieve great things, you must step out of your comfort zone.", "The pain you feel today will be the strength you feel tomorrow. – Arnold Schwarzenegger", "You can only reach your goals through commitment, consistency, and hard work.", "Setting goals is the first step into turning the invisible into the visible. – Tony Robbins", "Set a goal so big that you can’t achieve it until you grow into the person who can. – Unknown", "In two weeks, you’ll feel it. In four weeks, you’ll see it. In eight weeks, you’ll hear it.", "Get comfortable with being uncomfortable! – Jillian Michaels", "If you’re tired of starting over, stop giving up.", "A one hour workout is 4% of your day. No excuses.", "Your life is a direct reflection of what you have worked for.", "Great works are performed, not by strength, but by perseverance. – Samuel Johnson", "Keep going. Everything you need will come to you at the perfect time.", "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown", "Results happen over time, not overnight. Work hard, stay consistent, and be patient. – Unknown", "Sometimes the bravest thing you can do is to keep going when you feel like giving up.", "Perseverance is the hard work you do after you get tired of doing the hard work you already did. – Newt Gingrich", "Sometimes you don’t realize your own strength until you come face to face with your greatest weakness. – Susan Gale", "You don’t find will power, you create it. – Unknown", "Confidence comes from discipline and training. – Robert Kiyosaki", "You must do the thing you think you cannot do. – Eleanor Roosevelt", "Life shrinks or expands in proportion to one’s courage. – Anaïs Nin", "One isn’t necessarily born with courage, but one is born with potential. – Maya Angelou", "The best way to gain self-confidence is to do what you are afraid to do. – Swati Sharma", "Our greatest glory is not in never failing, but in rising every time we fall. – Confucius", "You must have the courage and confidence to push through your weaknesses if you want to succeed.", "Ability is what you’re capable of doing. Motivation determines what you do. Attitude determines how well you do it. – Lou Holtz", "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. – Roy T. Bennett", "Nothing will work unless you do. – John Wooden", "Pain is temporary. Quitting lasts forever. – Lance Armstrong", "Don’t train to be skinny. Train to be a bad ass. – Demi Lovato", "I train to be the best in the world on my worst day. – Ronda Rousey", "Every champion was once a contender that refused to give up. – Sylvester Stallone", "I think in life you should work on yourself until the day you die. – Serena Williams", "Blood, sweat and respect. First two you give. Last one you earn. – The Rock", "You must expect great things of yourself before you can do them. – Michael Jordan", "There’s no secret formula. I lift heavy, work hard, and aim to be the best. – Ronnie Coleman", "The muscle and the mind must become one. One without the other is zero. – Lee Haney", "Living a healthy lifestyle will only deprive you of poor health, lethargy, and fat. – Jill Johnson", "Today I will do what others won’t, so tomorrow I can accomplish what others can’t. – Jerry Rice.", "I don’t count my sit-ups; I only start counting when it starts hurting because they’re the only ones that count. – Muhammad Ali", "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength. – Arnold Schwarzenegger", "Stop whining.Stop crying.Stop thinking “poor me”.It’s time to put on your big boy pants and man up!"];
        this.i = Math.floor(this.quote.length * Math.random());
        this.flagnutri = 0;
        this.flagweight = 0;
        this.flagmuscle = 0;
        this.myimage1 = "https://www.cnpprofessional.co.uk/blog/wp-content/uploads/2017/11/Article-Banner-training.jpg";
        this.myimage2 = "https://www.hardcastlebodybuilding.com/media/hardcastlebodybuilding/freeweightsbanner.jpg";
        this.myimage3 = "https://www.hardcastlebodybuilding.com/media/hardcastlebodybuilding/gymequipmentbanner.jpg";
        this.imageUrls = [this.myimage1, this.myimage2, this.myimage3];
        this.height = '400px';
        this.arrowSize = '30px';
        this.showArrows = true;
        this.disableSwiping = false;
        this.autoPlay = true;
        this.autoPlayInterval = 3333;
        this.stopAutoPlayOnSlide = true;
        this.debug = false;
        this.backgroundSize = 'cover';
        this.backgroundPosition = 'center center';
        this.backgroundRepeat = 'no-repeat';
        this.showDots = true;
        this.dotColor = '#FFF';
        this.showCaptions = true;
        this.captionColor = '#FFF';
        this.captionBackground = 'rgba(0, 0, 0, .35)';
        this.lazyLoad = false;
        this.hideOnNoSlides = false;
        this.width = '80%';
        this.fullscreen = false;
        this.enableZoom = true;
        this.enablePan = false;
        this.noLoop = false;
        this.flag1 = 0;
        this.flag2 = 0;
        this.flag3 = 0;
        this.flag4 = 0;
        this.flag5 = 0;
        this.flag6 = 0;
        this.flag7 = 0;
        this.flag8 = 0;
        this.flag9 = 0;
        this.flag10 = 0;
        this.flag11 = 0;
        this.flag12 = 0;
        this.flag13 = 0;
        this.flag14 = 0;
        this.flag15 = 0;
        this.flag16 = 0;
        this.flag17 = 0;
        this.flag18 = 0;
        this.flag19 = 0;
        this.flag20 = 0;
        this.flag21 = 0;
        this.flag22 = 0;
        this.flag23 = 0;
        this.flag24 = 0;
        this.flag25 = 0;
        this.flag26 = 0;
        this.flag27 = 0;
        this.flag28 = 0;
        this.flag29 = 0;
        this.flag30 = 0;
        this.flag31 = 0;
        this.flag32 = 0;
        this.flag33 = 0;
        this.flag34 = 0;
        this.flag35 = 0;
        this.flag36 = 0;
        this.flag37 = 0;
        this.flag38 = 0;
        this.flag39 = 0;
        this.flag40 = 0;
        this.flag41 = 0;
        this.flag42 = 0;
        this.flag43 = 0;
        this.flag44 = 0;
        this.flag45 = 0;
        this.flag46 = 0;
        this.newsletter = "";
      }

      _createClass(IntermediateComponent, [{
        key: "scroll",
        value: function scroll(el) {
          el.scrollIntoView();
        }
      }, {
        key: "dietPlan",
        value: function dietPlan() {
          var a = prompt("Fat Loss/Muscle Building");

          if (a == "Fat Loss") {
            this.flagweight = 1;
            this.flagmuscle = 0;
          } else if (a == "Muscle Building") {
            this.flagmuscle = 1;
            this.flagweight = 0;
          } else {
            alert("Invalid Credentials");
          }
        }
      }, {
        key: "food",
        value: function food() {
          this.flagnutri = 1;
          var xhr = new XMLHttpRequest();
          var url1 = "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=";
          var url2 = prompt("Write the name of the food");
          var url = url1 + url2;
          xhr.open("GET", url);
          xhr.setRequestHeader("x-rapidapi-host", "edamam-food-and-grocery-database.p.rapidapi.com");
          xhr.setRequestHeader("x-rapidapi-key", "23afcb7ce7msh54dd1061c86521cp1c66bejsn627983c745fb");
          xhr.onreadystatechange = test;

          function test() {
            if (this.status == 200 && this.readyState == 4) {
              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var rec = document.getElementById("titlerec");
              rec.innerHTML = "Nutrition Facts"; // var a=document.getElementById("category");
              // a.innerHTML="Category: "+res_data.hints[0].food.category;
              // var a=document.getElementById("label");
              // a.innerHTML="Label: "+res_data.hints[0].food.label;

              var img = document.getElementById("image");

              if (res_data.hints[0].food.image != null) {
                var imgset = res_data.hints[0].food.image;
                img.setAttribute('src', imgset);
              } else {
                img.setAttribute('src', 'assets/img/nutritionpic.jpg');
              }

              if (res_data.hints[0].food.foodContentsLabel != null) {
                var b = document.getElementById('fcontent1');
              }

              var b = document.getElementById("ul1");
              b.innerHTML = "Nutrition:";
              var c = document.getElementById('li1');
              c.innerHTML = "1) Carbs: " + res_data.hints[0].food.nutrients.CHOCDF;
              var c = document.getElementById('li2');
              c.innerHTML = "2) Calories: " + res_data.hints[0].food.nutrients.ENERC_KCAL;
              var c = document.getElementById('li3');
              c.innerHTML = "3) Fat: " + res_data.hints[0].food.nutrients.FAT;
              var c = document.getElementById('li4');
              c.innerHTML = "4) Fibre: " + res_data.hints[0].food.nutrients.FIBTG;
              var c = document.getElementById('li5');
              c.innerHTML = "5) Protein: " + res_data.hints[0].food.nutrients.PROCNT;
            }
          }

          xhr.send();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// this._document.body.style.background = '#E9E9E9';
        }
      }, {
        key: "loadpic1",
        value: function loadpic1() {
          this.flag1 = 1;
        }
      }, {
        key: "hidepic1",
        value: function hidepic1() {
          this.flag1 = 0;
        }
      }, {
        key: "loadpic2",
        value: function loadpic2() {
          this.flag2 = 1;
        }
      }, {
        key: "hidepic2",
        value: function hidepic2() {
          this.flag2 = 0;
        }
      }, {
        key: "loadpic3",
        value: function loadpic3() {
          this.flag3 = 1;
        }
      }, {
        key: "hidepic3",
        value: function hidepic3() {
          this.flag3 = 0;
        }
      }, {
        key: "loadpic4",
        value: function loadpic4() {
          this.flag4 = 1;
        }
      }, {
        key: "hidepic4",
        value: function hidepic4() {
          this.flag4 = 0;
        }
      }, {
        key: "loadpic5",
        value: function loadpic5() {
          this.flag5 = 1;
        }
      }, {
        key: "hidepic5",
        value: function hidepic5() {
          this.flag5 = 0;
        }
      }, {
        key: "loadpic6",
        value: function loadpic6() {
          this.flag6 = 1;
        }
      }, {
        key: "hidepic6",
        value: function hidepic6() {
          this.flag6 = 0;
        }
      }, {
        key: "loadpic7",
        value: function loadpic7() {
          this.flag7 = 1;
        }
      }, {
        key: "hidepic7",
        value: function hidepic7() {
          this.flag7 = 0;
        }
      }, {
        key: "loadpic8",
        value: function loadpic8() {
          this.flag8 = 1;
        }
      }, {
        key: "hidepic8",
        value: function hidepic8() {
          this.flag8 = 0;
        }
      }, {
        key: "loadpic9",
        value: function loadpic9() {
          this.flag9 = 1;
        }
      }, {
        key: "hidepic9",
        value: function hidepic9() {
          this.flag9 = 0;
        }
      }, {
        key: "loadpic10",
        value: function loadpic10() {
          this.flag10 = 1;
        }
      }, {
        key: "hidepic10",
        value: function hidepic10() {
          this.flag10 = 0;
        }
      }, {
        key: "loadpic11",
        value: function loadpic11() {
          this.flag11 = 1;
        }
      }, {
        key: "hidepic11",
        value: function hidepic11() {
          this.flag11 = 0;
        }
      }, {
        key: "loadpic12",
        value: function loadpic12() {
          this.flag12 = 1;
        }
      }, {
        key: "hidepic12",
        value: function hidepic12() {
          this.flag12 = 0;
        }
      }, {
        key: "loadpic13",
        value: function loadpic13() {
          this.flag13 = 1;
        }
      }, {
        key: "hidepic13",
        value: function hidepic13() {
          this.flag13 = 0;
        }
      }, {
        key: "loadpic14",
        value: function loadpic14() {
          this.flag14 = 1;
        }
      }, {
        key: "hidepic14",
        value: function hidepic14() {
          this.flag14 = 0;
        }
      }, {
        key: "loadpic15",
        value: function loadpic15() {
          this.flag15 = 1;
        }
      }, {
        key: "hidepic15",
        value: function hidepic15() {
          this.flag15 = 0;
        }
      }, {
        key: "loadpic16",
        value: function loadpic16() {
          this.flag16 = 1;
        }
      }, {
        key: "hidepic16",
        value: function hidepic16() {
          this.flag16 = 0;
        }
      }, {
        key: "loadpic17",
        value: function loadpic17() {
          this.flag17 = 1;
        }
      }, {
        key: "hidepic17",
        value: function hidepic17() {
          this.flag17 = 0;
        }
      }, {
        key: "loadpic18",
        value: function loadpic18() {
          this.flag18 = 1;
        }
      }, {
        key: "hidepic18",
        value: function hidepic18() {
          this.flag18 = 0;
        }
      }, {
        key: "loadpic19",
        value: function loadpic19() {
          this.flag19 = 1;
        }
      }, {
        key: "hidepic19",
        value: function hidepic19() {
          this.flag19 = 0;
        }
      }, {
        key: "loadpic20",
        value: function loadpic20() {
          this.flag20 = 1;
        }
      }, {
        key: "hidepic20",
        value: function hidepic20() {
          this.flag20 = 0;
        }
      }, {
        key: "loadpic21",
        value: function loadpic21() {
          this.flag21 = 1;
        }
      }, {
        key: "hidepic21",
        value: function hidepic21() {
          this.flag21 = 0;
        }
      }, {
        key: "loadpic22",
        value: function loadpic22() {
          this.flag22 = 1;
        }
      }, {
        key: "hidepic22",
        value: function hidepic22() {
          this.flag22 = 0;
        }
      }, {
        key: "loadpic23",
        value: function loadpic23() {
          this.flag23 = 1;
        }
      }, {
        key: "hidepic23",
        value: function hidepic23() {
          this.flag23 = 0;
        }
      }, {
        key: "loadpic24",
        value: function loadpic24() {
          this.flag24 = 1;
        }
      }, {
        key: "hidepic24",
        value: function hidepic24() {
          this.flag24 = 0;
        }
      }, {
        key: "loadpic25",
        value: function loadpic25() {
          this.flag25 = 1;
        }
      }, {
        key: "hidepic25",
        value: function hidepic25() {
          this.flag25 = 0;
        }
      }, {
        key: "loadpic26",
        value: function loadpic26() {
          this.flag26 = 1;
        }
      }, {
        key: "hidepic26",
        value: function hidepic26() {
          this.flag26 = 0;
        }
      }, {
        key: "loadpic27",
        value: function loadpic27() {
          this.flag27 = 1;
        }
      }, {
        key: "hidepic27",
        value: function hidepic27() {
          this.flag27 = 0;
        }
      }, {
        key: "loadpic28",
        value: function loadpic28() {
          this.flag28 = 1;
        }
      }, {
        key: "hidepic28",
        value: function hidepic28() {
          this.flag28 = 0;
        }
      }, {
        key: "loadpic29",
        value: function loadpic29() {
          this.flag29 = 1;
        }
      }, {
        key: "hidepic29",
        value: function hidepic29() {
          this.flag29 = 0;
        }
      }, {
        key: "loadpic30",
        value: function loadpic30() {
          this.flag30 = 1;
        }
      }, {
        key: "hidepic30",
        value: function hidepic30() {
          this.flag30 = 0;
        }
      }, {
        key: "loadpic31",
        value: function loadpic31() {
          this.flag31 = 1;
        }
      }, {
        key: "hidepic31",
        value: function hidepic31() {
          this.flag31 = 0;
        }
      }, {
        key: "loadpic32",
        value: function loadpic32() {
          this.flag32 = 1;
        }
      }, {
        key: "hidepic32",
        value: function hidepic32() {
          this.flag32 = 0;
        }
      }, {
        key: "loadpic33",
        value: function loadpic33() {
          this.flag33 = 1;
        }
      }, {
        key: "hidepic33",
        value: function hidepic33() {
          this.flag33 = 0;
        }
      }, {
        key: "loadpic34",
        value: function loadpic34() {
          this.flag34 = 1;
        }
      }, {
        key: "hidepic34",
        value: function hidepic34() {
          this.flag34 = 0;
        }
      }, {
        key: "loadpic35",
        value: function loadpic35() {
          this.flag35 = 1;
        }
      }, {
        key: "hidepic35",
        value: function hidepic35() {
          this.flag35 = 0;
        }
      }, {
        key: "loadpic36",
        value: function loadpic36() {
          this.flag36 = 1;
        }
      }, {
        key: "hidepic36",
        value: function hidepic36() {
          this.flag36 = 0;
        }
      }, {
        key: "loadpic37",
        value: function loadpic37() {
          this.flag37 = 1;
        }
      }, {
        key: "hidepic37",
        value: function hidepic37() {
          this.flag37 = 0;
        }
      }, {
        key: "loadpic38",
        value: function loadpic38() {
          this.flag38 = 1;
        }
      }, {
        key: "hidepic38",
        value: function hidepic38() {
          this.flag38 = 0;
        }
      }, {
        key: "loadpic39",
        value: function loadpic39() {
          this.flag39 = 1;
        }
      }, {
        key: "hidepic39",
        value: function hidepic39() {
          this.flag39 = 0;
        }
      }, {
        key: "loadpic40",
        value: function loadpic40() {
          this.flag40 = 1;
        }
      }, {
        key: "hidepic40",
        value: function hidepic40() {
          this.flag40 = 0;
        }
      }, {
        key: "loadpic41",
        value: function loadpic41() {
          this.flag41 = 1;
        }
      }, {
        key: "hidepic41",
        value: function hidepic41() {
          this.flag41 = 0;
        }
      }, {
        key: "loadpic42",
        value: function loadpic42() {
          this.flag42 = 1;
        }
      }, {
        key: "hidepic42",
        value: function hidepic42() {
          this.flag42 = 0;
        }
      }, {
        key: "loadpic43",
        value: function loadpic43() {
          this.flag43 = 1;
        }
      }, {
        key: "hidepic43",
        value: function hidepic43() {
          this.flag43 = 0;
        }
      }, {
        key: "loadpic44",
        value: function loadpic44() {
          this.flag44 = 1;
        }
      }, {
        key: "hidepic44",
        value: function hidepic44() {
          this.flag44 = 0;
        }
      }, {
        key: "loadpic45",
        value: function loadpic45() {
          this.flag45 = 1;
        }
      }, {
        key: "hidepic45",
        value: function hidepic45() {
          this.flag45 = 0;
        }
      }, {
        key: "loadpic46",
        value: function loadpic46() {
          this.flag46 = 1;
        }
      }, {
        key: "hidepic46",
        value: function hidepic46() {
          this.flag46 = 0;
        }
      }, {
        key: "subs",
        value: function subs() {
          if (this.newsletter != "") alert("Thanks for subscribing");else alert("Please mention your email");
        }
      }, {
        key: "chatbot",
        value: function chatbot() {
          var dialogRef = this.dialog.open(_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_2__["ChatbotComponent"]);
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }]);

      return IntermediateComponent;
    }();

    IntermediateComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    IntermediateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intermediate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intermediate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/intermediate/intermediate.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intermediate.component.css */
      "./src/app/intermediate/intermediate.component.css"))["default"]]
    })], IntermediateComponent);
    /***/
  },

  /***/
  "./src/app/intermediatelogin/intermediatelogin.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/intermediatelogin/intermediatelogin.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIntermediateloginIntermediateloginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".kaim{\n    color:red;\n    font-family: Stencil Std, fantasy;\n    font-variant: small-caps;\n    font-size: 40px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJtZWRpYXRlbG9naW4vaW50ZXJtZWRpYXRlbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9pbnRlcm1lZGlhdGVsb2dpbi9pbnRlcm1lZGlhdGVsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmthaW17XG4gICAgY29sb3I6cmVkO1xuICAgIGZvbnQtZmFtaWx5OiBTdGVuY2lsIFN0ZCwgZmFudGFzeTtcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/intermediatelogin/intermediatelogin.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/intermediatelogin/intermediatelogin.component.ts ***!
    \******************************************************************/

  /*! exports provided: IntermediateloginComponent */

  /***/
  function srcAppIntermediateloginIntermediateloginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntermediateloginComponent", function () {
      return IntermediateloginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");

    var IntermediateloginComponent = /*#__PURE__*/function () {
      function IntermediateloginComponent(router, service) {
        var _this2 = this;

        _classCallCheck(this, IntermediateloginComponent);

        this.router = router;
        this.service = service;
        var response = this.service.userData();
        response.subscribe(function (data) {
          return _this2.credentials = data;
        });
      }

      _createClass(IntermediateloginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAddPost",
        value: function onAddPost(form) {
          if (form.invalid) {
            console.log("Invalid");
            return;
          }

          var post = {
            pssword: form.value.password,
            email_id: form.value.email
          };
          console.log(post);
        }
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          var flag = 0;
          var email = form.value.email;
          var password = form.value.password; // console.log(email);
          // console.log(password);

          console.log(form.valid);

          for (var i in this.credentials) {
            // console.log(this.credentials[i].eMail)
            // console.log(this.credentials[i].password)
            if (email == this.credentials[i].eMail && password == this.credentials[i].password) {
              if (this.credentials[i].plan == "Intermediate") {
                flag = 1; // this.sendname.emit(this.credentials[i].firstName);

                this.router.navigateByUrl('intermediate');
              } else {
                flag = -1;
              }
            } else {}
          }

          if (flag == 0) {
            alert("Invalid Credentials");
          } else if (flag == -1) {
            alert("You do not have an intermediate membership");
          }
        }
      }]);

      return IntermediateloginComponent;
    }();

    IntermediateloginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"]
      }];
    };

    IntermediateloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intermediatelogin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intermediatelogin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/intermediatelogin/intermediatelogin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intermediatelogin.component.css */
      "./src/app/intermediatelogin/intermediatelogin.component.css"))["default"]]
    })], IntermediateloginComponent);
    /***/
  },

  /***/
  "./src/app/mainpage/mainpage.component.css":
  /*!*************************************************!*\
    !*** ./src/app/mainpage/mainpage.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainpageMainpageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".suppguide{\n  color:white;\n}\n.suppguide2{\n  color:rgb(218, 13, 13);\n  font-family: Stencil Std, fantasy;\n  font-variant: small-caps;\n  font-size: 39px;\n}\n.suppguide3{\n  color:beige;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px;\n}\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width {\n  width: 100%;\n}\n.farum{\n  background-color: rgb(189, 255, 35);\n}\n/* input[type=text]:not([readonly]) + label {\n  color: green; \n} */\nmat-placeholder {\n  color: black;\n}\nmat-label{\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLDRDQUE0QztFQUM1QyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQTs7R0FFRztBQUVIO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYWlucGFnZS9tYWlucGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1cHBndWlkZXtcbiAgY29sb3I6d2hpdGU7XG59XG4uc3VwcGd1aWRlMntcbiAgY29sb3I6cmdiKDIxOCwgMTMsIDEzKTtcbiAgZm9udC1mYW1pbHk6IFN0ZW5jaWwgU3RkLCBmYW50YXN5O1xuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG4gIGZvbnQtc2l6ZTogMzlweDtcbn1cbi5zdXBwZ3VpZGUze1xuICBjb2xvcjpiZWlnZTtcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmFydW17XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODksIDI1NSwgMzUpO1xufVxuXG4vKiBpbnB1dFt0eXBlPXRleHRdOm5vdChbcmVhZG9ubHldKSArIGxhYmVsIHtcbiAgY29sb3I6IGdyZWVuOyBcbn0gKi9cblxubWF0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxubWF0LWxhYmVse1xuICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/mainpage/mainpage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/mainpage/mainpage.component.ts ***!
    \************************************************/

  /*! exports provided: MainpageComponent */

  /***/
  function srcAppMainpageMainpageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainpageComponent", function () {
      return MainpageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user */
    "./src/app/user.ts");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");
    /* harmony import */


    var _product_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../product-registration.service */
    "./src/app/product-registration.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../userdata/userdata.component */
    "./src/app/userdata/userdata.component.ts");
    /* harmony import */


    var _basiclogin_basiclogin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../basiclogin/basiclogin.component */
    "./src/app/basiclogin/basiclogin.component.ts");
    /* harmony import */


    var _intermediatelogin_intermediatelogin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../intermediatelogin/intermediatelogin.component */
    "./src/app/intermediatelogin/intermediatelogin.component.ts");
    /* harmony import */


    var _premiumlogin_premiumlogin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../premiumlogin/premiumlogin.component */
    "./src/app/premiumlogin/premiumlogin.component.ts");
    /* harmony import */


    var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../chatbot/chatbot.component */
    "./src/app/chatbot/chatbot.component.ts");

    var MainpageComponent = /*#__PURE__*/function () {
      function MainpageComponent(_document, service, service1, dialog) {
        _classCallCheck(this, MainpageComponent);

        this._document = _document;
        this.service = service;
        this.service1 = service1;
        this.dialog = dialog;
        this.flagsignup = 0;
        this.flagshow = 0;
        this.flag = 0;
        this.flagBMR = 0;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", 0, "", "", "");
        this.newsletter = "";
      }

      _createClass(MainpageComponent, [{
        key: "registerProcess",
        value: function registerProcess() {
          var _this3 = this;

          var response = this.service.doRegistration(this.user);
          response.subscribe(function (data) {
            return _this3.message = data;
          });
          this.flagsignup = 0;
        }
      }, {
        key: "scroll",
        value: function scroll(el) {
          el.scrollIntoView();
        }
      }, {
        key: "subs",
        value: function subs() {
          if (this.newsletter != "") alert("Thanks for subscribing");else {
            alert("Please mention your email");
          }
        }
      }, {
        key: "register",
        value: function register() {
          this.flagsignup = 1;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._document.body.style.background = 'white';
        }
      }, {
        key: "show",
        value: function show() {
          // this.flagsignup=0;
          // this.flagshow=1;
          // this.flag=1;
          // this.user1=this.service.userData();
          var dialogRef = this.dialog.open(_userdata_userdata_component__WEBPACK_IMPORTED_MODULE_8__["UserdataComponent"], {
            data: {
              name: this.receivedmsg
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }, {
        key: "closetable",
        value: function closetable() {
          this.flagshow = 0;
        }
      }, {
        key: "findbyna",
        value: function findbyna() {
          this.flag = 1;
          var a = prompt("Write the username for displaying their details");
          this.findbyuser(a);
        }
      }, {
        key: "findbyuser",
        value: function findbyuser(a) {
          var _this4 = this;

          this.flagshow = 1;
          this.flag = 1;
          var response = this.service.findbyName(a);
          response.subscribe(function (data) {
            return _this4.message1 = data;
          });
        }
      }, {
        key: "deleteUsers",
        value: function deleteUsers() {
          var _this5 = this;

          var e = confirm("Do you really want to delete all the records?");

          if (e == true) {
            var response = this.service.deleteAll();
            response.subscribe(function (data) {
              return _this5.name = data;
            });
          }
        }
      }, {
        key: "delbyname",
        value: function delbyname() {
          var a = prompt("Write the username for deleting their details");
          this.deletebyuser(a);
        }
      }, {
        key: "deletebyuser",
        value: function deletebyuser(a) {
          var _this6 = this;

          var e = confirm("Do you really want to delete the record?");

          if (e == true) {
            var response = this.service.deletebyName(a);
            response.subscribe(function (data) {
              return _this6.message2 = data;
            });
          }
        } // freeplan(){
        //   this.uname=prompt("Write your username");
        //   // this.product1=new Product();
        //   this.udesc="Standard";
        //   this.uprice="Free";
        //   // console.log(this.product1);
        //   console.log(this.uname);
        //   this.product=new Product("this.uname","this.udesc","this.uprice");
        //    var response=this.service1.doProductRegistration(this.product);
        //    response.subscribe((data) => this.messagep = (data));
        // }

      }, {
        key: "bmr",
        value: function bmr() {
          this.height = parseInt(this.ht);
          this.weight = parseInt(this.wt);
          this.Age = parseInt(this.age);

          if (this.gender == "Male" || this.gender == "male") {
            this.Bmr = 10 * this.weight + 6.25 * this.height - 5 * this.Age + 5;
          } else {
            this.Bmr = 10 * this.weight + 6.25 * this.height - 5 * this.Age - 161;
          }

          this.flagBMR = 1;
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], {
            data: {
              name: this.receivedmsg
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }, {
        key: "openBeginner",
        value: function openBeginner() {
          var dialogRef = this.dialog.open(_basiclogin_basiclogin_component__WEBPACK_IMPORTED_MODULE_9__["BasicloginComponent"], {
            data: {
              name: this.receivedmsg
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }, {
        key: "openIntermediate",
        value: function openIntermediate() {
          var dialogRef = this.dialog.open(_intermediatelogin_intermediatelogin_component__WEBPACK_IMPORTED_MODULE_10__["IntermediateloginComponent"], {
            data: {
              name: this.receivedmsg
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }, {
        key: "openPremium",
        value: function openPremium() {
          var dialogRef = this.dialog.open(_premiumlogin_premiumlogin_component__WEBPACK_IMPORTED_MODULE_11__["PremiumloginComponent"], {
            data: {
              name: this.receivedmsg
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }, {
        key: "chatbot",
        value: function chatbot() {
          var dialogRef = this.dialog.open(_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_12__["ChatbotComponent"]);
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }]);

      return MainpageComponent;
    }();

    MainpageComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"]
      }, {
        type: _product_registration_service__WEBPACK_IMPORTED_MODULE_4__["ProductRegistrationService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    MainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mainpage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mainpage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mainpage/mainpage.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mainpage.component.css */
      "./src/app/mainpage/mainpage.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]))], MainpageComponent);
    /***/
  },

  /***/
  "./src/app/premium/premium.component.css":
  /*!***********************************************!*\
    !*** ./src/app/premium/premium.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPremiumPremiumComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n.suppguide2{\n  color:red;\n  font-family: Stencil Std, fantasy;\n  font-variant: small-caps;\n  font-size: 50px;\n  text-align: center;\n}\n.sg4{\n  color:black;\n  font-family: sans-serif;\n  font-size: 35px;\n}\n.bgchitta{\n  background-color: white;\n}\n.laalhr{\n  background-color: red;\n  height: 2px;\n}\n.varjish{\n  color:rgb(218, 13, 13);\n  font-family: Stencil Std, fantasy;\n  font-variant: small-caps;\n  font-size: 70px;\n  text-align: center;\n}\nul{list-style-type: none;\ntext-align: center;\n}\ntd,  th {\n  border: 1px solid black;\n  padding: 8px;\n  \n}\ntr:nth-child(even){background-color: #bebcbc;}\ntr:hover {background-color: #ddd;}\nth {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white;\n}\np{\n  font-family: \"Trebuchet MS\";\n}\nli\n{\n  font-family: \"Trebuchet MS\";\n}\nbutton {\n  background-color: #4CAF50; /* Green */\n  border: none;\n  color: white;\n  padding: 10px 42px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\nh1{\n    text-align: left;\n    color:black;\n    font-family: sans-serif;\n    font-size: 35px;\n}\n.plan{\n  font-size: 20px; \n}\nh3{\n  text-align: center;\n}\nvideo{\n    min-height: 200px;\n    max-height: 200px;\n  }\n#polaroid1{\n    width: 380px;\n    padding: 10px 10px 20px 10px;\n  }\n/* .row::after {\n    content: \"\";\n    clear: both;\n    display: table;\n  } */\nul{list-style-type: none;}\ntd,  th {\n  border: 1px solid black;\n  padding: 8px;\n  \n}\ntr:nth-child(even){background-color: #bebcbc;}\ntr:hover {background-color: #ddd;}\nth {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white;\n}\np{\n  font-family: \"Trebuchet MS\";\n}\nli\n{\n  font-family: \"Trebuchet MS\";\n}\n.vich{\n    text-align: center;\n}\n#img111,#img222,#img333,#img444,#img555,#img666,#img777,#img888,#img999{\n  width:300px;\n}\n#image1,#image2,#image3,#image4,#image4,#image5,#image6,#image7,#image8,#image9{\n  width:400px;\n  \n}\n.text {\n  color: #f2f2f2;\n  font-size: 15px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 8px;\n  width: 100%;\n  text-align: center;\n}\n.active {\n  background-color: #717171;\n}\n#img111,#img222,#img333,#img444,#img555,#img666,#img777,#img888,#img999{\n    width:300px;\n    height:200px;\n  }\n#image1,#image2,#image3,#image4,#image4,#image5,#image6,#image7,#image8,#image9{\n    width:400px;\n  }   \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlbWl1bS9wcmVtaXVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLFNBQVM7RUFDVCxpQ0FBaUM7RUFDakMsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUEsR0FBRyxxQkFBcUI7QUFDeEIsa0JBQWtCO0FBQ2xCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTs7QUFFZDtBQUVBLG1CQUFtQix5QkFBeUIsQ0FBQztBQUU3QyxVQUFVLHNCQUFzQixDQUFDO0FBRWpDO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7O0VBRUUsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxVQUFVO0VBQ3JDLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUtFO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUVDO0lBQ0MsWUFBWTtJQUNaLDRCQUE0QjtFQUM5QjtBQUdBOzs7O0tBSUc7QUFJTCxHQUFHLHFCQUFxQixDQUFDO0FBRXpCO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7O0FBRWQ7QUFFQSxtQkFBbUIseUJBQXlCLENBQUM7QUFFN0MsVUFBVSxzQkFBc0IsQ0FBQztBQUVqQztFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBOztFQUVFLDJCQUEyQjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7O0FBRWI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUdBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0E7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9wcmVtaXVtL3ByZW1pdW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cbi5zdXBwZ3VpZGUye1xuICBjb2xvcjpyZWQ7XG4gIGZvbnQtZmFtaWx5OiBTdGVuY2lsIFN0ZCwgZmFudGFzeTtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBmb250LXNpemU6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNnNHtcbiAgY29sb3I6YmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDM1cHg7XG59XG4uYmdjaGl0dGF7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmxhYWxocntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDJweDtcbn1cblxuLnZhcmppc2h7XG4gIGNvbG9yOnJnYigyMTgsIDEzLCAxMyk7XG4gIGZvbnQtZmFtaWx5OiBTdGVuY2lsIFN0ZCwgZmFudGFzeTtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBmb250LXNpemU6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudWx7bGlzdC1zdHlsZS10eXBlOiBub25lO1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZCwgIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgXG59XG5cbnRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjYmViY2JjO31cblxudHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuXG50aCB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xufVxucHtcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCI7XG59XG5saVxue1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgLyogR3JlZW4gKi9cbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggNDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5oMXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cbi5wbGFue1xuICBmb250LXNpemU6IDIwcHg7IFxufVxuaDN7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cbiBcbiAgdmlkZW97XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gIH1cbiBcbiAgICNwb2xhcm9pZDF7XG4gICAgd2lkdGg6IDM4MHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAyMHB4IDEwcHg7XG4gIH1cbiBcbiAgXG4gIC8qIC5yb3c6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9ICovXG5cblxuXG51bHtsaXN0LXN0eWxlLXR5cGU6IG5vbmU7fVxuXG50ZCwgIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgXG59XG5cbnRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjYmViY2JjO31cblxudHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuXG50aCB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xufVxucHtcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCI7XG59XG5saVxue1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbn1cbi52aWNoe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2ltZzExMSwjaW1nMjIyLCNpbWczMzMsI2ltZzQ0NCwjaW1nNTU1LCNpbWc2NjYsI2ltZzc3NywjaW1nODg4LCNpbWc5OTl7XG4gIHdpZHRoOjMwMHB4O1xufVxuI2ltYWdlMSwjaW1hZ2UyLCNpbWFnZTMsI2ltYWdlNCwjaW1hZ2U0LCNpbWFnZTUsI2ltYWdlNiwjaW1hZ2U3LCNpbWFnZTgsI2ltYWdlOXtcbiAgd2lkdGg6NDAwcHg7XG4gIFxufVxuXG4udGV4dCB7XG4gIGNvbG9yOiAjZjJmMmYyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE3MTcxO1xufVxuI2ltZzExMSwjaW1nMjIyLCNpbWczMzMsI2ltZzQ0NCwjaW1nNTU1LCNpbWc2NjYsI2ltZzc3NywjaW1nODg4LCNpbWc5OTl7XG4gICAgd2lkdGg6MzAwcHg7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICB9XG4gICNpbWFnZTEsI2ltYWdlMiwjaW1hZ2UzLCNpbWFnZTQsI2ltYWdlNCwjaW1hZ2U1LCNpbWFnZTYsI2ltYWdlNywjaW1hZ2U4LCNpbWFnZTl7XG4gICAgd2lkdGg6NDAwcHg7XG4gIH0gICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/premium/premium.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/premium/premium.component.ts ***!
    \**********************************************/

  /*! exports provided: PremiumComponent */

  /***/
  function srcAppPremiumPremiumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PremiumComponent", function () {
      return PremiumComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../chatbot/chatbot.component */
    "./src/app/chatbot/chatbot.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var PremiumComponent = /*#__PURE__*/function () {
      // @Inject(DOCUMENT) private _document
      function PremiumComponent(dialog) {
        _classCallCheck(this, PremiumComponent);

        this.dialog = dialog;
        this.flaggif = 0;
        this.flagvid = 0;
        this.flagnutri = 0;
        this.flagrec = 0;
        this.quote = ["Once you learn to quit, it becomes a habit. ― Vince Lombardi Jr.", "Want to be respected? Be consistent.", "Love yourself enough to live a healthy lifestyle.", "Starve your distractions. Feed your focus. – Unknown", "If it doesn’t challenge you it wont change you. – Unknown", "When I lost all of my excuses I found my results.", "A year from now you may wish you had started today. – Karen Lamb", "When you feel like stopping…think about why you started.", "You are the only one who can limit your greatness. – Unknown", "It’s never too late and you’re never too old to become better.", "Don’t give up on your dreams, or your dreams will give up on you. – John Wooden", "There are no shortcuts to living your greatest life and becoming your best self.", "Your desire to change must be greater than your desire to stay the same.", "Most people fail, not because of lack of desire, but, because of lack of commitment. – Vince Lombardi", "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson", "Don’t stop until you’re proud.", "If you get tired, learn to rest, not quit.", "Look in the mirror. That’s your competition. – John Assaraf", "You are much stronger than you think.", "Tough times don’t last. Tough people do. – Robert H. Schuller", "You are what you do, not what you say you’ll do.", "Someone busier than you is working out right now.", "Put all excuses aside and remember this: YOU are capable. – Zig Ziglar", "If you want it, you’ll find a way. If you don’t, you’ll find an excuse.", "Start where you are. Do what you can. Never stop. Keep going.", "Stop doubting yourself. Work hard and make it happen. – Unknown", "You will never always be motivated. You have to learn to be disciplined. – Unknown", "When your body feels like giving up, that’s when your workout really starts.", "Some people want it to happen, some wish it would happen, others make it happen. – Michael Jordan", "Fall in love with taking care of your body.", "What you eat in private will show up in public. – Unknown", "If you think living healthy is expensive, try illness. – Unknown", "The groundwork for all happiness is good health. – Leigh Hunt", "A healthy mind and fit body is how you express your soul.", "Our bodies are our gardens – our wills are our gardeners. – William Shakespeare", "Eat well. Move daily. Hydrate often. Sleep lots. Love your body.", "Sweat is magic. Cover yourself in it daily to grant your health wishes.", "Losing weight is hard. Being overweight is hard. Choose your hard.", "Workout because you love yourself, not because you hate your body.", "Health is like money, we never have a true idea of its value until we lose it.", "Want to be happy? Working out releases endorphins and endorphins make you happy.", "Exercise is king. Nutrition is queen. Put them together and you’ve got a kingdom. – Jack LaLanne", "Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity. – John F. Kennedy", "You said ‘tomorrow’ yesterday. – Unknown", "Strive for progress, not perfection.", "Don’t shrink your goal. Increase your effort.", "One day I’ll be at the place I always wanted to be.", "Focus on your goal. Don’t look in any direction but ahead.", "Success is what comes after your stop making excuses. – Luis Galarza", "You don’t get what you wish for. You get what you work for. – Unknown", "Discipline is the bridge between goals and accomplishment. – Jim Rohn", "To achieve great things, you must step out of your comfort zone.", "The pain you feel today will be the strength you feel tomorrow. – Arnold Schwarzenegger", "You can only reach your goals through commitment, consistency, and hard work.", "Setting goals is the first step into turning the invisible into the visible. – Tony Robbins", "Set a goal so big that you can’t achieve it until you grow into the person who can. – Unknown", "In two weeks, you’ll feel it. In four weeks, you’ll see it. In eight weeks, you’ll hear it.", "Get comfortable with being uncomfortable! – Jillian Michaels", "If you’re tired of starting over, stop giving up.", "A one hour workout is 4% of your day. No excuses.", "Your life is a direct reflection of what you have worked for.", "Great works are performed, not by strength, but by perseverance. – Samuel Johnson", "Keep going. Everything you need will come to you at the perfect time.", "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown", "Results happen over time, not overnight. Work hard, stay consistent, and be patient. – Unknown", "Sometimes the bravest thing you can do is to keep going when you feel like giving up.", "Perseverance is the hard work you do after you get tired of doing the hard work you already did. – Newt Gingrich", "Sometimes you don’t realize your own strength until you come face to face with your greatest weakness. – Susan Gale", "You don’t find will power, you create it. – Unknown", "Confidence comes from discipline and training. – Robert Kiyosaki", "You must do the thing you think you cannot do. – Eleanor Roosevelt", "Life shrinks or expands in proportion to one’s courage. – Anaïs Nin", "One isn’t necessarily born with courage, but one is born with potential. – Maya Angelou", "The best way to gain self-confidence is to do what you are afraid to do. – Swati Sharma", "Our greatest glory is not in never failing, but in rising every time we fall. – Confucius", "You must have the courage and confidence to push through your weaknesses if you want to succeed.", "Ability is what you’re capable of doing. Motivation determines what you do. Attitude determines how well you do it. – Lou Holtz", "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. – Roy T. Bennett", "Nothing will work unless you do. – John Wooden", "Pain is temporary. Quitting lasts forever. – Lance Armstrong", "Don’t train to be skinny. Train to be a bad ass. – Demi Lovato", "I train to be the best in the world on my worst day. – Ronda Rousey", "Every champion was once a contender that refused to give up. – Sylvester Stallone", "I think in life you should work on yourself until the day you die. – Serena Williams", "Blood, sweat and respect. First two you give. Last one you earn. – The Rock", "You must expect great things of yourself before you can do them. – Michael Jordan", "There’s no secret formula. I lift heavy, work hard, and aim to be the best. – Ronnie Coleman", "The muscle and the mind must become one. One without the other is zero. – Lee Haney", "Living a healthy lifestyle will only deprive you of poor health, lethargy, and fat. – Jill Johnson", "Today I will do what others won’t, so tomorrow I can accomplish what others can’t. – Jerry Rice.", "I don’t count my sit-ups; I only start counting when it starts hurting because they’re the only ones that count. – Muhammad Ali", "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength. – Arnold Schwarzenegger", "Stop whining.Stop crying.Stop thinking “poor me”.It’s time to put on your big boy pants and man up!"];
        this.i = Math.floor(this.quote.length * Math.random());
        this.myimage1 = "https://i.pinimg.com/originals/df/71/37/df713744d60483450acd7af7fb1cf5b0.jpg";
        this.myimage2 = "https://wallpaperaccess.com/full/858285.jpg";
        this.myimage3 = "https://wallpaperaccess.com/full/851863.jpg";
        this.myimage4 = "https://motivationquotes.org/wp-content/uploads/2019/04/workout-motivation-quotes-wallpaper-hd.jpg";
        this.myimage5 = "https://i.pinimg.com/originals/15/4f/a3/154fa39934e6b3b72ca44a1eb3b5c204.jpg";
        this.myimage6 = "https://quotesideas.com/wp-content/uploads/2015/10/Beast-motivational-bodybuilding-hd.jpg";
        this.imageUrls = [this.myimage1, this.myimage2, this.myimage3, this.myimage4, this.myimage5, this.myimage6];
        this.height = '400px';
        this.arrowSize = '30px';
        this.showArrows = true;
        this.disableSwiping = false;
        this.autoPlay = true;
        this.autoPlayInterval = 3333;
        this.stopAutoPlayOnSlide = true;
        this.debug = false;
        this.backgroundSize = 'cover';
        this.backgroundPosition = 'center center';
        this.backgroundRepeat = 'no-repeat';
        this.showDots = true;
        this.dotColor = '#FFF';
        this.showCaptions = true;
        this.captionColor = '#FFF';
        this.captionBackground = 'rgba(0, 0, 0, .35)';
        this.lazyLoad = false;
        this.hideOnNoSlides = false;
        this.width = '80%';
        this.fullscreen = false;
        this.enableZoom = true;
        this.enablePan = false;
        this.noLoop = false;
        this.flag1 = 0;
        this.flag2 = 0;
        this.flag3 = 0;
        this.flag4 = 0;
        this.flag5 = 0;
        this.flag6 = 0;
        this.flag7 = 0;
        this.flag8 = 0;
        this.flag9 = 0;
        this.flag10 = 0;
        this.flag11 = 0;
        this.flag12 = 0;
        this.flag13 = 0;
        this.flag14 = 0;
        this.flag15 = 0;
        this.flag16 = 0;
        this.flag17 = 0;
        this.flag18 = 0;
        this.flag19 = 0;
        this.flag20 = 0;
        this.flag21 = 0;
        this.flag22 = 0;
        this.flag23 = 0;
        this.flag24 = 0;
        this.flag25 = 0;
        this.flag26 = 0;
        this.flag27 = 0;
        this.flag28 = 0;
        this.flag29 = 0;
        this.flag30 = 0;
        this.flag31 = 0;
        this.flag32 = 0;
        this.flag33 = 0;
        this.flag34 = 0;
        this.flag35 = 0;
        this.flag36 = 0;
        this.flag37 = 0;
        this.flag38 = 0;
        this.flag39 = 0;
        this.flag40 = 0;
        this.flag41 = 0;
        this.flag42 = 0;
        this.flag43 = 0;
        this.flag44 = 0;
        this.flag45 = 0;
        this.flag46 = 0;
        this.newsletter = "";
        this.flagweight = 0;
        this.flagmuscle = 0;
      }

      _createClass(PremiumComponent, [{
        key: "scroll",
        value: function scroll(el) {
          el.scrollIntoView();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// this._document.body.style.background = '#E9E9E9';
        }
      }, {
        key: "loadpic1",
        value: function loadpic1() {
          this.flag1 = 1;
        }
      }, {
        key: "hidepic1",
        value: function hidepic1() {
          this.flag1 = 0;
        }
      }, {
        key: "loadpic2",
        value: function loadpic2() {
          this.flag2 = 1;
        }
      }, {
        key: "hidepic2",
        value: function hidepic2() {
          this.flag2 = 0;
        }
      }, {
        key: "loadpic3",
        value: function loadpic3() {
          this.flag3 = 1;
        }
      }, {
        key: "hidepic3",
        value: function hidepic3() {
          this.flag3 = 0;
        }
      }, {
        key: "loadpic4",
        value: function loadpic4() {
          this.flag4 = 1;
        }
      }, {
        key: "hidepic4",
        value: function hidepic4() {
          this.flag4 = 0;
        }
      }, {
        key: "loadpic5",
        value: function loadpic5() {
          this.flag5 = 1;
        }
      }, {
        key: "hidepic5",
        value: function hidepic5() {
          this.flag5 = 0;
        }
      }, {
        key: "loadpic6",
        value: function loadpic6() {
          this.flag6 = 1;
        }
      }, {
        key: "hidepic6",
        value: function hidepic6() {
          this.flag6 = 0;
        }
      }, {
        key: "loadpic7",
        value: function loadpic7() {
          this.flag7 = 1;
        }
      }, {
        key: "hidepic7",
        value: function hidepic7() {
          this.flag7 = 0;
        }
      }, {
        key: "loadpic8",
        value: function loadpic8() {
          this.flag8 = 1;
        }
      }, {
        key: "hidepic8",
        value: function hidepic8() {
          this.flag8 = 0;
        }
      }, {
        key: "loadpic9",
        value: function loadpic9() {
          this.flag9 = 1;
        }
      }, {
        key: "hidepic9",
        value: function hidepic9() {
          this.flag9 = 0;
        }
      }, {
        key: "loadpic10",
        value: function loadpic10() {
          this.flag10 = 1;
        }
      }, {
        key: "hidepic10",
        value: function hidepic10() {
          this.flag10 = 0;
        }
      }, {
        key: "loadpic11",
        value: function loadpic11() {
          this.flag11 = 1;
        }
      }, {
        key: "hidepic11",
        value: function hidepic11() {
          this.flag11 = 0;
        }
      }, {
        key: "loadpic12",
        value: function loadpic12() {
          this.flag12 = 1;
        }
      }, {
        key: "hidepic12",
        value: function hidepic12() {
          this.flag12 = 0;
        }
      }, {
        key: "loadpic13",
        value: function loadpic13() {
          this.flag13 = 1;
        }
      }, {
        key: "hidepic13",
        value: function hidepic13() {
          this.flag13 = 0;
        }
      }, {
        key: "loadpic14",
        value: function loadpic14() {
          this.flag14 = 1;
        }
      }, {
        key: "hidepic14",
        value: function hidepic14() {
          this.flag14 = 0;
        }
      }, {
        key: "loadpic15",
        value: function loadpic15() {
          this.flag15 = 1;
        }
      }, {
        key: "hidepic15",
        value: function hidepic15() {
          this.flag15 = 0;
        }
      }, {
        key: "loadpic16",
        value: function loadpic16() {
          this.flag16 = 1;
        }
      }, {
        key: "hidepic16",
        value: function hidepic16() {
          this.flag16 = 0;
        }
      }, {
        key: "loadpic17",
        value: function loadpic17() {
          this.flag17 = 1;
        }
      }, {
        key: "hidepic17",
        value: function hidepic17() {
          this.flag17 = 0;
        }
      }, {
        key: "loadpic18",
        value: function loadpic18() {
          this.flag18 = 1;
        }
      }, {
        key: "hidepic18",
        value: function hidepic18() {
          this.flag18 = 0;
        }
      }, {
        key: "loadpic19",
        value: function loadpic19() {
          this.flag19 = 1;
        }
      }, {
        key: "hidepic19",
        value: function hidepic19() {
          this.flag19 = 0;
        }
      }, {
        key: "loadpic20",
        value: function loadpic20() {
          this.flag20 = 1;
        }
      }, {
        key: "hidepic20",
        value: function hidepic20() {
          this.flag20 = 0;
        }
      }, {
        key: "loadpic21",
        value: function loadpic21() {
          this.flag21 = 1;
        }
      }, {
        key: "hidepic21",
        value: function hidepic21() {
          this.flag21 = 0;
        }
      }, {
        key: "loadpic22",
        value: function loadpic22() {
          this.flag22 = 1;
        }
      }, {
        key: "hidepic22",
        value: function hidepic22() {
          this.flag22 = 0;
        }
      }, {
        key: "loadpic23",
        value: function loadpic23() {
          this.flag23 = 1;
        }
      }, {
        key: "hidepic23",
        value: function hidepic23() {
          this.flag23 = 0;
        }
      }, {
        key: "loadpic24",
        value: function loadpic24() {
          this.flag24 = 1;
        }
      }, {
        key: "hidepic24",
        value: function hidepic24() {
          this.flag24 = 0;
        }
      }, {
        key: "loadpic25",
        value: function loadpic25() {
          this.flag25 = 1;
        }
      }, {
        key: "hidepic25",
        value: function hidepic25() {
          this.flag25 = 0;
        }
      }, {
        key: "loadpic26",
        value: function loadpic26() {
          this.flag26 = 1;
        }
      }, {
        key: "hidepic26",
        value: function hidepic26() {
          this.flag26 = 0;
        }
      }, {
        key: "loadpic27",
        value: function loadpic27() {
          this.flag27 = 1;
        }
      }, {
        key: "hidepic27",
        value: function hidepic27() {
          this.flag27 = 0;
        }
      }, {
        key: "loadpic28",
        value: function loadpic28() {
          this.flag28 = 1;
        }
      }, {
        key: "hidepic28",
        value: function hidepic28() {
          this.flag28 = 0;
        }
      }, {
        key: "loadpic29",
        value: function loadpic29() {
          this.flag29 = 1;
        }
      }, {
        key: "hidepic29",
        value: function hidepic29() {
          this.flag29 = 0;
        }
      }, {
        key: "loadpic30",
        value: function loadpic30() {
          this.flag30 = 1;
        }
      }, {
        key: "hidepic30",
        value: function hidepic30() {
          this.flag30 = 0;
        }
      }, {
        key: "loadpic31",
        value: function loadpic31() {
          this.flag31 = 1;
        }
      }, {
        key: "hidepic31",
        value: function hidepic31() {
          this.flag31 = 0;
        }
      }, {
        key: "loadpic32",
        value: function loadpic32() {
          this.flag32 = 1;
        }
      }, {
        key: "hidepic32",
        value: function hidepic32() {
          this.flag32 = 0;
        }
      }, {
        key: "loadpic33",
        value: function loadpic33() {
          this.flag33 = 1;
        }
      }, {
        key: "hidepic33",
        value: function hidepic33() {
          this.flag33 = 0;
        }
      }, {
        key: "loadpic34",
        value: function loadpic34() {
          this.flag34 = 1;
        }
      }, {
        key: "hidepic34",
        value: function hidepic34() {
          this.flag34 = 0;
        }
      }, {
        key: "loadpic35",
        value: function loadpic35() {
          this.flag35 = 1;
        }
      }, {
        key: "hidepic35",
        value: function hidepic35() {
          this.flag35 = 0;
        }
      }, {
        key: "loadpic36",
        value: function loadpic36() {
          this.flag36 = 1;
        }
      }, {
        key: "hidepic36",
        value: function hidepic36() {
          this.flag36 = 0;
        }
      }, {
        key: "loadpic37",
        value: function loadpic37() {
          this.flag37 = 1;
        }
      }, {
        key: "hidepic37",
        value: function hidepic37() {
          this.flag37 = 0;
        }
      }, {
        key: "loadpic38",
        value: function loadpic38() {
          this.flag38 = 1;
        }
      }, {
        key: "hidepic38",
        value: function hidepic38() {
          this.flag38 = 0;
        }
      }, {
        key: "loadpic39",
        value: function loadpic39() {
          this.flag39 = 1;
        }
      }, {
        key: "hidepic39",
        value: function hidepic39() {
          this.flag39 = 0;
        }
      }, {
        key: "loadpic40",
        value: function loadpic40() {
          this.flag40 = 1;
        }
      }, {
        key: "hidepic40",
        value: function hidepic40() {
          this.flag40 = 0;
        }
      }, {
        key: "loadpic41",
        value: function loadpic41() {
          this.flag41 = 1;
        }
      }, {
        key: "hidepic41",
        value: function hidepic41() {
          this.flag41 = 0;
        }
      }, {
        key: "loadpic42",
        value: function loadpic42() {
          this.flag42 = 1;
        }
      }, {
        key: "hidepic42",
        value: function hidepic42() {
          this.flag42 = 0;
        }
      }, {
        key: "loadpic43",
        value: function loadpic43() {
          this.flag43 = 1;
        }
      }, {
        key: "hidepic43",
        value: function hidepic43() {
          this.flag43 = 0;
        }
      }, {
        key: "loadpic44",
        value: function loadpic44() {
          this.flag44 = 1;
        }
      }, {
        key: "hidepic44",
        value: function hidepic44() {
          this.flag44 = 0;
        }
      }, {
        key: "loadpic45",
        value: function loadpic45() {
          this.flag45 = 1;
        }
      }, {
        key: "hidepic45",
        value: function hidepic45() {
          this.flag45 = 0;
        }
      }, {
        key: "loadpic46",
        value: function loadpic46() {
          this.flag46 = 1;
        }
      }, {
        key: "hidepic46",
        value: function hidepic46() {
          this.flag46 = 0;
        }
      }, {
        key: "dietPlan",
        value: function dietPlan() {
          var a = prompt("Fat Loss/Muscle Building");

          if (a == "Fat Loss") {
            this.flagweight = 1;
            this.flagmuscle = 0;
          } else if (a == "Muscle Building") {
            this.flagmuscle = 1;
            this.flagweight = 0;
          } else {
            alert("Invalid Credentials");
          }
        }
      }, {
        key: "food",
        value: function food() {
          this.flagnutri = 1;
          var xhr = new XMLHttpRequest();
          var url1 = "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=";
          var url2 = prompt("Write the name of the food");
          var url = url1 + url2;
          xhr.open("GET", url);
          xhr.setRequestHeader("x-rapidapi-host", "edamam-food-and-grocery-database.p.rapidapi.com");
          xhr.setRequestHeader("x-rapidapi-key", "23afcb7ce7msh54dd1061c86521cp1c66bejsn627983c745fb");
          xhr.onreadystatechange = test;

          function test() {
            if (this.status == 200 && this.readyState == 4) {
              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var rec = document.getElementById("titlerec");
              rec.innerHTML = "Nutrition Facts"; //first
              //  var a=document.getElementById("category");
              //  a.innerHTML="Category: "+res_data.hints[0].food.category;
              //  var a=document.getElementById("label");
              //  a.innerHTML="Label: "+res_data.hints[0].food.label;

              var img = document.getElementById("image1");

              if (res_data.hints[0].food.image != null) {
                var imgset = res_data.hints[0].food.image;
                img.setAttribute('src', imgset);
              } else {
                img.setAttribute('src', 'assets/img/nutritionpic.jpg');
              }

              if (res_data.hints[0].food.foodContentsLabel != null) {
                var b = document.getElementById('fcontent1');
                b.innerHTML = "Food Content: " + res_data.hints[0].food.foodContentsLabel;
              }

              var b = document.getElementById("ul1");
              b.innerHTML = "Nutrition:";
              var c = document.getElementById('li1');
              c.innerHTML = "1) Carbs: " + res_data.hints[0].food.nutrients.CHOCDF;
              var c = document.getElementById('li2');
              c.innerHTML = "2) Calories: " + res_data.hints[0].food.nutrients.ENERC_KCAL;
              var c = document.getElementById('li3');
              c.innerHTML = "3) Fat: " + res_data.hints[0].food.nutrients.FAT;
              var c = document.getElementById('li4');
              c.innerHTML = "4) Fibre: " + res_data.hints[0].food.nutrients.FIBTG;
              var c = document.getElementById('li5');
              c.innerHTML = "5) Protein: " + res_data.hints[0].food.nutrients.PROCNT; //  //second
              //  var a=document.getElementById("category2");
              //  a.innerHTML="Category: "+res_data.hints[1].food.category;
              //  var a=document.getElementById("label2");
              //  a.innerHTML="Label: "+res_data.hints[1].food.label;
              //  var img=document.getElementById("image2");
              //  if(res_data.hints[1].food.image!=null){
              //  var imgset=res_data.hints[1].food.image;
              //  img.setAttribute('src',imgset);}
              //  else{
              //  img.setAttribute('src','https://images.newscientist.com/wp-content/uploads/2019/11/13140642/gettyimages-855098134.jpg');
              //  }
              //  if(res_data.hints[1].food.foodContentsLabel!=null){
              //  var b=document.getElementById('fcontent2');
              //  b.innerHTML="Food Content: "+res_data.hints[1].food.foodContentsLabel;}
              //  var b=document.getElementById("2ul1");
              //  b.innerHTML="Nutrition:";
              //  var c=document.getElementById('2li1');
              //  c.innerHTML="1) Carbs: "+res_data.hints[1].food.nutrients.CHOCDF;
              //  var c=document.getElementById('2li2');
              //  c.innerHTML="2) Calories: "+res_data.hints[1].food.nutrients.ENERC_KCAL;
              //  var c=document.getElementById('2li3');
              //  c.innerHTML="3) Fat: "+res_data.hints[1].food.nutrients.FAT;
              //  var c=document.getElementById('2li4');
              //  c.innerHTML="4) Fibre: "+res_data.hints[1].food.nutrients.FIBTG;
              //  var c=document.getElementById('2li5');
              //  c.innerHTML="5) Protein: "+res_data.hints[1].food.nutrients.PROCNT;
              //  //third
              //  var a=document.getElementById("category3");
              //  a.innerHTML="Category: "+res_data.hints[2].food.category;
              //  var a=document.getElementById("label3");
              //  a.innerHTML="Label: "+res_data.hints[2].food.label;
              //  var img=document.getElementById("image3");
              //  if(res_data.hints[2].food.image!=null){
              //  var imgset=res_data.hints[2].food.image;
              //  img.setAttribute('src',imgset);}
              //  else{
              //  img.setAttribute('src','https://images.newscientist.com/wp-content/uploads/2019/11/13140642/gettyimages-855098134.jpg');
              //  }
              //  if(res_data.hints[2].food.foodContentsLabel!=null){
              //  var b=document.getElementById('fcontent3');
              //  b.innerHTML="Food Content: "+res_data.hints[2].food.foodContentsLabel;}
              //  var b=document.getElementById("3ul1");
              //  b.innerHTML="Nutrition:";
              //  var c=document.getElementById('3li1');
              //  c.innerHTML="1) Carbs: "+res_data.hints[2].food.nutrients.CHOCDF;
              //  var c=document.getElementById('3li2');
              //  c.innerHTML="2) Calories: "+res_data.hints[2].food.nutrients.ENERC_KCAL;
              //  var c=document.getElementById('3li3');
              //  c.innerHTML="3) Fat: "+res_data.hints[2].food.nutrients.FAT;
              //  var c=document.getElementById('3li4');
              //  c.innerHTML="4) Fibre: "+res_data.hints[2].food.nutrients.FIBTG;
              //  var c=document.getElementById('3li5');
              //  c.innerHTML="5) Protein: "+res_data.hints[2].food.nutrients.PROCNT;
              //  //fourth
              //  var a=document.getElementById("category4");
              //  a.innerHTML="Category: "+res_data.hints[3].food.category;
              //  var a=document.getElementById("label4");
              //  a.innerHTML="Label: "+res_data.hints[3].food.label;
              //  var img=document.getElementById("image4");
              //  if(res_data.hints[3].food.image!=null){
              //  var imgset=res_data.hints[3].food.image;
              //  img.setAttribute('src',imgset);}
              //  else{
              //  img.setAttribute('src','https://images.newscientist.com/wp-content/uploads/2019/11/13140642/gettyimages-855098134.jpg');
              //  }
              //  if(res_data.hints[3].food.foodContentsLabel!=null){
              //  var b=document.getElementById('fcontent4');
              //  b.innerHTML="Food Content: "+res_data.hints[3].food.foodContentsLabel;}
              //  var b=document.getElementById("4ul1");
              //  b.innerHTML="Nutrition:";
              //  var c=document.getElementById('4li1');
              //  c.innerHTML="1) Carbs: "+res_data.hints[3].food.nutrients.CHOCDF;
              //  var c=document.getElementById('4li2');
              //  c.innerHTML="2) Calories: "+res_data.hints[3].food.nutrients.ENERC_KCAL;
              //  var c=document.getElementById('4li3');
              //  c.innerHTML="3) Fat: "+res_data.hints[3].food.nutrients.FAT;
              //  var c=document.getElementById('4li4');
              //  c.innerHTML="4) Fibre: "+res_data.hints[3].food.nutrients.FIBTG;
              //  var c=document.getElementById('4li5');
              //  c.innerHTML="5) Protein: "+res_data.hints[3].food.nutrients.PROCNT;
              //  //fifth
              //  var a=document.getElementById("category5");
              //  a.innerHTML="Category: "+res_data.hints[4].food.category;
              //  var a=document.getElementById("label5");
              //  a.innerHTML="Label: "+res_data.hints[4].food.label;
              //  var img=document.getElementById("image5");
              //  if(res_data.hints[4].food.image!=null){
              //  var imgset=res_data.hints[4].food.image;
              //  img.setAttribute('src',imgset);}
              //  else{
              //  img.setAttribute('src','https://images.newscientist.com/wp-content/uploads/2019/11/13140642/gettyimages-855098134.jpg');
              //  }
              //  if(res_data.hints[4].food.foodContentsLabel!=null){
              //  var b=document.getElementById('fcontent5');
              //  b.innerHTML="Food Content: "+res_data.hints[4].food.foodContentsLabel;}
              //  var b=document.getElementById("5ul1");
              //  b.innerHTML="Nutrition:";
              //  var c=document.getElementById('5li1');
              //  c.innerHTML="1) Carbs: "+res_data.hints[4].food.nutrients.CHOCDF;
              //  var c=document.getElementById('5li2');
              //  c.innerHTML="2) Calories: "+res_data.hints[4].food.nutrients.ENERC_KCAL;
              //  var c=document.getElementById('5li3');
              //  c.innerHTML="3) Fat: "+res_data.hints[4].food.nutrients.FAT;
              //  var c=document.getElementById('5li4');
              //  c.innerHTML="4) Fibre: "+res_data.hints[4].food.nutrients.FIBTG;
              //  var c=document.getElementById('5li5');
              //  c.innerHTML="5) Protein: "+res_data.hints[4].food.nutrients.PROCNT;
              //  //sixth
              //  var a=document.getElementById("category6");
              //  a.innerHTML="Category: "+res_data.hints[5].food.category;
              //  var a=document.getElementById("label6");
              //  a.innerHTML="Label: "+res_data.hints[5].food.label;
              //  var img=document.getElementById("image6");
              //  if(res_data.hints[5].food.image!=null){
              //  var imgset=res_data.hints[5].food.image;
              //  img.setAttribute('src',imgset);}
              //  else{
              //  img.setAttribute('src','https://images.newscientist.com/wp-content/uploads/2019/11/13140642/gettyimages-855098134.jpg');
              //  }
              //  if(res_data.hints[5].food.foodContentsLabel!=null){
              //  var b=document.getElementById('fcontent6');
              //  b.innerHTML="Food Content: "+res_data.hints[5].food.foodContentsLabel;}
              //  var b=document.getElementById("6ul1");
              //  b.innerHTML="Nutrition:";
              //  var c=document.getElementById('6li1');
              //  c.innerHTML="1) Carbs: "+res_data.hints[5].food.nutrients.CHOCDF;
              //  var c=document.getElementById('6li2');
              //  c.innerHTML="2) Calories: "+res_data.hints[5].food.nutrients.ENERC_KCAL;
              //  var c=document.getElementById('6li3');
              //  c.innerHTML="3) Fat: "+res_data.hints[5].food.nutrients.FAT;
              //  var c=document.getElementById('6li4');
              //  c.innerHTML="4) Fibre: "+res_data.hints[5].food.nutrients.FIBTG;
              //  var c=document.getElementById('6li5');
              //  c.innerHTML="5) Protein: "+res_data.hints[5].food.nutrients.PROCNT;
              //  //seventh
              //  var a=document.getElementById("category7");
              //  a.innerHTML="Category: "+res_data.hints[6].food.category;
              //  var a=document.getElementById("label7");
              //  a.innerHTML="Label: "+res_data.hints[6].food.label;
              //  var img=document.getElementById("image7");
              //  if(res_data.hints[6].food.image!=null){
              //  var imgset=res_data.hints[6].food.image;
              //  img.setAttribute('src',imgset);}
              //  else{
              //  img.setAttribute('src','https://images.newscientist.com/wp-content/uploads/2019/11/13140642/gettyimages-855098134.jpg');
              //  }
              //  if(res_data.hints[6].food.foodContentsLabel!=null){
              //  var b=document.getElementById('fcontent7');
              //  b.innerHTML="Food Content: "+res_data.hints[6].food.foodContentsLabel;}
              //  var b=document.getElementById("7ul1");
              //  b.innerHTML="Nutrition:";
              //  var c=document.getElementById('7li1');
              //  c.innerHTML="1) Carbs: "+res_data.hints[6].food.nutrients.CHOCDF;
              //  var c=document.getElementById('7li2');
              //  c.innerHTML="2) Calories: "+res_data.hints[6].food.nutrients.ENERC_KCAL;
              //  var c=document.getElementById('7li3');
              //  c.innerHTML="3) Fat: "+res_data.hints[6].food.nutrients.FAT;
              //  var c=document.getElementById('7li4');
              //  c.innerHTML="4) Fibre: "+res_data.hints[6].food.nutrients.FIBTG;
              //  var c=document.getElementById('7li5');
              //  c.innerHTML="5) Protein: "+res_data.hints[6].food.nutrients.PROCNT;
              //  //eighth
              //  var a=document.getElementById("category8");
              //  a.innerHTML="Category: "+res_data.hints[7].food.category;
              //  var a=document.getElementById("label8");
              //  a.innerHTML="Label: "+res_data.hints[7].food.label;
              //  var img=document.getElementById("image8");
              //  if(res_data.hints[7].food.image!=null){
              //  var imgset=res_data.hints[7].food.image;
              //  img.setAttribute('src',imgset);}
              //  else{
              //  img.setAttribute('src','https://images.newscientist.com/wp-content/uploads/2019/11/13140642/gettyimages-855098134.jpg');
              //  }
              //  if(res_data.hints[7].food.foodContentsLabel!=null){
              //  var b=document.getElementById('fcontent8');
              //  b.innerHTML="Food Content: "+res_data.hints[7].food.foodContentsLabel;}
              //  var b=document.getElementById("8ul1");
              //  b.innerHTML="Nutrition:";
              //  var c=document.getElementById('8li1');
              //  c.innerHTML="1) Carbs: "+res_data.hints[7].food.nutrients.CHOCDF;
              //  var c=document.getElementById('8li2');
              //  c.innerHTML="2) Calories: "+res_data.hints[7].food.nutrients.ENERC_KCAL;
              //  var c=document.getElementById('8li3');
              //  c.innerHTML="3) Fat: "+res_data.hints[7].food.nutrients.FAT;
              //  var c=document.getElementById('8li4');
              //  c.innerHTML="4) Fibre: "+res_data.hints[7].food.nutrients.FIBTG;
              //  var c=document.getElementById('8li5');
              //  c.innerHTML="5) Protein: "+res_data.hints[7].food.nutrients.PROCNT;
              //  //ninth
              //  var a=document.getElementById("category9");
              //  a.innerHTML="Category: "+res_data.hints[8].food.category;
              //  var a=document.getElementById("label9");
              //  a.innerHTML="Label: "+res_data.hints[8].food.label;
              //  var img=document.getElementById("image9");
              //  if(res_data.hints[8].food.image!=null){
              //  var imgset=res_data.hints[8].food.image;
              //  img.setAttribute('src',imgset);}
              //  else{
              //  img.setAttribute('src','https://images.newscientist.com/wp-content/uploads/2019/11/13140642/gettyimages-855098134.jpg');
              //  }
              //  if(res_data.hints[8].food.foodContentsLabel!=null){
              //  var b=document.getElementById('fcontent9');
              //  b.innerHTML="Food Content: "+res_data.hints[8].food.foodContentsLabel;}
              //  var b=document.getElementById("9ul1");
              //  b.innerHTML="Nutrition:";
              //  var c=document.getElementById('9li1');
              //  c.innerHTML="1) Carbs: "+res_data.hints[8].food.nutrients.CHOCDF;
              //  var c=document.getElementById('9li2');
              //  c.innerHTML="2) Calories: "+res_data.hints[8].food.nutrients.ENERC_KCAL;
              //  var c=document.getElementById('9li3');
              //  c.innerHTML="3) Fat: "+res_data.hints[8].food.nutrients.FAT;
              //  var c=document.getElementById('9li4');
              //  c.innerHTML="4) Fibre: "+res_data.hints[8].food.nutrients.FIBTG;
              //  var c=document.getElementById('9li5');
              //  c.innerHTML="5) Protein: "+res_data.hints[8].food.nutrients.PROCNT;
            }
          }

          xhr.send();
        }
      }, {
        key: "rcpe",
        value: function rcpe() {
          this.flagrec = 1;
          var xhr = new XMLHttpRequest();
          var url1 = "https://recipe-puppy.p.rapidapi.com/?q=";
          var url2 = prompt("Search for ingredients of dishes");
          var url = url1 + url2;
          xhr.open("GET", url);
          xhr.setRequestHeader("x-rapidapi-host", "recipe-puppy.p.rapidapi.com");
          xhr.setRequestHeader("x-rapidapi-key", "23afcb7ce7msh54dd1061c86521cp1c66bejsn627983c745fb");
          xhr.onreadystatechange = test;

          function test() {
            if (this.status == 200 && this.readyState == 4) {
              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var rec = document.getElementById("titlerec1");
              rec.innerHTML = "Recipe"; //first

              var pehla = document.getElementById('title1');
              pehla.innerHTML = res_data.results[0].title;
              var a = document.getElementById('link1');
              var aset = res_data.results[0].href;
              a.setAttribute('href', aset);
              var b = document.getElementById('img111');

              if (res_data.results[0].thumbnail == "") {
                b.setAttribute('src', 'assets/img/recipepic.jpg');
                b.setAttribute('width', "100px");
              } else {
                var bset = res_data.results[0].thumbnail;
                b.setAttribute('src', bset);
              }

              b.setAttribute('title', 'Click here for steps in detail');
              var c = document.getElementById('ing1');
              c.innerHTML = "Ingredients: " + res_data.results[0].ingredients; //second

              var pehla = document.getElementById('title2');
              pehla.innerHTML = res_data.results[1].title;
              var a = document.getElementById('link2');
              var aset = res_data.results[1].href;
              a.setAttribute('href', aset);
              var b = document.getElementById('img222');

              if (res_data.results[1].thumbnail == "") {
                b.setAttribute('src', 'assets/img/recipepic.jpg');
                b.setAttribute('width', "100px");
              } else {
                var bset = res_data.results[1].thumbnail;
                b.setAttribute('src', bset);
              }

              b.setAttribute('title', 'Click here for steps in detail');
              var c = document.getElementById('ing2');
              c.innerHTML = "Ingredients: " + res_data.results[1].ingredients; //third

              var pehla = document.getElementById('title3');
              pehla.innerHTML = res_data.results[2].title;
              var a = document.getElementById('link3');
              var aset = res_data.results[2].href;
              a.setAttribute('href', aset);
              var b = document.getElementById('img333');

              if (res_data.results[2].thumbnail == "") {
                b.setAttribute('src', 'assets/img/recipepic.jpg');
                b.setAttribute('width', "100px");
              } else {
                var bset = res_data.results[2].thumbnail;
                b.setAttribute('src', bset);
              }

              b.setAttribute('title', 'Click here for steps in detail');
              var c = document.getElementById('ing3');
              c.innerHTML = "Ingredients: " + res_data.results[2].ingredients; //fourth

              var pehla = document.getElementById('title4');
              pehla.innerHTML = res_data.results[3].title;
              var a = document.getElementById('link4');
              var aset = res_data.results[3].href;
              a.setAttribute('href', aset);
              var b = document.getElementById('img444');

              if (res_data.results[3].thumbnail == "") {
                b.setAttribute('src', 'assets/img/recipepic.jpg');
                b.setAttribute('width', "100px");
              } else {
                var bset = res_data.results[3].thumbnail;
                b.setAttribute('src', bset);
              }

              b.setAttribute('title', 'Click here for steps in detail');
              var c = document.getElementById('ing4');
              c.innerHTML = "Ingredients: " + res_data.results[3].ingredients; //fifth

              var pehla = document.getElementById('title5');
              pehla.innerHTML = res_data.results[4].title;
              var a = document.getElementById('link5');
              var aset = res_data.results[4].href;
              a.setAttribute('href', aset);
              var b = document.getElementById('img555');

              if (res_data.results[4].thumbnail == "") {
                b.setAttribute('src', 'assets/img/recipepic.jpg');
                b.setAttribute('width', "100px");
              } else {
                var bset = res_data.results[4].thumbnail;
                b.setAttribute('src', bset);
              }

              b.setAttribute('title', 'Click here for steps in detail');
              var c = document.getElementById('ing5');
              c.innerHTML = "Ingredients: " + res_data.results[4].ingredients; //sixth

              var pehla = document.getElementById('title6');
              pehla.innerHTML = res_data.results[5].title;
              var a = document.getElementById('link6');
              var aset = res_data.results[5].href;
              a.setAttribute('href', aset);
              var b = document.getElementById('img666');

              if (res_data.results[5].thumbnail == "") {
                b.setAttribute('src', 'assets/img/recipepic.jpg');
                b.setAttribute('width', "100px");
              } else {
                var bset = res_data.results[5].thumbnail;
                b.setAttribute('src', bset);
              }

              b.setAttribute('title', 'Click here for steps in detail');
              var c = document.getElementById('ing6');
              c.innerHTML = "Ingredients: " + res_data.results[5].ingredients; //seventh

              var pehla = document.getElementById('title7');
              pehla.innerHTML = res_data.results[6].title;
              var a = document.getElementById('link7');
              var aset = res_data.results[6].href;
              a.setAttribute('href', aset);
              var b = document.getElementById('img777');

              if (res_data.results[6].thumbnail == "") {
                b.setAttribute('src', 'assets/img/recipepic.jpg');
                b.setAttribute('width', "100px");
              } else {
                var bset = res_data.results[6].thumbnail;
                b.setAttribute('src', bset);
              }

              b.setAttribute('title', 'Click here for steps in detail');
              var c = document.getElementById('ing7');
              c.innerHTML = "Ingredients: " + res_data.results[6].ingredients; //eighth

              var pehla = document.getElementById('title8');
              pehla.innerHTML = res_data.results[7].title;
              var a = document.getElementById('link8');
              var aset = res_data.results[7].href;
              a.setAttribute('href', aset);
              var b = document.getElementById('img888');

              if (res_data.results[7].thumbnail == "") {
                b.setAttribute('src', 'assets/img/recipepic.jpg');
                b.setAttribute('width', "100px");
              } else {
                var bset = res_data.results[7].thumbnail;
                b.setAttribute('src', bset);
              }

              b.setAttribute('title', 'Click here for steps in detail');
              var c = document.getElementById('ing8');
              c.innerHTML = "Ingredients: " + res_data.results[7].ingredients; //ninth

              var pehla = document.getElementById('title9');
              pehla.innerHTML = res_data.results[8].title;
              var a = document.getElementById('link9');
              var aset = res_data.results[8].href;
              a.setAttribute('href', aset);
              var b = document.getElementById('img999');

              if (res_data.results[8].thumbnail == "") {
                b.setAttribute('src', 'assets/img/recipepic.jpg');
                b.setAttribute('width', "100px");
              } else {
                var bset = res_data.results[8].thumbnail;
                b.setAttribute('src', bset);
              }

              b.setAttribute('title', 'Click here for steps in detail');
              var c = document.getElementById('ing9');
              c.innerHTML = "Ingredients: " + res_data.results[8].ingredients;
            }
          }

          xhr.send();
        }
      }, {
        key: "checkfunc",
        value: function checkfunc() {
          var what = prompt("Video or Gif?");

          if (what == "Video" || what == "video") {
            this.srch();
          } else if (what == "Gif" || what == "gif") {
            this.gify();
          } else {
            alert("Invalid entry");
          }
        }
      }, {
        key: "srch",
        value: function srch() {
          this.flagvid = 1;
          var xhr = new XMLHttpRequest();
          var url1 = "https://youtube-search1.p.rapidapi.com/";
          var url2 = prompt("Write the name of the topic");
          var url = url1 + url2;
          xhr.open("GET", url);
          xhr.setRequestHeader("x-rapidapi-host", "youtube-search1.p.rapidapi.com");
          xhr.setRequestHeader("x-rapidapi-key", "23afcb7ce7msh54dd1061c86521cp1c66bejsn627983c745fb");
          xhr.onreadystatechange = test;

          function test() {
            if (this.status == 200 && this.readyState == 4) {
              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var pehla = document.getElementById('titleyoutube');
              pehla.innerHTML = "Youtube Videos"; //first

              var a = document.getElementById("vid1");

              if (res_data.items[0].thumbAnim != "") {
                var aset = res_data.items[0].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid1");
              var aset = res_data.items[0].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch1");
              var aset = res_data.items[0].url;
              a.setAttribute('href', aset); //second

              var a = document.getElementById("vid2");

              if (res_data.items[1].thumbAnim != "") {
                var aset = res_data.items[1].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid2");
              var aset = res_data.items[1].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch2");
              var aset = res_data.items[1].url;
              a.setAttribute('href', aset); //third

              var a = document.getElementById("vid3");

              if (res_data.items[2].thumbAnim != "") {
                var aset = res_data.items[2].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid3");
              var aset = res_data.items[2].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch3");
              var aset = res_data.items[2].url;
              a.setAttribute('href', aset); //forth

              var a = document.getElementById("vid4");

              if (res_data.items[3].thumbAnim != "") {
                var aset = res_data.items[3].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid4");
              var aset = res_data.items[3].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch4");
              var aset = res_data.items[3].url;
              a.setAttribute('href', aset); //fifth

              var a = document.getElementById("vid5");

              if (res_data.items[4].thumbAnim != "") {
                var aset = res_data.items[4].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid5");
              var aset = res_data.items[4].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch5");
              var aset = res_data.items[4].url;
              a.setAttribute('href', aset); //sixth

              var a = document.getElementById("vid6");

              if (res_data.items[5].thumbAnim != "") {
                var aset = res_data.items[5].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid6");
              var aset = res_data.items[5].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch6");
              var aset = res_data.items[5].url;
              a.setAttribute('href', aset); //seventh

              var a = document.getElementById("vid7");

              if (res_data.items[6].thumbAnim != "") {
                var aset = res_data.items[6].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid7");
              var aset = res_data.items[6].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch7");
              var aset = res_data.items[6].url;
              a.setAttribute('href', aset); //eighth

              var a = document.getElementById("vid8");

              if (res_data.items[7].thumbAnim != "") {
                var aset = res_data.items[7].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid8");
              var aset = res_data.items[7].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch8");
              var aset = res_data.items[7].url;
              a.setAttribute('href', aset); //ninth

              var a = document.getElementById("vid9");

              if (res_data.items[8].thumbAnim != "") {
                var aset = res_data.items[8].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid9");
              var aset = res_data.items[8].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch9");
              var aset = res_data.items[8].url;
              a.setAttribute('href', aset); //tenth

              var a = document.getElementById("vid10");

              if (res_data.items[9].thumbAnim != "") {
                var aset = res_data.items[9].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid10");
              var aset = res_data.items[9].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch10");
              var aset = res_data.items[9].url;
              a.setAttribute('href', aset); //eleventh

              var a = document.getElementById("vid11");

              if (res_data.items[10].thumbAnim != "") {
                var aset = res_data.items[10].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid11");
              var aset = res_data.items[10].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch11");
              var aset = res_data.items[10].url;
              a.setAttribute('href', aset); //twelth

              var a = document.getElementById("vid12");

              if (res_data.items[11].thumbAnim != "") {
                var aset = res_data.items[11].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid12");
              var aset = res_data.items[11].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch12");
              var aset = res_data.items[11].url;
              a.setAttribute('href', aset); //thirteenth

              var a = document.getElementById("vid13");

              if (res_data.items[12].thumbAnim != "") {
                var aset = res_data.items[12].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid13");
              var aset = res_data.items[12].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch13");
              var aset = res_data.items[12].url;
              a.setAttribute('href', aset); //fourteenth

              var a = document.getElementById("vid14");

              if (res_data.items[13].thumbAnim != "") {
                var aset = res_data.items[13].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid14");
              var aset = res_data.items[13].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch14");
              var aset = res_data.items[13].url;
              a.setAttribute('href', aset); //fifteenth

              var a = document.getElementById("vid15");

              if (res_data.items[14].thumbAnim != "") {
                var aset = res_data.items[14].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid15");
              var aset = res_data.items[14].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch15");
              var aset = res_data.items[14].url;
              a.setAttribute('href', aset); //sixteenth

              var a = document.getElementById("vid16");

              if (res_data.items[15].thumbAnim != "") {
                var aset = res_data.items[15].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid16");
              var aset = res_data.items[15].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch16");
              var aset = res_data.items[15].url;
              a.setAttribute('href', aset); //seventeenth

              var a = document.getElementById("vid17");

              if (res_data.items[16].thumbAnim != "") {
                var aset = res_data.items[16].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid17");
              var aset = res_data.items[16].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch17");
              var aset = res_data.items[16].url;
              a.setAttribute('href', aset); //eighteenth

              var a = document.getElementById("vid18");

              if (res_data.items[17].thumbAnim != "") {
                var aset = res_data.items[17].thumbAnim;
                a.setAttribute('src', aset);
              } else {
                a.setAttribute('src', 'https://media1.tenor.com/images/b087f562c546c77c6f6750afc4d48ade/tenor.gif?itemid=13716774');
              }

              var a = document.getElementById("vid18");
              var aset = res_data.items[17].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("asrch18");
              var aset = res_data.items[17].url;
              a.setAttribute('href', aset);
            }
          }

          xhr.send();
        }
      }, {
        key: "gify",
        value: function gify() {
          this.flaggif = 1;
          var xhr = new XMLHttpRequest();
          var url2 = prompt("Write the name of the gif");
          var url1 = "https://giphy.p.rapidapi.com/v1/gifs/search?q=";
          var url3 = "&api_key=dc6zaTOxFJmzC";
          var url = url1 + url2 + url3;
          xhr.open("GET", url);
          xhr.setRequestHeader("x-rapidapi-host", "giphy.p.rapidapi.com");
          xhr.setRequestHeader("x-rapidapi-key", "23afcb7ce7msh54dd1061c86521cp1c66bejsn627983c745fb");
          xhr.onreadystatechange = test;

          function test() {
            if (this.status == 200 && this.readyState == 4) {
              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var pehla = document.getElementById("titlegif");
              pehla.innerHTML = "Gifs"; //first

              var img = document.getElementById('vidd1');
              var imgset = res_data.data[0].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd1");
              var aset = res_data.data[0].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("linkk1");
              var aset = res_data.data[0].url;
              a.setAttribute('href', aset); //second

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd2');
              var imgset = res_data.data[1].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd2");
              var aset = res_data.data[1].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("linkk2");
              var aset = res_data.data[1].url;
              a.setAttribute('href', aset); //third

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd3');
              var imgset = res_data.data[2].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd3");
              var aset = res_data.data[2].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("linkk3");
              var aset = res_data.data[2].url;
              a.setAttribute('href', aset); //fourth

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd4');
              var imgset = res_data.data[3].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd4");
              var aset = res_data.data[3].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("linkk4");
              var aset = res_data.data[3].url;
              a.setAttribute('href', aset); //fifth

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd5');
              var imgset = res_data.data[4].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd5");
              var aset = res_data.data[4].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("linkk5");
              var aset = res_data.data[4].url;
              a.setAttribute('href', aset); //sixth

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd6');
              var imgset = res_data.data[5].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd6");
              var aset = res_data.data[5].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("linkk6");
              var aset = res_data.data[5].url;
              a.setAttribute('href', aset); //seventh

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd7');
              var imgset = res_data.data[6].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd7");
              var aset = res_data.data[6].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("linkk7");
              var aset = res_data.data[6].url;
              a.setAttribute('href', aset); //eighth

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd8');
              var imgset = res_data.data[7].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd8");
              var aset = res_data.data[7].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("linkk8");
              var aset = res_data.data[7].url;
              a.setAttribute('href', aset); //ninth

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd9');
              var imgset = res_data.data[8].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd9");
              var aset = res_data.data[8].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("linkk9");
              var aset = res_data.data[8].url;
              a.setAttribute('href', aset); //tenth

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd10');
              var imgset = res_data.data[9].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd10");
              var aset = res_data.data[9].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("link10");
              var aset = res_data.data[9].url;
              a.setAttribute('href', aset); //eleventh

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd11');
              var imgset = res_data.data[10].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd11");
              var aset = res_data.data[10].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("link11");
              var aset = res_data.data[10].url;
              a.setAttribute('href', aset); //twelveth

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd12');
              var imgset = res_data.data[11].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd12");
              var aset = res_data.data[11].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("link12");
              var aset = res_data.data[11].url;
              a.setAttribute('href', aset); //thirteenth

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd13');
              var imgset = res_data.data[12].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd13");
              var aset = res_data.data[12].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("link13");
              var aset = res_data.data[12].url;
              a.setAttribute('href', aset); //fourteenth

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd14');
              var imgset = res_data.data[13].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd14");
              var aset = res_data.data[13].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("link14");
              var aset = res_data.data[13].url;
              a.setAttribute('href', aset); //fifteenth

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd15');
              var imgset = res_data.data[14].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd15");
              var aset = res_data.data[14].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("link15");
              var aset = res_data.data[14].url;
              a.setAttribute('href', aset); //sixteenth

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd16');
              var imgset = res_data.data[15].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd16");
              var aset = res_data.data[15].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("link16");
              var aset = res_data.data[15].url;
              a.setAttribute('href', aset); //seventeenth

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd17');
              var imgset = res_data.data[16].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd17");
              var aset = res_data.data[16].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("link17");
              var aset = res_data.data[16].url;
              a.setAttribute('href', aset); //eighteenth

              var res_data = JSON.parse(this.responseText);
              console.log(res_data);
              var img = document.getElementById('vidd18');
              var imgset = res_data.data[17].images.looping.mp4;
              img.setAttribute('src', imgset);
              var a = document.getElementById("vidd18");
              var aset = res_data.data[17].title;
              a.setAttribute('title', aset);
              var a = document.getElementById("link18");
              var aset = res_data.data[17].url;
              a.setAttribute('href', aset);
            }
          }

          xhr.send();
        }
      }, {
        key: "subs",
        value: function subs() {
          if (this.newsletter != "") alert("Thanks for subscribing");else alert("Please mention your email");
        }
      }, {
        key: "chatbot",
        value: function chatbot() {
          var dialogRef = this.dialog.open(_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_2__["ChatbotComponent"]);
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }]);

      return PremiumComponent;
    }();

    PremiumComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    PremiumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-premium',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./premium.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/premium/premium.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./premium.component.css */
      "./src/app/premium/premium.component.css"))["default"]]
    })], PremiumComponent);
    /***/
  },

  /***/
  "./src/app/premiumlogin/premiumlogin.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/premiumlogin/premiumlogin.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPremiumloginPremiumloginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".kaim{\n    color:red;\n    font-family: Stencil Std, fantasy;\n    font-variant: small-caps;\n    font-size: 40px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlbWl1bWxvZ2luL3ByZW1pdW1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3ByZW1pdW1sb2dpbi9wcmVtaXVtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rYWlte1xuICAgIGNvbG9yOnJlZDtcbiAgICBmb250LWZhbWlseTogU3RlbmNpbCBTdGQsIGZhbnRhc3k7XG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/premiumlogin/premiumlogin.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/premiumlogin/premiumlogin.component.ts ***!
    \********************************************************/

  /*! exports provided: PremiumloginComponent */

  /***/
  function srcAppPremiumloginPremiumloginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PremiumloginComponent", function () {
      return PremiumloginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");

    var PremiumloginComponent = /*#__PURE__*/function () {
      function PremiumloginComponent(router, service) {
        var _this7 = this;

        _classCallCheck(this, PremiumloginComponent);

        this.router = router;
        this.service = service;
        var response = this.service.userData();
        response.subscribe(function (data) {
          return _this7.credentials = data;
        });
      }

      _createClass(PremiumloginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAddPost",
        value: function onAddPost(form) {
          if (form.invalid) {
            console.log("Invalid");
            return;
          }

          var post = {
            pssword: form.value.password,
            email_id: form.value.email
          };
          console.log(post);
        }
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          var flag = 0;
          var email = form.value.email;
          var password = form.value.password; // console.log(email);
          // console.log(password);

          console.log(form.valid);

          for (var i in this.credentials) {
            // console.log(this.credentials[i].eMail)
            // console.log(this.credentials[i].password)
            console.log(this.credentials[i].plan);

            if (email == this.credentials[i].eMail && password == this.credentials[i].password) {
              if (this.credentials[i].plan == "Advanced") {
                flag = 1; // this.sendname.emit(this.credentials[i].firstName);

                this.router.navigateByUrl('premium');
              } else {
                flag = -1;
              }
            } else {}
          }

          if (flag == 0) {
            alert("Invalid Credentials");
          } else if (flag == -1) {
            alert("You do not have a premium membership");
          }
        }
      }]);

      return PremiumloginComponent;
    }();

    PremiumloginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"]
      }];
    };

    PremiumloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-premiumlogin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./premiumlogin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/premiumlogin/premiumlogin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./premiumlogin.component.css */
      "./src/app/premiumlogin/premiumlogin.component.css"))["default"]]
    })], PremiumloginComponent);
    /***/
  },

  /***/
  "./src/app/product-registration.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/product-registration.service.ts ***!
    \*************************************************/

  /*! exports provided: ProductRegistrationService */

  /***/
  function srcAppProductRegistrationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRegistrationService", function () {
      return ProductRegistrationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProductRegistrationService = /*#__PURE__*/function () {
      function ProductRegistrationService(http) {
        _classCallCheck(this, ProductRegistrationService);

        this.http = http;
      }

      _createClass(ProductRegistrationService, [{
        key: "doProductRegistration",
        value: function doProductRegistration(product) {
          return this.http.post("http://localhost:8080/createProduct", product, {
            responseType: 'text'
          });
        } // public productData(): Observable<any>
        // {
        //  //return this.http.get(`${this.url}`);
        //  return this.http.get("http://localhost:8080/getAllProducts");
        // }

      }, {
        key: "productData",
        value: function productData() {
          //return this.http.get(`${this.url}`);
          return this.http.get("http://localhost:8080/getAllProducts");
        }
      }, {
        key: "deleteAllProducts",
        value: function deleteAllProducts() {
          return this.http.get("http://localhost:8080/deleteAllProducts", {
            responseType: 'text'
          });
        }
      }, {
        key: "findbyName",
        value: function findbyName(name) {
          return this.http.get("http://localhost:8080/getProduct?name=" + name);
        }
      }, {
        key: "deletebyName",
        value: function deletebyName(name) {
          return this.http.get("http://localhost:8080/deleteProduct?name=" + name);
        }
      }]);

      return ProductRegistrationService;
    }();

    ProductRegistrationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProductRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductRegistrationService);
    /***/
  },

  /***/
  "./src/app/signup/signup.component.css":
  /*!*********************************************!*\
    !*** ./src/app/signup/signup.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nau{\n    text-align: right;\n    color:red;\n    font-family: Stencil Std, fantasy;\n    font-variant: small-caps;\n    font-size: 20px;\n}\n.kaim{\n    color:red;\n    font-family: Stencil Std, fantasy;\n    font-variant: small-caps;\n    font-size: 40px;\n    text-align: center;\n}\n.siraa{\n    color:whitesmoke;\n    font-size: 22px;\n    text-align: center;\n    font-family: sans-serif;\n}\nmat-label,mat-placeholder{\n    font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXV7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6cmVkO1xuICAgIGZvbnQtZmFtaWx5OiBTdGVuY2lsIFN0ZCwgZmFudGFzeTtcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmthaW17XG4gICAgY29sb3I6cmVkO1xuICAgIGZvbnQtZmFtaWx5OiBTdGVuY2lsIFN0ZCwgZmFudGFzeTtcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaXJhYXtcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5tYXQtbGFiZWwsbWF0LXBsYWNlaG9sZGVye1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user */
    "./src/app/user.ts");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(service) {
        _classCallCheck(this, SignupComponent);

        this.service = service;
        this.flag1 = 0;
        this.flag2 = 0;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", 0, "", "", "");
        this.plans = [{
          value: 'Beginner',
          viewValue: 'Beginner'
        }, {
          value: 'Intermediate',
          viewValue: 'Intermediate'
        }, {
          value: 'Advanced',
          viewValue: 'Advanced'
        }];
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registerProcess",
        value: function registerProcess() {
          var _this8 = this;

          var response = this.service.doRegistration(this.user);
          response.subscribe(function (data) {
            return _this8.message = data;
          });
          this.flag1 = 1;
          this.flag2 = 1;
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/signup/signup.component.css"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/supplement/supplement.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/supplement/supplement.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSupplementSupplementComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    /***/
  },

  /***/
  "./src/app/supplement/supplement.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/supplement/supplement.component.ts ***!
    \****************************************************/

  /*! exports provided: SupplementComponent */

  /***/
  function srcAppSupplementSupplementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupplementComponent", function () {
      return SupplementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../chatbot/chatbot.component */
    "./src/app/chatbot/chatbot.component.ts");

    var SupplementComponent = /*#__PURE__*/function () {
      function SupplementComponent(dialog) {
        _classCallCheck(this, SupplementComponent);

        this.dialog = dialog;
        this.newsletter = "";
      }

      _createClass(SupplementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "chatbot",
        value: function chatbot() {
          var dialogRef = this.dialog.open(_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_3__["ChatbotComponent"]);
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }, {
        key: "subs",
        value: function subs() {
          if (this.newsletter != "") alert("Thanks for subscribing");else alert("Please mention your email");
        }
      }]);

      return SupplementComponent;
    }();

    SupplementComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    SupplementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-supplement',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./supplement.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/supplement/supplement.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./supplement.component.css */
      "./src/app/supplement/supplement.component.css"))["default"]]
    })], SupplementComponent);
    /***/
  },

  /***/
  "./src/app/user-registration.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/user-registration.service.ts ***!
    \**********************************************/

  /*! exports provided: UserRegistrationService */

  /***/
  function srcAppUserRegistrationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegistrationService", function () {
      return UserRegistrationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserRegistrationService = /*#__PURE__*/function () {
      function UserRegistrationService(http) {
        _classCallCheck(this, UserRegistrationService);

        this.http = http;
      }

      _createClass(UserRegistrationService, [{
        key: "doProductRegistration",
        value: function doProductRegistration(product) {
          throw new Error("Method not implemented.");
        } //Does an API Call using POST Http Method
        //for signup

      }, {
        key: "doRegistration",
        value: function doRegistration(user) {
          return this.http.post("http://localhost:8080/create", user, {
            responseType: 'text'
          });
        } //checking data during login
        // public userData(): Observable<any>
        // {
        //  //return this.http.get(`${this.url}`);
        //  return this.http.get("http://localhost:8080/getAll");
        // }

      }, {
        key: "userData",
        value: function userData() {
          //return this.http.get(`${this.url}`);
          return this.http.get("http://localhost:8080/getAll");
        } //other methods from here

      }, {
        key: "deleteAll",
        value: function deleteAll() {
          return this.http.get("http://localhost:8080/deleteAll", {
            responseType: 'text'
          });
        }
      }, {
        key: "findbyName",
        value: function findbyName(name) {
          return this.http.get("http://localhost:8080/get?firstName=" + name);
        }
      }, {
        key: "deletebyName",
        value: function deletebyName(name) {
          return this.http.get("http://localhost:8080/delete?firstName=" + name);
        }
      }]);

      return UserRegistrationService;
    }();

    UserRegistrationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserRegistrationService);
    /***/
  },

  /***/
  "./src/app/user.ts":
  /*!*************************!*\
    !*** ./src/app/user.ts ***!
    \*************************/

  /*! exports provided: User */

  /***/
  function srcAppUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User(firstName, eMail, age, password, number, plan) {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/userdata/userdata.component.css":
  /*!*************************************************!*\
    !*** ./src/app/userdata/userdata.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserdataUserdataComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "td,th{\n    color: black;\n}\n.tableclass{\n    display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmRhdGEvdXNlcmRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91c2VyZGF0YS91c2VyZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQsdGh7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLnRhYmxlY2xhc3N7XG4gICAgZGlzcGxheTogZmxleDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/userdata/userdata.component.ts":
  /*!************************************************!*\
    !*** ./src/app/userdata/userdata.component.ts ***!
    \************************************************/

  /*! exports provided: UserdataComponent */

  /***/
  function srcAppUserdataUserdataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdataComponent", function () {
      return UserdataComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");

    var UserdataComponent = /*#__PURE__*/function () {
      function UserdataComponent(service) {
        _classCallCheck(this, UserdataComponent);

        this.service = service;
        this.user1 = this.service.userData();
      }

      _createClass(UserdataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserdataComponent;
    }();

    UserdataComponent.ctorParameters = function () {
      return [{
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"]
      }];
    };

    UserdataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userdata',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userdata.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/userdata/userdata.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userdata.component.css */
      "./src/app/userdata/userdata.component.css"))["default"]]
    })], UserdataComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/jatinvirsingh/Desktop/fitnesslast/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map