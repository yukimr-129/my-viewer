import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                margin: '0',
                padding: '0',
                height: '100%',
                width: '100%',
                position: 'relative',
            }
        }
    }
})