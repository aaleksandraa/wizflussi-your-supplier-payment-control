import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import HreflangTags from "@/components/wizionar/HreflangTags";
import Index from "./pages/Index";
import WizFlussi from "./pages/WizFlussi";
import WizMedikReports from "./pages/WizMedikReports";
import WizMedik from "./pages/WizMedik";
import Frizerino from "./pages/Frizerino";
import Chatko from "./pages/Chatko";
import Usluge from "./pages/Usluge";
import SEOOptimizacija from "./pages/SEOOptimizacija";
import WebDevelopment from "./pages/WebDevelopment";
import GrafickiDizajn from "./pages/GrafickiDizajn";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * All app routes wrapped in a LanguageProvider that reads :lang from URL.
 * Serbian (sr) = no prefix, other languages = /en/, /de/, /it/ prefix.
 */
const AppRoutes = () => (
  <LanguageProvider>
    <HreflangTags />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/wizflussi" element={<WizFlussi />} />
        <Route path="/wizmedik-reports" element={<WizMedikReports />} />
        <Route path="/wizmedik" element={<WizMedik />} />
        <Route path="/frizerino" element={<Frizerino />} />
        <Route path="/chatko" element={<Chatko />} />
        <Route path="/usluge" element={<Usluge />} />
        <Route path="/usluge/izrada-web-stranica" element={<WebDevelopment />} />
        <Route path="/usluge/seo-optimizacija" element={<SEOOptimizacija />} />
        <Route path="/usluge/graficki-dizajn" element={<GrafickiDizajn />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </LanguageProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        {/* Routes with language prefix */}
        <Route path="/:lang/*" element={<AppRoutes />} />
        {/* Routes without prefix (default = sr) */}
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
