import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="orange">関有美子</ColorfulMessage>
      <ColorfulMessage color="red">大好き</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
