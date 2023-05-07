/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n/* harmony import */ var _scripts_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/platform */ \"./src/scripts/platform.js\");\n// this is your entry file - this is what Webpack will read\n\n\n\n// ^for testing purposes rn. get rid of those once you have things properly imported and set in Game/Gameplay\n// import Game from './scripts/game\";\n// import Gameplay from \"./scripts/gameplay\";\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.querySelector('canvas');\n  const ctx = canvas.getContext('2d');\n  canvas.width = 1000; // optimize this for 13-inch macbook pro when the\n  canvas.height = 620; // time comes\n\n  ctx.fillStyle = \"#81D5FF\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n  // for testing purposes only\n  const player = new _scripts_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  player.draw(ctx);\n  const platforms = [new _scripts_platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    x: 280,\n    y: 550\n  }), new _scripts_platform__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    x: 550,\n    y: 280\n  })];\n  platforms.forEach(platform => {\n    platform.draw(ctx);\n  });\n  // that ^ should eventually get included in the following:\n  // const game = new Game(); \n  // new Gameplay(game, ctx).start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBRXNDO0FBQ0k7QUFDMUM7QUFDQTtBQUNBOztBQUdBRSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDL0MsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFFbkNILE1BQU0sQ0FBQ0ksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFFO0VBQ3RCSixNQUFNLENBQUNLLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBRTs7RUFFdEJILEdBQUcsQ0FBQ0ksU0FBUyxHQUFHLFNBQVM7RUFDekJKLEdBQUcsQ0FBQ0ssUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVQLE1BQU0sQ0FBQ0ksS0FBSyxFQUFFSixNQUFNLENBQUNLLE1BQU0sQ0FBQzs7RUFFL0M7RUFDQSxNQUFNRyxNQUFNLEdBQUcsSUFBSVosdURBQU0sQ0FBRCxDQUFDO0VBQ3pCWSxNQUFNLENBQUNDLElBQUksQ0FBQ1AsR0FBRyxDQUFDO0VBQ2hCLE1BQU1RLFNBQVMsR0FBRyxDQUFDLElBQUliLHlEQUFRLENBQUM7SUFBQ2MsQ0FBQyxFQUFDLEdBQUc7SUFBRUMsQ0FBQyxFQUFDO0VBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSWYseURBQVEsQ0FBQztJQUFDYyxDQUFDLEVBQUMsR0FBRztJQUFFQyxDQUFDLEVBQUU7RUFBRyxDQUFDLENBQUMsQ0FBQztFQUUvRUYsU0FBUyxDQUFDRyxPQUFPLENBQUNDLFFBQVEsSUFBSTtJQUMxQkEsUUFBUSxDQUFDTCxJQUFJLENBQUNQLEdBQUcsQ0FBQztFQUN0QixDQUFDLENBQUM7RUFDRjtFQUNBO0VBQ0E7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UeXBlckp1bXAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGlzIHlvdXIgZW50cnkgZmlsZSAtIHRoaXMgaXMgd2hhdCBXZWJwYWNrIHdpbGwgcmVhZFxyXG5cclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9zY3JpcHRzL3BsYXllclwiO1xyXG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4vc2NyaXB0cy9wbGF0Zm9ybVwiO1xyXG4vLyBeZm9yIHRlc3RpbmcgcHVycG9zZXMgcm4uIGdldCByaWQgb2YgdGhvc2Ugb25jZSB5b3UgaGF2ZSB0aGluZ3MgcHJvcGVybHkgaW1wb3J0ZWQgYW5kIHNldCBpbiBHYW1lL0dhbWVwbGF5XHJcbi8vIGltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lXCI7XHJcbi8vIGltcG9ydCBHYW1lcGxheSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVwbGF5XCI7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpXHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IDEwMDA7ICAvLyBvcHRpbWl6ZSB0aGlzIGZvciAxMy1pbmNoIG1hY2Jvb2sgcHJvIHdoZW4gdGhlXHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjIwOyAgLy8gdGltZSBjb21lc1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiM4MUQ1RkZcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIC8vIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcclxuICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXJcclxuICAgIHBsYXllci5kcmF3KGN0eClcclxuICAgIGNvbnN0IHBsYXRmb3JtcyA9IFtuZXcgUGxhdGZvcm0oe3g6MjgwLCB5OjU1MH0pLCBuZXcgUGxhdGZvcm0oe3g6NTUwLCB5OiAyODB9KV1cclxuICAgIFxyXG4gICAgcGxhdGZvcm1zLmZvckVhY2gocGxhdGZvcm0gPT4ge1xyXG4gICAgICAgIHBsYXRmb3JtLmRyYXcoY3R4KTtcclxuICAgIH0pXHJcbiAgICAvLyB0aGF0IF4gc2hvdWxkIGV2ZW50dWFsbHkgZ2V0IGluY2x1ZGVkIGluIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAvLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTsgXHJcbiAgICAvLyBuZXcgR2FtZXBsYXkoZ2FtZSwgY3R4KS5zdGFydCgpO1xyXG59KVxyXG5cclxuIl0sIm5hbWVzIjpbIlBsYXllciIsIlBsYXRmb3JtIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicGxheWVyIiwiZHJhdyIsInBsYXRmb3JtcyIsIngiLCJ5IiwiZm9yRWFjaCIsInBsYXRmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/platform.js":
/*!*********************************!*\
  !*** ./src/scripts/platform.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Platform {\n  constructor(_ref) {\n    let {\n      x,\n      y\n    } = _ref;\n    this.position = {\n      x,\n      y\n    };\n    this.width = 250;\n    this.height = 20;\n  }\n  draw(ctx) {\n    ctx.fillStyle = \"#88E873\";\n    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Platform);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF0Zm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsUUFBUSxDQUFDO0VBQ1hDLFdBQVdBLENBQUFDLElBQUEsRUFBUztJQUFBLElBQVI7TUFBQ0MsQ0FBQztNQUFFQztJQUFDLENBQUMsR0FBQUYsSUFBQTtJQUNkLElBQUksQ0FBQ0csUUFBUSxHQUFHO01BQ1pGLENBQUM7TUFDREM7SUFDSixDQUFDO0lBQ0QsSUFBSSxDQUFDRSxLQUFLLEdBQUcsR0FBRztJQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBRyxFQUFFO0VBQ3BCO0VBRUFDLElBQUlBLENBQUNDLEdBQUcsRUFBRTtJQUNOQSxHQUFHLENBQUNDLFNBQVMsR0FBRyxTQUFTO0lBQ3pCRCxHQUFHLENBQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUNOLFFBQVEsQ0FBQ0YsQ0FBQyxFQUFFLElBQUksQ0FBQ0UsUUFBUSxDQUFDRCxDQUFDLEVBQUUsSUFBSSxDQUFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDQyxNQUFNLENBQUM7RUFDM0U7QUFDSjtBQUdBLCtEQUFlUCxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVHlwZXJKdW1wLy4vc3JjL3NjcmlwdHMvcGxhdGZvcm0uanM/ODZkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7eCwgeX0pIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICB5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2lkdGggPSAyNTBcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDIwXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgpIHtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjODhFODczXCJcclxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxhdGZvcm07Il0sIm5hbWVzIjpbIlBsYXRmb3JtIiwiY29uc3RydWN0b3IiLCJfcmVmIiwieCIsInkiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhdyIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/platform.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n  constructor() {\n    this.position = {\n      x: 360,\n      y: 500\n    };\n    this.width = 50;\n    this.height = 50;\n  }\n  draw(ctx) {\n    ctx.fillStyle = \"#00FF5B\";\n    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUNDLFFBQVEsR0FBRztNQUNaQyxDQUFDLEVBQUUsR0FBRztNQUNOQyxDQUFDLEVBQUU7SUFDUCxDQUFDO0lBQ0QsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7RUFDcEI7RUFFQUMsSUFBSUEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ05BLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLFNBQVM7SUFDekJELEdBQUcsQ0FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQ1IsUUFBUSxDQUFDQyxDQUFDLEVBQUUsSUFBSSxDQUFDRCxRQUFRLENBQUNFLENBQUMsRUFBRSxJQUFJLENBQUNDLEtBQUssRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztFQUMzRTtBQUNKO0FBSUEsK0RBQWVOLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UeXBlckp1bXAvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgeDogMzYwLFxyXG4gICAgICAgICAgICB5OiA1MDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MFxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwRkY1QlwiXHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7Il0sIm5hbWVzIjpbIlBsYXllciIsImNvbnN0cnVjdG9yIiwicG9zaXRpb24iLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhdyIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UeXBlckp1bXAvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;