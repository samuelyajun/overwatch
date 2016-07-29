import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reportActions from '../../actions/reportActions';
import Button from '../common/Button';
import ReportList from './ReportList.js';
const reportOuterDivStyle = {
    marginTop: '75px'
};
const reportsLink='http://localhost:8040/report/1';
class ReportPage extends React.Component {
    constructor(props, context){
        super(props, context);
    }
/*this will be for rolls/ users

    var type_admin = '[@authfield:admin]';
    var type_manager = '[@authfield:manager';
    var type_user = '[@authfield:user]';

    if (type_admin == "Yes")
{
    document.cookie="type=admin";
}
else if (type_manager == Yes)
{
    document.cookie="type=manager";
}
else if (type_user == Yes)
{
    document.cookie="type=user";
}

<div class="adminContent">
Show this content if the user is Admin
</div>

<div class=managerContent>
    Show this content if the user id Manager
</div>

<div class=userContent>
    Otherwise show this content
</div>*/

    render() {
        const reports = this.props.reports;

        return (
            <div className="container-fluid" style={reportOuterDivStyle}>
                <div>
                <h1>Report Page</h1>
                <a href={reportsLink}  className="btn btn-info " role="button">Generate New Report</a>
                </div>
                {
                    <ReportList reports = {reports} />
                }
            </div>
        );
    }
}
ReportPage.propTypes ={
    reports: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired

};
function mapStateToProps(state, ownProps){
    return {
        reports: state.reports
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(reportActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage);