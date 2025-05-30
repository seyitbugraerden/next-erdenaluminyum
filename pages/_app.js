import "react-toastify/dist/ReactToastify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/flaticon.css";
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import "../styles/sass/style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar/Navbar";
import Footer2 from "../components/footer2/Footer2";
import Scrollbar from "../components/scrollbar/scrollbar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar hclass={"wpo-header-style-3"} topbarNone={"topbar-none"} />
        <Component {...pageProps} />
        <Footer2 />
        <Scrollbar />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
