import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
	const renderedList = posts.map(({ _id, author, content }) => {
		return <Post key={_id} author={author} content={content} />;
	});

	return <div>{renderedList}</div>;
};

export default PostList;
