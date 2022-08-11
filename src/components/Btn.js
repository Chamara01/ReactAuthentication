import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


function Btn(props) {
    return (
        <div>
            <ul>
                <Link to='/forgetPaswword'>{props.title}</Link>
            </ul>
        </div>
    );
}

export default Btn;

