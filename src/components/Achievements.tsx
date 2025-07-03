import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Achievements = () => {
  const stats = [
    { label: "Учеников обучено", value: "500+", icon: "Users" },
    { label: "Лет опыта", value: "15", icon: "Clock" },
    { label: "Успешно сдали ЕГЭ", value: "98%", icon: "Award" },
    { label: "Средний балл ЕГЭ", value: "87", icon: "Target" },
  ];

  const achievements = [
    {
      title: "Лучший преподаватель года",
      description: "Региональный конкурс педагогического мастерства",
      year: "2023",
      icon: "Trophy",
    },
    {
      title: "Автор методических пособий",
      description: "Разработка уникальных материалов для подготовки к ЕГЭ",
      year: "2022",
      icon: "BookOpen",
    },
    {
      title: "Благодарность от Министерства образования",
      description: "За выдающиеся достижения в обучении",
      year: "2021",
      icon: "Award",
    },
  ];

  const examResults = [
    { exam: "ЕГЭ по русскому языку", score: 98, students: 45 },
    { exam: "ОГЭ по русскому языку", score: 95, students: 38 },
    { exam: "Литература ЕГЭ", score: 92, students: 22 },
    { exam: "Сочинение (итоговое)", score: 96, students: 67 },
  ];

  return (
    <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Достижения</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Результаты работы, которыми я горжусь
          </p>
        </div>

        {/* Статистика */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow"
            >
              <Icon
                name={stat.icon as any}
                className="text-purple-600 mx-auto mb-4"
                size={32}
              />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Награды и достижения */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Награды и признания
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <Icon
                        name={achievement.icon as any}
                        className="text-purple-600"
                        size={24}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {achievement.title}
                        </h4>
                        <span className="text-sm text-purple-600 font-medium">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Результаты экзаменов */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Результаты учеников
            </h3>
            <div className="space-y-6">
              {examResults.map((result, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-900">
                        {result.exam}
                      </h4>
                      <span className="text-sm text-gray-600">
                        {result.students} учеников
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">
                        Средний балл
                      </span>
                      <span className="font-semibold text-purple-600">
                        {result.score}%
                      </span>
                    </div>
                    <Progress value={result.score} className="h-2" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Отзывы */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Отзывы учеников
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Анна Петрова",
                role: "Выпускница 2023",
                text: "Благодаря Елене Викторовне сдала ЕГЭ на 94 балла! Отличный преподаватель.",
                rating: 5,
              },
              {
                name: "Михаил Сидоров",
                role: "Ученик 10 класса",
                text: "Очень понятно объясняет, стал лучше понимать русский язык.",
                rating: 5,
              },
              {
                name: "Ольга Иванова",
                role: "Мама ученика",
                text: "Сын с удовольствием ходит на занятия. Заметен прогресс в учёбе.",
                rating: 5,
              },
            ].map((review, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="text-yellow-400 fill-current"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                <div>
                  <div className="font-medium text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
