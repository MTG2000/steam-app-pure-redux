import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  useTheme,
  Typography
} from "@material-ui/core";

const RemoveDialog = ({ open, handleClose, title }) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="alert-dialog-title"
        style={{ background: theme.palette.primary.main }}
      >
        {"Remove Game From Library ?"}
      </DialogTitle>
      <DialogContent style={{ background: theme.palette.primary.main }}>
        <DialogContentText id="alert-dialog-description" color="textPrimary">
          Are You Sure You Want To Remove "{" "}
          <Typography component="span" color="textSecondary">
            {title}
          </Typography>{" "}
          " from your library PERMENANTLY ??
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ background: theme.palette.primary.main }}>
        <Button onClick={() => handleClose(true)} style={{ color: "#f42e2e" }}>
          Remove
        </Button>
        <Button
          onClick={() => handleClose(false)}
          style={{ color: "#fff" }}
          autoFocus
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RemoveDialog;
