import React, { useState } from "react";

import Input from "../Components/InputBox";
import Button from "../Components/Button";
import ListItem from "../Components/ListItem";

function Home() {
  // state initialization
  const [inputVal, setInputVal] = useState("");
  const [list, setList] = useState([]);
  // when input value chanegs
  const onChange = (val) => {
    setInputVal(val.target.value);
  };
  //   for adding new item
  const addNew = () => {
    setList((old) => [...old, inputVal]);
    setInputVal("");
  };
  // on remove item
  const onRemoveItem = (id) => {
    setList((items) => items.filter((ele, index) => index !== id));
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline my-10">To do List</h1>
      <Input value={inputVal} onChangeText={onChange} />
      <Button onClick={addNew}>Add</Button>
      <ListItem list={list} remove={onRemoveItem} />
    </div>
  );
}

export default Home;
