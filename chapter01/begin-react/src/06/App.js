import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';


function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial/*isSpecial={true}*//>
      <Hello color="pink" />
    </Wrapper>
  )
}

export default App;
