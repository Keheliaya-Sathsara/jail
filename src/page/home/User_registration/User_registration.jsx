import React, {useState, useEffect} from 'react'
import './User_registration.css'
import axios from 'axios'
import register from '../../../assets/register.png'

export default function User_Registration() {

  const [userData , setUserData] = useState({
      firstname: "",
      lastname: "",
      mobilenumber: "",
      email: "",
      password: "",
    })


  
    const handleChange = (e) => {
      const newdata = {...userData}
      newdata[e.target.name] = e.target.value
      setUserData(newdata)
    };
  
    const handleSubmit = async() => {
      console.log(userData)
      const response = await axios.post('http://localhost:8080/users/register', userData)
      console.log(response)
      if(response.status === 200){
        alert("Registration Successful")
        setUserData({
          firstname: "",
          lastname: "",
          mobilenumber: "",
          email: "",
          password: "",
        })
        window.location.href = "/"
      }else if(response.status === 400){
        alert("Registration Failed")
      }else if(response.status === 500){
        alert("Internal Server Error")
      }

    
    }

    return (
      <>
        <div className="register_page">
  

          <div className="bottom_left">
            <div className='register_img'>
              <img src={register} className='registration-img' alt='image'/>
            </div>
          </div>
  
          <div className="bottom_right">
            <div className='register_form'>

                <h1 className='form_heading'>Registration</h1>
                <div className='registration-form'>
                  <label className="label_username">First Name:</label>
                  <input className="register_form_input" name="firstname" type="text" value={userData.firstname} onChange={(e)=>handleChange(e)} />
                 
                </div>
                <div className='registration-form'>
                  <label className="label_username">Last Name:</label>
                  <input className="register_form_input" name="lastname" type="text" value={userData.lastname} onChange={(e)=>handleChange(e)} />
                 
                </div>
                <div className='registration-form'>
                  <label className='label_password'>Mobile Number:</label>
                  <input className='register_form_input' name='mobilenumber' type='number' value={userData.mobilenumber}  onChange={(e)=>handleChange(e)} />
                  
                </div>
                <div className='registration-form'>
                  <label className='label_mail'>E-mail:</label>
                  <input className='register_form_input' name='email' type='email' value={userData.email} onChange={(e)=>handleChange(e)}/>
                  
                </div>
                <div className='registration-form'>
                  <label className='label_password'>Password:</label>
                  <input className='register_form_input' name='password' type='password' value={userData.password} onChange={(e)=>handleChange(e)} />
                 
                </div>
                

                <div className='register_btn' >
                  <button className='register_btn_' onClick={handleSubmit} >Register</button>
                </div>
 
            </div>
          </div>
  
        </div>
      </>
    )
  }