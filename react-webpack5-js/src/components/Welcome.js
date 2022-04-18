import React from 'react';
import Button from './Button';

const Welcome = ({username, onLogout}) => {
  return (
    <div className="max-w-screen-sm p-12 mx-auto bg-gray-50 rounded-md shadow-lg">
      <h1 className="text-2xl">Welcome {username}!</h1>
      <Button className='mt-2' onClick={onLogout}>Log Out</Button>
    </div>
  );
};

export default Welcome;