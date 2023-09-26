import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EmployeeService from '../Service/EmployeeService';
import { Pagination } from '@mui/lab';
import axios from 'axios';
const Home=()=> {
  const nav=useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [employees, setEmployees] = useState([])
  useEffect(() => {
      getAllEmployees();
  }, [currentPage,sortBy,sortOrder])

  const getAllEmployees = () => {
      axios.get(`http://localhost:8080/employees/${currentPage}/${itemsPerPage}/${sortBy}/${sortOrder}`).then((response) => {
      const{content,totalPages}=response.data;   
      setEmployees(response.data)
      setTotalPages(totalPages);
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const deleteEmployee = (employeeId) => {
    if(window.confirm("Sure to Delete?")){
     EmployeeService.deleteEmployee(employeeId).then((response) =>{
      getAllEmployees();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const deleteAllEmployee = () => {
    if(window.confirm("Sure to Delete All Employees?")){
     EmployeeService.deleteAllEmployee().then((response) =>{
      getAllEmployees();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const LogoutHandler=()=>{
    if(window.confirm("Sure to Logout?")){
      nav("/")
    }
  }
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <body id="body">
    <div className="body">
    <div id="container">
            <h1>SS Groups</h1>
    <Link to="/add"><button id="addbtn">Add Employees</button></Link>
    <button id="delbtn" onClick={deleteAllEmployee} >Delete All Employees</button>
  
    <table id="table">
              <thead>
                <tr>
                  <th onClick={() => handleSort('id')}>Id {sortBy === 'id' && (sortOrder === 'asc' ? '▲' : '▼') }</th>
                  <th  onClick={() => handleSort('name')}>Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼') }</th>
                  <th  onClick={() => handleSort('age')}>Age {sortBy === 'age' && (sortOrder === 'asc' ? '▲' : '▼') }</th>
                  <th>Phone</th>
                  <th>Position</th>
                  <th  onClick={() => handleSort('salary')}>Salary {sortBy === 'salary' && (sortOrder === 'asc' ? '▲' : '▼') }</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {
                employees.content&&employees.content.map(
                    (employee) => (
      <tr key={employee.id}>
             <th id="id"> {employee.id}</th>
             <th id="name"> {employee.name}</th>
             <th id="age"> {employee.age}</th>
             <th id="phone"> {employee.phone}</th>
             <th id="pos"> {employee.position}</th>
             <th id="salary"> {employee.salary}</th>
             <th id="action"><Link  to={`/update/${employee.id}`}><button id="actions">Update</button></Link> 
             <button id="action-del"  onClick = {() => deleteEmployee(employee.id)}
            > Delete!</button></th>
            
      </tr>
    ))}
              </tbody>
            </table>
            <Pagination className='page'
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
    <button id="logout" onClick={LogoutHandler}>Logout</button>
        
    </div>
    </div>
    </body>
  )
}

export default Home;