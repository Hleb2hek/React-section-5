import { useState } from 'react';
import UserInput from './components/UserInput';

function App() {
	const [change, setChange] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});
	function handleChange(inputId, newValue) {
		setChange((prevArr) => {
			return {
				...prevArr,
				[inputId]: newValue,
			};
		});
	}

	console.log(change);

	return (
		<>
			<UserInput onChange={handleChange} value={change} />
		</>
	);
}

export default App;
