import { SearchTariffTable } from "./SearchTariffTable";
import PageContainer from "@/components/container/PageContainer";
import BlankCard from "@/components/shared/BlankCard";
import ParentCard from "@/components/shared/ParentCard";
import Breadcrumb from "@/components/shared/breadcrumb/Breadcrumb";
import CustomTextField from "@/components/shared/elements/CustomTextField";
import { Box, Grid, Grow, Typography } from "@mui/material";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Search Tariff",
  },
];

const SearchTariffPage = () => {
  return (
    <PageContainer title='Search Tariff' description='search tariff page'>
      <Breadcrumb title='Search Tariff' items={BCrumb} />
      <BlankCard>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography>Search Grid</Typography>
            <CustomTextField />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box>
              <SearchTariffTable />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Typography variant='body1'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid culpa illo odit
              omnis, alias vitae magnam error eum minima ducimus laboriosam perspiciatis architecto
              earum aliquam enim? Inventore tempore voluptatum consequatur.
            </Typography>
          </Grid>
        </Grid>
      </BlankCard>
    </PageContainer>
  );
};

export default SearchTariffPage;
