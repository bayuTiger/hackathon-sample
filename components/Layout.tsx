import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">港区歯科医院管理システム</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
