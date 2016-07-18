import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../common/Header';
import Button from '../common/Button';
import ReportList from './ReportList';
const reportOuterDivStyle = {
    marginTop: '75px'
};
//const reportsLink='http://172.17.70.87:8080/getReport/csv';
const reportsLink='http://172.17.70.38:8080/report/get_available_reports';

class ReportPage extends React.Component {


    render() {

        return (
            <div className="container-fluid" style={reportOuterDivStyle}>
                <div>
                <h1>Report Page</h1>
                <a href={reportsLink} className="btn btn-info" role="button">Generate New Report</a>
                </div>
                {
                    <ReportList key = {Reports[0].id} report = {Reports[0]} />
                }
            </div>
        );
    }
}

export default ReportPage;