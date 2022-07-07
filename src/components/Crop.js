import React, { useState } from 'react'
import TableRow from './TableRow';

function Crop(props) {
  
  
  const addCrop = ()=>{

     setVisibility('');

  }  
  const cropUpdated =()=>{
     setVisibility('visually-hidden');
     var ls= [];
     cropData.map((elem)=>{
          ls.push(elem);
     });
     ls.push({
          cropName:newCropName,
          cropCost:newCropCost,
          cropYield:newCropYield
     });
     setCropData(ls);
     
  }

  const saveNewCropCost = (event) =>{
     var newName = event.target.value;
     setNewCropCost(newName);
  }
  const saveNewCropYield = (event) =>{
     var newName = event.target.value;
     setNewCropYield(newName);
  }
  const saveNewCropName = (event) =>{
     var newName = event.target.value;
     setNewCropName(newName);
  }    
  const [visibility, setVisibility] = useState('visually-hidden')
  const [cropData, setCropData] = useState(props.cropData)
  const [newCropName, setNewCropName] = useState('')
  const [newCropCost, setNewCropCost] = useState('')
  const [newCropYield, setNewCropYield] = useState('')
   

  return (
     <>

    <div className='container' >
     <div  >
    <table className="table " >
     <thead>
     <tr>
          <th scope="col">
               Select Any
          </th>
          <th scope="col">Crop</th>
          <th scope="col">Cost of cultivation Per Acre</th>
          <th scope="col">Expected Yield Per Acre</th>
     </tr>
     </thead>
     <tbody >          
               <TableRow cropData = {cropData}  />
     </tbody>
     </table>
     </div>   
          <div>
               <div className="d-flex justify-content-between">
               <div >
                    
               </div>
               <button type="button" className="btn btn-success" 
               onClick={addCrop}>
                    Add Crop
               </button>

               </div> 
               {/* extendable table */}
                    <div className={visibility}>
                         <table className="table ">
                    <tbody>
                    <tr>
                         <th scope="col">
                              Fill in the data
                         </th>
                         <td >
                              <input onChange={saveNewCropName} />
                         </td>
                         <td >
                              <input id='cost' onChange={saveNewCropCost} />
                         </td>
                         <td >
                              <input id='yield' onChange={saveNewCropYield} />
                         </td>
                         <td >
                         
                         <button type="button" className="btn btn-primary" 
                                   onClick={cropUpdated}>
                                        Add 
                                   </button>
                         </td>
                    </tr>
                    </tbody>
                    </table>
               </div>

          </div>
     </div>   


    </>
  )
}

export default Crop