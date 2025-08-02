import styled from "@emotion/styled";
import Switch from "@mui/material/Switch";
import Icon from "@mui/material/Icon";
import { useTheme, type Theme as MuiTheme } from "@mui/material/styles";

const CustomSwitch = styled(Switch)(({ theme }: { theme: MuiTheme }) => ({
  width: 60,
  height: 40,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    padding: 2,
    backgroundColor: `${theme.palette.background.default} !important`,
    transform: "translateX(8px) translateY(8px)",
    "&.Mui-checked": {
      color: `${theme.palette.primary.main} !important`,
      transform: "translateX(28px) translateY(8px)",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    borderRadius: 40 / 2,
    backgroundColor: "gray",
  },
}));

export function ThemeSwitch({
  onChange,
  checked,
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}) {
  const theme = useTheme();
  return (
    <CustomSwitch
      data-testid="theme-switch"
      icon={
        <Icon color="primary" fontSize="small">
          light_mode
        </Icon>
      }
      checkedIcon={<Icon fontSize="small">dark_mode</Icon>}
      checked={checked}
      onChange={onChange}
      theme={theme}
    />
  );
}
