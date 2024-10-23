import React from 'react';
import {Container} from "react-bootstrap";
import {useLocation} from "react-router-dom";

const Footer = () => {

    const href  = useLocation()
    console.log(href.pathname)
    return (
        <>
            <div className={href.pathname.slice(0,8) === "/profile" || href.pathname === "/blog" || href.pathname === "/places/history" ? "footer" : "footer_profile"}
            >
                <Container className="d-flex justify-content-center align-items-center">
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href={process.env.REACT_APP_API_URL + 'policy/TermsOfUse.pdf'}
                        download="TermsOfUse.pdf"
                    >
                        Правила Arento.
                    </a>&nbsp;<a
                        rel="noreferrer"
                        target="_blank"
                        href={process.env.REACT_APP_API_URL + 'policy/ConfidencePolicy.pdf'}
                        download="ConfidencePolicy.pdf"
                    >
                        Политика конфиденциальности.
                    </a>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href={process.env.REACT_APP_API_URL + 'policy/AgreementOffer.pdf'}
                        download="AgreementOffer.pdf"
                    >
                        &nbsp;Оплачивая услуги на Arento, вы принимаете&nbsp;оферту.
                    </a>
                </Container>
            </div>
        </>
    );
};

export default Footer;