
function Card ( {children }) {
    return (
        <div className={'shadow rounded-lg overflow-hidden bg-white'}>
            {children}
        </div>
    )
}

function Header({ children }) {
    return (
        <div className={'p-4 border-b'}>
            <h1 className={'text-2xl font-semibold'}>{children}</h1>
        </div>
    )
}

function Body({ children }) {
    return (
        <div className={'leading-relaxed p-4'}>
            {children}
        </div>
    )
}


function Footer({ children }) {
    return (
        <div className={'p-4 bg-slate-50 '}>
            {children}
        </div>
    )
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;