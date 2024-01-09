// pages/admin.js
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
//import LoginPage from './login';
import Head from 'next/head';
/*import { Transition } from 'react-transition-group';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { Snackbar } from '@mui/base/Snackbar'; */
import Image from 'next/image';


export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setimageUrl] = useState('');
  const [message, setmessage] = useState('');
  const [open, setOpen] = React.useState(false);
  const [exited, setExited] = React.useState(true);
  const nodeRef = React.useRef(null);
  const [loginError, setLoginError] = useState(false); // State for login error


  const [user, setUser] = useState(null);

 /* if (!user) {
    // Render the login page if the user is not authenticated
    return <LoginPage setUser={setUser} />;
  } */

  const handleSubmit = async (e) => {
    e.preventDefault();


    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ItemsAPI`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, imageUrl }),

    });

    if (res.status === 201) {
      console.log('Blog post created successfully!');
      setTitle('');
      setContent('');
      setmessage("NEWS POSTED ")

    } else {
      console.error('Failed to create blog post');
      setmessage("NEWS NOT POSTED ")
      setLoginError(true); // Set login error state
    }
  };














  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleOnEnter = () => {
    setExited(false);
  };

  const handleOnExited = () => {
    setExited(true);
  };
  //



  return (
    <div>
      <Head>

      </Head>
      <div>


      </div>
      <h1>news Admin form</h1>
      <p>Welcome </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div >
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}

          />
       

        </div>
        <div>
          <label>ImageURL:</label>
          <textarea
            value={imageUrl}
            onChange={(e) => setimageUrl(e.target.value)}
          />
        </div>
        <div >
            <button type="submit" onClick={handleClick}>Create news Post</button>
          </div>

      </form>
     
      <div><Link href="/">
        Go to Home page
      </Link></div>
    </div>
  );


}



