import React, { createContext, useState } from 'react';

export const RoleContext = createContext(null);

function RoleProvider({ children }) {
  const [role, setRole] = useState(null);

  const updateRole = (newRole) => {
    setRole(newRole);
  };

  return (
    <RoleContext.Provider value={{ role, updateRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export default RoleProvider;
