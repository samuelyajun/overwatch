'use strict';

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _surveyActions = require('../../actions/surveyActions');

var surveyActions = _interopRequireWildcard(_surveyActions);

var _redux = require('redux');

var _reactRouter = require('react-router');

var _toastr = require('toastr');

var _toastr2 = _interopRequireDefault(_toastr);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    SurveyPage: {
        displayName: 'SurveyPage'
    }
};

var _CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'C:/Users/klafrance/workspace/overwatch-frontend/src/components/survey/SurveyConfirmationPage.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'C:/Users/klafrance/workspace/overwatch-frontend/src/components/survey/SurveyConfirmationPage.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformHmrLibIndexJs2(_CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var SurveyPage = _wrapComponent('SurveyPage')(function (_React$Component) {
    _inherits(SurveyPage, _React$Component);

    function SurveyPage(props, context) {
        _classCallCheck(this, SurveyPage);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SurveyPage).call(this, props, context));
    }

    _createClass(SurveyPage, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                'div',
                null,
                _react3.default.createElement(
                    'h1',
                    null,
                    'Thank you for your feedback'
                ),
                _react3.default.createElement(
                    'p',
                    null,
                    'Your survey responses have been submitted successfully.'
                )
            );
        }
    }]);

    return SurveyPage;
}(_react3.default.Component));

SurveyPage.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        //createSurvey: (survey) => dispatch(surveyActions.createSurvey(survey))
        actions: (0, _redux.bindActionCreators)(surveyActions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SurveyPage);

//# sourceMappingURL=SurveyConfirmationPage-compiled.js.map