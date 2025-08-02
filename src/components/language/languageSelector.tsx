import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Icon from "@mui/material/Icon";
import { useTranslation } from "react-i18next";
import "./languageSelector.scss";

const languages = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "es",
    label: "Español",
  },
];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { t } = useTranslation();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog data-testid="language-dialog" onClose={handleClose} open={open}>
      <DialogTitle>{t("language.select")}</DialogTitle>
      <List sx={{ pt: 0 }}>
        {languages.map((language) => (
          <ListItem disablePadding key={language.value}>
            <ListItemButton
              selected={language.value === selectedValue}
              onClick={() => handleListItemClick(language.value)}
            >
              <ListItemText
                className="language-selector-text"
                primary={language.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function LanguageSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    onChange(value);
  };

  return (
    <div id="language-selector" data-testid="language-select">
      <Icon
        data-testid="language-icon"
        color="primary"
        fontSize="small"
        onClick={handleClickOpen}
      >
        language
      </Icon>
      <SimpleDialog selectedValue={value} open={open} onClose={handleClose} />
    </div>
  );
}
