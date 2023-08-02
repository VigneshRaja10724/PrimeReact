import { Button } from 'primereact/button';

import { useDispatch, useSelector } from 'react-redux';
import { start, stop } from '../Store/Reducers/BlockUI';
import { RootState } from '../Store/store';
import { ComponentOneChild } from "./ComponentOneChild";
import { ToastService } from '../Service/ToastService';

export const ComponentTwo = () => {

    const dispatch = useDispatch();
    const blockUI = useSelector((state: RootState) => state.UIBlock.totalBlockUI);

    const hide = () => {
        dispatch(start(blockUI))
    }
    const show = () => {
        dispatch(stop(blockUI))
    }

    const showWarning = () => {
        ToastService.showWarningMessage("Warning")
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