
import { Button } from 'primereact/button';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { start, stop } from "../Store/Reducers/BlockUI";
import { ToastService } from '../Service/ToastService';

export const ComponentOneChild = () => {
    const dispatch = useDispatch();
    const blockUI = useSelector((state: RootState) => state.UIBlock.totalBlockUI);

    const hide = () => {
        dispatch(start(blockUI))
    }
    const show = () => {
        dispatch(stop(blockUI))
    }

    const showErrorMessage = () => {
        ToastService.showErrorMessage("Error")
    }
    return (
        <>
            <Button onClick={showErrorMessage} className="p-button-danger" label="Error" />{" "}
            <Button onClick={hide} label="Hide" />{" "}
            <Button onClick={show} label="Show" />
        </>
    )
}