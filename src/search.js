import React from 'react'
import {useParams} from 'react-router-dom'
import useGlobalContext from './useGoogleSearch'
import Search_item from './search_item'
function Search () {
	const {search} = useParams()
	console.log('the searched term is ',search)
	

	const uffo = useGlobalContext(search)

	

	return(
		<>
			<Search_item input_Field={search}/>

			{uffo!==undefined?	
			<div><p className="yoyo">About {
				uffo.queries.request[0].totalResults
				} results ({uffo.searchInformation.searchTime} seconds)</p></div>
	:null}
			

	{uffo!==undefined?

			

				uffo.items.map((val,index)=>{
					return <div className="search_result">
				<div className="search_result_item">
					<h2><a href={val.link}>{val.title}</a></h2>
					<p>
						{val.snippet}
					</p>	
				</div>
			</div>
				})

			

	:<h2>no network connection</h2>}	
			
		</>
		)	
}




// https://developers.google.com/custom-search/v1/using_rest
// https://cse.google.com/cse/create/new
export default Search































