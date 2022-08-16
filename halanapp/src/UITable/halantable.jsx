import React from 'react'
//import jspdf from 'jspdf'
//import pdf from './pdf'
import JsonData from './data.json'
function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>

					<td>{info.name}</td>

					<td>{info.age}</td>
					<td>{info.address}</td>
					<td>{info.city}</td>
                    <td>{info.date}</td>
                    <td>{info.email}</td>
                    <td>{info.AttendORnot}</td>

				</tr>
			)
		}
	)

	return(
		<div>
			<table class="table table-striped">
				<thead>
					<tr>
					<th>Sr.ID</th>
					<th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
					<th>City</th>
                    <th>Date</th>
                    <th>Email</th>
                    <th>Attend OR Not</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
                
			</table>
			
		</div>
	)
    
}


export default JsonDataDisplay;
