import { BlockUI } from 'primereact/blockui';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Route/Routing';
import { toastRef } from './Service/ToastService';
import { RootState } from './Store/store';


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
       <RouterProvider router={router} />
      </BlockUI>
    </div>
  );
}

export default App;
