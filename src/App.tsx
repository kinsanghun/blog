import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Main from 'pages/Main';
import NotFound from 'pages/NotFound';
import PostList from 'pages/PostList';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'styles/App.scss';

function App() {
	const [nav, setNav] = useState<boolean>(false);
	
	const navHandler = (visible:boolean) => {
		setNav(visible);
	}
	
	return (
		<div className="App black bg-white">
			<BrowserRouter>
				<Navigation visible={nav} handler={navHandler}/>
				<main>
				<Header visible={nav} handler={navHandler}/>
					<Routes>
						<Route path="/" element={<Main />}></Route>
						<Route path="/product/*" element={<PostList />}></Route>
						<Route path="*" element={<NotFound />}></Route>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;