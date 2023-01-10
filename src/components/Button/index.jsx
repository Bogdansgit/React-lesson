import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from "../../images/arrow.svg"
import "./style.scss";

function Button ({children, link, withIcon, onClick}) {

	return (
		{ link 
			? withIcon
				? <Link to={link} className="button">{children} <ArrowIcon /></Link>
				: <Link to={link} className="button">{children}</Link>
			: <button onClick={onClick} className="button">{children}</button>
		}
	)
}

export default Button;