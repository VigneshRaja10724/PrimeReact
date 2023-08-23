
import { Button } from 'primereact/button';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { start, stop } from "../Store/Reducers/BlockUI";
import { ToastService } from '../Service/ToastService';
import { ConfirmService } from '../Service/ConfirmDialogService';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Search } from './Search';
import { Link } from 'react-router-dom';

export const ComponentOneChild = () => {
    const dispatch = useDispatch();
    const blockUI = useSelector((state: RootState) => state.UIBlock.totalBlockUI);
    const [value, setValue] = useState<any>("");

    const hide = () => {
        dispatch(start(blockUI))
    }
    const show = () => {
        dispatch(stop(blockUI))
    }

    const onSucess = () => {
        ToastService.showSuccessMessage("Sucess message from child component ")
    }
    const onCancle = () => {
        ToastService.showWarningMessage("Warning message from child component ")
    }
    const showErrorMessage = () => {
        ConfirmService(onSucess, onCancle);
    }
    return (
        <>
            <InputText value={value} />
            <Button onClick={showErrorMessage} className="p-button-danger" label="Error" />{" "}
            <Button onClick={hide} label="Hide" />{" "}
            <Button onClick={show} label="Show" />
            <Search setValue ={setValue}/>
            <Link to= "/" >Back </Link>
        </>
    )
}