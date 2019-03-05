import React from 'react'
const themes = {
    light: {
        foreground: '#ffffff',
        background: '#222222',
      },
      dark: {
        foreground: '#000000',
        background: '#eeeeee',
      }
}

const ThemesContext = React.createContext(themes.dark)

export {themes,ThemesContext} 

