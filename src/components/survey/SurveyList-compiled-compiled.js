'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SurveyListRow = require('./SurveyListRow');

var _SurveyListRow2 = _interopRequireDefault(_SurveyListRow);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var SurveyList = function SurveyList(_ref) {
    var surveys = _ref.surveys;

    return _react2.default.createElement('table', { className: 'table' }, _react2.default.createElement('thead', null, _react2.default.createElement('tr', null, _react2.default.createElement('th', null, '$nbsp;'), _react2.default.createElement('th', null, 'Name'), _react2.default.createElement('th', null, 'Type'), _react2.default.createElement('th', null, 'Description'), _react2.default.createElement('th', null, 'Created on'), _react2.default.createElement('th', null, 'Version'))), _react2.default.createElement('tbody', null, surveys.map(function (survey) {
        return _react2.default.createElement(_SurveyListRow2.default, { key: survey.id, survey: survey });
    })));
};

SurveyList.propTypes = {
    surveys: _react.PropTypes.array.isRequired
};

exports.default = SurveyList;

//# sourceMappingURL=SurveyList-compiled.js.map

//# sourceMappingURL=SurveyList-compiled-compiled.js.map