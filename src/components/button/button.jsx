import React from "react"
import './button.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Button = ({buttonText, model}) => {
    const classN = `button-container${model}`
    return(
        <div className={classN}>
            <p className="button-text">
                {buttonText}
            </p>
            {model === "1" ? 
            <div className="arrow">
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
            : null}
            {model === "2" ? 
            <div className="arrow">
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            : null}
        </div>
    )
}

export default Button