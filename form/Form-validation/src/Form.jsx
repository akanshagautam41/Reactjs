import React, { useState } from 'react'

function Form() {
var [firstname,setfristname] = useState("")
var [lastname,setlastname] = useState("")
var [email,setemail] = useState("")
var [country,setcountry] = useState("")

function sumbitdata (e){
    e.preventDefault;
}


  return (
    <div>
      <h1>Form Validation</h1>
      <div className="main">
        <form onSubmit={sumbitdata}>
            <div className="form">
                <label htmlFor="" >First Name</label>
                <input type="text" onChange={(e)=>setfristname(e.target.value)}/>
            </div>
            <div className="form">
                <label htmlFor="">Last Name</label>
                <input type="text"onChange={(e)=>setlastname(e.target.value)} />
            </div>
            <div className="form">
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className="form">
            <label htmlFor="">Country</label>
            <select onChange={(e)=>setcountry(e.target.value)}>
                <option >India</option>
                <option >Canada</option>
                <option >Amercia</option>
            </select>
            </div>
            <button type="submit">Submit</button>
            
        </form>
        
        </div>
        
        <table>
            <tr>
                <th>Name Frist</th>
                <th>Name Last</th>
                <th>Email</th>
                <th>Country</th>
            </tr>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{email}</td>
            <td>{country}</td>
        </table>
    </div>
  )
}

export default Form
