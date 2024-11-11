import { Link } from "react-router-dom" 

const NotFound = () => { 
    return (
        <>
            <h1>404- Página no encontrada</h1>

            <Link to="/" className="btn btn-dark">Volver al inicio</Link>
        </>
    )
 }

 export default NotFound