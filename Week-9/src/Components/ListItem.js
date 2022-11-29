import React from "react";

function ListItem({ list, remove, onCheck }) {
  return (
    <div className="mt-2">
      <ul className="ml-[250px]">
        {list.map((ele, key) => (
          <li key={key}>
            <div className="w-[240px] justify-between flex rounded-2xl bg-[#EDCBD2] my-2 text-left ml-4 p-2">
              {key + 1} .
              {ele.completed ? (
                <s>
                  <span>{ele.value}</span>
                </s>
              ) : (
                <strong>{ele.value}</strong>
              )}
              <div>
                <span>
                  <input
                    type={"checkbox"}
                    checked={ele.completed}
                    className="bg-[#EDCBD2] cursor-pointer"
                    onChange={(e) => onCheck(key, e.target.checked)}
                  />
                </span>
                <span
                  role={"button"}
                  onClick={() => remove(key)}
                  className="text-black mx-4"
                >
                  x
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItem;
