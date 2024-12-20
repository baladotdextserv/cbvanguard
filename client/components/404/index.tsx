import { memo } from "react";

const NotFound = memo(() => {
  return <h1>404</h1>;
});

NotFound.displayName = "NotFound";

export default NotFound;
