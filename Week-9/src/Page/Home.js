import React, { useState } from "react";

import Input from "../Components/InputBox";
import Button from "../Components/Button";
import ListItem from "../Components/ListItem";
import CompletedList from "../Components/CompletedList";

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
    if (inputVal) {
      setList((old) => [...old, { value: inputVal, completed: false }]);
      setInputVal("");
    } else {
      alert("Enter valid inut value");
    }
  };
  // on remove item
  const onRemoveItem = (id) => {
    setList((items) => items.filter((ele, index) => index !== id));
  };
  // when clicked completed
  const onComplete = (id, status) => {
    setList((items) =>
      items.map((ele, ind) =>
        ind === id ? { ...ele, completed: status } : ele
      )
    );
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline my-10">To do List</h1>
      <Input value={inputVal} onChangeText={onChange} />
      <Button onClick={addNew}>Add</Button>
      <ListItem list={list} remove={onRemoveItem} onCheck={onComplete} />
      <CompletedList list={list.filter((ele) => ele.completed)} />
    </div>
  );
}

export default Home;
