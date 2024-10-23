import React from 'react';

const LegalInfoText = () => {
    return (
        <>
            <a
                rel="noreferrer"
                target="_blank"
                href={process.env.REACT_APP_API_URL + 'policy/TermsOfUse.pdf'}
                download="TermsOfUse.pdf"
            >
                Правила Arento
            </a>
            <br></br>
            <a
                rel="noreferrer"
                target="_blank"
                href={process.env.REACT_APP_API_URL + 'policy/ConfidencePolicy.pdf'}
                download="ConfidencePolicy.pdf"
            >
                Политика конфиденциальности
            </a>
            <br></br>
            <a
                rel="noreferrer"
                target="_blank"
                href={process.env.REACT_APP_API_URL + 'policy/AgreementOffer.pdf'}
                download="AgreementOffer.pdf"
            >
                Договор - оферта
            </a>
            <br></br>
            <a
                rel="noreferrer"
                target="_blank"
                href={process.env.REACT_APP_API_URL + 'policy/Details.pdf'}
                download="Details.pdf"
            >
                Реквизиты
            </a>
        </>
    );
};

export default LegalInfoText;