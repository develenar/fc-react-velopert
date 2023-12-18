import React from 'react';

function Hello(props) {
  return <div>안녕하세요 {props.name}</div>
}

// 여러개의 props, 비구조화 할당
function Hello(props) {
  return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
}

// 함수의 파라미터에서 비구조화 할당
function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}

// defaultProps 로 기본값 설정
Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;
