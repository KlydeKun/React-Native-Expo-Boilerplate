import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { ROUTES } from '@/src/feature/navigation/routes'

const GuestLayout = () => {
    const isAuthenticated = false; // Replace with your actual auth state
    
    if (isAuthenticated) {
        return <Redirect href={ROUTES.PROTECTED as any} />;
    }

    return (
        <Stack>
            <Stack.Screen name={ROUTES.INDEX} options={{ headerShown: false}} />
        </Stack>
    )
}

export default GuestLayout
