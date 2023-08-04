import { Button } from 'primereact/button';

import { useDispatch, useSelector } from 'react-redux';
import { start, stop } from '../Store/Reducers/BlockUI';
import { RootState } from '../Store/store';
import { ComponentOneChild } from "./ComponentOneChild";
import { ToastService } from '../Service/ToastService';
import { confirmDialog } from 'primereact/confirmdialog';
import { ConfirmService } from '../Service/ConfirmDialogService';

export const ComponentTwo = () => {

    const dispatch = useDispatch();
    const blockUI = useSelector((state: RootState) => state.UIBlock.totalBlockUI);

    const hide = () => {
        dispatch(start(blockUI))
    }
    const show = () => {
        dispatch(stop(blockUI))
    }

    const onSucess = () =>{
        ToastService.showSuccessMessage("Sucess message from component 2")
    }
    const onCancle = () => {
        ToastService.showWarningMessage("Warning message from component 2")
    }
    const showWarning = () => {
        ConfirmService(onSucess, onCancle);
    }

    return (
        <>
            <p>Compoennt Two</p>
            <ComponentOneChild />{" "}

            <Button onClick={showWarning} className="p-button-warning" label="warning" />{" "}
            <Button onClick={hide} label="start" />{" "}
            <Button onClick={show} label="stop" />
        </>
    )
}