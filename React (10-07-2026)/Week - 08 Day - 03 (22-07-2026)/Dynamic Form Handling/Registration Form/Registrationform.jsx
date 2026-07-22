import React, { useState } from 'react'

function Registrationform() {

    // Form Data State :- 

    let [formdata, setformdata] =useState({
        Name : "",
        Email : "",
        Password : "",
        Address : "",
        City : "",
        Gender : "",
        Agree : false,
        Photo : null,
    })

    // Form Error States :- 

    let [errors, seterrors] = useState({})

    function handleChange(e){
        let {name, value, type, checked, files} = e.target

        setformdata({
            ...formdata,

            [name]:
            type === "checkbox"
            ?checked
            :type === "file"
            ?files[0]
            :value,
        })
    }

    // Form Validation 
    function handleSubmit(e){
        e.preventDefault()

        let newerrors = {}
        
        if (formdata.Name === "")
            newerrors.Name = "Name is required"

        if (formdata.Email === "")
            newerrors.Email = "Email is required"

        else if(!formdata.Email.includes("@"))
            newerrors.Email = "Enter a Valid Email"

        if (formdata.Password.length<8)
            newerrors.Password = "Password must be at least 8 characters"

        if (formdata.Address === "")
            newerrors.Address = "Address is required"

        if (formdata.City === "")
            newerrors.City = "Select City"

        if (formdata.Gender === "")
            newerrors.Gender = "Select Gender"

        if (!formdata.Agree)
            newerrors.Agree = "Accept Terms"

        if (formdata.Photo === null)
            newerrors.Photo = "Upload Photo"

        seterrors(newerrors)

        if (Object.keys(newerrors).length === 0){
            alert("Registration Successful")
            console.log(formdata)
        }
        
    }
  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        {/* Name  */}

        <input type="text" 
        name='Name'
        placeholder='Enter Name'
        value={formdata.Name}
        onChange={handleChange}/>
        <br />
        <br />
        <p style={{color: "red"}}>{errors.Name}</p>

        {/* Email :-  */}
        <input type="email"
        name='Email'
        placeholder='Enter Email' 
        value={formdata.Email}
        onChange={handleChange}/>
        <br />
        <br />
        <p style={{color: "red"}}>{errors.Email}</p>

        {/* Password :-  */}

        <input type='password'
        name='Password'
        placeholder='Enter Password'
        value={formdata.Password}
        onChange={handleChange}/>
        <br />
        <br />
        <p style={{color: "red"}}>{errors.Password}</p>

        {/* Address :-  */}
        <textarea 
        name='Address'
        placeholder='Enter Address'
        value={formdata.Address}
        onChange={handleChange}></textarea>
        <br />
        <br />
        <p style={{color: "red"}}>{errors.Address}</p>

        {/* City - Dropdown :-  */}

        <select
        name='City'
        value={formdata.City}
        onChange={handleChange}>

            <option value="">Select City</option>
            <option>Hyderabad</option>
            <option>Bengaluru</option>
            <option>Chennai</option>
            <option>Vijayawada</option>
            <option>Mumbai</option>
        </select>
        <p style={{color: "red"}}>{errors.City}</p>
        <br />

        {/* Gender - Radio Buttons :-  */}

        <input 
        type="radio"
        name='Gender'
        value="Male"
        checked = {formdata.Gender === "Male"}
        onChange={handleChange} />
        Male

        <input 
        type="radio" 
        name='Gender'
        value="Female"
        checked = {formdata.Gender === "Female"}
        onChange={handleChange}/>
        Female

        <p style={{color: "red"}}>{errors.Gender}</p>
        <br />

        {/* Agree - CheckBox  */}
        
        <input 
        type="checkbox" 
        name='Agree'
        checked={formdata.Agree}
        onChange={handleChange}/>
        I Agree Terms & Conditions
        <p style={{color: "red"}}>{errors.Agree}</p>
        <br />
        <br />
        {/* File - file :-  */}

        <input 
        type="file" 
        name='Photo'
        onChange={handleChange}/>

        
        <br />
        <br />

        <button type='submit'>
            Register
        </button>
      </form>
    </div>
  )
}

export default Registrationform
