import React from "react";
import {
    useMenu,
    LayoutProps,
    useRouterContext,
    useRefineContext,
    ITreeMenu,
} from "@pankod/refine-core";


export const NavBar: React.FC<LayoutProps> = ({ children }) => {
       const { menuItems, selectedKey } = useMenu();
    const { Link } = useRouterContext();

    const renderMenuItems = (items: ITreeMenu[]) => {
        return (
            <>
                {items.map(({ name, label, icon, route, children, list }) => {
                    if (!list) {
                        return (
                            <li key={label}>
                                <span>{label ?? name}</span>
                                {children ? renderMenuItems(children) : null}
                            </li>
                        );
                    }

                    const isSelected = route === selectedKey;

                    return (
                        <li key={label}>
                            <Link
                                to={route}
                                style={{
                                    fontWeight: isSelected ? "bold" : "normal",
                                }}
                            >
                                {icon}
                                <span>{label ?? name}</span>
                            </Link>
                        </li>
                    );
                })}
            </>
        );
    };
    

    return (
        <div>
            <div>
                <Link to="/">
                    <img className="logo" src="../../assets/images/logo.svg" width="200"  alt="logo"/>
                </Link>
                <Link to='/about-us'>
                    <p>About us</p>
                </Link>
                <Link to='/bots/create'>
                    <p>Add a new bot</p>
                </Link>
               
                
            </div>
            <div>{children}</div>
        </div>
    );
};
