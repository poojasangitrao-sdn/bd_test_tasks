import React from "react";

const TitleComponent = ({title}) => {
    var defaultTitle = '⚛️ app';
    return (
        <div>
            <meta charSet="utf-8" />
            <title>{title ? title : defaultTitle}</title>
        </div>
    );
};

export default TitleComponent;
