/**
 * Created by Jblair on 7/6/2016.
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Button from '../common/Button.jsx';

const ReportListRow = ({ report }) => {
    return (
        <tr>
            <td>{report.generationDate}</td>
            <td>{report.clientName}</td>
            <td>{report.projectName}</td>
            <td>{report.surveyName}</td>

            <td>&nbsp;</td>
            <td>
               
                <a href={report.reportBucketUrl}>
                    <Button className={"btn btn-info"} type={"button"} label={"CSV"}/>
                </a>

            </td>
        </tr>
    );
};

ReportListRow.propTypes = {
    report : PropTypes.object.isRequired
};

export default ReportListRow;