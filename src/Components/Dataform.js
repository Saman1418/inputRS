import React, { useState, useEffect } from "react";
import Validate from "./Validate";
// import validator from 'validator';
import "./FormStyle.css"

const Dataform = ({ handleSubmitForm, data }) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        addresses: "",
        DOB: "",
        gender: "",


    });

    const [records, setRecords] = useState([])
    const [dataiscorrect, setDataIsCorrect] = useState(false)

    const [errors, setError] = useState({})

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }


    const submit = (e) => {
        e.preventDefault()
        setError(Validate(values));
        setDataIsCorrect(true);

        // const newRecord = { ...values, id: new Date().getTime().toString() }
        // setRecords([...records, newRecord])
        // console.log(records)
        // setValues({name:"",email:"",addresses:""})
    }
    useEffect((event) => {
        if (Object.keys(errors).length === 0 && dataiscorrect) {
            handleSubmitForm(values);
            setValues({name:"",email:"",addresses:"",DOB:"",gender:""})
            alert("Form submit")
        }
    }, [errors]);


    return (
        <>
            <div className="center">
                <h1>Form</h1>
                <form onSubmit={submit}>


                    <div className="txt-field">
                        <input placeholder="Name" type="text" name="name" value={values.name} onChange={handleChange}></input>
                        {errors.name && <span>{errors.name}</span>}
                    </div>


                    <div className="txt-field">
                        <input placeholder="Email" type="text" name="email" value={values.email} onChange={handleChange}></input>
                        {errors.email && <span>{errors.email}</span>}
                    </div>

                    <div className="txt-field">
                        <input placeholder="Address" type="text" name="addresses" value={values.addresses} onChange={handleChange}></input>
                        {errors.addresses && <span>{errors.addresses}</span>}

                    </div>

                    <div className="txt-field">
                        <input placeholder="YYYY/MM/DD" type="text" name="DOB" value={values.DOB} onChange={handleChange}></input>
                        {errors.DOB && <span>{errors.DOB}</span>}

                    </div>


                    <div>
                        <input type="radio" checked={values.gender === "Male"} value="Male" name="gender" onChange={handleChange} /> Male
                        <input type="radio" checked={values.gender === "Female"} value="Female" name="gender" onChange={handleChange} /> Female
                        <br></br>
                        {errors.gender && <span>{errors.gender}</span>}
                    </div>


                    <input type="submit" value="Submit" ></input>


                </form>

            </div>
            {/* <div>
                    {
                        records.map((element)=>{
                            return(
                                <div>
                                    <p>{element.name}</p>
                                    <p>{element.email}</p>
                                    <p>{element.addresses}</p>
                                    <p>{element.gender}</p>
                                </div>

                            )
                        })
                    }
                </div> */}
        </>
    )
}
export default Dataform;