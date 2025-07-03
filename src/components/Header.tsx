import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-purple-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="BookOpen" className="text-purple-600" size={28} />
            <span className="text-xl font-bold text-gray-900">
              Русский язык
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              О себе
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Направления
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Достижения
            </button>
          </nav>

          <Button className="bg-purple-600 hover:bg-purple-700">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
