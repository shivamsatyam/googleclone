import {useState,useEffect} from 'react'
import API_KEY from './key'

const CONTEXT_KEY = "d73a6c22c10208d5a"


function useGlobalContext (term) {
	const [data,setData] = useState()
	useEffect(()=>{
		const fetchData = async()=>{
			fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
				).then(res=>res.json()).then(result =>{
					setData(result)
				})

		}

		fetchData()
	},[term])
		
	return data
}

export default useGlobalContext
























