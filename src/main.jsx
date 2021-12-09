import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './Components/styles/variables';

import GlobalStyle from './Components/styles/GlobalStyles';

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
