interface ContextType {
  isAuthorized: boolean;
  setIsAuthorized: (value: boolean) => void;
  user: string;
  setUser: (user: string) => void;
}
export default ContextType;