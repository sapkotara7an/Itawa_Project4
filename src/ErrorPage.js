
import { Link } from "react-router-dom"


export const ErrorPage = () => {
    return (<>
        
        <h1 className="text-center my-5 text-danger">*404 Page not found</h1>
       <Link to={'/'}> <p className="text-center"><i className='fa fa-home me-2 text-danger'/>Return to Homepage</p></Link>

    </>)
}