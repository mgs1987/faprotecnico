// import { useContext, createContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     !!sessionStorage.getItem("token")
//   );

//   const logout = () => {
//     setIsAuthenticated(false);
//     sessionStorage.removeItem("token");
//     sessionStorage.removeItem("token");
//   };
//   return (
//     <>
//       <AuthContext.Provider
//         value={{ logout, isAuthenticated, setIsAuthenticated }}
//       >
//         {children}
//       </AuthContext.Provider>
//     </>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
