import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PostAddIcon from '@material-ui/icons/PostAdd';
import MenuItem from '@material-ui/core/MenuItem';


export default function NewTask(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [options, setOptions] = React.useState('');

  const handleChange = (event) => {
    setOptions(event.target.value);
  };

  const handleAddTask = () => {
  props.fun({description:document.getElementById("description").value,
  responsable:{name:document.getElementById("responsable").value, email:document.getElementById("correo").value},status:document.getElementById("status") , 
  duedate: document.getElementById("duedate")});
  }
  const selection = [
    {
      value: 'Ready',
      label: 'Ready',
    },
    {
      value: 'In Progress',
      label: 'In Progress',
    },
    {
      value: 'Done',
      label: 'Done',
    },
    
  ]


  return (
    <div>
      <Button  variant="contained" onClick={handleClickOpen}>
        <PostAddIcon></PostAddIcon>
        
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
             Add Your New Task
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="responsable"
            label="Responsable"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="correo"
            label="Responsable"
            type="text"
            fullWidth
          />
           <TextField
           id="standard-select-state"
           select
           label="Select"
          value={options}
          onChange={handleChange}
          helperText="Please select your currency"
         >
          
          {selection.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="duedate"
            type="date"
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddTask} color="primary">
          Add Task 
          </Button>
          <Button onClick={handleClose} color="primary">
          Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}