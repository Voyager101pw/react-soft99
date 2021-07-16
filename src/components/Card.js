function Card(price) {
  return (
    <div className="card">
      <div className="favorite">
        <img width={32} height={32} src="/img/off_like.svg" alt="Unlike " />
      </div>
      <div className="divImgGood">
        <img src="/img/goods/1.png" alt="" />
      </div>
      <h5>Твердый воск для белых авто - Fusso 12 Months</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>ЦЕНА:</span>
          <b>122222 руб.</b>
        </div>
        <button>
          <img width={11} height={11} src="/img/Button.jpg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Card;