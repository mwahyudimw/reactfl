import React from 'react';
import './List.css';

const List = ({nomor, username, email}) => {
	return(
		<div className="card">
			<p>
				{nomor}. {username} - {email}
			</p>
		</div>
	)
}

export default List;