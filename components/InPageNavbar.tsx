import React from "react";

function InPageNavbar({ items }: { items: Array<string> }) {
  return (
    <nav className="px-32 py-5 text-xl font-medium text-bauhaus bg-white-smoke sm:px-7 sm:text-sm sm:overflow-auto">
      <div className="flex justify-start gap-24 sm:gap-4">
        {items.map((item, i) => (
          <div className="cursor-pointer whitespace-nowrap" key={i}>
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default InPageNavbar;
