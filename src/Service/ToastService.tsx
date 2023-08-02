import { createRef } from "react";

export const toastRef : any = createRef();

export const ToastService = {
    showSuccessMessage(message : string) {
        if (toastRef.current) {
            return toastRef.current.show({severity:'success', summary: 'Success', detail: message, life: 3000});
        }
    },
    showWarningMessage(message : string){
        if (toastRef.current) {
            return toastRef.current.show({severity:'warn', summary: 'warn', detail: message, life: 3000});
        }
    },
    showInfoMessage(message : string)  {
        if (toastRef.current) {
            return toastRef.current.show({severity:'Info', summary: 'Info', detail: message, life: 3000});
        }
    },
    showErrorMessage(message : string) {
        if (toastRef.current) {
            return toastRef.current.show({severity:'error', summary: 'Error', detail: message, life: 3000});
        }
    }
}