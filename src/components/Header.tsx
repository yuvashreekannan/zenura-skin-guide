
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, UserCheck, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/diagnosis", label: "AI Diagnosis" },
    { path: "/pregnancy", label: "Pregnancy" },
    { path: "/menstruation", label: "Menstruation" },
    { path: "/menopause", label: "Menopause" },
    { path: "/faq", label: "FAQ" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

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
                className="w-10 h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
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
            
            {/* Action Buttons */}
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

            {/* User Menu */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {user?.name?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-foreground hidden lg:block">
                  {user?.name}
                </span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout}
                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden lg:block ml-2">Logout</span>
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
            {/* User Info */}
            <div className="flex items-center space-x-3 px-4 py-3 bg-muted/50 rounded-lg mb-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/10 text-primary">
                  {user?.name?.charAt(0) || 'U'}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{user?.name}</p>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>

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
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="w-full border-destructive/20 text-destructive hover:bg-destructive/10 hover:border-destructive"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
