/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/theme1/js/custom/modals/create-project/bundle/files.js":
/*!*********************************************************************************!*\
  !*** ./resources/assets/theme1/js/custom/modals/create-project/bundle/files.js ***!
  \*********************************************************************************/
/***/ ((module) => {

eval(" // Class definition\n\nvar KTModalCreateProjectFiles = function () {\n  // Variables\n  var nextButton;\n  var previousButton;\n  var form;\n  var stepper; // Private functions\n\n  var initForm = function initForm() {\n    // Project logo\n    // For more info about Dropzone plugin visit:  https://www.dropzonejs.com/#usage\n    var myDropzone = new Dropzone(\"#kt_modal_create_project_files_upload\", {\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      paramName: \"file\",\n      // The name that will be used to transfer the file\n      maxFiles: 10,\n      maxFilesize: 10,\n      // MB\n      addRemoveLinks: true,\n      accept: function accept(file, done) {\n        if (file.name == \"justinbieber.jpg\") {\n          done(\"Naha, you don't.\");\n        } else {\n          done();\n        }\n      }\n    });\n  };\n\n  var handleForm = function handleForm() {\n    nextButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Disable button to avoid multiple click \n\n      nextButton.disabled = true; // Show loading indication\n\n      nextButton.setAttribute('data-kt-indicator', 'on'); // Simulate form submission\n\n      setTimeout(function () {\n        // Hide loading indication\n        nextButton.removeAttribute('data-kt-indicator'); // Enable button\n\n        nextButton.disabled = false; // form submit\n\n        form.submit(); // Go to next step\n\n        stepper.goNext();\n      }, 1500);\n    });\n    previousButton.addEventListener('click', function () {\n      stepper.goPrevious();\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      form = KTModalCreateProject.getForm();\n      stepper = KTModalCreateProject.getStepperObj();\n      nextButton = document.querySelector('[data-kt-element=\"files-next\"]');\n      previousButton = document.querySelector('[data-kt-element=\"files-previous\"]');\n      initForm();\n      handleForm();\n    }\n  };\n}(); // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTModalCreateProjectFiles;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lMS9qcy9jdXN0b20vbW9kYWxzL2NyZWF0ZS1wcm9qZWN0L2J1bmRsZS9maWxlcy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSx5QkFBeUIsR0FBRyxZQUFZO0FBQzNDO0FBQ0EsTUFBSUMsVUFBSjtBQUNBLE1BQUlDLGNBQUo7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsT0FBSixDQUwyQyxDQU8zQzs7QUFDQSxNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFXO0FBQ3pCO0FBQ0E7QUFDQSxRQUFJQyxVQUFVLEdBQUcsSUFBSUMsUUFBSixDQUFhLHVDQUFiLEVBQXNEO0FBQ3RFQyxNQUFBQSxHQUFHLEVBQUUseUNBRGlFO0FBQ3RCO0FBQ3ZDQyxNQUFBQSxTQUFTLEVBQUUsTUFGa0Q7QUFFMUM7QUFDbkJDLE1BQUFBLFFBQVEsRUFBRSxFQUhtRDtBQUk3REMsTUFBQUEsV0FBVyxFQUFFLEVBSmdEO0FBSTVDO0FBQ2pCQyxNQUFBQSxjQUFjLEVBQUUsSUFMNkM7QUFNN0RDLE1BQUFBLE1BQU0sRUFBRSxnQkFBU0MsSUFBVCxFQUFlQyxJQUFmLEVBQXFCO0FBQ3pCLFlBQUlELElBQUksQ0FBQ0UsSUFBTCxJQUFhLGtCQUFqQixFQUFxQztBQUNqQ0QsVUFBQUEsSUFBSSxDQUFDLGtCQUFELENBQUo7QUFDSCxTQUZELE1BRU87QUFDSEEsVUFBQUEsSUFBSTtBQUNQO0FBQ0o7QUFaNEQsS0FBdEQsQ0FBakI7QUFjQSxHQWpCRDs7QUFtQkEsTUFBSUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUMzQmhCLElBQUFBLFVBQVUsQ0FBQ2lCLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQVVDLENBQVYsRUFBYTtBQUNqRDtBQUNBQSxNQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FGaUQsQ0FJakQ7O0FBQ0FuQixNQUFBQSxVQUFVLENBQUNvQixRQUFYLEdBQXNCLElBQXRCLENBTGlELENBT2pEOztBQUNBcEIsTUFBQUEsVUFBVSxDQUFDcUIsWUFBWCxDQUF3QixtQkFBeEIsRUFBNkMsSUFBN0MsRUFSaUQsQ0FVakQ7O0FBQ0FDLE1BQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ3JCO0FBQ0F0QixRQUFBQSxVQUFVLENBQUN1QixlQUFYLENBQTJCLG1CQUEzQixFQUZxQixDQUlyQjs7QUFDQXZCLFFBQUFBLFVBQVUsQ0FBQ29CLFFBQVgsR0FBc0IsS0FBdEIsQ0FMcUIsQ0FPckI7O0FBQ0FsQixRQUFBQSxJQUFJLENBQUNzQixNQUFMLEdBUnFCLENBVXJCOztBQUNBckIsUUFBQUEsT0FBTyxDQUFDc0IsTUFBUjtBQUNBLE9BWlMsRUFZUCxJQVpPLENBQVY7QUFhQSxLQXhCRDtBQTBCQXhCLElBQUFBLGNBQWMsQ0FBQ2dCLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFlBQVk7QUFDcERkLE1BQUFBLE9BQU8sQ0FBQ3VCLFVBQVI7QUFDQSxLQUZEO0FBR0EsR0E5QkQ7O0FBZ0NBLFNBQU87QUFDTjtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDakJ6QixNQUFBQSxJQUFJLEdBQUcwQixvQkFBb0IsQ0FBQ0MsT0FBckIsRUFBUDtBQUNBMUIsTUFBQUEsT0FBTyxHQUFHeUIsb0JBQW9CLENBQUNFLGFBQXJCLEVBQVY7QUFDQTlCLE1BQUFBLFVBQVUsR0FBRytCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQ0FBdkIsQ0FBYjtBQUNBL0IsTUFBQUEsY0FBYyxHQUFHOEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9DQUF2QixDQUFqQjtBQUVBNUIsTUFBQUEsUUFBUTtBQUNSWSxNQUFBQSxVQUFVO0FBQ1Y7QUFWSyxHQUFQO0FBWUEsQ0F2RStCLEVBQWhDLEMsQ0F5RUE7OztBQUNBLElBQUksU0FBaUMsT0FBT2lCLE1BQU0sQ0FBQ0MsT0FBZCxLQUEwQixXQUEvRCxFQUE0RTtBQUMzRUQsRUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkMseUJBQWpCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3RoZW1lMS9qcy9jdXN0b20vbW9kYWxzL2NyZWF0ZS1wcm9qZWN0L2J1bmRsZS9maWxlcy5qcz9iYzVmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RNb2RhbENyZWF0ZVByb2plY3RGaWxlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHQvLyBWYXJpYWJsZXNcclxuXHR2YXIgbmV4dEJ1dHRvbjtcclxuXHR2YXIgcHJldmlvdXNCdXR0b247XHJcblx0dmFyIGZvcm07XHJcblx0dmFyIHN0ZXBwZXI7XHJcblxyXG5cdC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcblx0dmFyIGluaXRGb3JtID0gZnVuY3Rpb24oKSB7XHJcblx0XHQvLyBQcm9qZWN0IGxvZ29cclxuXHRcdC8vIEZvciBtb3JlIGluZm8gYWJvdXQgRHJvcHpvbmUgcGx1Z2luIHZpc2l0OiAgaHR0cHM6Ly93d3cuZHJvcHpvbmVqcy5jb20vI3VzYWdlXHJcblx0XHR2YXIgbXlEcm9wem9uZSA9IG5ldyBEcm9wem9uZShcIiNrdF9tb2RhbF9jcmVhdGVfcHJvamVjdF9maWxlc191cGxvYWRcIiwgeyBcclxuXHRcdFx0dXJsOiBcImh0dHBzOi8va2VlbnRoZW1lcy5jb20vc2NyaXB0cy92b2lkLnBocFwiLCAvLyBTZXQgdGhlIHVybCBmb3IgeW91ciB1cGxvYWQgc2NyaXB0IGxvY2F0aW9uXHJcbiAgICAgICAgICAgIHBhcmFtTmFtZTogXCJmaWxlXCIsIC8vIFRoZSBuYW1lIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHRyYW5zZmVyIHRoZSBmaWxlXHJcbiAgICAgICAgICAgIG1heEZpbGVzOiAxMCxcclxuICAgICAgICAgICAgbWF4RmlsZXNpemU6IDEwLCAvLyBNQlxyXG4gICAgICAgICAgICBhZGRSZW1vdmVMaW5rczogdHJ1ZSxcclxuICAgICAgICAgICAgYWNjZXB0OiBmdW5jdGlvbihmaWxlLCBkb25lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS5uYW1lID09IFwianVzdGluYmllYmVyLmpwZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZShcIk5haGEsIHlvdSBkb24ndC5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cdFx0fSk7ICBcclxuXHR9XHJcblxyXG5cdHZhciBoYW5kbGVGb3JtID0gZnVuY3Rpb24oKSB7XHJcblx0XHRuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0Ly8gUHJldmVudCBkZWZhdWx0IGJ1dHRvbiBhY3Rpb25cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Ly8gRGlzYWJsZSBidXR0b24gdG8gYXZvaWQgbXVsdGlwbGUgY2xpY2sgXHJcblx0XHRcdG5leHRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0Ly8gU2hvdyBsb2FkaW5nIGluZGljYXRpb25cclxuXHRcdFx0bmV4dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJywgJ29uJyk7XHJcblxyXG5cdFx0XHQvLyBTaW11bGF0ZSBmb3JtIHN1Ym1pc3Npb25cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvLyBIaWRlIGxvYWRpbmcgaW5kaWNhdGlvblxyXG5cdFx0XHRcdG5leHRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xyXG5cclxuXHRcdFx0XHQvLyBFbmFibGUgYnV0dG9uXHJcblx0XHRcdFx0bmV4dEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIGZvcm0gc3VibWl0XHJcblx0XHRcdFx0Zm9ybS5zdWJtaXQoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBHbyB0byBuZXh0IHN0ZXBcclxuXHRcdFx0XHRzdGVwcGVyLmdvTmV4dCgpO1xyXG5cdFx0XHR9LCAxNTAwKTsgXHRcdFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cHJldmlvdXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHN0ZXBwZXIuZ29QcmV2aW91cygpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Ly8gUHVibGljIGZ1bmN0aW9uc1xyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRmb3JtID0gS1RNb2RhbENyZWF0ZVByb2plY3QuZ2V0Rm9ybSgpO1xyXG5cdFx0XHRzdGVwcGVyID0gS1RNb2RhbENyZWF0ZVByb2plY3QuZ2V0U3RlcHBlck9iaigpO1xyXG5cdFx0XHRuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cImZpbGVzLW5leHRcIl0nKTtcclxuXHRcdFx0cHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwiZmlsZXMtcHJldmlvdXNcIl0nKTtcclxuXHJcblx0XHRcdGluaXRGb3JtKCk7XHJcblx0XHRcdGhhbmRsZUZvcm0oKTtcclxuXHRcdH1cclxuXHR9O1xyXG59KCk7XHJcblxyXG4vLyBXZWJwYWNrIHN1cHBvcnRcclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRtb2R1bGUuZXhwb3J0cyA9IEtUTW9kYWxDcmVhdGVQcm9qZWN0RmlsZXM7XHJcbn1cclxuIl0sIm5hbWVzIjpbIktUTW9kYWxDcmVhdGVQcm9qZWN0RmlsZXMiLCJuZXh0QnV0dG9uIiwicHJldmlvdXNCdXR0b24iLCJmb3JtIiwic3RlcHBlciIsImluaXRGb3JtIiwibXlEcm9wem9uZSIsIkRyb3B6b25lIiwidXJsIiwicGFyYW1OYW1lIiwibWF4RmlsZXMiLCJtYXhGaWxlc2l6ZSIsImFkZFJlbW92ZUxpbmtzIiwiYWNjZXB0IiwiZmlsZSIsImRvbmUiLCJuYW1lIiwiaGFuZGxlRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXNhYmxlZCIsInNldEF0dHJpYnV0ZSIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzdWJtaXQiLCJnb05leHQiLCJnb1ByZXZpb3VzIiwiaW5pdCIsIktUTW9kYWxDcmVhdGVQcm9qZWN0IiwiZ2V0Rm9ybSIsImdldFN0ZXBwZXJPYmoiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/theme1/js/custom/modals/create-project/bundle/files.js\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/theme1/js/custom/modals/create-project/bundle/files.js");
/******/ 	
/******/ })()
;