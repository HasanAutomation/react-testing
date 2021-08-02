import './header.scss'
function Header() {
    return (
        <header className='headerComponent'>
            <div className="wrap">
                <div className="logo">
                    <img className='logoIMG' src="https://source.unsplash.com/random" alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header