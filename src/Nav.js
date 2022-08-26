
import {Link} from 'react-router-dom';

function Nav()
{
    return(
        <nav className="navbar bg-dark p-3">
            <h3 className="navbar-brand text-white"><img className='logo' src='images/logo.png'></img> </h3>
            <ul className="nav nav-pills navbar-right">
                <Link to ="/" className="nav-link">
                    <li className="nav-item text-white">Home</li>
                </Link>
                <Link to="/About"  className="nav-link" >
                    <li className="nav-item text-white">About</li>
                </Link>
                <Link to="/Shop"  className="nav-link" >
                    <li className="nav-item text-white">SCP</li>
                </Link>
            </ul>
        </nav>

    );
}

export default Nav;



// import './App.css';
// import {Link} from 'react-router-dom';

// function Nav(){
//     return(
//         <nav className="navbar bg-dark p-3">
//             <h3 className="navbar-brand text-white">Company logo goes here</h3>
//             <ul className="nav nav-pills navbar-right">
//                 <Link to ="/" className="nav-link">
//                     <li className="nav-item text-white">Home</li>
//                 </Link>
//                 <Link to="/About"  className="nav-link" >
//                     <li className="nav-item text-white">About</li>
//                 </Link>
//                 <Link to="/Shop"  className="nav-link" >
//                     <li className="nav-item text-white">Shop</li>
//                 </Link>
//             </ul>
//         </nav>

//     );

// }

// export default Nav;