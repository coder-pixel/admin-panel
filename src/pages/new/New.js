import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./new.scss"

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = ({ inputs, title }) => {

  const [file, setFile] = useState("")
  // console.log(file)


  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h2>{title}</h2>
        </div>

        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right">
            <form>

              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file" id="file" style={{ display: "none" }}
                  accept="image/bmp, image/jpeg, image/pn"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              {inputs.map(input => (
                <div className="formInput" key={input.id}>
                  <label htmlFor={input.label}>{input.label}</label>
                  <input type={input.type} id={input.label} placeholder={input.placeholder} />
                </div>
              ))}

              {/* <div className="formInput">
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder='john_doe' />
              </div>

              <div className="formInput">
                <label htmlFor="name">Name and surname</label>
                <input type="text" id='name' placeholder='John Doe' />
              </div>

              <div className="formInput">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='johndoe@gmail.com' />
              </div>

              <div className="formInput">
                <label htmlFor="phone">Name and surname</label>
                <input type="number" id='phone' placeholder='+1 234 567 89' />
              </div>

              <div className="formInput">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' />
              </div>

              <div className="formInput">
                <label htmlFor="address">Address</label>
                <input type="text" id='address' placeholder='Elton St. 216 NewYork' />
              </div>


              <div className="formInput">
                <label htmlFor="country">Country</label>
                <input type="text" id='country' placeholder='USA' />
              </div> */}

              <button>Send</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New