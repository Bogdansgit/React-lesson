import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from "../../images/arrow.svg"
import "./style.scss";

function Button ({children, ...props}) {
	const { link, withIcon, onClick } = props;

	const isIcon = withIcon ? <Link to={link} className="button">{children} <ArrowIcon /></Link>
							: <Link to={link} className="button">{children}</Link>
	return (

		link ? isIcon
			: <button type='button' onClick={onClick} className="button">{children}</button>
		
	)
}

export default Button;