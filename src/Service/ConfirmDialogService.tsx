import { confirmDialog } from 'primereact/confirmdialog';
import { ToastService } from './ToastService';

export const ConfirmService = (onSucess : any, onCancle : any) => {
  return  confirmDialog({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation From ',
        icon: 'pi pi-exclamation-triangle',
        accept: () => onSucess(),
        reject :  () => onCancle()
    })
}