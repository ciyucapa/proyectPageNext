import Link from "next/link";
import PropTypes from 'prop-types';

export const LOGIN_ICON = "ItemNav/LOGIN_ICON";
export const HOME_ICON = "ItemNav/HOME_ICON";
export const REGISTER_ICON = "ItemNav/REGISTER_ICON";
export const PRODUCT_ICON = "ItemNav/PRODUCT_ICON";

const ItemNav = (props) => {
    const {
        title,
        href,
        isIcon,
    } = props

    return(
        <>
            <Link href={href}>
                <a className="col-mf menu-title">
                    {isIcon === HOME_ICON && (
                        <div style={{display: 'flex'}}>
                            <img src="/home.png" alt={"home-icon"} className="icon" />
                            <span>{title}</span>
                        </div>
                    )}
                    {isIcon === LOGIN_ICON && (
                        <div style={{display: 'flex'}}>
                            <img src="/login-access.png" alt={"login-icon"} className="icon" />
                            <span>{title}</span>
                        </div>
                    )}
                    {isIcon === REGISTER_ICON && (
                        <div style={{display: 'flex'}}>
                            <img src="/register.png" alt={"register-icon"} className="icon" />
                            <span>{title}</span>
                        </div>
                    )}
                    {isIcon === PRODUCT_ICON && (
                        <div style={{display: 'flex'}}>
                            <img src="/product.png" alt={"product-icon"} className="icon" />
                            <span>{title}</span>
                        </div>
                    )}
                </a>
            </Link>
        </>
    );
};

ItemNav.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    isIcon: PropTypes.bool.isRequired,
};

ItemNav.defaultProps = {};

export default ItemNav;
