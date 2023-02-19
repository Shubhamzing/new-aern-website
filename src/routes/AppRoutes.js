import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LandingPage = lazy(() => import('../pages/LandingPage'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));



export default function AppRoutes() {
    return(
    <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
    );
}