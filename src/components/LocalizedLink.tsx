import { Link as RouterLink, LinkProps } from "react-router-dom";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import { forwardRef } from "react";

/**
 * Drop-in replacement for react-router-dom's Link that automatically
 * prefixes the `to` prop with the current language.
 */
const LocalizedLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, ...props }, ref) => {
    const localizedPath = useLocalizedPath();

    const localizedTo = typeof to === "string"
      ? localizedPath(to)
      : { ...to, pathname: localizedPath(to.pathname || "/") };

    return <RouterLink ref={ref} to={localizedTo} {...props} />;
  }
);

LocalizedLink.displayName = "LocalizedLink";

export default LocalizedLink;
