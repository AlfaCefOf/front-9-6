import "./App.css";
import { Header } from "./assets/componenet/Header/Header";
import OrderSection from "./assets/componenet/orderSection";
import NextSection from "./assets/componenet/nextSection";
import AppSection from "./assets/componenet/AppSection";
import AppSectionFlip from "./assets/componenet/appSectionFlip";
import phonePay from "./assets/images/image-removebg-preview (1).png";
import createAccount from "./assets/images/photo_2025-06-18_12-26-02-removebg-preview.png";
import infoFood from "./assets/images/image-removebg-preview.png";
import EndFooter from "./assets/componenet/EndFooter";
import Footer from "./assets/componenet/Footer/footer";
function App() {
  return (
    <>
      <Header />
      <main>
        <OrderSection />
        <NextSection />
        <AppSection
          img={createAccount}
          tag="Create an account"
          title="Create/login to an existing account to get started"
          subtitle="An account is created with your email and a desired password"
        />
        <AppSectionFlip
          img2={infoFood}
          tag2="Explore varieties"
          title2="Shop for your favorites meal as e dey hot."
          subtitle2="Shop for your favorite meals or drinksand enjoy while doing it."
        />
        <AppSection
          img={phonePay}
          tag="Checkout"
          title="When you done check out and get it delivered."
          subtitle="When you done check out and get it delivered with ease."
        />
        <EndFooter />
      </main>
      <Footer />
    </>
  );
}

export default App;
