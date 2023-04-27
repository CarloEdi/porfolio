import React, { useState } from "react";

const Context = React.createContext();
function ContextProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);

  const formInfo = {
    user_name: "",
    user_email: "",
    message: "",
  };
  const [formInfoState, setFormInfoState] = useState(formInfo);

  const handleChange = (e) => {
    setFormInfoState((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  function toggleSidebar() {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  }

  return (
    <Context.Provider
      value={{
        showSidebar,
        toggleSidebar,
        formInfoState,
        handleChange,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
