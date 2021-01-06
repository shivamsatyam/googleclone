import React,{useState} from 'react'
import Google from './Google-logo-1-512x512.png'
import {ImCross} from 'react-icons/im'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMicrophone} from 'react-icons/fa'

import {useHistory} from 'react-router-dom'


function Search_item (params) {
	const [input,setInput] = useState(params.input_Field)
	const history = useHistory()
	function clearInput () {
		setInput('')
	}

	function Submit (e) {
		e.preventDefault()
		console.log("submitted",input)
			console.log(input)
		history.push(`/search/${input}`)



	}



	return(
		<>
			<div className="search_item">
				<div className="search_item_full">
					<div className="search_item_img">
						<img src={Google} alt="google"/>
					</div>

					<div className="search_item_search_div">
						
						<form className="search_item_search" onSubmit={Submit}>
							<div className="cross">
								<input type="text" minLength={2} value={input} onChange={(event)=>{
									setInput(event.target.value)
									}}/>
								<div style={{outline:'none',border:'none',background:'transparent'}} onClick={clearInput}>	
								<ImCross/>
								</div>	
							</div>
							
							<div className="search_item_image">
								<button type="submit" style={{outline:'none',border:'none',transform:'scale(1.5)'}}><AiOutlineSearch/></button>
								<FaMicrophone/>
							</div>
						
						</form>
					</div>

				</div>	

				
			</div>

			<div>
				
			</div>

			<hr/>
			<hr/>
		</>
		)
}


export default Search_item



































