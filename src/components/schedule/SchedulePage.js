import React, {PropTypes} from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../../actions/scheduleActions';
import ScheduleList from './ScheduleList.jsx';

const scheduleOuterDivStyle = {
    marginTop: '75px',
    marginBottom:'50px'
};

class SchedulePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onClickUpdate = this.onClickUpdate.bind(this);
    }

    onClickUpdate(event) {
        event.persist();
       // browserHistory.push('/schedules/update/' + event.currentTarget.value.id);
    }

    render() {
        const {schedules} = this.props;
        return (
            <div>
                {(schedules.length>0)?
                <div className="container" style={scheduleOuterDivStyle}>
                    <button className="dropdown btn">
                        <Link to="/schedules/manage" role="button">Add Schedule</Link>
                    </button>
                    <ScheduleList schedules={schedules} onUpdate={this.onClickUpdate} />
                </div>:
                <div className="container" style={scheduleOuterDivStyle}>
                    <h1>Schedule Page - there are no surveys scheduled!</h1>
                    <button className="dropdown btn">
                        <Link to="/schedule/create" role="button">Create Schedule</Link>
                    </button>
                </div>
                }
            </div>
        );
    }
}


SchedulePage.propTypes = {
    schedules: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        schedules: state.schedules
    };
}

export default connect(mapStateToProps, null)(SchedulePage);
