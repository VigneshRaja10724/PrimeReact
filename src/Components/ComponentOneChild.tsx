
import { Button } from 'primereact/button';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { start, stop } from "../Store/Reducers/BlockUI";
import { ToastService } from '../Service/ToastService';
import { ConfirmService } from '../Service/ConfirmDialogService';

export const ComponentOneChild = () => {
    const dispatch = useDispatch();
    const blockUI = useSelector((state: RootState) => state.UIBlock.totalBlockUI);

    const hide = () => {
        dispatch(start(blockUI))
    }
    const show = () => {
        dispatch(stop(blockUI))
    }

    const onSucess = () =>{
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
            <Button onClick={showErrorMessage} className="p-button-danger" label="Error" />{" "}
            <Button onClick={hide} label="Hide" />{" "}
            <Button onClick={show} label="Show" />
        </>
    )
}