const foo = () => {
    const n = Math.floor(Math.random() * 999) + 1;

    console.log("Random number: " + n);
};

module.exports = { foo };
