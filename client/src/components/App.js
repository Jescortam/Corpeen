import React, { useState } from 'react';
import PostList from './PostList';
import quotable from '../api/quotable';

const App = () => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		setPosts((await quotable.get('/quotes')).data.results);
	};

	return (
		<div>
			{/* onClick function is temporary */}
			<h1 onClick={getPosts}>Home Page</h1>
			<PostList posts={posts} />
		</div>
	);
};

export default App;
