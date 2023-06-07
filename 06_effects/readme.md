*** useEffect *** 를 사용하면 랜더링 할 때 모든 코드들이 다시 실행되는 것이 아니라, 무엇이 변화했는지에 따라 선택적으로 실행할 수 있도록 해준다.
<br>
<br>
*** useEffect *** 에서 return을 하면 해당 컴포넌트가 destroy될 때 호출된다!
<br>
자주 쓰이는 것은 아니지만 어떤 컴포넌트가 destroy 될 때 분석 결과를 보내는 경우 등 특수한 케이스에서 활용됨.
---
### 첫번째 argument : 실행하고 싶은 코드
### 두번째 argument : dependencies

예시) <br>
  useEffect(() => {
    console.log("i run only once");
  }, []);
  <br>
  => 처음에 한 번만 실행하겠다!
   <br>
   <br>
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes.");
  }, [keyword, counter]);
    <br>
  => state에 있는 keyword 또는 counter 값이 변화할 때만 실행하겠다!
 <br>
 <br>
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
   <br>
  => 해당 컴포넌트가 create 될 때 hi, destroy 될 때 bye 출력
<hr>

index.js에서 <react.StrictMode>가 활성화되어 있어서 새로고침 시에 메서드들이 이중호출됨 => 주석 처리하여 해결
https://ko.legacy.reactjs.org/docs/strict-mode.html#gatsby-focus-wrapper
