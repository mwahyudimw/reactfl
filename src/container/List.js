import React from 'react';
import List from '../component/list/List';
import './List.css'

class ListContainer extends React.Component{
	render(){
		return(
			<div className="data">	
				<p >{this.props.data.map((item, index) =>{
					return <p className="p"><List key={index} nomor={index + 1} username={item.username} email={item.email} /></p>	
				})}</p>
			</div>
		)
	}
}

export default ListContainer