import SCP from './scp';
import Content from './Content.json';
import './App.css';


// function Shop()
// {
//     return(
//         <div>
//             <h1 className="Display-1">SCP Files</h1>
//             <SCP file="SCP-001" scp="Utility" description="$602,865" />
//             <SCP file="SCP-002" scp="2 Door" description="$575,000" />
//             <SCP file="SCP-003" scp="Sedan" description="$570,000" />
//             <SCP file="SCP-004" scp="Utility" description="525,000" />
//         </div>
//     )
// }

const Special = Content.map(

    (special) => {
      return(
        <div key={special.file} className='scp'>
          <h1 className='scp-h1'>File: {special.file}</h1>
          <h3 className='scp-h3'>Special Containment Procedures:</h3>
          <p className='scp-p'>{special.scp}</p>
          <h3 className='scp-h3'>Description:</h3>
          <p className='scp-p'> {special.description}</p>
          <div><img src={special.image} alt={special.file} className='scp-img'></img></div>
        
          
        

        </div>
      );
    }
);

function Display(){
    return(
      <h1 className="Display-1">{Special}</h1>
    );
  }
  

export default Display;