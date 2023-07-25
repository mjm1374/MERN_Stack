import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages

import Home from './pages/Home';

import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<div className='pages'>
					<Route path='/' element={<Home />}></Route>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
