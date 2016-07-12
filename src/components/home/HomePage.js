import React from 'react';
import Header from '../common/Header';

const jumbotronClassWrapper = 'jumbotron';
const jumbotronStyle = {
    marginTop: '75px'
};

class HomePage extends React.Component {
    render() {
        return (
            <div className={jumbotronClassWrapper} style = {jumbotronStyle}>
                <h1>Project Overwatch</h1>
                <p>Ultra responsive web apps</p>
            </div>
        );
    }
}

export default HomePage;