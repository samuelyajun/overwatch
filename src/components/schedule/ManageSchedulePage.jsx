import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scheduleActions from '../../actions/scheduleActions';
import ScheduleList from './ScheduleList.jsx';

const scheduleOuterDiv = {
    marginTop: '75px'
};

class ManageSchedulePage extends React.Component {
    constructor(props, context){
        super(props, context);
    }

    render() {
        const schedules = this.props.schedules;

        let alignCenterStyle = {
            textAlign: 'center'

        };
        return (
            <div style={scheduleOuterDiv}>
                <h1 style={alignCenterStyle}>List of Schedules</h1><br></br><br></br>
                <ScheduleList schedules={schedules}/>
            </div>
        );
    }
}

ManageSchedulePage.propTypes = {
    schedules: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        schedules: state.schedules
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(scheduleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedulePage);
