webpackHotUpdate("static/development/pages/confession.js",{

/***/ "./components/Popover/index.js":
/*!*************************************!*\
  !*** ./components/Popover/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-vendor */ "./node_modules/css-vendor/lib/index.js");
/* harmony import */ var css_vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/next/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout */ "./components/Popover/layout.js");
/* harmony import */ var _on_resize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./on-resize */ "./components/Popover/on-resize.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./platform */ "./components/Popover/platform.js");
/* harmony import */ var _tip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tip */ "./components/Popover/tip.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./components/Popover/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var log = debug__WEBPACK_IMPORTED_MODULE_1___default()("react-popover");
var supportedCSSValue = _utils__WEBPACK_IMPORTED_MODULE_9__["default"].clientOnly(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedValue"]);

var jsprefix = function jsprefix(x) {
  return "".concat(css_vendor__WEBPACK_IMPORTED_MODULE_0__["prefix"].js).concat(x);
};

var cssprefix = function cssprefix(x) {
  return "".concat(css_vendor__WEBPACK_IMPORTED_MODULE_0__["prefix"].css).concat(x);
};

var cssvalue = function cssvalue(prop, value) {
  return supportedCSSValue(prop, value) || cssprefix(value);
};

var coreStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  display: cssvalue("display", "flex")
};
var faces = {
  above: "down",
  right: "left",
  below: "up",
  left: "right"
};
/* Flow mappings. Each map maps the flow domain to another domain. */

var flowToTipTranslations = {
  row: "translateY",
  column: "translateX"
};
var flowToPopoverTranslations = {
  row: "translateX",
  column: "translateY"
};

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  // static propTypes = {
  //   body: T.node.isRequired,
  //   children: T.element.isRequired,
  //   appendTarget: T.object,
  //   className: T.string,
  //   enterExitTransitionDurationMs: T.number,
  //   isOpen: T.bool,
  //   offset: T.number,
  //   place: T.oneOf(Layout.validTypeValues),
  //   preferPlace: T.oneOf(Layout.validTypeValues),
  //   refreshIntervalMs: T.oneOfType([T.number, T.bool]),
  //   style: T.object,
  //   tipSize: T.number,
  //   onOuterAction: T.func
  // };
  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkTargetReposition", function () {
      if (_this.measureTargetBounds()) _this.resolvePopoverLayout();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkForOuterAction", function (event) {
      var isOuterAction = !_this.containerEl.contains(event.target) && !_this.targetEl.contains(event.target);
      if (isOuterAction) _this.props.onOuterAction(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTargetResize", function () {
      log("Recalculating layout because _target_ resized!");

      _this.measureTargetBounds();

      _this.resolvePopoverLayout();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPopoverResize", function () {
      log("Recalculating layout because _popover_ resized!");

      _this.measurePopoverSize();

      _this.resolvePopoverLayout();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFrameScroll", function () {
      log("Recalculating layout because _frame_ scrolled!");

      _this.measureTargetBounds();

      _this.resolvePopoverLayout();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFrameResize", function () {
      log("Recalculating layout because _frame_ resized!");

      _this.measureFrameBounds();

      _this.resolvePopoverLayout();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getContainerNodeRef", function (containerEl) {
      Object.assign(_assertThisInitialized(_assertThisInitialized(_this)), {
        containerEl: containerEl
      });
    });

    _this.state = {
      standing: "above",
      exited: !_this.props.isOpen,
      // for animation-dependent rendering, should popover close/open?
      exiting: false,
      // for tracking in-progress animations
      toggle: _this.props.isOpen || false // for business logic tracking, should popover close/open?

    };
    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Our component needs a DOM Node reference to the child so that it can be
      measured so that we can correctly layout the popover. We do not have any
      control over the child so cannot leverage refs. We could wrap our own
      primitive component around the child but that could lead to breaking the
      uses layout (e.g. the child is a flex item). Leveraging findDOMNode seems
      to be the only functional solution, despite all the general warnings not to
      use it. We have a legitimate use-case. */
      // eslint-disable-next-line
      this.targetEl = react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
      if (this.props.isOpen) this.enter();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(propsNext) {
      //log(`Component received props!`, propsNext)
      var willOpen = !this.props.isOpen && propsNext.isOpen;
      var willClose = this.props.isOpen && !propsNext.isOpen;
      if (willOpen) this.open();else if (willClose) this.close();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(propsPrev, statePrev) {
      //log(`Component did update!`)
      var didOpen = !statePrev.toggle && this.state.toggle;
      var didClose = statePrev.toggle && !this.state.toggle;
      if (didOpen) this.enter();else if (didClose) this.exit();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      /* If the Popover is unmounted while animating,
      clear the animation so no setState occured */
      this.animateExitStop();
      /* If the Popover was never opened then then tracking
      initialization never took place and so calling untrack
      would be an error. Also see issue 55. */

      if (this.hasTracked) this.untrackPopover();
    }
  }, {
    key: "resolvePopoverLayout",
    value: function resolvePopoverLayout() {
      /* Find the optimal zone to position self. Measure the size of each zone and use the one with
      the greatest area. */
      var pickerSettings = {
        preferPlace: this.props.preferPlace,
        place: this.props.place
      };
      /* This is a kludge that solves a general problem very specifically for Popover.
      The problem is subtle. When Popover positioning changes such that it resolves at
      a different orientation, its Size will change because the Tip will toggle between
      extending Height or Width. The general problem of course is that calculating
      zone positioning based on current size is non-trivial if the Size can change once
      resolved to a different zone. Infinite recursion can be triggered as we noted here:
      https://github.com/littlebits/react-popover/issues/18. As an example of how this
      could happen in another way: Imagine the user changes the CSS styling of the popover
      based on whether it was `row` or `column` flow. TODO: Find a solution to generally
      solve this problem so that the user is free to change the Popover styles in any
      way at any time for any arbitrary trigger. There may be value in investigating the
      http://overconstrained.io community for its general layout system via the
      constraint-solver Cassowary. */

      if (this.zone) this.size[this.zone.flow === "row" ? "h" : "w"] += this.props.tipSize;
      var zone = _layout__WEBPACK_IMPORTED_MODULE_5__["default"].pickZone(pickerSettings, this.frameBounds, this.targetBounds, this.size);
      if (this.zone) this.size[this.zone.flow === "row" ? "h" : "w"] -= this.props.tipSize;
      var tb = this.targetBounds;
      this.zone = zone;
      log("zone", zone);
      this.setState({
        standing: zone.standing
      });
      var axis = _layout__WEBPACK_IMPORTED_MODULE_5__["default"].axes[zone.flow];
      log("axes", axis);
      var dockingEdgeBufferLength = Math.round(getComputedStyle(this.bodyEl).borderRadius.slice(0, -2)) || 0;
      var scrollSize = _layout__WEBPACK_IMPORTED_MODULE_5__["default"].El.calcScrollSize(this.frameEl);
      scrollSize.main = scrollSize[axis.main.size];
      scrollSize.cross = scrollSize[axis.cross.size];
      /* When positioning self on the cross-axis do not exceed frame bounds. The strategy to achieve
      this is thus: First position cross-axis self to the cross-axis-center of the the target. Then,
      offset self by the amount that self is past the boundaries of frame. */

      var pos = _layout__WEBPACK_IMPORTED_MODULE_5__["default"].calcRelPos(zone, tb, this.size);
      /* Offset allows users to control the distance betweent the tip and the target. */

      pos[axis.main.start] += this.props.offset * zone.order;
      /* Constrain containerEl Position within frameEl. Try not to penetrate a visually-pleasing buffer from
      frameEl. `frameBuffer` length is based on tipSize and its offset. */

      var frameBuffer = this.props.tipSize + this.props.offset;
      var hangingBufferLength = dockingEdgeBufferLength * 2 + this.props.tipSize * 2 + frameBuffer;
      var frameCrossStart = this.frameBounds[axis.cross.start];
      var frameCrossEnd = this.frameBounds[axis.cross.end];
      var frameCrossLength = this.frameBounds[axis.cross.size];
      var frameCrossInnerLength = frameCrossLength - frameBuffer * 2;
      var frameCrossInnerStart = frameCrossStart + frameBuffer;
      var frameCrossInnerEnd = frameCrossEnd - frameBuffer;
      var popoverCrossStart = pos[axis.cross.start];
      var popoverCrossEnd = pos[axis.cross.end];
      /* If the popover dose not fit into frameCrossLength then just position it to the `frameCrossStart`.
      popoverCrossLength` will now be forced to overflow into the `Frame` */

      if (pos.crossLength > frameCrossLength) {
        log("popoverCrossLength does not fit frame.");
        pos[axis.cross.start] = 0;
        /* If the `popoverCrossStart` is forced beyond some threshold of `targetCrossLength` then bound
        it (`popoverCrossStart`). */
      } else if (tb[axis.cross.end] < hangingBufferLength) {
        log("popoverCrossStart cannot hang any further without losing target.");
        pos[axis.cross.start] = tb[axis.cross.end] - hangingBufferLength;
        /* checking if the cross start of the target area is within the frame and it makes sense
        to try fitting popover into the frame. */
      } else if (tb[axis.cross.start] > frameCrossInnerEnd) {
        log("popoverCrossStart cannot hang any further without losing target.");
        pos[axis.cross.start] = tb[axis.cross.start] - this.size[axis.cross.size];
        /* If the `popoverCrossStart` does not fit within the inner frame (honouring buffers) then
        just center the popover in the remaining `frameCrossLength`. */
      } else if (pos.crossLength > frameCrossInnerLength) {
        log("popoverCrossLength does not fit within buffered frame.");
        pos[axis.cross.start] = (frameCrossLength - pos.crossLength) / 2;
      } else if (popoverCrossStart < frameCrossInnerStart) {
        log("popoverCrossStart cannot reverse without exceeding frame.");
        pos[axis.cross.start] = frameCrossInnerStart;
      } else if (popoverCrossEnd > frameCrossInnerEnd) {
        log("popoverCrossEnd cannot travel without exceeding frame.");
        pos[axis.cross.start] = pos[axis.cross.start] - (pos[axis.cross.end] - frameCrossInnerEnd);
      }
      /* So far the link position has been calculated relative to the target. To calculate the absolute
      position we need to factor the `Frame``s scroll position */


      pos[axis.cross.start] += scrollSize.cross;
      pos[axis.main.start] += scrollSize.main;
      /* Apply `flow` and `order` styles. This can impact subsequent measurements of height and width
      of the container. When tip changes orientation position due to changes from/to `row`/`column`
      width`/`height` will be impacted. Our layout monitoring will catch these cases and automatically
      recalculate layout. */

      if (this.containerEl) {
        this.containerEl.style.flexFlow = zone.flow;
        this.containerEl.style[jsprefix("FlexFlow")] = this.containerEl.style.flexFlow;
      }

      this.bodyEl.style.order = zone.order;
      this.bodyEl.style[jsprefix("Order")] = this.bodyEl.style.order;
      /* Apply Absolute Positioning. */

      log("pos", pos);

      if (this.containerEl) {
        this.containerEl.style.top = "".concat(pos.y, "px");
        this.containerEl.style.left = "".concat(pos.x, "px");
      }
      /* Calculate Tip Position */


      var tipCrossPos =
      /* Get the absolute tipCrossCenter. Tip is positioned relative to containerEl
      but it aims at targetCenter which is positioned relative to frameEl... we
      need to cancel the containerEl positioning so as to hit our intended position. */
      _layout__WEBPACK_IMPORTED_MODULE_5__["default"].centerOfBoundsFromBounds(zone.flow, "cross", tb, pos) +
      /* centerOfBounds does not account for scroll so we need to manually add that
      here. */
      scrollSize.cross -
      /* Center tip relative to self. We do not have to calcualte half-of-tip-size since tip-size
      specifies the length from base to tip which is half of total length already. */
      this.props.tipSize;
      if (tipCrossPos < dockingEdgeBufferLength) tipCrossPos = dockingEdgeBufferLength;else if (tipCrossPos > pos.crossLength - dockingEdgeBufferLength - this.props.tipSize * 2) {
        tipCrossPos = pos.crossLength - dockingEdgeBufferLength - this.props.tipSize * 2;
      }
      this.tipEl.style.transform = "".concat(flowToTipTranslations[zone.flow], "(").concat(tipCrossPos, "px)");
      this.tipEl.style[jsprefix("Transform")] = this.tipEl.style.transform;
    }
  }, {
    key: "measurePopoverSize",
    value: function measurePopoverSize() {
      this.size = _layout__WEBPACK_IMPORTED_MODULE_5__["default"].El.calcSize(this.containerEl);
    }
  }, {
    key: "measureTargetBounds",
    value: function measureTargetBounds() {
      var newTargetBounds = _layout__WEBPACK_IMPORTED_MODULE_5__["default"].El.calcBounds(this.targetEl);

      if (this.targetBounds && _layout__WEBPACK_IMPORTED_MODULE_5__["default"].equalCoords(this.targetBounds, newTargetBounds)) {
        return false;
      }

      this.targetBounds = newTargetBounds;
      return true;
    }
  }, {
    key: "open",
    value: function open() {
      if (this.state.exiting) this.animateExitStop();
      this.setState({
        toggle: true,
        exited: false
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        toggle: false
      });
    }
  }, {
    key: "enter",
    value: function enter() {
      if (_platform__WEBPACK_IMPORTED_MODULE_7__["default"].isServer) return;
      log("enter!");
      this.trackPopover();
      this.animateEnter();
    }
  }, {
    key: "exit",
    value: function exit() {
      log("exit!");
      this.animateExit();
      this.untrackPopover();
    }
  }, {
    key: "animateExitStop",
    value: function animateExitStop() {
      clearTimeout(this.exitingAnimationTimer1);
      clearTimeout(this.exitingAnimationTimer2);
      this.setState({
        exiting: false
      });
    }
  }, {
    key: "animateExit",
    value: function animateExit() {
      var _this2 = this;

      this.setState({
        exiting: true
      });
      this.exitingAnimationTimer2 = setTimeout(function () {
        setTimeout(function () {
          if (_this2.containerEl) {
            _this2.containerEl.style.transform = "".concat(flowToPopoverTranslations[_this2.zone.flow], "(").concat(_this2.zone.order * 50, "px)");
            _this2.containerEl.style.opacity = "0";
          }
        }, 0);
      }, 0);
      this.exitingAnimationTimer1 = setTimeout(function () {
        _this2.setState({
          exited: true,
          exiting: false
        });
      }, this.props.enterExitTransitionDurationMs);
    }
  }, {
    key: "animateEnter",
    value: function animateEnter() {
      /* Prepare `entering` style so that we can then animate it toward `entered`. */
      this.containerEl.style.transform = "".concat(flowToPopoverTranslations[this.zone.flow], "(").concat(this.zone.order * 50, "px)");
      this.containerEl.style[jsprefix("Transform")] = this.containerEl.style.transform;
      this.containerEl.style.opacity = "0";
      /* After initial layout apply transition animations. */

      /* Hack: http://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes */

      this.containerEl.offsetHeight; // eslint-disable-line no-unused-expressions

      /* If enterExitTransitionDurationMs is falsy, tip animation should be also disabled */

      if (this.props.enterExitTransitionDurationMs) {
        this.tipEl.style.transition = "transform 150ms ease-in";
        this.tipEl.style[jsprefix("Transition")] = "".concat(cssprefix("transform"), " 150ms ease-in");
      }

      this.containerEl.style.transitionProperty = "top, left, opacity, transform";
      this.containerEl.style.transitionDuration = "".concat(this.props.enterExitTransitionDurationMs, "ms");
      this.containerEl.style.transitionTimingFunction = "cubic-bezier(0.230, 1.000, 0.320, 1.000)";
      this.containerEl.style.opacity = "1";
      this.containerEl.style.transform = "translateY(0)";
      this.containerEl.style[jsprefix("Transform")] = this.containerEl.style.transform;
    }
  }, {
    key: "trackPopover",
    value: function trackPopover() {
      var minScrollRefreshIntervalMs = 200;
      var minResizeRefreshIntervalMs = 200;
      /* Get references to DOM elements. */

      this.bodyEl = this.containerEl.querySelector(".Popover-body");
      this.tipEl = this.containerEl.querySelector(".Popover-tip");
      /* Note: frame is hardcoded to window now but we think it will
      be a nice feature in the future to allow other frames to be used
      such as local elements that further constrain the popover`s world. */

      this.frameEl = _platform__WEBPACK_IMPORTED_MODULE_7__["default"].window;
      this.hasTracked = true;
      /* Set a general interval for checking if target position changed. There is no way
      to know this information without polling. */

      if (this.props.refreshIntervalMs) {
        this.checkLayoutInterval = setInterval(this.checkTargetReposition, this.props.refreshIntervalMs);
      }
      /* Watch for boundary changes in all deps, and when one of them changes, recalculate layout.
      This layout monitoring must be bound immediately because a layout recalculation can recursively
      cause a change in boundaries. So if we did a one-time force-layout before watching boundaries
      our final position calculations could be wrong. See comments in resolver function for details
      about which parts can trigger recursive recalculation. */


      this.onFrameScroll = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["throttle"])(this.onFrameScroll, minScrollRefreshIntervalMs);
      this.onFrameResize = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["throttle"])(this.onFrameResize, minResizeRefreshIntervalMs);
      this.onPopoverResize = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["throttle"])(this.onPopoverResize, minResizeRefreshIntervalMs);
      this.onTargetResize = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["throttle"])(this.onTargetResize, minResizeRefreshIntervalMs);
      this.frameEl.addEventListener("scroll", this.onFrameScroll);
      _on_resize__WEBPACK_IMPORTED_MODULE_6__["default"].on(this.frameEl, this.onFrameResize);
      _on_resize__WEBPACK_IMPORTED_MODULE_6__["default"].on(this.containerEl, this.onPopoverResize);
      _on_resize__WEBPACK_IMPORTED_MODULE_6__["default"].on(this.targetEl, this.onTargetResize);
      /* Track user actions on the page. Anything that occurs _outside_ the Popover boundaries
      should close the Popover. */

      _platform__WEBPACK_IMPORTED_MODULE_7__["default"].document.addEventListener("mousedown", this.checkForOuterAction);
      _platform__WEBPACK_IMPORTED_MODULE_7__["default"].document.addEventListener("touchstart", this.checkForOuterAction);
      /* Kickstart layout at first boot. */

      this.measurePopoverSize();
      this.measureFrameBounds();
      this.measureTargetBounds();
      this.resolvePopoverLayout();
    }
  }, {
    key: "untrackPopover",
    value: function untrackPopover() {
      clearInterval(this.checkLayoutInterval);
      this.frameEl.removeEventListener("scroll", this.onFrameScroll);
      _on_resize__WEBPACK_IMPORTED_MODULE_6__["default"].off(this.frameEl, this.onFrameResize);
      _on_resize__WEBPACK_IMPORTED_MODULE_6__["default"].off(this.containerEl, this.onPopoverResize);
      _on_resize__WEBPACK_IMPORTED_MODULE_6__["default"].off(this.targetEl, this.onTargetResize);
      _platform__WEBPACK_IMPORTED_MODULE_7__["default"].document.removeEventListener("mousedown", this.checkForOuterAction);
      _platform__WEBPACK_IMPORTED_MODULE_7__["default"].document.removeEventListener("touchstart", this.checkForOuterAction);
      this.hasTracked = false;
    }
  }, {
    key: "measureFrameBounds",
    value: function measureFrameBounds() {
      this.frameBounds = _layout__WEBPACK_IMPORTED_MODULE_5__["default"].El.calcBounds(this.frameEl);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? "" : _this$props$className,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          tipSize = _this$props.tipSize,
          _this$props$width = _this$props.width,
          width = _this$props$width === void 0 ? 320 : _this$props$width;
      var standing = this.state.standing;
      var popoverProps = {
        className: "Popover Popover-".concat(standing, " ").concat(className),
        style: _objectSpread({}, coreStyle, style)
      };
      var popover = this.state.exited ? null : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", _extends({
        ref: this.getContainerNodeRef
      }, popoverProps), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "Popover-body",
        children: this.props.body,
        style: {
          background: "#fff",
          borderRadius: 3,
          boxShadow: "0 1px 2px rgba(0,0,0,.25), 0 0 1px rgba(0,0,0,.35)",
          position: "relative",
          top: -8,
          width: width
        }
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tip__WEBPACK_IMPORTED_MODULE_8__["default"], {
        direction: faces[standing],
        size: tipSize
      }));
      return [this.props.children, _platform__WEBPACK_IMPORTED_MODULE_7__["default"].isClient && react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.createPortal(popover, this.props.appendTarget)];
    }
  }]);

  return Popover;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

_defineProperty(Popover, "defaultProps", {
  tipSize: 7,
  preferPlace: null,
  place: null,
  offset: 4,
  isOpen: false,
  onOuterAction: _utils__WEBPACK_IMPORTED_MODULE_9__["default"].noop,
  enterExitTransitionDurationMs: 500,
  children: null,
  refreshIntervalMs: 200,
  appendTarget: _platform__WEBPACK_IMPORTED_MODULE_7__["default"].isClient ? _platform__WEBPACK_IMPORTED_MODULE_7__["default"].document.body : null
});

/* harmony default export */ __webpack_exports__["default"] = (Popover);

/***/ })

})
//# sourceMappingURL=confession.js.9fed6011353ff51a2fbf.hot-update.js.map