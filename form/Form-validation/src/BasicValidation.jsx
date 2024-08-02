import React, { useState } from 'react'

function BasicValidation() {

    const [name,setname] = useState()
    const [nameError,setnameError] = useState(false)

    function handlename(e){
        var naam = e.target.value
        if(naam.length<3){
            setnameError(true)
        }else{
            setnameError(false)
            
        }
        
        setname(name)
    }

    const [email,setEmail] = useState()
    const [emailerror,setEmailError] = useState(false)
    const emailRagex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/

    function handleEmail(e){
        var email = e.target.value
        if(!email.match(emailRagex)){
            setEmailError(true)
        }else{
            setEmailError(false)
        }
        setEmail(email)
    }

    const [password,setpassword] = useState()
    const [passworderror,setpasswordError] = useState(false)
    const passwordRagex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.*\W)(?!.* ).{8,16}$/

    function handlePassword(e){
        var password = e.target.value
        if(!password.match(passwordRagex)){
            setpasswordError(true)
        }else{
            setpasswordError(false)
        }
        
        setpassword(password)
    }

    const [cmpassword,setcmpassword] = useState()
    const [cmpassworderror,setcmpasswordError] = useState(false)
    

    function handleCmPassword(e){
        var cmpassword = e.target.value
        if(!cmpassword.match(passwordRagex)){
            setcmpasswordError(true)
        }else{
            setcmpasswordError(false)
        }
        setcmpassword(cmpassword)
    }

function handleSubmit(e){
e.preventDefault();

// name validation 
var naam = e.target[0].value
        if(naam.length<3){
            setnameError(true)
        }else{
            setnameError(false)
        }

        // email validation 

        var email = e.target[1].value
        if(!email.match(emailRagex)){
            setEmailError(true)
        }else{
            setEmailError(false)
        }

        // password validation

        var password = e.target[3].value
        if(!password.match(passwordRagex)){
            setpasswordError(true)
        }else{
            setpasswordError(false)
        }

       // confirm password validation

       var cmpassword = e.target.value
        if(!cmpassword.match(password)){
            setcmpasswordError(true)
        }else{
            setcmpasswordError(false)
        }
}

  return (
    <div className="form-body">
    
      <form onSubmit={handleSubmit}>
      <div className="form-box">
        <div className="data">
            <label htmlFor="">User Name</label>
            <input type="text"  value={name} onChange={handlename}/>
        {nameError?<span>minimum 3 letter</span>:""}
       
        </div>
        <div className="data">
            <label htmlFor="">User Email</label>
            <input type="email"  value={email} onChange={handleEmail}/>
        {emailerror?<span>enter @ gamil </span>:""}
        </div>
        <div className="data">
            <label htmlFor="">User Password</label>
            <input type="password" value={password} onChange={handlePassword} />
            {passworderror?<span>password must conatin upercase,lowercase,undercore,1 to 9 digit 8-16 character</span>:""}
        </div>
        <div className="data">
            <label htmlFor="">confirm Password</label>
            <input type="password" value={cmpassword} onChange={handleCmPassword}/>
            {cmpassworderror?<span>Password mismatch</span>:""}
        </div>
        <div className="data">
            <label htmlFor="">Phone Number</label>
            <input type="number"  />
            
        </div>
        <div className="data">
            <label htmlFor="">Address</label>
            <input type="text"  />
            
        </div>
        <div className="data">
            <label htmlFor="">Region</label>
            <input type="text"  />
            
        </div>
        <div className="data">
        <label htmlFor="">Country</label>
        <select onChange={(e)=>setcountry(e.target.value)}>
                <option >India</option>
                <option >Canada</option>
                <option >Amercia</option>
            </select>
        </div>
        <div className="data">
            <input type="submit"  />
        </div>
      </div>
      </form>
    </div>
  )
}

export default BasicValidation
