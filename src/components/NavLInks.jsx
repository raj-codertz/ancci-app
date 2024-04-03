import Links from '../utils/Links.jsx'
import {NavLink} from "react-router-dom";
const NavLInks = () => {

    return (
        <>
        <div className='bg-amber-500 flex flex-row items-center justify-around p-2'>
            {
                Links.map(link => {
                    const {text, path } = link
                    return (
                        <NavLink to={path} key={text} className='border border-amber-950'>
                            {text} |
                        </NavLink>
                    )
                })
            }
        </div>
        </>
    );
};

export default NavLInks;