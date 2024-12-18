import UnfoldLessSharpIcon from "@mui/icons-material/UnfoldLessSharp";
import UnfoldMoreSharpIcon from "@mui/icons-material/UnfoldMoreSharp";
import { IconButton, Tooltip, useTheme } from "@mui/material";

type ToggleAllControlProps = {
  color?: string;
  openRows: boolean[];
  expandAll: () => void;
  collapseAll: () => void;
};

export default function ToggleAllControl({
  color,
  openRows,
  expandAll,
  collapseAll,
}: ToggleAllControlProps) {
  const theme = useTheme();
  const iconColor = color ? color : theme.palette.primary.main;
  return (
    <div>
      {openRows.some(open => open) ? (
        <Tooltip title='Collapse All'>
          <IconButton
            sx={{ margin: 0 }}
            color='inherit'
            onClick={collapseAll}
            aria-label='collapse all'
          >
            <UnfoldMoreSharpIcon width={18} color='secondary' />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title='Expand All'>
          <IconButton
            sx={{ margin: 0 }}
            color='inherit'
            onClick={expandAll}
            aria-label='expand all'
          >
            <UnfoldLessSharpIcon width={18} color='secondary' />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
}