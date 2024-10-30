import React, { useState } from 'react';
// import Modal from './components/modal';
import Modal from "./components/Modal.jsx"

function App() {
  const [open, setOpen] = useState(false);
  function onClose() {
    setOpen(false)
  }

  return (
    <div>
      <button onClick={() => { setOpen(true) }}>Open Modal</button>
      {open && <Modal onClose={onClose} />}

    </div>
  );
}

export default App;
