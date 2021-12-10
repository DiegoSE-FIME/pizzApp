import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainScreen from './Components/MainScreen';
import Home from './Pages/Home';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainScreen />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
