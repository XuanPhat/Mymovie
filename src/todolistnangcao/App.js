import React from 'react';
import './styles.css';
import Form from './todolist/form';
import Todolist from './todolist/todolist';
// export default class App extends Component {
// 	render() {
// 		return (
// 			<div className="todo_parent">
// 				<h3>Todo List</h3>
// 				<Form />
//                 <Todolist/>
// 			</div>
// 		);
// 	}
// }
const App = () => {
	const [Inputhandler, setInputhandler] = React.useState('');
	const [Submitdata, setSubmitdata] = React.useState([]);
	const [Dropdowntodo, setDropdowntodo] = React.useState('All');
	const [Status, setStatus] = React.useState([]);
	const [Search, setSearch] = React.useState([]);
	return (
		<div className="todo_parent">
			<h3>Todo List</h3>
			<Form
				setInputhandler={setInputhandler}
				Inputhandler={Inputhandler}
				setSubmitdata={setSubmitdata}
				Submitdata={Submitdata}
				setDropdowntodo={setDropdowntodo}
				Dropdowntodo={Dropdowntodo}
				setStatus={setStatus}
				Status={Status}
				setSearch={setSearch}
				Search={Search}
			/>
			<Todolist Submitdata={Submitdata} setSubmitdata={setSubmitdata} Status={Status} />
		</div>
	);
};

export default App;
