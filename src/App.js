import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation-component/navigation";
import { Home } from "./routes/home/home";
import { Simulator } from "./components/simulator-component/simulator";
import { Footer } from "./components/footer-component/footer";
import { Services } from "./routes/services/Services";
import { Automotivetint } from "./routes/autotint/Automotivetint";
import { PaintProtection } from "./routes/paintprotection/PaintProtection";
import { HomeOffice } from "./routes/homeOfficetint/HomeOffice";
import { ContactPage } from "./routes/contact/ContactPage";
import { Authorization } from "./routes/authorization/Authorization";
import { Calculator } from "./components/calculator-component/Calculator";
import { Accounting } from "./components/accounting-component/Accounting";
import { Faq } from ".//routes/faq/Faq";
import { About } from ".//components/about-component/about-component";
import { ProductCare } from "./productcare-component/ProductCare";
import { Dealer } from "./routes/dealer/Dealer";
import { Blog } from "./routes/blog/Blog";
import { Team } from "./routes/team/Team";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/automotivetint" element={<Automotivetint />} />
        <Route
          path="/services/paintprotectionfilm"
          element={<PaintProtection />}
        />
        <Route path="/services/home-office" element={<HomeOffice />} />
        <Route path="/myaccount" element={<Authorization />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/news" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/productcare" element={<ProductCare />} />
        <Route path="/dealer" element={<Dealer />} />

        <Route index element={<Footer />} />
      </Route>
    </Routes>
  );
};

export default App;
