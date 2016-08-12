import React, {PropTypes} from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../../actions/scheduleActions';
import ScheduleList from './ScheduleList.jsx';
import Button from '../common/Button.jsx';

const scheduleOuterDivStyle = {
    marginTop: '75px',
    marginBottom:'50px'
};

class SchedulePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onClickUpdate = this.onClickUpdate.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    onClickUpdate(event) {
        event.persist();
       // browserHistory.push('/schedules/update/' + event.currentTarget.value.id);
    }

    onClickSubmit(){
        browserHistory.push('/schedules/manage');
    }

    render() {
        const {schedules} = this.props;

        return (
            <div>
                {(schedules.length>0)?
                <div className="container" style={scheduleOuterDivStyle}>
                    <Button label = {'Add Schedule'} type = {'button'} buttonClassName = {'btn'} onClick={this.onClickSubmit}/>
                    <ScheduleList schedules={schedules} onUpdate={this.onClickUpdate} />
                </div>:
                <div className="container" style={scheduleOuterDivStyle}>
                    <h1>Schedule Page - there are no surveys scheduled!</h1>
                    <Button label = {'Add Schedule'} type = {'button'} buttonClassName = {'btn'} onClick={this.onClickSubmit}/>
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
