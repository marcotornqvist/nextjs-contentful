import Navbar from "./Navbar";

interface IProps {
  children: React.ReactNode;
  className: String;
}

const MainLayout = ({ children, className }: IProps) => {
  return (
    <section className={`main-layout`}>
      <Navbar />
      {children}
    </section>
  );
};

export default MainLayout;
