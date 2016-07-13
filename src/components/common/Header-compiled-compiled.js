'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('C:\\Users\\klafrance\\workspace\\overwatch-frontend\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('C:\\Users\\klafrance\\workspace\\overwatch-frontend\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('C:\\Users\\klafrance\\workspace\\overwatch-frontend\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _components = {
    Header: {
        displayName: 'Header'
    }
};

var _CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'C:/Users/klafrance/workspace/overwatch-frontend/src/components/common/Header.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'C:/Users/klafrance/workspace/overwatch-frontend/src/components/common/Header.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformHmrLibIndexJs2(_CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Header = _wrapComponent('Header')(function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement('nav', { className: 'navbar navbar-inverse navbar-fixed-top' }, _react3.default.createElement('div', { className: 'container' }, _react3.default.createElement('div', { className: 'navbar-header' }, _react3.default.createElement('button', { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar', 'aria-expanded': 'false', 'aria-controls': 'navbar' }, _react3.default.createElement('span', { className: 'sr-only' }, 'Toggle navigation'), _react3.default.createElement('span', { className: 'icon-bar' }), _react3.default.createElement('span', { className: 'icon-bar' }), _react3.default.createElement('span', { className: 'icon-bar' }))), _react3.default.createElement('div', { id: 'navbar', className: 'navbar-collapse collapse' }, _react3.default.createElement('ul', { className: 'nav navbar-nav navbar-right' }, _react3.default.createElement('li', null, _react3.default.createElement(_reactRouter.IndexLink, { to: '/', activeclassNameName: 'active' }, 'Home')), _react3.default.createElement('li', null, _react3.default.createElement(_reactRouter.Link, { to: '/schedules', activeclassNameName: 'active' }, 'Schedule')), _react3.default.createElement('li', null, _react3.default.createElement(_reactRouter.Link, { to: '/survey', activeclassNameName: 'active' }, 'Survey')), _react3.default.createElement('li', null, _react3.default.createElement(_reactRouter.Link, { to: '/report', activeclassNameName: 'active' }, 'Report')), _react3.default.createElement('li', null, _react3.default.createElement(_reactRouter.Link, { to: '/templates', activeclassNameName: 'active' }, 'Templates'))))));
        }
    }]);

    return Header;
}(_react3.default.Component));

Header.propTypes = {};

exports.default = Header;

//# sourceMappingURL=Header-compiled.js.map

//# sourceMappingURL=Header-compiled-compiled.js.map