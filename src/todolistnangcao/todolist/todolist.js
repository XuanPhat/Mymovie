import React from 'react';
import Todo from './todo';
const todolist = ({ Submitdata, setSubmitdata, Status }) => {
	return (
		<>
			<div className="todo_list">
				{Status.map(index => (
					<Todo key={index.id} todo={index} setSubmitdata={setSubmitdata} todos={Submitdata} />
				))}
			</div>
		</>
	);
};

export default todolist;
