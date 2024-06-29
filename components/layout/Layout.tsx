import { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};
