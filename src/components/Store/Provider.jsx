import React from 'react'
import Context from './Context'

const StoreProvider = () => {
    return (
       <Context.Provider>
       {children}
       </Context.Provider>
    )
}

export default StoreProvider