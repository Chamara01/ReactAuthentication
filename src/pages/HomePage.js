
import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from 'react-router-dom';
import Btn from '../components/Btn';


function HomePage() {

    const navigate = useNavigate();

    function DtaGrid() {
        navigate('/dataGrid');
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6"
                        component="div" sx={{ flexGrow: 1 }}>
                        Home Page design
                    </Typography>

                    <Button style={{ width: 100, height: 40, marginTop: 30 }} variant="contained" color="success" onClick={() => DtaGrid()}>
                        DataGrid
                    </Button>


                </Toolbar>
            </AppBar>
        </div>
    );
}



export default HomePage;

