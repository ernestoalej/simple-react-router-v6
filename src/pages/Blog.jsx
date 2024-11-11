
import {Link, useSearchParams} from 'react-router-dom'
import { useFetch } from "../hooks/useFetch"

const Blog = () => { 

    const [searchParams, setSearchParams] = useSearchParams()

    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts')

    if(loading) return <p>Loading</p>
    if(error) return <p>error: {error}</p>

    const handleChange = (e) => {
        const filter = e.target.value
        setSearchParams({filter})       
    }

    const filterByTitle = (item) => {
        const filter = searchParams.get("filter")
        return !filter ? true : item.title.toLowerCase().startsWith(filter.toLowerCase()) 
    }

    return (
        <>
        <h1>Blog</h1>

            <input type="text" onChange={handleChange}  className='form-control my-3' value={searchParams.get("filter") || ""}/>
            <ul className='list-group'>
                { 
                    data
                    .filter(filterByTitle).map( d => (
                        <li className='list-group-item' key={d.id}><Link to={`/blog/${d.id}`}>{d.id}. {d.title}</Link></li>
                    ))
                }
            </ul>
        </>        
    )
 }

 export default Blog