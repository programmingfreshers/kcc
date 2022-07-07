import React from 'react'
import Checkbox from './Checkbox'
function TableRow(props) {
     const deleteRow = () =>{
          
     }
     return (

     <>
          {props.cropData.map((elem)=>{
                return <>
                     <tr id={elem['cropName']}>
                         <th scope="row" >
                              <div > 
                                   <Checkbox cropName={elem['cropName']}/>
                              </div> 
                         </th>
                         <td>{elem['cropName']}</td>
                         <td>{elem['cropCost']}</td>
                         <td>{elem['cropYield']}</td>
                         <td>
                              <button className='btn btn-error' value={elem['cropName']}
                              onClick={deleteRow}>
                                   Delete
                              </button>
                         </td>
                     </tr>  
                  </>                     

          })}
     </>

  )
}

export default TableRow