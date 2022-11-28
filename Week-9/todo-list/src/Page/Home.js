import React, { useState } from "react";

import Input from "../Components/InputBox";
import Button from "../Components/Button";
import ListItem from "../Components/ListItem";

function Home() {
  const [inputVal, setInputVal] = useState("");
  const [list, setList] = useState([]);

  const onChange = (val) => {
    setInputVal(val.target.value);
  };

  const addNew = () => {
    setList((old) => [...old, inputVal]);
  };

  const onRemoveItem = (item) => {};

  return (
    <div className="text-center">
      <Input value={inputVal} onChangeText={onChange} />
      <Button onClick={addNew}>Add</Button>
      <ListItem list={list} onRemoveItem />
    </div>
  );
}

export default Home;
