import React from 'react';

const NavBarButtons = () => {
    return (
        <div className="navbar-end">
            <Link href="/myPlan" className="btn">
                Plan (0)
            </Link>
            <Link href="/myPlan" className="btn">
                Saved (0)
            </Link>
        </div>
    );
};

export default NavBarButtons;