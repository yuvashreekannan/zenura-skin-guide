import { Heart, Mail, Phone, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">ZENURA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered skin health assistance for every stage of life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/diagnosis" className="text-muted-foreground hover:text-foreground">AI Diagnosis</a></li>
              <li><a href="/pregnancy" className="text-muted-foreground hover:text-foreground">Pregnancy Care</a></li>
              <li><a href="/menstruation" className="text-muted-foreground hover:text-foreground">Menstrual Health</a></li>
              <li><a href="/menopause" className="text-muted-foreground hover:text-foreground">Menopause Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">support@zenura.ai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Medical Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex items-start space-x-3 p-4 bg-secondary-soft rounded-lg">
            <Shield className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-secondary mb-1">Important Medical Disclaimer</p>
              <p className="text-muted-foreground">
                ZENURA is an AI assistant designed to provide general skin health information and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified dermatologist or healthcare provider for proper medical evaluation and treatment of skin conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ZENURA. All rights reserved. Made with ❤️ for healthier skin.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;