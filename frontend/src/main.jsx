import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './ContextApi/UserContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <App />
  </UserProvider>,
)
