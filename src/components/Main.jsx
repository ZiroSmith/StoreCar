import Auto1_Img from "../images/Auto1_Img.svg";
import Auto2_Img from "../images/Auto2_Img.svg";
import Auto3_Img from "../images/Auto3_Img.svg";
import mobile_Img from "../images/mobile_Img.svg";

function Main() {
  return (
    <main className="main">
      <section>
        <h1 className="сatalog__title">
          Теперь услуги дилерского центра Вы можете можете получить онлайн!
        </h1>
        <div className="card__container">
          <div className="card card__large">
            <h3 className="card__title">
              Диагностика автомобиля <br /> перед покупкой
            </h3>
            <p className="card__text">
              Расскажем обо всех скрытых дефектах
              <br /> автомобиля с пробегом
            </p>
            <div className="card__action card__action_long">
              <button className="card__button">Записаться</button>
              <img className="card__img card__img_long" src={Auto1_Img} />
            </div>
          </div>
          <div className="card">
            <h3 className="card__title">
              Онлайн показ автомобиля по
              <br /> видеосвязи
            </h3>
            <p className="card__text">
              Проведём онлайн-показ интересующего
              <br /> автомобиля в удобное для Вас время
            </p>
            <div className="card__action">
              <button className="card__button">Оставить заявку</button>
              <img className="card__img" src={Auto2_Img} />
            </div>
            <div className="card__background_play" />
          </div>
          <div className="card">
            <h3 className="card__title">Онлайн бронирование</h3>
            <p className="card__text card__text_long">
              Забронируйте понравившийся
              <br /> автомобиль без визита в дилерский центр
            </p>
            <div className="card__action">
              <button className="card__button card__button_long">
                Забронировать
              </button>
              <img className="card__img" src={mobile_Img} />
            </div>
          </div>
          <div className="card card__large">
            <h3 className="card__title">
              Онлайн оценка автомобиля с<br /> пробегом
            </h3>
            <p className="card__text">
              Узнайте предварительную стоимость
              <br /> автомобиля за 1 мин, указав его параметры
            </p>
            <div className="card__action card__action_long">
              <button className="card__button">Оценить</button>
              <img className="card__img card__img_long" src={Auto3_Img} />
            </div>
            <div className="card__background_find" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
