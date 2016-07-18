/**
 * Created by jblair on 7/18/2016.
 */
import React, { PropTypes } from 'react';
import ReportListRow from './ReportListRow';

const ReportList = ({Report}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Report Generated Date</th>
                <th>Survey Name</th>
                <th>Project Name</th>
                <th>&nbsp;</th>
                <th></th>
               

            </tr>
            </thead>
            <tbody>
            {
                report.reportTemplate.report.map((question) =>
                    <ReportListRow key = {Report.id} surveyName = {surveyName}/>
                )
            }
            </tbody>
        </table>
    );
};

ReportList.propTypes = {
    report: PropTypes.object.isRequired
};

export default ReportList;