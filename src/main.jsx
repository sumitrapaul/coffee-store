import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Users from './components/Users.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Users2 from './components/Users2.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee/>
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee/>,
    loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/signin",
    element:<SignIn/>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader: () => fetch('http://localhost:5000/user')
    
  },
  {
    path:'/users2',
    element:<Users2></Users2>
  }
]);

const queryClient =new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(

 
   <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
   
    
  </React.StrictMode>,

)
