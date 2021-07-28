import { createContext } from "react";

const Storecontext = createContext({
    token: null,
    setToken: () => {},
})

export default Storecontext