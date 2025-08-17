import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black font-open-sans">
      {/* Header */}
      <header className="border-b border-witty-gray/20 backdrop-blur-sm bg-black/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/img/d69592d2-d58a-4681-875e-c67d721509f0.jpg" alt="WWCOIN" className="w-10 h-10 rounded-full" />
            <h1 className="text-2xl font-montserrat font-bold text-witty-silver">Witty Wealth</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-witty-silver hover:text-white transition-colors">Главная</a>
            <a href="#airdrop" className="text-witty-silver hover:text-white transition-colors">Airdrop</a>
            <a href="#community" className="text-witty-silver hover:text-white transition-colors">Сообщество</a>
          </nav>
          <Button className="bg-gradient-to-r from-witty-silver to-witty-silver-dark text-black hover:from-witty-silver-dark hover:to-witty-silver font-semibold">
            Подключить кошелек
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-witty-silver/10 text-witty-silver border-witty-silver/30 px-4 py-2">
              🚀 $WWCOIN МЕМКОИН
            </Badge>
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-6 leading-tight">
              Witty <span className="text-transparent bg-clip-text bg-gradient-to-r from-witty-silver to-white">Wealth</span>
            </h1>
            <p className="text-xl text-witty-gray max-w-2xl mx-auto mb-8 leading-relaxed">
              Умный мемкоин с системой бесплатного распределения токенов. 
              Присоединяйтесь к финансовой революции будущего.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-witty-silver to-witty-silver-dark text-black hover:from-witty-silver-dark hover:to-witty-silver font-semibold text-lg px-8 py-3">
                <Icon name="Coins" className="mr-2" size={20} />
                Получить токены
              </Button>
              <Button size="lg" variant="outline" className="border-witty-silver text-witty-silver hover:bg-witty-silver hover:text-black font-semibold text-lg px-8 py-3">
                <Icon name="FileText" className="mr-2" size={20} />
                White Paper
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-black/50 to-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <h3 className="text-3xl font-montserrat font-bold text-witty-silver mb-2">1M+</h3>
              <p className="text-witty-gray">Токенов в обороте</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.1s'}}>
              <h3 className="text-3xl font-montserrat font-bold text-witty-silver mb-2">5K+</h3>
              <p className="text-witty-gray">Держателей</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-3xl font-montserrat font-bold text-witty-silver mb-2">100%</h3>
              <p className="text-witty-gray">Децентрализация</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.3s'}}>
              <h3 className="text-3xl font-montserrat font-bold text-witty-silver mb-2">24/7</h3>
              <p className="text-witty-gray">Торговля</p>
            </div>
          </div>
        </div>
      </section>

      {/* Airdrop Section */}
      <section id="airdrop" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
              Бесплатное распределение
            </h2>
            <p className="text-xl text-witty-gray max-w-2xl mx-auto">
              Получите токены $WWCOIN абсолютно бесплатно. Ограниченное предложение для ранних участников.
            </p>
          </div>

          <Card className="bg-black/60 border-witty-silver/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-montserrat text-witty-silver">Airdrop прогресс</CardTitle>
              <CardDescription className="text-witty-gray">
                Распределено 750,000 из 1,000,000 токенов
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-witty-silver">Прогресс</span>
                  <span className="text-witty-silver">75%</span>
                </div>
                <Progress value={75} className="h-3 bg-gray-800">
                  <div className="h-full bg-gradient-to-r from-witty-silver to-witty-silver-dark rounded-full transition-all duration-500" />
                </Progress>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-montserrat font-semibold text-witty-silver">Условия участия:</h3>
                  <ul className="space-y-2 text-witty-gray">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-400" />
                      Подписка на Twitter
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-400" />
                      Вступление в Telegram
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-400" />
                      Подключение кошелька
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-400" />
                      Ретвит анонса
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-montserrat font-semibold text-witty-silver">Награды:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-witty-gray">Базовая награда</span>
                      <span className="text-witty-silver font-semibold">100 $WWCOIN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-witty-gray">За реферала</span>
                      <span className="text-witty-silver font-semibold">+50 $WWCOIN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-witty-gray">Ранние участники</span>
                      <span className="text-witty-silver font-semibold">+200 $WWCOIN</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-witty-silver to-witty-silver-dark text-black hover:from-witty-silver-dark hover:to-witty-silver font-semibold text-lg py-3"
              >
                <Icon name="Gift" className="mr-2" size={20} />
                Участвовать в Airdrop
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-6 bg-gradient-to-r from-black/50 to-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
              Присоединяйтесь к сообществу
            </h2>
            <p className="text-xl text-witty-gray max-w-2xl mx-auto">
              Станьте частью растущего сообщества Witty Wealth и получайте последние новости.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-black/60 border-witty-silver/30 backdrop-blur-sm hover:border-witty-silver/50 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 p-4 bg-blue-500/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Icon name="MessageCircle" size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-witty-silver mb-2">Telegram</h3>
                <p className="text-witty-gray mb-4">Обсуждения, новости и поддержка сообщества</p>
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
                  Присоединиться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-witty-silver/30 backdrop-blur-sm hover:border-witty-silver/50 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 p-4 bg-cyan-500/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Icon name="Twitter" size={32} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-witty-silver mb-2">Twitter</h3>
                <p className="text-witty-gray mb-4">Актуальные обновления и анонсы проекта</p>
                <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                  Подписаться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-witty-silver/30 backdrop-blur-sm hover:border-witty-silver/50 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 p-4 bg-purple-500/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Icon name="Users" size={32} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-witty-silver mb-2">Discord</h3>
                <p className="text-witty-gray mb-4">Активные дискуссии и голосования DAO</p>
                <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black">
                  Войти в Discord
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-witty-gray/20 bg-black/80 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/img/d69592d2-d58a-4681-875e-c67d721509f0.jpg" alt="WWCOIN" className="w-8 h-8 rounded-full" />
                <h3 className="text-xl font-montserrat font-bold text-witty-silver">Witty Wealth</h3>
              </div>
              <p className="text-witty-gray">
                Умный мемкоин с системой справедливого распределения токенов.
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold text-witty-silver mb-4">Проект</h4>
              <ul className="space-y-2 text-witty-gray">
                <li><a href="#" className="hover:text-white transition-colors">White Paper</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tokenomics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold text-witty-silver mb-4">Сообщество</h4>
              <ul className="space-y-2 text-witty-gray">
                <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold text-witty-silver mb-4">Контракт</h4>
              <p className="text-witty-gray text-sm break-all">
                0x742d35Cc6473...
              </p>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" className="border-witty-silver/30 text-witty-silver hover:bg-witty-silver hover:text-black">
                  <Icon name="Copy" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-witty-silver/30 text-witty-silver hover:bg-witty-silver hover:text-black">
                  <Icon name="ExternalLink" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-witty-gray/20 mt-8 pt-8 text-center text-witty-gray">
            <p>&copy; 2024 Witty Wealth. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;