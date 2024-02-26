
import React, { useState, useEffect } from 'react';
// import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import axios from 'axios';
import LoginForm from './components/LoginForm';
// import { Router, Route, Switch, Redirect } from 'react-router';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';
// import Footer from './components/Footer';
import ItemDetails from "./components/ItemDetails";



function App() {
  const [productList, setproductList] = useState([]);
  
  
  //FOR MAKING LOGIN THING
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  }; 
  
  //FOR FETCHING DATA => MAKING API CALL TO BACKEND
  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make a GET request to your backend endpoint that retrieves data from the database
      const response = await axios.get('http://127.0.0.1:3001/items'); // Adjust the endpoint URL accordingly
      // Assuming response.data contains an array of items retrieved from the database
      setproductList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
  <Router>
      <div style={{backgroundColor:"#E0E0E0",height:585}}>
        <Navbar />
        <main className="container mt-5" >
          <Routes>
            <Route exact path="/" element={isLoggedIn ? <Navigate to="/products" /> : <LoginForm onLogin={handleLogin} />} />
            <Route path="/products" element={isLoggedIn ? <ProductList productList={productList}/> : <Navigate to="/" />} />
            <Route path="/ItemDetails/:_id" element={<ItemDetails/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

