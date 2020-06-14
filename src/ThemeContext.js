import { createContext } from "react"

// Context pretty serves same purpose as redux. It is a global store of state that other components can access
// Normally data in react only flows downward but in some cases like theme or login data a store helps a lot
// In this case the context is a hook. So reason we have empty function is because that would be the updater function
const ThemeContext = createContext(["green", () => {}])

export default ThemeContext