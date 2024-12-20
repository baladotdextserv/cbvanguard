import Scrollbar from "@/components/custom-scroll/Scrollbar";
import { setTheme, TActiveTheme } from "@/store/customizer/customizerSlice";
import { useDispatch, useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";
import { Box, BoxProps, Drawer, Grid, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IconCheck } from "@tabler/icons-react";

interface colors {
  id: number;
  bgColor: string;
  disp: TActiveTheme;
}
const thColors: colors[] = [
  {
    id: 1,
    bgColor: "#5D87FF",
    disp: "BLUE_THEME",
  },
  {
    id: 2,
    bgColor: "#0074BA",
    disp: "AQUA_THEME",
  },
  {
    id: 3,
    bgColor: "#763EBD",
    disp: "PURPLE_THEME",
  },
  {
    id: 4,
    bgColor: "#0A7EA4",
    disp: "GREEN_THEME",
  },
  {
    id: 5,
    bgColor: "#01C0C8",
    disp: "CYAN_THEME",
  },
  {
    id: 6,
    bgColor: "#FA896B",
    disp: "ORANGE_THEME",
  },
];

interface TCustomizerProps {
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomizerPanel = (props: TCustomizerProps) => {
  const { showDrawer, setShowDrawer } = props;
  const customizer = useSelector((state: AppState) => state.customizer);

  const dispatch = useDispatch();

  const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
    boxShadow: theme.shadows[8],
    padding: "10px",
    cursor: "pointer",
    justifyContent: "center",
    display: "flex",
    transition: "0.1s ease-in",
    border: "1px solid rgba(145, 158, 171, 0.12)",
    "&:hover": {
      transform: "scale(1.05)",
    },
  }));
  return (
    <div>
      {/* <Scrollbar sx={{ height: "calc(100vh - 5px)" }}> */}
      <Box p={2} display='flex' justifyContent={"space-between"} alignItems='center'>
        <Drawer
          anchor='right'
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
          PaperProps={{
            sx: {
              width: "auto",
            },
          }}
        >
          <Typography variant='h6' gutterBottom>
            Theme Colors
          </Typography>
          <Grid container spacing={2}>
            {thColors.map(thcolor => (
              <Grid item xs={4} key={thcolor.id}>
                <StyledBox onClick={() => dispatch(setTheme(thcolor.disp))}>
                  <Tooltip title={`${thcolor.disp}`} placement='top'>
                    <Box
                      sx={{
                        backgroundColor: thcolor.bgColor,
                        width: "25px",
                        height: "25px",
                        borderRadius: "60px",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        color: "white",
                      }}
                      aria-label={`${thcolor.bgColor}`}
                    >
                      {customizer.activeTheme === thcolor.disp ? <IconCheck width={13} /> : ""}
                    </Box>
                  </Tooltip>
                </StyledBox>
              </Grid>
            ))}
          </Grid>
        </Drawer>
      </Box>
      {/* </Scrollbar> */}
    </div>
  );
};

export default CustomizerPanel;
