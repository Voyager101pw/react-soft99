import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className='d-flex align-center'>
          <img width={70} height={55} src="img/logo.png" />
          <div className='headerInfo'>
            <h3 className='text-uppercase'>React Soft99</h3>
            <p className='opacity-4'>Магазин лучшей автохимии.</p>
          </div>
        </div>
        <ul className='headerInfo d-flex'>
          <li className='mr-30'>
            <img widt={18} height={18} src="img/cart.svg" className='mr-15' />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="img/user.svg" alt="User Account" />
          </li>
        </ul>
      </header>


      <div className="content p-40">
        <h1 className='mb-40'>Вся автокосметика</h1>

        <div className="avtohim d-flex">
          <div className="card">
            <img width={125} height={125} src="/img/goods/1.png" alt="" />
            <h5>Твердый воск для белых авто - Fusso 12 Months</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>ЦЕНА:</span>
                <b>1 250 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/Button.jpg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={120} height={120} src="/img/goods/2.png" alt="" />
            <h5>Твердый воск для белых авто - Fusso 12 Months</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>ЦЕНА:</span>
                <b>750 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/Button.jpg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={125} height={125} src="/img/goods/3.png" alt="" />
            <h5>Твердый воск для белых авто - Fusso 12 Months</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>ЦЕНА:</span>
                <b>890 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/Button.jpg" alt="" />
              </button>
            </div>
          </div>


          <div className="card">
            <img width={125} height={125} src="/img/goods/4.png" alt="" />
            <h5>Твердый воск для белых авто - Fusso 12 Months</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>ЦЕНА:</span>
                <b>870 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/Button.jpg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={125} height={125} src="/img/goods/5.png" alt="" />
            <h5>Твердый воск для белых авто - Fusso 12 Months</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>ЦЕНА:</span>
                <b>500 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/Button.jpg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={125} height={125} src="/img/goods/6.png" alt="" />
            <h5>Твердый воск для белых авто - Fusso 12 Months</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>ЦЕНА:</span>
                <b>1 000руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/Button.jpg" alt="" />
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
