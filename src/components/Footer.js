import React from 'react'

import footerLogo from '../img/yondyLogo.jpg';

import './Footer.css';

class Footer extends React.Component {

    render() {
        return (
            <div className="Footer">
                <div className="Footer__logo">
                    <p>Created by: </p>
                    <a href="http://yondy.co.uk" target="_blank"><img className="Footer__logo__img" src={footerLogo} alt=""/></a>
                </div>
            </div>
        )
    }
}

export default Footer;