import './App.css';
import { useEffect, useState } from 'react';
import { DashBoard } from './Components/DashBoard';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { BlockUI } from 'primereact/blockui';
import { Toast } from 'primereact/toast';
import { useSelector } from 'react-redux';
import { RootState } from './Store/store';
import { toastRef } from './Service/ToastService';


function App() {

  const [block, setBlock] = useState<boolean>(false)

  const blockUI = useSelector((state: RootState) => state.UIBlock.totalBlockUI);

  useEffect(() => {
    if (block) {
      const timeoutId = setTimeout(() => {
        setBlock(false)
        console.log('Delayed function executed after 2  000ms');
      }, 2000);
      // Clean up the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }

  }, [block]);

  useEffect(() => {
    if (blockUI > 0) {
      setBlock(true)
    } else {
      setBlock(false)
    }
  }, [blockUI])

  return (
    <div className="App">
      <Toast ref={toastRef} position="top-center" />
      <ConfirmDialog />
      <BlockUI blocked={block} fullScreen>
        <DashBoard />
      </BlockUI>
    </div>
  );
}

export default App;
