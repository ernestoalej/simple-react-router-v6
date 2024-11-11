import {useParams, Link} from 'react-router-dom' 
import { useFetch } from "../hooks/useFetch"


const BlogDetails = () => { 

    const params = useParams()

    const {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if(loading) return <p>Loading</p>
    if(error) return <p>error: {error}</p>


    return (
        <>
           <h1>BlogDetails</h1>

           { data &&  
            <div>                     
                <h1>{data.id} - {data.title}</h1>            
                <p>{data.body }</p>        
                <Link className='btn btn-primary' to="/">Volver</Link>
            </div>
           }            
        </>
    )
 }

 export default BlogDetails