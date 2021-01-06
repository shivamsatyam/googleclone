import React from 'react'
import logo from './logo.svg'
import Img from './download (4).png'
function Menu () {
	return(
		<>
			<div className="navbar">
				<div className="navbar-first">
					<img src={Img} alt="logo"/>
					<p>About</p>
					<p>Store</p>
				</div>

				<div className="navbar-second">
					<p>Gmail</p>	
					<p>Image</p>
					<img src={logo} alt="shivam" />
				</div>
			</div>
		</>
		)
}


export default Menu
























































