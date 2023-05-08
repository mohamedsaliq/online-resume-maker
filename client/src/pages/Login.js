import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { Button, Form, Input, message } from 'antd';
import '../resources/authentication.css'
import axios from 'axios';



function Login() {

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const user = await axios.post('/api/user/login', values)
      message.success('Login sucessful')
      localStorage.setItem("online-resume-user", JSON.stringify(user.data));
      setLoading(false);
      navigate('/home')
    } catch (error) {
      setLoading(false);
      message.error('Login Failed')
    }
  }
  // the below statement ensures user state if already logged in the website is also used in registration file
  useEffect(() => {
    if (localStorage.getItem('online-resume-user')) {
      navigate('/home')
    }

  })
  //
  return (

    <div className='auth-parent'>
    

      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>


      <Form layout='vertical' onFinish={onFinish}>
        {loading && (<Spin size="large" />)}
        <h1>LOGIN</h1>
        <hr></hr>
        <Form.Item name='useremail' label='Useremail'>

          <Input placeholder='Useremail' />


        </Form.Item>

        <Form.Item name='password' label='Password'>

          <Input type='password' placeholder='Password' />


        </Form.Item>

        <div className='auth-button'>
          <Button type='primary' htmlType='submit'>Login</Button>
        </div>

        <div className='d-flex'>
          <Link to='/register'>New user? Click Here</Link>
        </div>

      </Form>



    </div>


  )

}


export default Login