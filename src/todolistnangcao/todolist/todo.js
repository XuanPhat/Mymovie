import React from 'react';
import { GiConfirmed } from 'react-icons/gi';
import { ImBin2 } from 'react-icons/im';
const todo = ({ setSubmitdata, todo, tododata, todos, Status }) => {
	// console.log(Submitdata);
	console.log(todo);
	const Deletetodo = e => {
		const item = e.target;

		if (item.classList[0] === 'deleted') {
			const todo = item.parentElement;
			console.log(todo);
			todo.classList.add('all');
			todo.addEventListener('transitioned', function () {
				todo.remove();
			});
		}
		setSubmitdata(todos.filter(e => e.id !== todo.id));
	};
	const confirmed = () => {
		setSubmitdata(
			todos.map(item => {
				if (item.id === todo.id) {
					return { ...item, completed: !todo.completed };
				}
				return item;
			})
		);
	};

	return (
		<>
			<div id={`box_todo`}>
				<div className={`todo_add_delete ${todo.completed ? 'line' : ''} `}>
					<h4 className="h4completed">{todo.data}</h4>
				</div>
				<button className="confirmed" onClick={confirmed}>
					<GiConfirmed className="icon_confirm" />
				</button>
				<button className="deleted" onClick={Deletetodo}>
					<ImBin2 className="icon_bin" />
				</button>
			</div>
		</>
	);
};

export default todo;
