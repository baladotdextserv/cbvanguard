import { Box } from "@mui/material";

type LandingWrapperProps<T extends React.HTMLAttributes<HTMLDivElement>> = T & {
  children: React.ReactNode;
};

export default function LandingWrapper<T extends React.HTMLAttributes<HTMLDivElement>>({
  children,
  ...props
}: LandingWrapperProps<T>) {
  return (
    <Box id={props.id} sx={{ flexGrow: 1 }} className='min-h-screen p-4 py-12'>
      {children}
    </Box>
  );
}
