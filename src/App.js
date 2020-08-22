import React from 'react';
import { ToastContainer } from 'react-toastify';
import ListUsers from './components/ListUsers';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ListUsers />
    </>
  );
}

export default App;
