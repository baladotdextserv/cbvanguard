import { Skeleton, Stack } from "@mui/material";

export default function LoadingSkeleton() {
  return (
    <Stack direction='column' spacing={2} padding={2}>
      <Skeleton variant='rectangular' height={25} />
      <Skeleton variant='rectangular' height={25} />
      <Skeleton variant='rectangular' height={25} />
      <Skeleton variant='rectangular' height={25} />
      <Skeleton variant='rectangular' height={25} />
    </Stack>
  );
}
