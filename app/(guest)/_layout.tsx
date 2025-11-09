import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { ROUTES } from '@/src/feature/navigation/routes'
import { useAuth } from '@/hooks/auth/useAuth'

const GuestLayout = () => {
    const { isAuthenticated } = useAuth();
    
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
