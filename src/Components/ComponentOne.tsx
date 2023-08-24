import { Button } from 'primereact/button';
import { confirmDialog } from 'primereact/confirmdialog';
import { ComponentOneChild } from "./ComponentOneChild"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { useEffect, useState } from "react";
import { start, stop } from "../Store/Reducers/BlockUI";
import { ToastService } from '../Service/ToastService';
import { ConfirmService } from '../Service/ConfirmDialogService';
import { Search } from './Search';
import { InputText } from 'primereact/inputtext';
import { Link, Outlet, useParams } from 'react-router-dom';

export const ComponentOne = () => {

    const dispatch = useDispatch();
    const blockUI = useSelector((state: RootState) => state.UIBlock.totalBlockUI);
    const [value, setValue] = useState<any>("");
  
const hide = () => {
        dispatch(start(blockUI))
    }
    const show = () => {
        dispatch(stop(blockUI))
    }
    const onSucess = () =>{
        ToastService.showSuccessMessage("Sucess message from component 1")
    }
    const onCancle = () => {
        ToastService.showWarningMessage("Warning message from component 1")
    }
    const showSuccess = () => {
        ConfirmService(onSucess, onCancle);
    }

    let {id} = useParams();
    useEffect(() =>{
        console.log(id)
    },[id])
    const person ={
        name: "vijay",
        age: "10"
    }
    return (
        <>
            <p>Compoennt One</p>
            {/* <ComponentOneChild />{" "} */}
            <InputText value={value} />
            <Button onClick={showSuccess}  icon="pi pi-check" className="p-button-success" label="Sucess" />{" "}
            <Button onClick={hide} label="start" />{" "}
            <Button onClick={show} label="stop" />
            <Search setValue ={setValue}/>
            <Link to="/1/child" state={person}>Child</Link>
            <Outlet />
        </>
    )
}