
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import './App.css';
// import Content from './Content.json';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Display from './Shop';

// const Special = Content.map(

//     (special) => {
//       return(
//         <div key={special.file} className='border rounded shadow p-3 mb-3'>
//           <h1>{special.scp}</h1>
//           <p>{special.description}</p>
//           <p><img src={special.image} alt='special' className='border rounded'></img> </p>
          
        
//         </div>
//       );
//     }
// );


function App() {
  return (
        <Router>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Shop" element={<Display />} />
          </Routes>
        </Router>
  );
}

function Home(){
  return(
    <div>
      <h1 className="main-heading">Welcome to the SCP</h1>
      <div className="main-content">
        <p>WARNING: THE FOUNDATION DATABASE IS UPDATING SCP-7000</p>
        <p>EFFORTS TO LOCATE RELEVANT FILES HAVE BEEN SUCCESSFUL</p>
        <p>SUBMISSIONS WILL BE UPLOADED, ANALYZED, AND RECORDED</p>
      </div>
    </div>
  );
}

export default App;




// import './App.css';
// import Nav from './Nav';
// import About from './About';
// import Shop from './Shop';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




// function App() {
//   return (
//     <Router>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/About" element={<About />} />
//         <Route path="/Shop" element={<Shop />} />    
//       </Routes>
//     </Router>
//   );
// }

// function Home(){
//   return(<h1 className="App">Home</h1>);
// }

// export default App;
