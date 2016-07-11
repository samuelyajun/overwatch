"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SurveyResponseHeader = function SurveyResponseHeader(_ref) {
    var survey = _ref.survey;

    return _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
            "div",
            { className: "col-xs-6" },
            _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    { className: "surveyTitle" },
                    "survey.name(EOS-4 End of Sprint Survey)"
                )
            ),
            _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "p",
                    { className: "surveyDescription" },
                    "(survey.description)"
                )
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "col-xs-6" },
            _react2.default.createElement(
                "div",
                { className: "surveyCreationDate" },
                "7/4/16(survey.creationDate)"
            ),
            _react2.default.createElement(
                "div",
                { className: "surveyDueDate" },
                "7/4/16(survey.dueDate)"
            )
        )
    );
}; // Survey Response Header contains details from Scheduling for the issued survey that is being filled out


SurveyResposeHeader.propTypes = {
    survey: _react.PropTypes.object.isRequired
};

exports.default = SurveyResposeHeader;

//# sourceMappingURL=SurveyResponseHeader-compiled.js.map