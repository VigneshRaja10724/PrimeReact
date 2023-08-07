import { Button } from "primereact/button";
import { Column } from 'primereact/column';
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

export const Search = ({setValue}:any) =>{
    const persons = [
        {
            id : "01",
            name : "Vijay",
            age : "24",
            position : "Tester"
        },
        {
            id : "02",
            name : "Ram",
            age : "24",
            position : "Data engineer"
        },
        {
            id : "03",
            name : "Logi",
            age : "24",
            position : "Developer"
        }
    ]

    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const footerContent = (
        <div>
            <Button label="Cancle" icon="pi pi-check" onClick={() => setDialogVisible(false)} autoFocus />
        </div>
    );

    const onRowSelect =  (event : any) => {
        setValue(event.data.name);
        setDialogVisible(false)
    }
    return (
        <>
            <Button label="ShowDialouge" icon="pi pi-external-link" onClick={() => setDialogVisible(true)} />
            <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable
                modal contentStyle={{ height: '300px' }} onHide={() => setDialogVisible(false)} footer={footerContent}>
                <DataTable 
                value={persons} showGridlines selectionMode="single"
                selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} 
                onRowSelect={onRowSelect}
                metaKeySelection={false} 
                scrollable scrollHeight="flex" tableStyle={{ minWidth: '50rem' }}>
                    <Column field="id" header="ID"></Column>
                    <Column field="name" header="NAME"></Column>
                    <Column field="age" header="AGE"></Column>
                    <Column field="position" header="ROLE"></Column>
                </DataTable>
            </Dialog>
        </>
    )
} 