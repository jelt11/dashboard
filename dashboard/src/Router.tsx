import Button from "@mui/material/Button"
import { Route } from "react-router"
import { Routes } from "react-router-dom"
import { RouterLayout } from "./common/RouterLayout"
import { HomePage } from "./pages/home/home"
import { ProfilePage } from "./pages/profile/profile"
import { LoginPage } from "./pages/sign/login"

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<div>Missing Page <Button>Go Back</Button></div>} />
            <Route path="/register" element={<div>Register Page</div>} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}