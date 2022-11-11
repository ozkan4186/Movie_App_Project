import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
    const currentUser= {displayName: "özkan demir"}  

  return (
    <div className="justify-content-center  "  style={{ height: "5rem" }} >
        <nav className="navbar text-center"
          style={{ backgroundImage: "linear-gradient(to right, red , yellow)" }}>
  <div className="container-fluid">
    <Link to="/" className="navbar-brand"
      style={{
    textDecoration: "none",
    fontSize: "3rem",
    color: "yellow",
  }}>React Movie APP</Link>
    <form className="d-flex m-1 " role="search">

{currentUser ? (
    <>
    <h3 className='mt-2' > {currentUser?.displayName} </h3>
     <button onClick={()=>navigate("/login")}  className="btn btn-outline-danger m-2 " type="submit">Logaut</button>
    
    
    
    </>
):(
    <>
         <button onClick={()=>navigate("/login")}  className="btn btn-outline-danger m-2 " type="submit">Login</button>
 <button onClick={()=>navigate("/register")}  className="btn btn-outline-danger m-2 " type="submit">Register</button>
    
    
    
     </>
  
) }

    
     
 
 
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar