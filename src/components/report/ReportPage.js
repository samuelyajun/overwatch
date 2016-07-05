import React, { PropTypes } from 'react';
import Header from '../common/Header';

const reportOuterDivStyle = {
    marginTop: '75px'
};
const reportsLink='http://172.17.70.87:8080/getReport/csv';

class ReportPage extends React.Component {
    render() {
        return (
            <div style={reportOuterDivStyle}>
                <h1>Report Page</h1>
                <a href={reportsLink} className="btn btn-info" role="button">Generate Report</a>
            </div>
        );
    }
}

export default ReportPage;