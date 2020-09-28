import Link from "next/link";
import React from "react";
import PropTypes from 'prop-types';

export const LOGIN_ICON = "ItemNavbar/LOGIN_ICON";
export const HOME_ICON = "ItemNavbar/HOME_ICON";
export const REGISTER_ICON = "ItemNavbar/REGISTER_ICON";
export const PRODUCT_ICON = "ItemNavbar/PRODUCT_ICON";

const ItemNavbar = (props) => {
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
                        <img src="/home.png" className="icon" />
                        <span>{title}</span>
                    </div>
                )}
                {isIcon === LOGIN_ICON && (
                    <div style={{display: 'flex'}}>
                        <img src="/login-acceder.png" className="icon" />
                        <span>{title}</span>
                    </div>
                )}
                {isIcon === REGISTER_ICON && (
                    <div style={{display: 'flex'}}>
                        <img src="/register.png" className="icon" />
                        <span>{title}</span>
                    </div>
                )}
                {isIcon === PRODUCT_ICON && (
                    <div style={{display: 'flex'}}>
                        <img src="/product.png" className="icon" />
                        <span>{title}</span>
                    </div>
                )}
            </a>
        </Link>
    </>
    );
};

ItemNavbar.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    isIcon: PropTypes.bool.isRequired,
};

ItemNavbar.defaultProps = {};

export default ItemNavbar;
