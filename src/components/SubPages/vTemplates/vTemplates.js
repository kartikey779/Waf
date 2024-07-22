import React from 'react';
import { Table } from 'react-bootstrap';
import { RiAddCircleFill } from "react-icons/ri";


const VTemplates = () =>{
    const requests = [
        { name: 'template-1', type: 'text', dates: 'Sep 12', duration: '5 days', status: 'Approved' },
        { name: 'template-2', type: 'text and button', dates: 'Aug 2', duration: '8 days', status: 'Declined' },
        { name: 'template-3', type: 'Img and text', dates: 'Aug 2', duration: '8 days', status: 'Pending' },
        // Add other requests here...
      ];
    
      const getStatusBadge = (status) => {
        switch (status) {
          case 'Pending':
            return <span className="badge bg-warning">Pending</span>;
          case 'Approved':
            return <span className="badge bg-success">Approved</span>;
          case 'Declined':
            return <span className="badge bg-danger">Declined</span>;
          default:
            return <span className="badge bg-secondary">Unknown</span>;
        }
      };
    
      return (
        <div className="container mt-5">
          <button type="button" className="btn btn-dark"><RiAddCircleFill className='mx-2'/>Add Templates</button>
          <Table >
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Type</th>
                <th>Dates Requested</th>
                <th>Status</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody >
              {requests.map((request, index) => (
                <tr key={index} >
                  <td>{index+1}</td>
                  <td>{request.name}</td>
                  <td>{request.type}</td>
                  <td>{request.dates}</td>
                  <td>{getStatusBadge(request.status)}</td>
                  <td><span className="btn btn-dark"> view </span></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
    );
}

export default VTemplates;