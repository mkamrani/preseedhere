const React = require("react");
const AuthProvider = require("./src/hooks/useAuth").AuthProvider;


// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <AuthProvider {...props}>{element}</AuthProvider>;
};
