import React, {Component} from "react";

class Counter extends Component {
  // 컴포넌트의 생성자 메소드
  constructor(props) { 
    // constructor 사용시 super() 호출해줘야한다. 현재 클래스형 컴포넌트가 상속받고 있는 리엑트의 Component 클래스가 지닌 생성자 함수를 호출한다.
    super(props);

    this.state = { number: 0 }; // 초기값 설정 (컴포넌트의 state눈 객체 형식이어야 한다.)
  }

  render() {
    const { number, msg } = this.state;
    return (
      <>
        <p>{number}</p>
        <input type="text"value={msg} onChange={(e) => {this.setState(
          {
          number: number + 5,
          msg : msg+'하이'
        })}}></input>
        <button onClick={() => {this.setState({number: number+1})}}>+1</button>
        <button onClick={() => {
          this.setState(prevState => ({
            number: prevState + 2
          }))
        }}>+1</button>
      </>
    );
  }
}

export default Counter;