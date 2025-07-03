import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Преподаватель
                <span className="text-purple-600 block">русского языка</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Помогаю освоить красоту и богатство русского языка через
                современные методики и индивидуальный подход к каждому ученику
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на урок
              </Button>
              <Button variant="outline" size="lg" className="border-purple-200">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Учеников</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">15</div>
                <div className="text-sm text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Сдали ЕГЭ</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl flex items-center justify-center">
                <Icon name="User" size={120} className="text-purple-400" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
