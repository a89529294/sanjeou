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
      <div className="flex justify-start gap-24 sm:gap-4">
        {items.map((item) => (
          <button
            className={`py-5 border-solid cursor-pointer whitespace-nowrap border-primary-red ${
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
