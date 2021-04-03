import React from "react";

interface Props {
  name: string;
}

const App = (props: Props): React.ReactElement => {
  const { name } = props;

  return (
    <>
      <h1>Hello {name}</h1>
    </>
  );
};

export default App;
