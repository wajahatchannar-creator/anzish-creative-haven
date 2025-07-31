import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BeautyPortfolio from "./pages/BeautyPortfolio";
import FashionPortfolio from "./pages/FashionPortfolio";
import CraftPortfolio from "./pages/CraftPortfolio";
import FloralPortfolio from "./pages/FloralPortfolio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/beauty-portfolio" element={<BeautyPortfolio />} />
          <Route path="/fashion-portfolio" element={<FashionPortfolio />} />
          <Route path="/craft-portfolio" element={<CraftPortfolio />} />
          <Route path="/floral-portfolio" element={<FloralPortfolio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
