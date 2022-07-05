import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";

export default function AssociateCategoryDialog({ isDialogOpened, handleCloseDialog }) {
  useEffect(() => {
    handleClickOpen();
  }, []);

  //const classes = useStyles();
  //const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    //setOpen(true);
    //setTimeout(() => setOpen(false), 16000);
  };

  const handleClose = () => {
    //setOpen(false);
    handleCloseDialog(false);
  };

  /* const handleMaxWidthChange = event => {
    setMaxWidth(event.target.value);
  }; */

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const handleSave = () => {
    console.log("handleSave");
  };
  const handleCancel = () => {
    console.log("handleCancel");
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={isDialogOpened}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span>Indique a categoria para o objeto desenhado:</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={() => handleSave()}>Guardar</button>
          <button onClick={() => handleCancel()}>Cancelar</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}