import React from "react";

function ListItem({ list }) {
  return (
    <div>
      <ul>
        {list.map((ele, key) => (
          <li key={key}>{ele} </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItem;
