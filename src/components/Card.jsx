import React from "react";

function Card({ children,bg='bg-gray-100' }) {
    return (<>
        <div className={`p-4 rounded-lg ${bg}`}>
        {children}
    </div>
    </>)
}

export default Card;
