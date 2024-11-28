import React from "react";

function Header() {
    return (
        <header style={{padding: "10px"}}>
            <h1>
                <img
                    src={`${process.env.PUBLIC_URL}/call-icon.png`}
                    alt="Q&A Icon"
                    style={{width: "70px", height: "70px", marginRight: "5px"}}
                />
                고객센터</h1>
        </header>
    );
}

export default Header;