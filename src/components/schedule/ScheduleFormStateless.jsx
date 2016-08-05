import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Button from '../common/Button.jsx';

const ScheduleFormStateless = ({startDate, everything }) => {
	console.log("everything",everything);

	if (!everything.respondents) {
    	return <div>Searching...</div>;
    }

	const allowedAttributes = everything.respondents[0].allowedAttributes;
	const values = allowedAttributes.map((object) => {
		return object.attributeValue;
	})
	console.log("allowedAttributes, values:",values);

    return (
        <div>
            <h3>Schedule to update:</h3> 
            <p>start date: {startDate}</p>
            <p>id: {everything.id }</p>
            <p>frequency: {everything.frequency }</p>
            <p>templateName: {everything.templateName }</p>
        </div>
    );
};

ScheduleFormStateless.propTypes = {
};

export default ScheduleFormStateless;

/*
  const booklist = books.map((book) => {
    return (
    <div key={book.id}>
      <li>
        {book.title}
      <div>
        genre: {book.genre}
      </div>
      <div>
      <Author author={book.author} />
      </div>
      <div>
        year: {book.publication}
      </div>
      </li>
    </div>
    );
  });
*/