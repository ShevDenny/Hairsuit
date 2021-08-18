import {NavLink} from 'react-router-dom'

function NavBar({user, setUser, history}) {
    function handleLogOut(){
        // async function logout(){
        //   const res = await fetch('/logout', {method: 'DELETE'})
        //   if(res.ok){
        //     setCurrentUser({})
        //   }
        // }
        // logout()
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null)
        alert("See you soon!")
        history.push('/')
      }


    return (
        <div className="nav-bar">
            <h2 className="name">Welcome {user.name}</h2>           
            <NavLink className="nav-links" to="/home">
                Home
            </NavLink>
            <NavLink className="nav-links" to="/my-appointments">
                My Appointments
            </NavLink>
            <NavLink className="logout-link" to="/" onClick={handleLogOut}>
                Logout
            </NavLink>           
        </div>
    )
}

export default NavBar;