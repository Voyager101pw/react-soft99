function Header() {
    return (
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
    )
}

export default Header;