
import { Button } from 'primereact/button';
import { ComponentOneChild } from "./ComponentOneChild"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { useEffect } from "react";
import { start, stop } from "../Store/Reducers/BlockUI";
import { ToastService } from '../Service/ToastService';

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
    const showSuccess = () => {
         ToastService.showSuccessMessage("from component one hi")
    }
    return (
        <>
        
            <p>Compoennt One</p>
            <ComponentOneChild />{" "}
            <Button onClick={showSuccess} className="p-button-success" label="Sucess" />{" "}
            <Button onClick={hide} label="start" />{" "}
            <Button onClick={show} label="stop" />
        </>
    )
}