import React, {useEffect, useState} from "react";

function SignupForm() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        email: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        zipcode: "",
        ski: "",
        snowboard: "",
        picture_url: "",
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        const accountUrl = "http://localhost:8000/api/accounts/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(accountUrl, fetchConfig);

        if (response.ok) {
            const tokenUrl = "http://localhost:8000/token/";
            const fetchToken = {
                method: "post",
                body: JSON.stringify({formData.username, formData.password})
            }

            setFormData({
                first_name: "",
                last_name: "",
                username: "",
                password: "",
                email: "",
                address_1: "",
                address_2: "",
                city: "",
                state: "",
                zipcode: "",
                ski: "",
                snowboard: "",
                picture_url: "",
            });


        }
    }

    const handleFormChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setFormData({
            ...formData,
            [inputName]: value,
        });
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit} id="signup-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFormChange} value={formData.first_name} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" />
                            <input onChange={handleFormChange} value={formData.last_name} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" />
                            <input onChange={handleFormChange} value={formData.username} placeholder="Username" required type="text" name="username" id="username" className="form-control" />
                            <input onChange={handleFormChange} value={formData.password} placeholder="Password" required type="text" name="password" id="password" className="form-control" />
                            <input onChange={handleFormChange} value={formData.name} placeholder="Email" required type="text" name="name" id="name" className="form-control" />
                            <input onChange={handleFormChange} value={formData.name} placeholder="Address Line 1" required type="text" name="name" id="name" className="form-control" />
                            <input onChange={handleFormChange} value={formData.name} placeholder="Address Line 2" required type="text" name="name" id="name" className="form-control" />
                            <input onChange={handleFormChange} value={formData.name} placeholder="City" required type="text" name="name" id="name" className="form-control" />
                            <input onChange={handleFormChange} value={formData.name} placeholder="State" required type="text" name="name" id="name" className="form-control" />
                            <input onChange={handleFormChange} value={formData.name} placeholder="Zipcode" required type="text" name="name" id="name" className="form-control" />
                            <input onChange={handleFormChange} value={formData.name} placeholder="Ski" required type="text" name="name" id="name" className="form-control" />
                            <input onChange={handleFormChange} value={formData.name} placeholder="Snowboard" required type="text" name="name" id="name" className="form-control" />
                            <input onChange={handleFormChange} value={formData.name} placeholder="Picture Url" required type="text" name="name" id="name" className="form-control" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
