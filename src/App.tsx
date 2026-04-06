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

const appRoutes = (
  <>
    <Route index element={<Index />} />
    <Route path="wizflussi" element={<WizFlussi />} />
    <Route path="wizmedik-reports" element={<WizMedikReports />} />
    <Route path="wizmedik" element={<WizMedik />} />
    <Route path="frizerino" element={<Frizerino />} />
    <Route path="chatko" element={<Chatko />} />
    <Route path="usluge" element={<Usluge />} />
    <Route path="usluge/izrada-web-stranica" element={<WebDevelopment />} />
    <Route path="usluge/seo-optimizacija" element={<SEOOptimizacija />} />
    <Route path="usluge/graficki-dizajn" element={<GrafickiDizajn />} />
    <Route path="portfolio/:slug" element={<ProjectDetail />} />
    <Route path="*" element={<NotFound />} />
  </>
);

const AppShell = ({ children }: { children: React.ReactNode }) => (
  <LanguageProvider>
    <HreflangTags />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
    </TooltipProvider>
  </LanguageProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppShell>
        <Routes>
          {/* Explicit language prefix routes */}
          <Route path="/en/*">
            <Route>{appRoutes}</Route>
          </Route>
          <Route path="/de/*">
            <Route>{appRoutes}</Route>
          </Route>
          <Route path="/it/*">
            <Route>{appRoutes}</Route>
          </Route>
          {/* Default (sr) – no prefix */}
          <Route path="/*">
            <Route>{appRoutes}</Route>
          </Route>
        </Routes>
      </AppShell>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
