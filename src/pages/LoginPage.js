
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';
import { Link } from "react-router-dom";
import { height } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Btn from '../components/Btn';
import { WeatherForecastService } from '../services/weather-api';
import "../css/login.css";
import { useEffect } from 'react';

function LoginPage() {


    const navigate = useNavigate();

    let [data, setData] = React.useState({

        email: "",
        password: ""
    })

    function logindata() {
        
         navigate('/homepage');
  
          WeatherForecastService.getProtectedForecast()
              .then((response) => {
                  console.log("response: ", JSON.stringify(response));
                  console.log("oh boy!");
              })
              .catch((err) => {
                  console.error(err);
              });
    }

    /** useEffect(() => {
         debugger
         const callAPI = async () => {
             try {
                 fetch("https://localhost:44325/WeatherForecast",{
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
     console.log(data);**/



    return (

        <div style={{
            backgroundColor: "lightblue", width: 400, height: 400, position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>


            <div class="heder">LoginPage</div>

            <div>


                <TextField

                    style={{ width: 300, marginTop: 50 }}
                    id="standard-search"
                    label="Email"
                    type="search"
                    variant="standard"
                    value={data.email} onChange={(text) => setData((prev) => ({ ...prev, email: text.target.value }))}
                />

                <br></br>

                <TextField
                    style={{ width: 300, marginTop: 20 }}
                    id="standard-search"
                    label="Password"
                    type="search"
                    variant="standard"
                    value={data.password} onChange={(text) => setData((prev) => ({ ...prev, password: text.target.value }))}
                />

                <br></br>
                <Button style={{ width: 300, height: 40, marginTop: 30 }} variant="contained" color="success" onClick={() => logindata()}>
                    Success
                </Button>



                <Btn title="ForgetPaswword" />



            </div>
        </div>
    );

}

export default LoginPage;
