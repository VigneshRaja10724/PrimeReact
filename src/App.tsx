import { useEffect, useState } from 'react';
import './App.css';
import { DashBoard } from './Components/DashBoard';
// import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import { BlockUI } from 'primereact/blockui';
import { Toast } from 'primereact/toast';
import { useSelector } from 'react-redux';
// import { toastRef } from './Store/Reducers/Toast';
import { RootState } from './Store/store';
import { toastRef } from './Service/ToastService';
  

function App() {

  const [block, setBlock] = useState<boolean>(false)

  const blockUI = useSelector((state: RootState) => state.UIBlock.totalBlockUI);

  useEffect(() => {
    if(block){
    const timeoutId = setTimeout(() => {
      setBlock(false)
      console.log('Delayed function executed after 2  000ms');
    }, 2000);   
    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }

  }, [block]);

  useEffect(() => {
    if(blockUI > 0){
      setBlock(true)
    }else{
      setBlock(false)
    }
  },[blockUI])
  
  return (
    <div className="App">
      {/* <PrimeReactProvider> */}
      <Toast ref={toastRef} position="top-center" />
      <BlockUI blocked={block} fullScreen>
      <DashBoard />
      </BlockUI>
      {/* </PrimeReactProvider> */}
      </div>
  );
}

export default App ;
