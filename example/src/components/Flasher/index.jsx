import React from "react";
import { useTransition } from "react-progress";

const Flasher = ({ children }) => {
    const flashTransition = useTransition({
        duration: 0.25,
    });

    React.useEffect(() => {
        console.log(flashTransition);
    }, [flashTransition]);

    return <div onClick={() => flashTransition.in()}>{children}</div>;
};

export { Flasher };
