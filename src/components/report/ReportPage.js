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
    
    render() {
        const reports = this.props.reports;

        return (
            <div className="container-fluid" style={reportOuterDivStyle}>
                <div>
                <h1>Report Page</h1>
                <a href={reportsLink} className="btn btn-info " role="button">Generate New Report</a>
                </div>
                {
                    <ReportList reports={reports} />
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