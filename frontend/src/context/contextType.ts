type ContextType = {
  isAuthorized: boolean;
  setIsAuthorized: (value: boolean) => void;
  user: object;
  setUser: (user: object) => void;
};

export default ContextType;
