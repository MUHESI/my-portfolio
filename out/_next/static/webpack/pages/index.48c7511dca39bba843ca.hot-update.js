self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _Picture_ShowPictureStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Picture/ShowPictureStyle */ "./src/components/Picture/ShowPictureStyle.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/muhesi/WORK/PERSO-PROJETCS/portfolio/src/components/Acomplishments/Acomplishments.js",
    _this = undefined;





var data = [{
  number: 20,
  text: "Open Source Projects"
}, {
  number: 1000,
  text: "Students"
}, {
  number: 1900,
  text: "Github Followers"
}, {
  number: 5000,
  text: "Github Stars"
}];
var blogs = [{
  img: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1708530733045/ca84d2e3-d8c2-4c1f-abe8-469bdf0b4836.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
  title: 'Mastering File Uploads using NestJS and multer',
  link: 'https://muhesi.hashnode.dev/mastering-file-uploads-using-nestjs-and-multer',
  description: "In this article, we will see how to implement the functionality of Uploading a file using the nests framework. This functionality can be useful for scenarios like data import, file processing, report generation, etc. We'll use the @nestjs/platform-express module to handle HTTP requests, the multer module to handle file upload, and the fs module to read the file content"
}, {
  img: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1707298967244/81527423-ac67-47bc-afc7-5b38f22da429.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
  title: 'An ultime guide to create a WhatsApp bot in Nestjs framework',
  link: 'https://muhesi.hashnode.dev/an-ultime-guide-to-create-a-whatsapp-bot-in-nestjs-framework'
}];

var Acomplishments__ = function Acomplishments__() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
      children: "Personal Achievements"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__.Boxes, {
      children: data.map(function (card, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__.BoxNum, {
            children: "".concat(card.number, "+")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_4__.BoxText, {
            children: card.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 11
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }, _this);
}; // export default Acomplishments;


_c = Acomplishments__;

var Acomplishments = function Acomplishments() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    id: "blog",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
      children: "My latest blogs "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }, _this), blogs.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Item, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: item.img,
            alt: "....",
            style: {
              borderRadius: '5px',
              width: '100%',
              maxWidth: '400px',
              objectFit: 'cover'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              marginBottom: '20px'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "",
              style: {
                fontSize: '1.5em',
                fontWeight: 'bold'
              },
              children: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              textAlign: 'center'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Picture_ShowPictureStyle__WEBPACK_IMPORTED_MODULE_3__.ButtonLink2, {
              href: item.link,
              className: " text-center mt-5 py-2 px-3 text-nowrap",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Learn More"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 3
  }, _this);
};

_c2 = Acomplishments;
/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

var _c, _c2;

$RefreshReg$(_c, "Acomplishments__");
$RefreshReg$(_c2, "Acomplishments");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiZGF0YSIsIm51bWJlciIsInRleHQiLCJibG9ncyIsImltZyIsInRpdGxlIiwibGluayIsImRlc2NyaXB0aW9uIiwiQWNvbXBsaXNobWVudHNfXyIsIm1hcCIsImNhcmQiLCJpbmRleCIsIkFjb21wbGlzaG1lbnRzIiwiaXRlbSIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwibWF4V2lkdGgiLCJvYmplY3RGaXQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBTUE7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQUVDLFFBQU0sRUFBRSxFQUFWO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQURXLEVBRVg7QUFBRUQsUUFBTSxFQUFFLElBQVY7QUFBZ0JDLE1BQUksRUFBRTtBQUF0QixDQUZXLEVBR1g7QUFBRUQsUUFBTSxFQUFFLElBQVY7QUFBZ0JDLE1BQUksRUFBRTtBQUF0QixDQUhXLEVBSVg7QUFBRUQsUUFBTSxFQUFFLElBQVY7QUFBZ0JDLE1BQUksRUFBRTtBQUF0QixDQUpXLENBQWI7QUFPQSxJQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxLQUFHLEVBQUUsZ0xBRFA7QUFFRUMsT0FBSyxFQUFFLGdEQUZUO0FBR0VDLE1BQUksRUFBRSw0RUFIUjtBQUlFQyxhQUFXLEVBQUU7QUFKZixDQURZLEVBT1o7QUFDRUgsS0FBRyxFQUFFLGdMQURQO0FBRUVDLE9BQUssRUFBRSw4REFGVDtBQUdFQyxNQUFJLEVBQUU7QUFIUixDQVBZLENBQWQ7O0FBY0EsSUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLHNCQUN2Qiw4REFBQyw2REFBRDtBQUFBLDRCQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyx3REFBRDtBQUFBLGdCQUNHUixJQUFJLENBQUNTLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDUiw4REFBQyxzREFBRDtBQUFBLGtDQUNFLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQVlELElBQUksQ0FBQ1QsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBQSxzQkFBVVMsSUFBSSxDQUFDUjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSxXQUFVUyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBVUUsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUR1QjtBQUFBLENBQXpCLEMsQ0FlQTs7O0tBZk1ILGdCOztBQWlCTixJQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsc0JBQ3JCLDhEQUFDLDZEQUFEO0FBQVMsTUFBRSxFQUFDLE1BQVo7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdULEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUNJLElBQUQ7QUFBQSwwQkFDVCw4REFBQywwREFBRDtBQUFBLGdDQUNFO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUVBLElBQUksQ0FBQ1QsR0FBZjtBQUFvQixlQUFHLEVBQUMsTUFBeEI7QUFBK0IsaUJBQUssRUFBRTtBQUFFVSwwQkFBWSxFQUFFLEtBQWhCO0FBQXVCQyxtQkFBSyxFQUFFLE1BQTlCO0FBQXNDQyxzQkFBUSxFQUFFLE9BQWhEO0FBQXlEQyx1QkFBUyxFQUFFO0FBQXBFO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBSyxlQUFLLEVBQUU7QUFBRUMsbUJBQU8sRUFBRSxNQUFYO0FBQW1CQyx5QkFBYSxFQUFFLFFBQWxDO0FBQTRDQyxzQkFBVSxFQUFFLFFBQXhEO0FBQWtFQywwQkFBYyxFQUFFO0FBQWxGLFdBQVo7QUFBQSxrQ0FDRTtBQUFLLGlCQUFLLEVBQUU7QUFBRUMsMEJBQVksRUFBRTtBQUFoQixhQUFaO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFDLEVBQWI7QUFBZ0IsbUJBQUssRUFBRTtBQUFFQyx3QkFBUSxFQUFFLE9BQVo7QUFBcUJDLDBCQUFVLEVBQUU7QUFBakMsZUFBdkI7QUFBQSx3QkFDR1gsSUFBSSxDQUFDUjtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBTUU7QUFBSyxpQkFBSyxFQUFFO0FBQUVvQix1QkFBUyxFQUFFO0FBQWIsYUFBWjtBQUFBLG1DQUNFLDhEQUFDLGtFQUFEO0FBQ0Usa0JBQUksRUFBRVosSUFBSSxDQUFDUCxJQURiO0FBRUUsdUJBQVMsRUFBQyx5Q0FGWjtBQUdFLG9CQUFNLEVBQUMsUUFIVDtBQUlFLGlCQUFHLEVBQUMscUJBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUztBQUFBLEtBQVYsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEcUI7QUFBQSxDQUF2Qjs7TUFBTU0sYztBQWdGTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40OGM3NTExZGNhMzliYmE4NDNjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBJdGVtLFxyXG4gIFNlY3Rpb24sXHJcbiAgU2VjdGlvbkRpdmlkZXIsXHJcbiAgU2VjdGlvblRpdGxlLFxyXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBCdXR0b25MaW5rMiB9IGZyb20gXCIuLi9QaWN0dXJlL1Nob3dQaWN0dXJlU3R5bGVcIjtcclxuaW1wb3J0IHsgQm94LCBCb3hlcywgQm94TnVtLCBCb3hUZXh0IH0gZnJvbSBcIi4vQWNvbXBsaXNobWVudHNTdHlsZXNcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgeyBudW1iZXI6IDIwLCB0ZXh0OiBcIk9wZW4gU291cmNlIFByb2plY3RzXCIgfSxcclxuICB7IG51bWJlcjogMTAwMCwgdGV4dDogXCJTdHVkZW50c1wiIH0sXHJcbiAgeyBudW1iZXI6IDE5MDAsIHRleHQ6IFwiR2l0aHViIEZvbGxvd2Vyc1wiIH0sXHJcbiAgeyBudW1iZXI6IDUwMDAsIHRleHQ6IFwiR2l0aHViIFN0YXJzXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IGJsb2dzID0gW1xyXG4gIHtcclxuICAgIGltZzogJ2h0dHBzOi8vY2RuLmhhc2hub2RlLmNvbS9yZXMvaGFzaG5vZGUvaW1hZ2UvdXBsb2FkL3YxNzA4NTMwNzMzMDQ1L2NhODRkMmUzLWQ4YzItNGMxZi1hYmU4LTQ2OWJkZjBiNDgzNi5wbmc/dz0xNjAwJmg9ODQwJmZpdD1jcm9wJmNyb3A9ZW50cm9weSZhdXRvPWNvbXByZXNzLGZvcm1hdCZmb3JtYXQ9d2VicCcsXHJcbiAgICB0aXRsZTogJ01hc3RlcmluZyBGaWxlIFVwbG9hZHMgdXNpbmcgTmVzdEpTIGFuZCBtdWx0ZXInLFxyXG4gICAgbGluazogJ2h0dHBzOi8vbXVoZXNpLmhhc2hub2RlLmRldi9tYXN0ZXJpbmctZmlsZS11cGxvYWRzLXVzaW5nLW5lc3Rqcy1hbmQtbXVsdGVyJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkluIHRoaXMgYXJ0aWNsZSwgd2Ugd2lsbCBzZWUgaG93IHRvIGltcGxlbWVudCB0aGUgZnVuY3Rpb25hbGl0eSBvZiBVcGxvYWRpbmcgYSBmaWxlIHVzaW5nIHRoZSBuZXN0cyBmcmFtZXdvcmsuIFRoaXMgZnVuY3Rpb25hbGl0eSBjYW4gYmUgdXNlZnVsIGZvciBzY2VuYXJpb3MgbGlrZSBkYXRhIGltcG9ydCwgZmlsZSBwcm9jZXNzaW5nLCByZXBvcnQgZ2VuZXJhdGlvbiwgZXRjLiBXZSdsbCB1c2UgdGhlIEBuZXN0anMvcGxhdGZvcm0tZXhwcmVzcyBtb2R1bGUgdG8gaGFuZGxlIEhUVFAgcmVxdWVzdHMsIHRoZSBtdWx0ZXIgbW9kdWxlIHRvIGhhbmRsZSBmaWxlIHVwbG9hZCwgYW5kIHRoZSBmcyBtb2R1bGUgdG8gcmVhZCB0aGUgZmlsZSBjb250ZW50XCJcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJ2h0dHBzOi8vY2RuLmhhc2hub2RlLmNvbS9yZXMvaGFzaG5vZGUvaW1hZ2UvdXBsb2FkL3YxNzA3Mjk4OTY3MjQ0LzgxNTI3NDIzLWFjNjctNDdiYy1hZmM3LTViMzhmMjJkYTQyOS5wbmc/dz0xNjAwJmg9ODQwJmZpdD1jcm9wJmNyb3A9ZW50cm9weSZhdXRvPWNvbXByZXNzLGZvcm1hdCZmb3JtYXQ9d2VicCcsXHJcbiAgICB0aXRsZTogJ0FuIHVsdGltZSBndWlkZSB0byBjcmVhdGUgYSBXaGF0c0FwcCBib3QgaW4gTmVzdGpzIGZyYW1ld29yaycsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly9tdWhlc2kuaGFzaG5vZGUuZGV2L2FuLXVsdGltZS1ndWlkZS10by1jcmVhdGUtYS13aGF0c2FwcC1ib3QtaW4tbmVzdGpzLWZyYW1ld29yaydcclxuICB9LFxyXG5dXHJcblxyXG5jb25zdCBBY29tcGxpc2htZW50c19fID0gKCkgPT4gKFxyXG4gIDxTZWN0aW9uPlxyXG4gICAgPFNlY3Rpb25UaXRsZT5QZXJzb25hbCBBY2hpZXZlbWVudHM8L1NlY3Rpb25UaXRsZT5cclxuICAgIDxCb3hlcz5cclxuICAgICAge2RhdGEubWFwKChjYXJkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxCb3gga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8Qm94TnVtPntgJHtjYXJkLm51bWJlcn0rYH08L0JveE51bT5cclxuICAgICAgICAgIDxCb3hUZXh0PntjYXJkLnRleHR9PC9Cb3hUZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApKX1cclxuICAgIDwvQm94ZXM+XHJcbiAgICA8U2VjdGlvbkRpdmlkZXIgLz5cclxuICA8L1NlY3Rpb24+XHJcbik7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBBY29tcGxpc2htZW50cztcclxuXHJcbmNvbnN0IEFjb21wbGlzaG1lbnRzID0gKCkgPT4gKFxyXG4gIDxTZWN0aW9uIGlkPSdibG9nJz5cclxuICAgIDxTZWN0aW9uVGl0bGU+TXkgbGF0ZXN0IGJsb2dzIDwvU2VjdGlvblRpdGxlPlxyXG4gICAge2Jsb2dzLm1hcCgoaXRlbSkgPT5cclxuICAgICAgPEl0ZW0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ30gYWx0PScuLi4uJyBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc1cHgnLCB3aWR0aDogJzEwMCUnLCBtYXhXaWR0aDogJzQwMHB4Jywgb2JqZWN0Rml0OiAnY292ZXInIH19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxLjVlbScsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fSA+XHJcbiAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCB9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbkxpbmsyXHJcbiAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlciBtdC01IHB5LTIgcHgtMyB0ZXh0LW5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExlYXJuIE1vcmVcclxuICAgICAgICAgICAgPC9CdXR0b25MaW5rMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9JdGVtPlxyXG5cclxuICAgICl9XHJcblxyXG5cclxuXHJcbiAgICB7LyogPFNlY3Rpb25UaXRsZT5NeSBmYXZvcml0ZSBjaGFsbGVuZ2VzIDwvU2VjdGlvblRpdGxlPiAqL31cclxuICAgIHsvKiBcclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmxleFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxheWVyIGNhcmQtbGF5ZXItMVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGF5ZXIgY2FyZC1sYXllci0yXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sYXllciBjYXJkLWxheWVyLTNcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGlwXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFua1wiPkRPU0g8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJudW1iZXJcIj4wMDAwIDAwMDAgMDAwMCAwMDAwPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhwaXJ5XCI+RXhwaXJ5OiAwMS8yNzwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImN2dlwiPkNWVjogMDAwPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPk1yIE1VSEVTSSBNb3NlczwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgey8qIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGF5ZXIgY2FyZC1sYXllci0xXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sYXllciBjYXJkLWxheWVyLTJcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxheWVyIGNhcmQtbGF5ZXItM1wiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoaXBcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYW5rXCI+RE9TSDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm51bWJlclwiPjAwMDAgMDAwMCAwMDAwIDAwMDA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHBpcnlcIj5FeHBpcnk6IDAxLzI3PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3Z2XCI+Q1ZWOiAwMDA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+TXIgTVVIRVNJIE1vc2VzPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIHsvKiBcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sYXllciBjYXJkLWxheWVyLTFcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxheWVyIGNhcmQtbGF5ZXItMlwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGF5ZXIgY2FyZC1sYXllci0zXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hpcFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJhbmtcIj5ET1NIPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibnVtYmVyXCI+MDAwMCAwMDAwIDAwMDAgMDAwMDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGlyeVwiPkV4cGlyeTogMDEvMjI8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdnZcIj5DVlY6IDAwMDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5NciBMdWtlIEJhaWxleTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICB7LyogPC9kaXY+ICovfVxyXG4gIDwvU2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjb21wbGlzaG1lbnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9