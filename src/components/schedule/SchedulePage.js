import React from 'react';
import {Link, IndexLink} from 'react-router';

const scheduleOuterDivStyle = {
    marginTop: '75px',
    marginBottom:'50px'
};

class SchedulePage extends React.Component {
    render() {
        const {schedule} = this.props;
        return (
            <div>
                {(schedule)?
                <div className="container" style={scheduleOuterDivStyle}>
                    <h1>Schedule Page</h1>

                    <button className="dropdown btn btn-success">
                        <Link to="/schedule/create" role="button"
                                   aria-haspopup="true" aria-expanded="false">Create Schedule</Link>
                    </button>   
                </div>:
                <div className="container" style={scheduleOuterDivStyle}>
                    <h1>Schedule Page - there are no schedules!</h1>
                    <button className="dropdown btn">
                        <Link to="/schedule/create" role="button"
                                   >Create Schedule</Link>
                    </button>   
                </div>
                }
            </div>
        );
    }
}

export default SchedulePage;
