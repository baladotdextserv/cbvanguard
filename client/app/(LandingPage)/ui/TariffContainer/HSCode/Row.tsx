import LoadingSkeleton from "../components/LoadingSkeleton";
import { getHsCodeByCode } from "@/services/hscode";
import { HSCodeType } from "@/types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton, Link, TableCell, TableRow, Typography } from "@mui/material";
import * as React from "react";

export const SingleRow = ({
  code,
  hscode,
  open,
  toggleCollapse,
}: {
  code: string | null;
  hscode: HSCodeType;
  open: boolean;
  toggleCollapse: () => void;
}) => {
  let value: string | null = hscode.hscode.toString();
  const isIRTC = value.length > 6;
  if (code == null) return null;
  if (isIRTC) value = null;

  const borderStyle = { border: "1px solid #ccc" };

  return (
    <>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset" },
          backgroundColor: open ? "primary.light" : "white",
        }}
      >
        <TableCell align='center' width='100px' sx={borderStyle}>
          {!isIRTC ? (
            <IconButton
              aria-label='expand row'
              size='small'
              sx={{ zIndex: 1 }}
              onClick={toggleCollapse}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          ) : null}
        </TableCell>
        <TableCell width='200px' sx={borderStyle}>
          <Typography variant='body1' fontWeight='600'>
            {isIRTC ? (
              <Link href={`/tariff/${hscode.hscode}`} className='underline'>
                {hscode.hscode}
              </Link>
            ) : (
              hscode.hscode
            )}
          </Typography>
        </TableCell>
        <TableCell
          width='700px'
          sx={{
            whiteSpace: "normal",
            wordWrap: "normal",
            wordBreak: "break-all",
            ...borderStyle,
          }}
        >
          <Typography
            color='textSecondary'
            variant='body1'
            sx={{ lineHeight: "1.5rem", wordSpacing: "3.5px" }}
          >
            {hscode.description}
          </Typography>
        </TableCell>
        <TableCell sx={borderStyle}>{hscode.unit}</TableCell>
        <TableCell sx={borderStyle}>test</TableCell>
        <TableCell sx={borderStyle} />
        <TableCell sx={borderStyle}>test</TableCell>
        <TableCell sx={borderStyle}>test</TableCell>
      </TableRow>
      {open && <Row code={value} />}
    </>
  );
};

export default function Row({ code }: { code: string | null }) {
  const [data, setData] = React.useState<HSCodeType[]>([]);
  const [openRows, setOpenRows] = React.useState<boolean[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (code != null) {
      const loadData = async () => {
        const res = await getHsCodeByCode(code);
        if (res != null) {
          setData(res);
          setOpenRows(new Array(res.length).fill(false));
        }
        setLoading(false);
      };
      loadData();
    } else {
      return;
    }
  }, [code]);

  const toggleCollapse = (index: number) => {
    setOpenRows(prev => {
      const newOpenRows = [...prev];
      newOpenRows[index] = !newOpenRows[index];
      return newOpenRows;
    });
  };

  return (
    <>
      {loading ? (
        <TableRow>
          <TableCell colSpan={8} align='center'>
            <LoadingSkeleton />
          </TableCell>
        </TableRow>
      ) : (
        data.map((hscode, index) => (
          <SingleRow
            code={code}
            key={index}
            hscode={hscode}
            open={openRows[index]}
            toggleCollapse={() => toggleCollapse(index)}
          />
        ))
      )}
    </>
  );
}
