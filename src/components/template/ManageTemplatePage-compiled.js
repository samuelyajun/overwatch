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

var _redux = require('redux');

var _templateActions = require('../../actions/templateActions');

var templateActions = _interopRequireWildcard(_templateActions);

var _TemplateForm = require('./TemplateForm');

var _TemplateForm2 = _interopRequireDefault(_TemplateForm);

var _toastr = require('toastr');

var _toastr2 = _interopRequireDefault(_toastr);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    ManageTemplatePage: {
        displayName: 'ManageTemplatePage'
    }
};

var _CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'C:/Users/klafrance/workspace/overwatch-frontend/src/components/template/ManageTemplatePage.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'C:/Users/klafrance/workspace/overwatch-frontend/src/components/template/ManageTemplatePage.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformHmrLibIndexJs2(_CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var templateOuterDivStyle = {
    marginTop: '75px',
    marginLeft: '75px'
};

var ManageTemplatePage = _wrapComponent('ManageTemplatePage')(function (_React$Component) {
    _inherits(ManageTemplatePage, _React$Component);

    function ManageTemplatePage(props, context) {
        _classCallCheck(this, ManageTemplatePage);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ManageTemplatePage).call(this, props, context));

        _this.state = {
            template: Object.assign({}, props.template),
            errors: {},
            saving: false
        };

        _this.updateTemplateState = _this.updateTemplateState.bind(_this);
        _this.saveTemplate = _this.saveTemplate.bind(_this);
        return _this;
    }

    _createClass(ManageTemplatePage, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.template.id != nextProps.template.id) {
                this.setState({ template: Object.assign({}, nextProps.template) });
            }
        }
    }, {
        key: 'updateTemplateState',
        value: function updateTemplateState(event) {
            var field = event.target.name;
            var template = this.state.template;
            template[field] = event.target.value;
            return this.setState({ template: template });
        }
    }, {
        key: 'saveTemplate',
        value: function saveTemplate(event) {
            var _this2 = this;

            event.preventDefault();
            this.setState({ saving: true });
            this.props.actions.saveTemplate(this.state.template).then(function () {
                return _this2.redirect();
            }).catch(function (error) {
                _toastr2.default.error(error);
                _this2.setState({ saving: false });
            });
        }
    }, {
        key: 'redirect',
        value: function redirect() {
            this.setState({ saving: false });
            _toastr2.default.success('Template Saved!');
            this.context.router.push('/templates');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react3.default.createElement(_TemplateForm2.default, {
                onChange: this.updateTemplateState,
                onSave: this.saveTemplate,
                template: this.state.template,
                errors: this.state.errors,
                saving: this.state.saving
            });
        }
    }]);

    return ManageTemplatePage;
}(_react3.default.Component));

ManageTemplatePage.propTypes = {
    template: _react2.PropTypes.object.isRequired,
    actions: _react2.PropTypes.object.isRequired
};

ManageTemplatePage.contextTypes = {
    router: _react2.PropTypes.object
};

function getTemplateById(templates, id) {
    var template = templates.filter(function (template) {
        return template.id == id;
    });
    if (template.length) return template[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    var templateId = ownProps.params.id;
    var template = { id: '', watchHref: '', name: '', type: '', description: '', createDate: '', version: '' };

    if (templateId && state.templates.length > 0) {
        template = getTemplateById(state.templates, templateId);
    }

    return {
        template: template
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(templateActions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ManageTemplatePage);

//# sourceMappingURL=ManageTemplatePage-compiled.js.map