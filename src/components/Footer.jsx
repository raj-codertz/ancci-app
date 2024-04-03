import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerLine'>
            </div>
            <div className="footerNav">
                <Link to='/'>Home</Link> ---
                <Link to='/'>About The Seminary</Link> ---
                <Link to='/'>Admission </Link> ---
                <Link to='/'>Academics</Link> ---
                <Link to='/'>Faculty</Link> ---
                <Link to='/'>Student</Link> ---
                <Link to='/'>Skype</Link> ---
                <Link to='/'>Contact</Link>
                <p>© 2024 All Nations Seminary</p>
            </div>
        </div>
    );
};

export default Footer;