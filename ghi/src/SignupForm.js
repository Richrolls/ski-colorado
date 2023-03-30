import React, {useState} from "react";

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
        ski: false,
        snowboard: false,
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
        console.log(JSON.stringify(formData))
        const response = await fetch(accountUrl, fetchConfig);

        if (response.ok) {

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
                ski: false,
                snowboard: false,
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
                        <div className="container">
                            <div className="row">
                                <div className="col form-floating mb-3">
                                    <input onChange={handleFormChange} value={formData.first_name} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" />
                                    <label htmlFor="first_name">First Name</label>
                                </div>
                                <div className="col form-floating mb-3">
                                    <input onChange={handleFormChange} value={formData.last_name} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" />
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-floating mb-3">
                                    <input onChange={handleFormChange} value={formData.username} placeholder="Username" required type="text" name="username" id="username" className="form-control" />
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleFormChange} value={formData.password} placeholder="Password" required type="text" name="password" id="password" className="form-control" />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleFormChange} value={formData.email} placeholder="Email" required type="text" name="email" id="email" className="form-control" />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleFormChange} value={formData.address_1} placeholder="Address Line 1" required type="text" name="address_1" id="address_1" className="form-control" />
                                    <label htmlFor="address_1">Address Line 1</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleFormChange} value={formData.address_2} placeholder="Address Line 2" type="text" name="address_2" id="address_2" className="form-control" />
                                    <label htmlFor="address_2">Address Line 2</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col form-floating mb-3">
                                    <input onChange={handleFormChange} value={formData.city} placeholder="City" required type="text" name="city" id="city" className="form-control" />
                                    <label htmlFor="city">City</label>
                                </div>
                                <div className="col form-floating mb-3">
                                    <input onChange={handleFormChange} value={formData.state} placeholder="State" required type="text" name="state" id="state" className="form-control" />
                                    <label htmlFor="state">State</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleFormChange} value={formData.zipcode} placeholder="Zipcode" required type="text" name="zipcode" id="zipcode" className="form-control" />
                                    <label htmlFor="zipcode">Zipcode</label>
                                </div>
                            </div>
                            <div className="row">
                                {/* <div className="form-check form-check-inline">
                                    <input onChange={handleFormChange} value="True" type="checkbox" name="ski" id="inlineCheckbox1" className="form-check-input" />
                                    <label htmlFor="ski">Ski</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleFormChange} value={formData.snowboard} placeholder="Snowboard" required type="text" name="snowboard" id="snowboard" className="form-control" />
                                    <label htmlFor="snowboard">Snowboard</label>
                                </div> */}
                                <div className="form-floating mb-3">
                                    <input onChange={handleFormChange} value={formData.picture_url} placeholder="Picture Url" type="text" name="picture_url" id="picture_url" className="form-control" />
                                    <label htmlFor="picture_url">Picture Url</label>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;
