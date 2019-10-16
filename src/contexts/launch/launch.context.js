import { createContext } from "react";

const LaunchContext = createContext(undefined);
// lag gjerne et objekt med de kun de aktuelle props og instansier det slik;
// createContext({ blah: blah})

export default LaunchContext;
