import React,{useState} from 'react'
import Google from './Google-logo-1-512x512.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMicrophone} from 'react-icons/fa'

import {useHistory} from 'react-router-dom'
function Input () {
	const history = useHistory()
	const [search,Setsearch] = useState('')
	function searcher (event) {
		Setsearch(event.target.value)	
	}

	function  submit(e) {
		e.preventDefault()
		history.push(`/search/${search}`)		
	}
	return(
		<>
			<form onSubmit={submit}>
			<div className="input_div">
				<img src={Google} alt="Google"/>
				<div className="search">

				
						<button type="submit"><AiOutlineSearch/></button>
						<input type="text" minLength={2} value={search} onChange={searcher}/>
						<FaMicrophone/>
				
				</div>

				<div className="button">
					<button type="submit">Google Search</button>
					<button>I'm Feeling Lucky</button>
				</div>
			</div>
		</form>
		</>
		)
}

export default Input



































































