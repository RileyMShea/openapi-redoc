import React from 'react';
import { RedocStandalone } from 'redoc';

function App() {
  return (
    <div className="App">
      <RedocStandalone
        specUrl="openapi.yaml"
        options={{
          nativeScrollbars: true,

          theme: { colors: { primary: { main: 'black' },secondary:{main:'pink'} } },
        }}
      />
    </div>
  );
}

export default App;
