import "./style.scss";

function NavList({children, orientation}) {

    const navStyle = orientation === 'vertical' ? 'vertical' : 'horizontal';

    return (
        <nav>
            <ul className={navStyle}>
                {children}
            </ul>
        </nav>
    );
}

export default NavList;