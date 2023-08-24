import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';

export const ComponentGrandChild = () => {
    const obj = {
        SuccessMessage : "success",
        failStatus : "Failed"
    }
    let navigation = useNavigate();

    const navigate =() =>{
        navigation("/",{state : obj })
    }
    return (
        <>
            <p>GrnadChild</p>
            <Link to= ".." relative='path' >Back </Link>
            <Button onClick={navigate} label="Home" />
        </>
    )
}