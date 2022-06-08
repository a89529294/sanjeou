import React from "react";
import SectionTitle from "./SectionTitle";

function TitledParagraphs({
  children,
  title,
  className = "",
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <div className={`grid gap-3 ${className}`}>
      <SectionTitle primary={title} withDivider />
      <div className="grid gap-6 text-lg text-bauhaus">{children}</div>
    </div>
  );
}

export default TitledParagraphs;
