function Main() {
  return (
    <main className="main">
      <section>
        <h1 className="сatalog__title">
          Теперь услуги дилерского центра Вы можете можете получить онлайн!
        </h1>
        <div className="card__container">
          <div className="card">
            <h3 className="card__title">Диагностика автомобиля перед покупкой</h3>
            <p className="card__text">Расскажем обо всех скрытых дефектах автомобиля с пробегом</p>
            <div className="card__action">
              <button className="card__action_button">Записаться</button>
              <img className="card__action_img" />
            </div>
          </div>
          <div className="card">
            <h3 className="card__title">онлайн показ автомобиля по видеосвязи</h3>
            <p className="card__text">Проведём онлайн-показ интересующего автомобиля в удобное для Вас время</p>
            <div className="card__action">
              <button className="card__action_button">Оставить заявку</button>
              <img className="card__action_img" />
            </div>
          </div>
          <div className="card">
            <h3 className="card__title">Онлайн бронирование</h3>
            <p className="card__text">Забронируйте понравившийся автомобиль без визита в дилерский центр</p>
            <div className="card__action">
              <button className="card__action_button">Забронировать</button>
              <img className="card__action_img" />
            </div>
          </div>
          <div className="card">
            <h3 className="card__title">онлайн оценка автомобиля с пробегом</h3>
            <p className="card__text">Узнайте предварительную стоимость автомобиля за 1 мин, указав его параметры</p>
            <div className="card__action">
              <button className="card__action_button">Оценить</button>
              <img className="card__action_img" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
