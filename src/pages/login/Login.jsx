import React, { useState } from 'react';
import "./style.css"
import { useSelector } from 'react-redux';
import { login } from '../../redux/featurs/authSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const { loading } = useSelector((state) => state.auth)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.username || !formData.password) {
            setErrors({ message: 'Please fill in all fields' });
            return;
        }
        setErrors({ message: '' });
        // Dispatch login action
        dispatch(login({ formData, toast, navigate }));
    };

    return (
        <div className="container" >
            <div className="row justify-content-center align-items-center" id='formMain'>
                <div className="col-lg-6 col-12" id='formBody'>
                    <div className='p-lg-5 p-3'>
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className='form-label'>Username:</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className='form-label'>Password:</label>
                                <input
                                    type="password"
                                    className='form-control'
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='d-flex flex-column align-items-center my-2'>
                                {errors.message && <div className="error text-danger">{errors.message}</div>}
                                {loading ?
                                    <span className="spinner-border text-success mt-2" role="status"></span>
                                    :
                                    <button type="submit" className='mt-2 btn btn-success'>Login</button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
