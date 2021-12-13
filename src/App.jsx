import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainScreen from './Components/MainScreen';
import Home from './Pages/Home';
import SingleStore from './Pages/SingleStore';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainScreen />} />
				<Route path="/home" element={<Home />} />
				<Route path={'/home/:id'} element={<SingleStore />} />
			</Routes>
		</div>
	);
}

export default App;
