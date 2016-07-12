import React, { PropTypes } from 'react';
import Header from '../common/Header';

const reportOuterDivStyle = {
    marginTop: '75px'
};
//const reportsLink='http://172.17.70.87:8080/getReport/csv';
const reportsLink='http://localhost:8040/getSurveys';

class ReportPage extends React.Component {
    construner (props,context){
        this.pror
    }
    render() {
        return (
            <div style={reportOuterDivStyle}>
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
                    <div>{ somearray.map((object)=> {
                            return (<div class="row">
                                <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
                                <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
                            </div>)
                        }
                    )
                    }

                    </div>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ReportPage;