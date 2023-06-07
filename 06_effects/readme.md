*** useEffect *** 를 사용하면 랜더링 할 때 모든 코드들이 다시 실행되는 것이 아니라, 무엇이 변화했는지에 따라 선택적으로 실행할 수 있도록 해준다.
---
### 첫번째 argument : 실행하고 싶은 코드
### 두번째 argument : dependencies
---

예시) 
  useEffect(() => {
    console.log("i run only once");
  }, []);
  <br>
  => 처음에 한 번만 실행하겠다!
  
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes.");
  }, [keyword, counter]);
    <br>
  => state에 있는 keyword 또는 counter 값이 변화할 때만 실행하겠다!
