import React from "react";

export default function CompletedList({ list }) {
  return (
    list &&
    list.length > 0 && (
      <div>
        <h2 className="text-[#E3856B] font-semibold mt-4 text-xl">
          CompletedList
        </h2>
        <div>
          {list && list.map((ele, key) => <div key={key}>{ele.value}</div>)}
        </div>
      </div>
    )
  );
}
