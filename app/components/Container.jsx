import { Aside } from "./Aside";
import { Header } from "./Header";



export const Container = ({ children }
  
) => {
  return (
    <section className="container">
      <Aside />
      <section className="content">
        <Header/>
        <main>{children}</main>
      </section>
    </section>
  );
};
  