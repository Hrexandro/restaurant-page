/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const home = () => {
    console.log('home works')
    // const descriptionContainer = document.createElement('div');
    // const description = document.createElement('p');
    // description.setAttribute('id','description')
    // description.textContent = 'Traditional Polish dishes prepared with love and passion using only local & natual ingredience. The ingerdients are local and natural, and the dishes prepared with love and tradition. Traditional dishes, just like our grandmas used to make. Traditional Polish dishes prepared with love and passion using only local & natual ingredience. Be sure to try our soup of the day.';
    // description.setAttribute('id', 'description')


    // document.getElementById('main').appendChild(descriptionContainer);
    // descriptionContainer.appendChild(description);



let subtitle = document.createElement('p');
document.getElementById('main').appendChild(subtitle);
subtitle.textContent = "Restaurant"

let title = document.createElement('p');
document.getElementById('main').prepend(title);
title.textContent = "Symphonie"
title.setAttribute('class','cursive')



    console.log('home finish')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");


// TO DO:
// SET THE OTHER PAGES WITH CONTENT
// ADD PAGE SWITCHING LOGIC TO index.JS

//font used:
// https://fonts.google.com/specimen/Gwendolyn?preview.text=Symphonie&preview.text_type=custom&category=Handwriting
//maybe remove bold, if not used after all
let content = document.createElement('div');
content.setAttribute('id','content');
document.body.appendChild(content);


let header = document.createElement('header');
let navbar = document.createElement('nav');

let styleSheet = document.createElement('link');
styleSheet.href = 'style.css';
styleSheet.rel = 'stylesheet';
document.head.appendChild(styleSheet);

content.appendChild(header);
header.appendChild(navbar);


function addLinkToNavbar (name, reference){
    let link = document.createElement('a')
    link.href = reference;
    link.textContent = name;
    navbar.appendChild(link);
}

addLinkToNavbar('Home','#')
addLinkToNavbar('Menu','#')
addLinkToNavbar('Contact','#')

let main = document.createElement('main');
content.appendChild(main);
main.setAttribute('id','main')

let footer = document.createElement('footer');
content.appendChild(footer)
footer.textContent = 'Made by Hrexandro'

// let subtitle = document.createElement('h2');
// header.prepend(subtitle);
// subtitle.textContent = "Restaurant"

// let title = document.createElement('h1');
// header.prepend(title);
// title.textContent = "Symphonie"


;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQztBQUNwQjs7Ozs7OztVQzdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBWTtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaG9tZSB3b3JrcycpXHJcbiAgICAvLyBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAvLyBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVzY3JpcHRpb24nKVxyXG4gICAgLy8gZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnVHJhZGl0aW9uYWwgUG9saXNoIGRpc2hlcyBwcmVwYXJlZCB3aXRoIGxvdmUgYW5kIHBhc3Npb24gdXNpbmcgb25seSBsb2NhbCAmIG5hdHVhbCBpbmdyZWRpZW5jZS4gVGhlIGluZ2VyZGllbnRzIGFyZSBsb2NhbCBhbmQgbmF0dXJhbCwgYW5kIHRoZSBkaXNoZXMgcHJlcGFyZWQgd2l0aCBsb3ZlIGFuZCB0cmFkaXRpb24uIFRyYWRpdGlvbmFsIGRpc2hlcywganVzdCBsaWtlIG91ciBncmFuZG1hcyB1c2VkIHRvIG1ha2UuIFRyYWRpdGlvbmFsIFBvbGlzaCBkaXNoZXMgcHJlcGFyZWQgd2l0aCBsb3ZlIGFuZCBwYXNzaW9uIHVzaW5nIG9ubHkgbG9jYWwgJiBuYXR1YWwgaW5ncmVkaWVuY2UuIEJlIHN1cmUgdG8gdHJ5IG91ciBzb3VwIG9mIHRoZSBkYXkuJztcclxuICAgIC8vIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKVxyXG5cclxuXHJcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcclxuICAgIC8vIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcblxyXG5cclxubGV0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcclxuc3VidGl0bGUudGV4dENvbnRlbnQgPSBcIlJlc3RhdXJhbnRcIlxyXG5cclxubGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLnByZXBlbmQodGl0bGUpO1xyXG50aXRsZS50ZXh0Q29udGVudCA9IFwiU3ltcGhvbmllXCJcclxudGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2N1cnNpdmUnKVxyXG5cclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2hvbWUgZmluaXNoJylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRIb21lcGFnZSBmcm9tICcuL2hvbWUuanMnXHJcblxyXG4vLyBUTyBETzpcclxuLy8gU0VUIFRIRSBPVEhFUiBQQUdFUyBXSVRIIENPTlRFTlRcclxuLy8gQUREIFBBR0UgU1dJVENISU5HIExPR0lDIFRPIGluZGV4LkpTXHJcblxyXG4vL2ZvbnQgdXNlZDpcclxuLy8gaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL0d3ZW5kb2x5bj9wcmV2aWV3LnRleHQ9U3ltcGhvbmllJnByZXZpZXcudGV4dF90eXBlPWN1c3RvbSZjYXRlZ29yeT1IYW5kd3JpdGluZ1xyXG4vL21heWJlIHJlbW92ZSBib2xkLCBpZiBub3QgdXNlZCBhZnRlciBhbGxcclxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGVudCcpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuXHJcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxubGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG5cclxubGV0IHN0eWxlU2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbnN0eWxlU2hlZXQuaHJlZiA9ICdzdHlsZS5jc3MnO1xyXG5zdHlsZVNoZWV0LnJlbCA9ICdzdHlsZXNoZWV0JztcclxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVNoZWV0KTtcclxuXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuaGVhZGVyLmFwcGVuZENoaWxkKG5hdmJhcik7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkTGlua1RvTmF2YmFyIChuYW1lLCByZWZlcmVuY2Upe1xyXG4gICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGxpbmsuaHJlZiA9IHJlZmVyZW5jZTtcclxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGxpbmspO1xyXG59XHJcblxyXG5hZGRMaW5rVG9OYXZiYXIoJ0hvbWUnLCcjJylcclxuYWRkTGlua1RvTmF2YmFyKCdNZW51JywnIycpXHJcbmFkZExpbmtUb05hdmJhcignQ29udGFjdCcsJyMnKVxyXG5cclxubGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XHJcbm1haW4uc2V0QXR0cmlidXRlKCdpZCcsJ21haW4nKVxyXG5cclxubGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKGZvb3RlcilcclxuZm9vdGVyLnRleHRDb250ZW50ID0gJ01hZGUgYnkgSHJleGFuZHJvJ1xyXG5cclxuLy8gbGV0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuLy8gaGVhZGVyLnByZXBlbmQoc3VidGl0bGUpO1xyXG4vLyBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudFwiXHJcblxyXG4vLyBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4vLyBoZWFkZXIucHJlcGVuZCh0aXRsZSk7XHJcbi8vIHRpdGxlLnRleHRDb250ZW50ID0gXCJTeW1waG9uaWVcIlxyXG5cclxuXHJcbmxvYWRIb21lcGFnZSgpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9