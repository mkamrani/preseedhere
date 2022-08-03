import axios from "axios";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const projectTag = "zh2fEl4jSRwO6K5q";
const signUpUrl = `https://api.dotenx.com/user/management/project/${projectTag}/register`;
const signInUrl = `https://api.dotenx.com/user/management/project/${projectTag}/login`;
const AuthContext = createContext({});

// Export the provider as we need to wrap the entire app with it
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [tokenExpirationTime, setTokenExpirationTime] = useState(undefined);

  const [error, setError] = useState();
  // We are using `react-router` for this example,
  // but feel free to omit this or use the
  // router of your choice.
  // const location = useLocation();

  // If we change page, reset the error state.
  // useEffect(() => {
  //   if (error) setError(null);
  // }, [location.pathname]);

  const login = async (email, password) => {
    console.log(`login with ${email} and ${password}`);
    setLoading(true);
    try {
      const response = await axios.post(signInUrl, {
        email,
        password,
      });
      console.log(`response.data.accessToken: ${response.data.accessToken}`);
      setAccessToken(response.data.accessToken);
      setTokenExpirationTime(response.data.expirationTime);
    } catch (error) {
      throw new Error(`Failed to log in: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const register = async (fullname, email, password) => {
    setLoading(true);
    try {
      await axios.post(signUpUrl, {
        fullname,
        email,
        password,
      });
    } catch (error) {
      throw new Error(`Failed to sign up: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Call the logout endpoint and then remove the user
  // from the state.
  function logout() {
    setAccessToken(undefined);
    setTokenExpirationTime(undefined);
  }

  const getToken = () => {
    return accessToken;
  };

  // TODO: check if the token is expired
  const isLoggedIn = !!accessToken;

  // Make the provider update only when it should.
  // We only want to force re-renders if the user,
  // loading or error states change.
  //
  // Whenever the `value` passed into a provider changes,
  // the whole tree under the provider re-renders, and
  // that can be very costly! Even in this case, where
  // you only get re-renders when logging in and out
  // we want to keep things very performant.
  const memoedValue = useMemo(
    () => ({
      accessToken,
      loading,
      error,
      login,
      register,
      logout,
      getToken,
      isLoggedIn,
    }),
    [accessToken, loading, error]
  );

  // We only want to render the underlying app after we
  // assert for the presence of a current user.
  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context component.
export default function useAuth() {
  return useContext(AuthContext);
}
