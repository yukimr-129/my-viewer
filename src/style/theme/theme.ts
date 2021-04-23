import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                margin: '0',
                padding: '0',
                height: '100%',
                width: '100%',
                position: 'relative',
                boxSizing: 'border-box'
            },
            a: {
                color: '#3ea6ff',
            }
        }
    }
})

export default theme