import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

export default function LandingPage() {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Header />
            <Slider />
            <Footer />
        </div>
    );
}