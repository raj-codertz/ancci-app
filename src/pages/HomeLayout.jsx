import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
import NavLInks from "../components/NavLInks.jsx";
import BannerRight from "../components/BannerRight.jsx";
import Footer from "../components/Footer.jsx";
import '../assets/css/styles.css'
const HomeLayout = () => {
    return (
        <div>
                <Header />
                <NavLInks />
                <BannerRight />
                <Outlet />
                <Footer />
        </div>
    );
};
export default HomeLayout;