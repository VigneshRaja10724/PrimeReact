import { Button } from 'primereact/button';
import { confirmDialog } from 'primereact/confirmdialog';
import { ComponentOneChild } from "./ComponentOneChild"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { useEffect } from "react";
import { start, stop } from "../Store/Reducers/BlockUI";
import { ToastService } from '../Service/ToastService';
import { ConfirmService } from '../Service/ConfirmDialogService';

export const ComponentOne = () => {

    const dispatch = useDispatch();
    const blockUI = useSelector((state: RootState) => state.UIBlock.totalBlockUI);

  
    useEffect(() => {
        console.log(blockUI)
    },[blockUI]);


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
    return (
        <>
        
            <p>Compoennt One</p>
            <ComponentOneChild />{" "}
            <Button onClick={showSuccess}  icon="pi pi-check" className="p-button-success" label="Sucess" />{" "}
            <Button onClick={hide} label="start" />{" "}
            <Button onClick={show} label="stop" />
        </>
    )
}