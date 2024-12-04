import { Component, ReactNode } from "react";
import { ThemeContext } from "../pages/hooks/useContext";

export default class ClassContextComponent extends Component {
    themeStyles(dark: any) {
        return {
            backgroundColor: dark ?"#333" : "#CCC",
            color: dark ? "#CCC" : "#333",
            padding: '2rem',
            margin: '2rem'
        }
    }
    render(): ReactNode {
        return (
            <ThemeContext.Consumer>
                {(darkTheme: any) => {
                    return <div style={this.themeStyles(darkTheme)}>Class Theme</div>
                }}
            </ThemeContext.Consumer>
        )
    }
}