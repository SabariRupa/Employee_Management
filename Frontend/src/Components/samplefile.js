import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const samplefile=()=> {
  const nav=useNavigate();
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const itemsPerPage = 5;
  // const [sortBy, setSortBy] = useState('id');
  // const [sortOrder, setSortOrder] = useState('asc');
  // const [employees, setEmployees] = useState([])
  // useEffect(() => {
  //     getAllEmployees();
  // }, [currentPage,sortBy,sortOrder])

  // const getAllEmployees = () => {
  //     axios.get(`http://localhost:8080/employees/${currentPage}/${itemsPerPage}/${sortBy}/${sortOrder}`).then((response) => {
  //     const{content,totalPages}=response.data;   
  //     setEmployees(response.data)
  //     setTotalPages(totalPages);
  //         console.log(response.data);
  //     }).catch(error =>{
  //         console.log(error);
  //     })
  // }
 

  // const deleteEmployee = (employeeId) => {
  //   if(window.confirm("Sure to Delete?")){
  //    EmployeeService.deleteEmployee(employeeId).then((response) =>{
  //     getAllEmployees();

  //    }).catch(error =>{
  //        console.log(error);
  //    })
  //   }
  // }
  // const deleteAllEmployee = () => {
  //   if(window.confirm("Sure to Delete All Employees?")){
  //    EmployeeService.deleteAllEmployee().then((response) =>{
  //     getAllEmployees();

  //    }).catch(error =>{
  //        console.log(error);
  //    })
  //   }
  // }
  const LogoutHandler=()=>{
    if(window.confirm("Sure to Logout?")){
      nav("/")
    }
  }
 

  return (
    <body id="body">
    <div className="body">
    <div id="container">
            <h1>Student_Profile_Manager</h1>
    <Link to="/add"><button id="addbtn">Add Employees</button></Link>
    <button id="delbtn" onClick={deleteAllEmployee} >Delete All Employees</button>
  
    <table id="table">
              <thead>
                <tr>
                  <th>Student_ID</th>
                  <th>Name</th>
                  <th>Dept</th>
                  <th>Contact_num</th>
                  <th>Address</th>
                  <th>No.Courses Enrolled</th>
                  <th>Grade</th>
                </tr>
              </thead>
             
             <button id="action-del"  onClick = {() => deleteEmployee(employee.id)}
            > Delete!</button>
            
      
            </table>
            
        
    </div>
    </div>
    </body>
  )
}

export default samplefile;