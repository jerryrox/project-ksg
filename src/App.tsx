import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { NavUtil } from "./utils/NavUtil";
import { HomePage } from "./pages/home/HomePage";
import { AttendPage } from "./pages/attend/AttendPage";

export function App() {
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <div className="p-0 m-0 w-screen">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <HashRouter>
                    <Routes>
                        <Route path={NavUtil.getHomePath()} Component={HomePage}/>
                        <Route path={NavUtil.getAttendPath("{id}")} Component={AttendPage}/>
                    </Routes>
                </HashRouter>
            </ThemeProvider>
        </div>
    );
}