import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { ROUTES } from '@/src/feature/navigation/routes'

const ProtectedLayout = () => {
    const isAuthenticated = true; // Replace with your actual auth state
    
    if(!isAuthenticated) {
        return <Redirect href={ROUTES.GUEST as any}/>;
    }

    return (
        <Stack>
            <Stack.Screen name={ROUTES.INDEX} options={{ headerShown: false}} />
        </Stack>
    )
}

export default ProtectedLayout
