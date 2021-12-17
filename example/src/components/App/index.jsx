import React from "react";
import { Flasher } from "../Flasher";
import styles from "./app.module.css";
import { useTransition } from "react-progress";

const App = () => {

    return (
        <div className={styles.wrap}>
            <Flasher>
                <div className={styles.title}>Ben Was Here</div>
            </Flasher>
        </div>
    );
};

export { App };
