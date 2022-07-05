import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";

export default function AddCategoryDialog({ isDialogOpened, handleCloseDialog }) {
  useEffect(() => {
    handleClickOpen();
  }, []);

  let txCategoryName = React.createRef();
  let ddlCategoryType = React.createRef();


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

    console.log('txCategoryName.current.value:', txCategoryName.current.value.toLowerCase());
    console.log('ddlCategoryType.current.value:', ddlCategoryType.current.value);

    const headers = new Headers();

    headers.append("Content-Type", "application/json");

    fetch("http://localhost:3004/categories/", {
      headers: headers,
      method: "POST",
      body: JSON.stringify({
        key: txCategoryName.current.value.toLowerCase(),
        name: txCategoryName.current.value,
        type: ddlCategoryType.current.value
        })
    })
    .then((response) => handleClose())
    .catch(err => console.error(err));
    

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
        <DialogTitle id="max-width-dialog-title">Adicionar Categoria</DialogTitle>
        <DialogContent>
          <DialogContentText>

            <input id="categoryName" ref={txCategoryName} placeholder="nome da categoria"></input>
            &nbsp;<select id="categoryType" ref={ddlCategoryType} placeholder="tipo da categoria">
              <option value="">Selecionar tipo:</option>
              <option value="polyline">Polyline</option>
              <option value="polygon">Polygon</option>
              <option value="mark">Mark</option>
            </select>
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