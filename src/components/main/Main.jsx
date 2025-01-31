import React from "react";
import "./Main.scss";
import GirlHero from "../../assets/img-1 hero girl.png";
import DonationImg from "../../assets/img-2 donation img.png";
import Icon1 from "../../assets/icon1.svg";
import Icon2 from "../../assets/icon2.svg";
import Icon3 from "../../assets/icon3.svg";
import Icon4 from "../../assets/icon4.svg";
import Icon5 from "../../assets/icon5.svg";
import Icon6 from "../../assets/icon6.svg";

function Main() {
  const blocks = [
    {
      id: 1,
      icon: Icon1,
      title: "Сортировка",
      desc: "Разделите мусор на пластик, стекло, бумагу, металл и органику.",
    },
    {
      id: 2,
      icon: Icon2,
      title: "Сканирование",
      desc: "Найдите ближайший пункт приема и зарегистрируйте отходы в приложении",
    },
    {
      id: 3,
      icon: Icon3,
      title: "Сдача",
      desc: "Отнесите отходы в специальные контейнеры или станции переработки.",
    },
    {
      id: 4,
      icon: Icon4,
      title: "Бонусы",
      desc: "Получайте экопойнты за сдачу отходов и меняйте на скидки и подарки.",
    },
    {
      id: 5,
      icon: Icon5,
      title: "Переработка",
      desc: "Следите за переработкой и вашим вкладом в экологию.",
    },
    {
      id: 6,
      icon: Icon6,
      title: "ЭкоГерой",
      desc: "Участвуйте в челленджах и соревнуйтесь за титул экоактивиста.",
    },
  ];

  return (
    <main>
      <section>
        <div className="container">
          <div className="section1">
            <div className="main__content1">
              <h2>Одни мы можем мало, вместе — значительно больше.</h2>
              <h6>
                We Code Convent foundation manage wastage for needy peoples
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                nobis voluptates modi.
              </p>
            </div>
            <div className="main__content2">
              <img src={GirlHero} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section_bg_blue">
        <div className="container">
          <div className="section2">
            <div className="main_content1">
              <img src={DonationImg} alt="" />
            </div>
            <div className="main_content2">
              <h2>О нас</h2>
              <p>
                Наша платформа делает переработку удобной и выгодной: сортируйте
                мусор, находите пункты приёма, получайте бонусы. Мы объединяем
                технологии и геймификацию, превращая отходы в ресурсы и заботясь
                о планете.
              </p>
              <p>
                Мы вдохновляем людей на осознанное потребление, делая экологию
                частью повседневной жизни. Наши партнеры поддерживают
                инициативу, предлагая бонусы за участие.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="section3">
            <h2>Как это работает</h2>
            <div className="main__content">
              {blocks.map((item) => (
                <div className="block" key={item.id}>
                  <img src={item.icon} alt="" className="block_img" />
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#e6edff"}} >
        <div className="container">
          <div className="section4">
            <h2>Связаться с нами</h2>
            <p>
              Заполните данную форму и мы свяжемся с вами в ближайшее время.
            </p>
            <form action="">
              <input type="text" placeholder="Ваше имя" />
              <input type="email" placeholder="Почта" />
              <input type="number" placeholder="Номер тел" />
              <textarea placeholder="Сообщение"></textarea>
              <button>Отправить</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
