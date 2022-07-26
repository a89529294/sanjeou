import React, { useState } from "react";

function InPageNavbar({
  items,
  selectedId,
  setSelectedId,
}: {
  items: Array<{ id: number; name: string }>;
  selectedId: number;
  setSelectedId: (id: number) => void;
}) {
  return (
    <nav className="px-32 overflow-auto text-xl font-medium text-bauhaus bg-white-smoke sm:px-7 sm:text-sm">
      <div className="flex gap-24 sm:gap-4 flex-nowrap w-max">
        {items.map((item) => (
          <button
            className={`inline-block shrink-0 py-5 border-solid cursor-pointer border-primary-red ${
              selectedId === item.id ? "border-b-4 pb-4" : ""
            }`}
            key={item.id}
            onClick={() => {
              setSelectedId(item.id);
            }}>
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default InPageNavbar;
