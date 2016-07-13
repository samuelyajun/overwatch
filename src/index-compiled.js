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

var _ManageSchedulePage = require('./components/schedule/ManageSchedulePage.jsx');

var _ManageSchedulePage2 = _interopRequireDefault(_ManageSchedulePage);

var _ReportPage = require('./components/report/ReportPage');

var _ReportPage2 = _interopRequireDefault(_ReportPage);

var _LeadSprintPlanningSurvey = require('./components/survey/LeadSprintPlanningSurvey.jsx');

var _LeadSprintPlanningSurvey2 = _interopRequireDefault(_LeadSprintPlanningSurvey);

var _TeamSprintPlanningSurvey = require('./components/survey/TeamSprintPlanningSurvey.jsx');

var _TeamSprintPlanningSurvey2 = _interopRequireDefault(_TeamSprintPlanningSurvey);

var _SurveyConfirmationPage = require('./components/survey/SurveyConfirmationPage.jsx');

var _SurveyConfirmationPage2 = _interopRequireDefault(_SurveyConfirmationPage);

var _TeamLeadQuantitativeSurvey = require('./components/survey/TeamLeadQuantitativeSurvey.jsx');

var _TeamLeadQuantitativeSurvey2 = _interopRequireDefault(_TeamLeadQuantitativeSurvey);

var _EMQuantitativeSurvey = require('./components/survey/EMQuantitativeSurvey.jsx');

var _EMQuantitativeSurvey2 = _interopRequireDefault(_EMQuantitativeSurvey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable import/default */


var store = (0, _configureStore2.default)();
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
            _react2.default.createElement(_reactRouter.Route, { path: 'schedules', component: _SchedulePage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'schedules/manage', component: _ManageSchedulePage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'report', component: _ReportPage2.default })
        ),
        _react2.default.createElement(_reactRouter.Route, { path: '/survey/qualitative/spd-team', component: _TeamSprintPlanningSurvey2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/survey/qualitative/lead', component: _LeadSprintPlanningSurvey2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/survey/quantitative/lead', component: _TeamLeadQuantitativeSurvey2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/survey/quantitative/em', component: _EMQuantitativeSurvey2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/confirmation', component: _SurveyConfirmationPage2.default })
    )
), document.getElementById('app'));

// <Router history={browserHistory} routes={routes} />

//# sourceMappingURL=index-compiled.js.map