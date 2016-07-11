'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _templateActions = require('./actions/templateActions');

require('../node_modules/bootstrap/dist/js/bootstrap.min');

require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

require('../node_modules/toastr/build/toastr.min.css');

var _App = require('./container/App');

var _App2 = _interopRequireDefault(_App);

var _HomePage = require('./components/home/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _SchedulePage = require('./components/schedule/SchedulePage');

var _SchedulePage2 = _interopRequireDefault(_SchedulePage);

var _ReportPage = require('./components/report/ReportPage');

var _ReportPage2 = _interopRequireDefault(_ReportPage);

var _TemplatesPage = require('./components/template/TemplatesPage');

var _TemplatesPage2 = _interopRequireDefault(_TemplatesPage);

var _ManageTemplatePage = require('./components/template/ManageTemplatePage');

var _ManageTemplatePage2 = _interopRequireDefault(_ManageTemplatePage);

var _SurveyResponsePage = require('./components/survey/SurveyResponsePage');

var _SurveyResponsePage2 = _interopRequireDefault(_SurveyResponsePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)(); /*eslint-disable import/default */

store.dispatch((0, _templateActions.loadTemplates)());

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.browserHistory },
        _react2.default.createElement(
            _reactRouter.Route,
            { path: '/', component: _App2.default },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomePage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'schedule', component: _SchedulePage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'report', component: _ReportPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'templates', component: _TemplatesPage2.default })
        ),
        _react2.default.createElement(_reactRouter.Route, { path: '/survey/:id', component: _SurveyResponsePage2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'template/:id', component: _ManageTemplatePage2.default })
    )
), document.getElementById('app'));

// <Router history={browserHistory} routes={routes} />

//# sourceMappingURL=index-compiled.js.map