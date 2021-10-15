import React, { useState, useContext } from "react";

import { Wallpaper } from "../../components/Wallpaper/Wallpaper.jsx";
import { Flex } from "../../components/Display/Display.jsx";
import Box from "../../components/InitialBox/InitialBox.jsx";
import LoginForm from "../../components/Form/LoginForm.jsx";
import { Logo } from "../../components/Logo/Logo.jsx";

export default function Login() {
    return (
        <Flex>
            <Wallpaper />
            <Logo />
            <Box>
                <LoginForm />
            </Box>
        </Flex>
    )
}