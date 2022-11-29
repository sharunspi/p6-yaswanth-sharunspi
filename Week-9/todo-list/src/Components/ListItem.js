import React from "react";

function ListItem({ list, remove }) {
  return (
    <div className="mt-2">
      <ul className="ml-[250px]">
        {list.map((ele, key) => (
          <li key={key}>
            <div className="w-[240px] justify-between flex rounded-2xl bg-[#EDCBD2] my-2 text-left ml-4 p-2">
              <span>
                {key + 1} . {ele}
              </span>
              <span
                role={"button"}
                onClick={() => remove(key)}
                className="text-black mr-4"
              >
                x
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItem;
