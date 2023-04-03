import Header from 'components/Header';
import Main from 'pages/Main';
import NotFound from 'pages/NotFound';
import PostList from 'pages/PostList';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'styles/App.scss';

function App() {
	const [nav, setNav] = useState<boolean>(false);

	return (
		<div className="App black bg-white">
			<BrowserRouter>
				<Header visible={nav}/>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/product/*" element={<PostList />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
