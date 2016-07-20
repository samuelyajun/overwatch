/**
 * Created by jblair on 7/18/2016.
 */
import React, { PropTypes } from 'react';
import ReportListRow from './ReportListRow.js';



//const reportss = ReportApi.getAllReports();
const reportss = [
    {
        surveyName:"Questions for entire team - EoS minus 4days",
        linkCSV:"https://s3-us-west-2.amazonaws.com/echelondemo/overwatch+text3.csv",
        linkXLSX:"https://s3-us-west-2.amazonaws.com/echelondemo/overwatchText.xl",
        creationDate:"2016-07-11T10:32:22.272",
        projectName:"PMSi"
    },

    {
        surveyName:"Questions for entire team - sprint planning day",
        linkCSV:"https://s3-us-west-2.amazonaws.com/echelondemo/overwatch+text3.csv",
        linkXLSX:"https://s3-us-west-2.amazonaws.com/echelondemo/overwatchText.xlsx",
        creationDate:"2016-07-04T10:32:22.272",
        projectName:"VacationRentals"
    },

    {
        surveyName:"Questions for EM/TL - sprint planning day",
        linkCSV:"https://s3-us-west-2.amazonaws.com/echelondemo/overwatch+text3.csv",
        linkXLSX:"https://s3-us-west-2.amazonaws.com/echelondemo/overwatchText.xlsx",
        creationDate:"2016-06-27T10:32:22.272",
        projectName:"Overwatch"
    }
];

const ReportList = ({reports}) => {
    console.log(reportss);
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
                reportss.map(report =>{
                    return (
                    <ReportListRow key = {report.creationDate} report = {report}/>
                );
            })
            }
            </tbody>
        </table>
    );
};

ReportList.propTypes = {
    reports: PropTypes.array.isRequired
};

export default ReportList;