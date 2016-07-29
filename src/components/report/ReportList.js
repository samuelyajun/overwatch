/**
 * Created by jblair on 7/18/2016.
 */
import React, { PropTypes } from 'react';
import ReportListRow from './ReportListRow';




const reportss = [
    {
        surveyName:"Questions for entire team - EoS minus 4days",
        linkCSV:"https://s3-us-west-2.amazonaws.com/echelondemo/overwatch+text3.csv",
        creationDate:"2016-07-11 10:32",
        projectName:"PMSi",
        clientName:"Choice"
    },

    {
        surveyName:"Questions for entire team - sprint planning day",
        linkCSV:"https://s3-us-west-2.amazonaws.com/echelondemo/overwatch+text3.csv",
        creationDate:"2016-07-04 10:32",
        projectName:"VacationRentals",
        clientName:"Choice"
    },

    {
        surveyName:"Questions for EM/TL - sprint planning day",
        linkCSV:"https://s3-us-west-2.amazonaws.com/echelondemo/overwatch+text3.csv",
        creationDate:"2016-06-27 10:32",
        projectName:"Overwatch",
        clientName:"Choice"
    }
];

const ReportList = ({reports}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Report Generated Date</th>
                <th>Client Name</th>
                <th>Project Name</th>
                <th>Survey Name</th>
                <th>&nbsp;</th>
                <th></th>
               

            </tr>
            </thead>
            <tbody>
            {
                reports.map(report =>{
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