import React from 'react';

const Post = ({ author, content }) => {
	return (
		<div>
			<div>{author}</div>
			<div>{content}</div>
			<hr />
		</div>
	);
};

export default Post;
