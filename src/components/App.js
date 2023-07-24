import { useState } from "react";
import AppRouter from "./Router";
import Footer from "../routes/Footer";
import { authService } from "../firebase";

function App() {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <Footer></Footer>
    </>
  );
}

export default App;
