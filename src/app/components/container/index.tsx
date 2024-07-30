import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`flex justify-center ${className} container-div`}>
      <div className="max-w-[1800px] w-screen">{children}</div>
    </div>
  );
};

export default Container;
