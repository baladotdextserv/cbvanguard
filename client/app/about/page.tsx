import PageContainer from "@/components/container/PageContainer";
import { Typography } from "@mui/material";

export default function Page() {
  return (
    <PageContainer title='About' description='This is the about page'>
      <Typography variant='h1' margin={"2rem"}>
        About
      </Typography>
    </PageContainer>
  );
}
