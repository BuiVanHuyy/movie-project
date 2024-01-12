import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext();

AppContext.propTypes = {
    children: PropTypes.node,
};

function AppContext({ children }) {
    const initalStateHistory = JSON.parse(localStorage.getItem("movie_seen")) || []
    
    const [modal, setModal] = useState(false);
    const [dataId, setDataId] = useState();
    const [history, setHistory] = useState(initalStateHistory);

    useEffect(() => {
        localStorage.setItem("movie_seen", JSON.stringify(history))
    }, [history]);

    return <Context.Provider value={{ modal, setModal, dataId, setDataId, history, setHistory }}>{children}</Context.Provider>;
}

export default AppContext;
