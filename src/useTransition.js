import React from "react";

const useTransition = (config) => {
    const [progress, setProgress] = React.useState(0);

    const _in = () => {
        setProgress(1)
    };

    const out = () => {
        setProgress(0)
    };

    return {
        in: _in,
        out,
        progress,
    };
};

export default useTransition;
