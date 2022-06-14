import React from "react";

function InPageNavbar({ items }: { items: Array<string> }) {
  return (
    <nav className="flex justify-between px-32 py-5 text-xl font-medium text-bauhaus bg-white-smoke">
      {items.map((item, i) => (
        <div className="cursor-pointer" key={i}>
          {item}
        </div>
      ))}
    </nav>
  );
}

export default InPageNavbar;
