import React, { PropTypes } from 'react';
import Header from '../common/Header';
import Button from '../common/Button';

const reportOuterDivStyle = {
    marginTop: '75px'
};
//const reportsLink='http://172.17.70.87:8080/getReport/csv';
const reportsLink='http://localhost:8040/getSurveys';

class ReportPage extends React.Component {


    render() {

        return (
            <div className="container-fluid" style={reportOuterDivStyle}>
                <div>
                <h1>Report Page</h1>
                <a href={reportsLink} className="btn btn-info" role="button">Generate New Report</a>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Report Generated Date</th>
                            <th>Survey Name</th>
                            <th>Group</th>
                            <th>Report</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>sd</td>
                            <td>sd</td>
                            <td>
                                <Button className={"btn btn-info"} type={"button"} label={"Generate Excel"}/>
                            </td>
                            <td>
                                <Button className={"btn btn-info"} type={"button"} label={"Generate CSV"}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ReportPage;