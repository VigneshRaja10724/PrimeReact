import { Button } from "primereact/button";
import { Column } from 'primereact/column';
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { generateData } from "../Service/Data";
import { Skeleton } from 'primereact/skeleton';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from "primereact/inputtext";

export const Search = ({ setValue }: any) => {
    const [persons, setPersons] = useState<any[]>([]);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        age: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        position: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });


    useEffect(() => {
        setPersons(generateData())
    }, []);

    let loadLazyTimeout: any = null;

    const loadCarsLazy = (event: any) => {
        !lazyLoading && setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        loadLazyTimeout = setTimeout(() => {
            let _persons = [...persons];
            setPersons(_persons);
            setLazyLoading(false);
        }, Math.random() * 100 + 250);
    };

    const loadingTemplate = (options: any) => {
        return (
            <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }}>
                <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
            </div>
        );
    };

    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const footerContent = (
        <div>
            <Button label="Cancle" icon="pi pi-check" onClick={() => setDialogVisible(false)} autoFocus />
        </div>
    );

    const onRowSelect = (event: any) => {
        setValue(event.data.name);
        setDialogVisible(false)
    }

    return (
        <>
            <Button label="ShowDialouge" icon="pi pi-external-link" onClick={() => setDialogVisible(true)} />
            <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw', height: '50vw' }} maximizable
                modal contentStyle={{ height: '300px' }} onHide={() => setDialogVisible(false)} footer={footerContent}>
                <DataTable
                    value={persons} showGridlines
                    filters={filters} filterDisplay="row"
                    emptyMessage="No customers found."
                    selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)}
                    onRowSelect={onRowSelect}
                    metaKeySelection={false}
                    virtualScrollerOptions={{
                        lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46,
                        delay: 20, showLoader: true, loading: lazyLoading, loadingTemplate
                    }}
                    scrollable scrollHeight="flex" tableStyle={{ minWidth: '50rem' }}

                >
                    <Column filter field="id" header="ID"></Column>
                    <Column filter field="name" header="NAME"></Column>
                    <Column filter field="age" header="AGE"></Column>
                    <Column filter field="position" header="ROLE"></Column>
                </DataTable>
            </Dialog>
        </>
    )
} 