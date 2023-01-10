import "./style.scss";


function Popup ({children, trigger, setTrigger}) {

	return (trigger) ? (
		<div className="popup">
			<div className="popup-inner">
				<button type="button" className="close-btn" onClick={() => setTrigger(false)}>X</button>
				{children}
			</div>
		</div>
	) : null
};

export default Popup;