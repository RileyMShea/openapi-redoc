import React from 'react';
import { RedocStandalone } from 'redoc';

function App() {
  return (
    <div className="App">
      <RedocStandalone
        specUrl="openapi.yaml"

        //see https://github.com/Redocly/redoc/blob/master/src/theme.ts
        // for available `options
        options={{
          nativeScrollbars: true,
          theme: {
            colors: {
              primary: { main: 'black' },
              secondary: { main: 'pink' },
            },
            sidebar: {
              backgroundColor: 'orange',
            },
            rightPanel: {
              backgroundColor: 'pink',
            },
            typography:{
              fontFamily:'Fira Code'
            }
          },
        }}
      />
    </div>
  );
}

export default App;
