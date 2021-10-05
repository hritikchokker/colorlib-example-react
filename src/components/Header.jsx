import { BsSearch } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
function Header() {
    const link = '#'
    return (
        <header>
            <h1 className="logo">
                Aranoz.
            </h1>
            <ul className="nav_wrapper">
                <li className="nav_item"><a className="navlink" href={link}>
                    Home
                </a></li>
                <li className="nav_item"><a className="navlink" href={link}>
                    Shop
                </a></li>
                <li className="nav_item"><a className="navlink" href={link}>
                    Pages
                </a></li>
                <li className="nav_item"><a className="navlink" href={link}>
                    Blog
                </a></li>
                <li className="nav_item"><a className="navlink" href={link}>
                    Contact
                </a></li>
            </ul>

            <div className="last_items">
                <p>
                    <a href={link}>
                        <BsSearch />
                    </a>
                </p>
                <p>
                    <a href={link}>
                        <AiOutlineHeart />
                    </a>
                </p>
                <p>
                    <a href={link}>
                        <AiOutlineShoppingCart />
                    </a>
                </p>
            </div>
        </header>
    )
}
export default Header;