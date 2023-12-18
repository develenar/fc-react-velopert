import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Hello name="react" />
  );
}

// 여러개의 props, 비구조화 할당
function App() {
  return (
    <Hello name="react" color="red"/>
  );
}

// defaultProps 로 기본값 설정
function App() {
  return (
    <>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </>
  );
}

// props.children
function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
