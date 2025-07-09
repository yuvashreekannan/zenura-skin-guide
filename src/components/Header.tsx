
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, UserCheck } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/diagnosis", label: "AI Diagnosis" },
    { path: "/pregnancy", label: "Pregnancy" },
    { path: "/menstruation", label: "Menstruation" },
    { path: "/menopause", label: "Menopause" },
    { path: "/faq", label: "FAQ" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card border-b shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/lovable-uploads/0726a3b6-fe88-4513-97de-c9ed19be7e65.png" 
                alt="ZENURA Logo"
                className="w-10 h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <span className="text-2xl font-bold text-primary">ZENURA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground shadow-medium"
                    : "text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="border-2 hover:border-primary hover:bg-primary/10">
                <UserCheck className="w-4 h-4 mr-2" />
                Connect Dermatologist
              </Button>
              <Button variant="medical" size="sm" className="shadow-medium hover:shadow-strong">
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask AI Assistant
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-lg hover:bg-muted border-2 border-transparent hover:border-primary/20 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 border-t pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground shadow-medium"
                    : "text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 space-y-3">
              <Button variant="outline" size="sm" className="w-full border-2 hover:border-primary hover:bg-primary/10">
                <UserCheck className="w-4 h-4 mr-2" />
                Connect Dermatologist
              </Button>
              <Button variant="medical" size="sm" className="w-full shadow-medium hover:shadow-strong">
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask AI Assistant
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
