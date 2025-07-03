import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">О себе</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Опытный преподаватель с глубокой любовью к русскому языку и
            современными методиками обучения
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Елена Викторовна Смирнова
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Преподаю русский язык уже более 15 лет. За это время помогла
                сотням учеников не только успешно сдать экзамены, но и полюбить
                наш прекрасный язык. Верю, что каждый может достичь успеха при
                правильном подходе.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon
                  name="GraduationCap"
                  className="text-purple-600"
                  size={20}
                />
                <span className="text-gray-700">
                  МГУ имени М.В. Ломоносова, филологический факультет
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Award" className="text-purple-600" size={20} />
                <span className="text-gray-700">
                  Высшая квалификационная категория
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="BookOpen" className="text-purple-600" size={20} />
                <span className="text-gray-700">
                  Автор методических пособий
                </span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon
                name="Users"
                className="text-purple-600 mx-auto mb-4"
                size={32}
              />
              <h4 className="text-lg font-semibold mb-2">
                Индивидуальный подход
              </h4>
              <p className="text-gray-600 text-sm">
                Каждый урок адаптирован под потребности и цели ученика
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon
                name="Lightbulb"
                className="text-purple-600 mx-auto mb-4"
                size={32}
              />
              <h4 className="text-lg font-semibold mb-2">Современные методы</h4>
              <p className="text-gray-600 text-sm">
                Использую интерактивные технологии и игровые элементы
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon
                name="Heart"
                className="text-purple-600 mx-auto mb-4"
                size={32}
              />
              <h4 className="text-lg font-semibold mb-2">Любовь к языку</h4>
              <p className="text-gray-600 text-sm">
                Помогаю открыть красоту и богатство русского языка
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon
                name="Target"
                className="text-purple-600 mx-auto mb-4"
                size={32}
              />
              <h4 className="text-lg font-semibold mb-2">
                Гарантия результата
              </h4>
              <p className="text-gray-600 text-sm">
                98% учеников успешно достигают поставленных целей
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
