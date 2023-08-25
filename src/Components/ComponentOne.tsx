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
import { Field, reduxForm } from 'redux-form';
import { setName } from '../Store/Reducers/TwoWayBinding';

const ComponentOne = (props: any) => {

    const dispatch = useDispatch();
    const blockUI = useSelector((state: RootState) => state.UIBlock.totalBlockUI);
    const twoWayName = useSelector((state: RootState) => state.TwoWay.name);
    const [value, setValue] = useState<any>("");
    const [twoWay, setTwoWay] = useState<any>("");

    const hide = () => {
        dispatch(start(blockUI))
    }
    const show = () => {
        dispatch(stop(blockUI))
    }
    const onSucess = () => {
        ToastService.showSuccessMessage("Sucess message from component 1")
    }
    const onCancle = () => {
        ToastService.showWarningMessage("Warning message from component 1")
    }
    const showSuccess = () => {
        ConfirmService(onSucess, onCancle);
    }

    let { id } = useParams();
    useEffect(() => {
        console.log(id)
    }, [id])
    const person = {
        name: "vijay",
        age: "10"
    }
    const { handleSubmit } = props;
    return (
        <>
            <p>Compoennt One</p>
            <h4>Using Redux form</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <Field name="name" component="input" type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <Field name="name" component="input" type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
            <br />
            <h4>Using state</h4>
            <InputText value={twoWay} onChange={(e) => setTwoWay(e.currentTarget.value)} />
            <InputText value={twoWay} onChange={(e) => setTwoWay(e.currentTarget.value)} />
            <br />
            <h4>Using redux toolkit state</h4>
            <InputText value={twoWayName} onChange={(e) =>  dispatch(setName(e.currentTarget.value))} />
            <InputText value={twoWayName} onChange={(e) =>dispatch(setName(e.currentTarget.value))} />
            <br />
            <InputText value={value} />
            <Button onClick={showSuccess} icon="pi pi-check" className="p-button-success" label="Sucess" />{" "}
            <Button onClick={hide} label="start" />{" "}
            <Button onClick={show} label="stop" />
            <Search setValue={setValue} />
            <Link to="/1/child" state={person}>Child</Link>
            <Outlet />
        </>
    )
}

export default reduxForm({
    form: 'myForm', // Unique name for the form
})(ComponentOne);