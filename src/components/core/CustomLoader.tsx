import React from "react";
import Loader from "./Loader";
const CustomLoader = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Loader />
        </div>
    );
};

export default CustomLoader;
