import React from "react";

export const useTransition = () => {
    const [val, setVal] = React.useState(1);

    const foo = () => setVal(val * 2);

    return { val, foo };
};
