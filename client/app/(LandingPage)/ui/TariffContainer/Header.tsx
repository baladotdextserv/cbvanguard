import { Typography } from "@mui/material";

interface HeaderType extends React.HTMLAttributes<HTMLHeadingElement> {
  iconNode?: React.ReactNode;
  text: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  broderRadius?: string;
}

export default function Header({
  text,
  iconNode,
  variant = "h3",
  broderRadius = "0px",
  ...props
}: HeaderType) {
  return (
    <Typography
      variant={variant}
      className='font-bold uppercase flex gap-2 items-center'
      sx={{
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        padding: "0.5rem",
        marginBottom: "1rem",
        borderRadius: broderRadius,
      }}
      {...props}
    >
      {iconNode}
      {text}
    </Typography>
  );
}
