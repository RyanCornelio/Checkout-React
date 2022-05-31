import React from 'react';
import { Button } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Button 
      variant="contained"
      onClick={() => console.log('Click event')}
      > 
      First MUI Component
      </Button>
    </div>
  );
}

export default App;
