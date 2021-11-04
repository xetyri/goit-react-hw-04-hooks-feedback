import React from "react";
import s from "./Container.module.css";

export default function Container({title, children}) {
    return (
        <div className={s.Container}>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    )
}
