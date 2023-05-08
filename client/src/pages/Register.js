import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import { Spin } from 'antd';
import '../resources/authentication.css';
import axios from "axios"




function Register() {

 const [loading,setLoading]=useState(false);
 const navigate = useNavigate()

  const onFinish = async(values) =>{
    setLoading(true);

    try {
      await axios.post('/api/user/register' , values);
      setLoading(false);
      message.success('Registration sucessful');
    } catch (error) {
      setLoading(false);
      message.error('Registration Failed');
    }
  };

   useEffect(()=>{
    if(localStorage.getItem('online-resume-user'))
    {
      navigate('/home')//error chance for capital N
    }

  })

  return (
    <div className='auth-parent'>
      {loading && (<Spin size="large"/>)}

      <Form layout='vertical' onFinish={onFinish}>
        <h1>REGISTER</h1>
        <hr></hr>
        <Form.Item name='useremail' label='Email'>
        <Input type='email' placeholder='Email' />
        </Form.Item>

        <Form.Item name='username' label='Username'>

          <Input placeholder='Username' />


        </Form.Item>

        <Form.Item name='password' label='Password'>

          <Input placeholder='Password' />


        </Form.Item>


        <Form.Item name='cpassword' label='Confirm Password'>

          <Input placeholder='Confirm Password' />


        </Form.Item>
        <div className='auth-button'>
        <Button type='primary' htmlType='submit'>Register</Button>
        </div>  

        <br></br>

        <div className='d-flex align-items-center justify-content-between'>
       <Link to='/Login'>Already a user? Click here to login</Link>
       </div>

      </Form>

         
      

    </div>
  )
}

export default Register