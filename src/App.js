import logo from './logo.svg';
import './App.css';
import { authProvider } from './authProvider';
import { AzureAD, AuthenticationState } from 'react-aad-msal';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import ForgetPaswword from './pages/ForgetPassword';
import { useEffect } from 'react';
import React from 'react';
import DataGrid from './pages/DataGridUi';
import HookPage from './pages/HookPage';

function App() {


  let [data, setData] = React.useState({

    loginCheck: ""

  })
  useEffect(() => {
    debugger


    const callAPI = async () => {
      try {
        fetch("https://localhost:44325/WeatherForecast", {
          method: 'Get',
          credentials: 'include',
          mode: 'cors',
        })
          .then((res) => res.json())
          .then((data) => setData(data));
      } catch (e) {
        debugger
        console.log(e);
      }

    };
    callAPI();


  }, []);


  return (

    <div className="App" >
      {/* <AzureAD provider={authProvider}>
      <span>Only authenticated users can see me.</span>
    </AzureAD>
 
 <AzureAD provider={authProvider} forceLogin={true}>
  {
    ({login, logout, authenticationState, error, accountInfo}) => {
      switch (authenticationState) {
        case AuthenticationState.Authenticated:
          return (
            <p>
              <span>Welcome, {accountInfo.account.userName}!</span>
              <span>{accountInfo.jwtIdToken}</span>
              <button onClick={logout}>Logout</button>
            </p>
          );
        case AuthenticationState.Unauthenticated:
          return (
            <div>
              {error && <p><span>An error occured during authentication, please try again!</span></p>}
              <p>
                <span>Hey stranger, you look new!</span>
                <button onClick={login}>Login</button>
              </p>
            </div>
          );
        case AuthenticationState.InProgress:
          return (<p>Authenticating...</p>);
      }
    }
  }
</AzureAD>  */}


      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/forgetPaswword" element={<ForgetPaswword />} />
        <Route path="/dataGrid" element={<DataGrid />} />
        <Route path="/Hook" element={<HookPage />} />
      </Routes>
    </div>
  );
}
export default App;