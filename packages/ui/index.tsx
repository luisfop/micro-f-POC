import * as React from "react";
import { Header, AppShell as MantineAppShell, Title, MantineProvider } from "@mantine/core";

// component exports
export * from "./Button";
export * from "./Header";

const AppShell = ({ title, colorScheme }: { title: string, colorScheme?: 'dark' | "light" }) => {
    return (
        <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ 
            colorScheme: colorScheme,
        }}
        >
            <MantineAppShell header={
                <Header
                    height={60}
                    p='xs'
                    sx={{
                        display: 'flex',
                    }}
                >
                    <Title>{title}</Title>
                </Header>
            }>
                <h1>Hello world</h1>
            </MantineAppShell>
        </MantineProvider>
    )
}

export default AppShell