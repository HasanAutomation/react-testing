import './header.scss'
function Header() {
    return (
        <header className='headerComponent' data-test='headerComponent'>
            <div className="wrap">
                <div className="logo">
                    <img data-test='logoIMG' className='logoIMG' src="https://source.unsplash.com/random" alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header