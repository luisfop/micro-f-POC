import { jsx as _jsx } from "react/jsx-runtime";
import { Header, AppShell as MantineAppShell, Title, MantineProvider } from "@mantine/core";
// component exports
export * from "./Button";
export * from "./Header";
const AppShell = ({ title, colorScheme }) => {
    return (_jsx(MantineProvider, Object.assign({ withGlobalStyles: true, withNormalizeCSS: true, theme: {
            colorScheme: colorScheme,
        } }, { children: _jsx(MantineAppShell, Object.assign({ header: _jsx(Header, Object.assign({ height: 60, p: 'xs', sx: {
                    display: 'flex',
                } }, { children: _jsx(Title, { children: title }) })) }, { children: _jsx("h1", { children: "Hello world" }) })) })));
};
export default AppShell;
