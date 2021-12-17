import React from "react";

const useTransition = () => {
    const [val, setVal] = React.useState(0);

    return { val, setVal};
};

export default useTransition;
export { useTransition };
