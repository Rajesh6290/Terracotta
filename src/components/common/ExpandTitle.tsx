import React, { useState } from "react";

const ExpandTitle = ({ text, limit, textStyle }: any) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const words = text.split(" ");
    const displayText = expanded ? text : words.slice(0, limit).join(" ");

    return (
        <div className={`text-[1rem] text-gray-800 ${textStyle}`}>
            {displayText}


        </div>
    );
};
export default ExpandTitle;


