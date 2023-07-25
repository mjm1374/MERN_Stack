import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

//pages

import Home from './pages/Home';

import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<NavBar />
				<div className='pages'>
					<Routes>
						<Route path='/' element={<Home />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
