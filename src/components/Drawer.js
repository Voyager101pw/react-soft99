function Drawer() {
    return (
        <div style={{ display: 'none' }} className="drawerOverlay">
            <div className="drawerBlock">
                <h2 className="d-flex mb-20 justify-between">Корзина <img widt={30} height={30} className="btn_delete_item mr-15 cu-p" src="/img/delete_item.svg" alt="" />
                </h2>
                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <img className="mr-20" widt={70} height={70} src="img/goods/1.png" alt="" />
                        <div className='mr-15'>
                            <p>Твердый воск для белых авто - Fusso 12 Months</p>
                            <b>1 250 руб.</b>
                        </div>
                        <img className="btn_delete_item mr-15" src="/img/delete_item.svg" alt="" />
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <img className="mr-20" widt={70} height={70} src="img/goods/1.png" alt="" />
                        <div className='mr-15'>
                            <p>Твердый воск для белых авто - Fusso 12 Months</p>
                            <b>1 250 руб.</b>
                        </div>
                        <img className="btn_delete_item mr-15" src="/img/delete_item.svg" alt="" />
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul >
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>2 500 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>125 руб.</b>
                        </li>
                    </ul>
                    <button className='greenButton'>Оформить заказ!<img src='img/arrow.svg' /></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;