import { Button, Dropdown } from 'antd';
import React from 'react'
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from 'react-router-dom';
import './../resources/defaulylayout.css'



function DefaultLayout(props) {
  // the below code helps to show the username in dropdown menu
  const user = JSON.parse(localStorage.getItem('online-resume-user'))
  //
  const navigate = useNavigate()
  // this below code helps to remove user session in logout
  const handleLogout = () => {
    localStorage.removeItem('online-resume-user')
    navigate('/login')
  }
  const items = [
    {
      key: '1',
      label: (
        <Link style={{ textDecoration: 'none' }} to="/home">
          Home
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link style={{ textDecoration: 'none' }} to="/profile" >
          Profile
        </Link>
      ),
    },
    {
      key: '3',
      label: <span onClick={handleLogout}>Logout</span>
    },
  ];

  //onClick={()=>{localStorage.removeItem('online-resume-user') navigate(/login)}}
  return (
    <div className='layout'>

      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>


      <div className='header'>
        <h1 onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>Online Resume Maker</h1>
        <Dropdown menu={{ items }} placement="bottomLeft">
          <Button icon={<UserOutlined />}>{user.username}</Button>
        </Dropdown>

      </div>

      <div className='content'>
        {props.children}
      </div>

      <div className='bottom'>
        <footer ></footer>
      </div>

    </div>
  )
}

export default DefaultLayout