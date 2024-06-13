import User from "./UserInterface";


interface ContextType {
  isAuthorized: boolean;
  setIsAuthorized: (value: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
}
export default ContextType