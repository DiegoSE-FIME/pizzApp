import React from 'react';
import MainScreen from './Components/MainScreen';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainScreen />} />
			</Routes>
		</div>
	);
}

export default App;
