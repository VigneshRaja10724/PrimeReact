import { createRef } from "react";
import { confirmDialog } from 'primereact/confirmdialog';

export const toastRef : any = createRef();

export const ToastService = {
    showSuccessMessage(message : string) {
        if (toastRef.current) {
                 toastRef.current.show({severity:'success', summary: 'Success', detail: message, life: 3000});
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

// export const ConfirmDialog = {
//     confirmDialog({
//         message: 'Are you sure you want to proceed?',
//         header: 'Confirmation',
//         icon: 'pi pi-exclamation-triangle',
//         accept : ToastService.showSuccessMessage,
//         reject : ToastService.showWarningMessage,
//       });,
//       confirmDialog({
//         message: 'Do you want to delete this record?',
//         header: 'Delete Confirmation',
//         icon: 'pi pi-info-circle',
//         acceptClassName: 'p-button-danger',
//         // accept,
//         // reject,
//       });
// }