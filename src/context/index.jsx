import React, { useContext } from "react";

const InfoContext = React.createContext();
const UpdateInfoContext = React.createContext();

export const useInfo = () => {
  return useContext(InfoContext);
};

export const useSetInfo = () => {
  return useContext(UpdateInfoContext);
};

export const InfoProvider = ({ value, children }) => {

  const [info, setInfo] = React.useState(value);

  return (
    <InfoContext.Provider value={info}>
      <UpdateInfoContext.Provider value={setInfo}>
        {children}
      </UpdateInfoContext.Provider>
    </InfoContext.Provider>
  )
}