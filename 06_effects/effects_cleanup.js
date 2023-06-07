import { useEffect, useState } from "react";

function Hello() {
  /* 1) 함수 따로 만드는 방법 */
  // function byeFn() {
  //   console.log("destroyed :(");
  // }
  // function hiFn() {
  //   console.log("created :)");
  //   return byeFn;
  // }
  // useEffect(hiFn, []);

  /* 2) useEffect 안에 전부 작성하는 방법 */
  // 2-1) 화살표함수
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  // 2-2) function
  // useEffect(function () {
  //   console.log("hi :)");
  //   return function () {
  //     console.log("bye :(");
  //   };
  // }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
