"use client";

import { setCredentials } from "@/store/auth/authSlice";
import { useDispatch, useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: AppState) => state.customizer.activeMode);
  const router = useRouter();
  const { isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) {
    return null;
  }

  const handleDemoLogin = () => {
    dispatch(
      setCredentials({
        user: { name: "Demo User", email: "demo@example.com" },
        token: "demo-token-123",
      }),
    );
  };

  return (
    <div>
      <Box className='flex flex-col items-center justify-center min-h-[80vh] p-8'>
        <Typography variant='h4' component='h1' marginBottom={"2rem"}>
          Welcome to CB Vanguard
        </Typography>

        <Box className='w-full max-w-md space-y-4 p-6 border rounded-lg shadow-md'>
          <Typography variant='h6' className='text-center mb-4'>
            Authentication
          </Typography>

          <TextField
            fullWidth
            label='Email'
            defaultValue='demo@example.com'
            disabled
            className='mb-4'
          />

          <TextField
            fullWidth
            type='password'
            label='Password'
            defaultValue='********'
            disabled
            className='mb-4'
          />

          <div className='flex flex-col gap-2'>
            <Button variant='contained' onClick={handleDemoLogin} className='bg-primary'>
              Login
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
}
