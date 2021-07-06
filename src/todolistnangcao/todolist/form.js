import React, { useEffect } from 'react';
import { FaPlusSquare } from 'react-icons/fa';
const Form = ({
	setInputhandler,
	Inputhandler,
	Submitdata,
	setSubmitdata,
	setDropdowntodo,
	Dropdowntodo,
	setStatus,
	Status,
	setSearch,
	Search
}) => {
	const HandlerInput = e => {
		setInputhandler(e.target.value);
	};
	const Confirmedata = e => {
		e.preventDefault();
		if (Inputhandler !== '') {
			setSubmitdata([...Submitdata, { data: Inputhandler, completed: false, id: Math.random() * 1000 }]);
		}

		setInputhandler('');
	};

	function Dropdownmenu(e) {
		setDropdowntodo(e.target.value);
	}

	// console.log(Dropdowntodo);
	function Setfilterd() {
		switch (Dropdowntodo) {
			case 'completed':
				setStatus(Submitdata.filter(e => e.completed === true));
				break;
			case 'uncompleted':
				setStatus(Submitdata.filter(e => e.completed === false));
				break;

			default:
				setStatus(Submitdata);
				break;
		}
	}
	useEffect(() => {
		Setfilterd();
	}, [Submitdata, Dropdowntodo]);
	// SetStatus();

	const HandlerSearch = e => {
		setSearch(e.target.value);
	};
	const Searchtodo = () => {
		setStatus(Submitdata.filter(e => e.data.includes(Search)));
	};
	useEffect(() => {
		Searchtodo();
	}, [Search]);
	return (
		<>
			<div className="Formparent">
				<div className="input_parent">
					<input
						value={Inputhandler}
						onChange={e => HandlerInput(e)}
						type="text"
						className="input_todo"
					></input>

					{/* <div className="todo_plus"></div> */}

					<FaPlusSquare className="plus" onClick={Confirmedata} />
				</div>
				<div className="input_parent" style={{ marginLeft: '12px' }}>
					<input
						// value={Inputhandler}
						onChange={e => HandlerSearch(e)}
						type="text"
						className="input_todo"
					></input>

					{/* <div className="todo_plus"></div> */}
				</div>
				<select name="cars" id="Dropdown_todo" onChange={Dropdownmenu}>
					<option value="All">All</option>
					<option value="completed">completed</option>
					<option value="uncompleted">uncompleted</option>
				</select>
			</div>
		</>
	);
};

export default Form;
