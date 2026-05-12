/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Composer } from "./pages/Composer";
import { Offres } from "./pages/Offres";
import { Contact } from "./pages/Contact";
import { Conditions } from "./pages/Conditions";
import { GenericPage } from "./pages/GenericPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="composer" element={<Composer />} />
          <Route path="offres" element={<Offres />} />
          <Route path="contact" element={<Contact />} />
          <Route path="informations" element={<Conditions />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
