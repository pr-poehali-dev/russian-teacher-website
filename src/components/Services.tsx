import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "BookOpen",
      title: "Подготовка к ЕГЭ и ОГЭ",
      description:
        "Комплексная подготовка к экзаменам с разбором всех заданий и тренировкой на реальных вариантах",
      features: ["Индивидуальный план", "Пробные экзамены", "Разбор ошибок"],
      price: "от 2000 ₽/урок",
    },
    {
      icon: "Users",
      title: "Школьная программа",
      description:
        "Помощь в освоении школьной программы, повышение успеваемости и развитие языковых навыков",
      features: ["Все классы", "Домашние задания", "Контрольные работы"],
      price: "от 1500 ₽/урок",
    },
    {
      icon: "Briefcase",
      title: "Деловой русский",
      description:
        "Курс для взрослых: деловая переписка, презентации, грамотная речь для карьерного роста",
      features: [
        "Корпоративное обучение",
        "Деловой этикет",
        "Публичные выступления",
      ],
      price: "от 2500 ₽/урок",
    },
    {
      icon: "Globe",
      title: "Онлайн-занятия",
      description:
        "Удобные занятия в онлайн-формате с интерактивными материалами и персональным подходом",
      features: ["Гибкое расписание", "Цифровые материалы", "Запись занятий"],
      price: "от 1800 ₽/урок",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Направления работы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящий формат обучения для достижения ваших целей
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Icon
                    name={service.icon as any}
                    className="text-purple-600"
                    size={28}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon
                          name="Check"
                          className="text-green-500"
                          size={16}
                        />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-purple-600">
                      {service.price}
                    </span>
                    <Button
                      variant="outline"
                      className="border-purple-200 hover:bg-purple-50"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Icon name="Calendar" size={20} className="mr-2" />
            Записаться на консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
