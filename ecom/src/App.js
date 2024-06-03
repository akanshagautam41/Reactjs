import logo from './logo.svg';
import './App.css';
import List from './List';
// import Routers from './Route';
import { useState } from 'react';


function App() {
var [data,setData] = useState([])

fetch("https://jsonplaceholder.typicode.com/users/").then(function(response)
{
  return response.json()
}).then(function(result){
  // console.warn(result)
  setData(result)
}).catch(function(){
  console.log("error")
})

  return(
   <table border="1">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
    {
      data.map((info)=>
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.email}</td>
      </tr>
      
      )
    }
   </table>
  )
}

export default App;
