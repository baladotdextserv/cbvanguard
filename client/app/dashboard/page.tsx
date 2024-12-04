"use client";

import { logout } from "@/store/auth/authSlice";
import { useDispatch, useSelector } from "@/store/hooks";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  const handleDemoLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Box className='p-4'>
        <Typography variant='h4' component='h1'>
          Welcome to Dashboard
        </Typography>
        {user && (
          <Typography variant='body1' className='mt-2'>
            Hello, user!
          </Typography>
        )}
        <Button variant='contained' onClick={handleDemoLogout} className='mt-2'>
          Logout
        </Button>
      </Box>
    </>
  );
}
