import {
  Box,
  Button,
  Dialog,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

//asssets
import "../../assets/css/utilsComponents/addPet.css";
import logo from "../../assets/Images/home/nav-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../store/actions/alert-action";
import { addPet } from "../../service/Api";
import { setLoading } from "../../store/actions/loading-action";

function AddPets({ open, setOpen,setFlag }) {

  const dispatch = useDispatch()
  const {auth} = useSelector(s=>s);


  const [formData, setFormData] = useState({
    petName: "",
    petAge: "",
    breed: "",
    medicalHistory: "",
    preference: "",
  });
  const [formError, setFormError] = useState({});

  function handleChange(e) {
    switch (e.target.name) {
      case "petAge":
        if(e.target.value.match(/^[0-9]*$/)){
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
          setFormError({
            ...formError,
            petAge: ""
          });
        }else{
          setFormError({
            ...formError,
            petAge: "Pet Age Must Be Number Only."
          })
        }
        
    break;
      default:
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
        setFormError({
          ...formError,
          [e.target.name]: ""
        });
    }
    
  }

  function validator(data) {
    let fields = ["petName", "petAge", "breed"];
    let error = {};

    fields.map((item) => {
      if (data[item] === "") {
        error[item] = "Fields Is Required!";
      }
    });
    setFormError(error);
    if(Object.keys(error).length === 0){
      return true
    }else{
      return false
    }
  }

  const token = `Bearer ${auth.token}`;

 async function handleSubmit(e) {
    e.preventDefault();
    try{
      if(validator(formData)){
        dispatch(setLoading(true))
        const response = await addPet({...formData},token);
        dispatch(setLoading(false))
        if(response.status === 200){
          dispatch(setAlert({open:true,variant:"success",message: response.message}));
          handleClose()
        }else{
          dispatch(setAlert({open:true,variant:"error",message: response.message}));
        }
       }
    }catch(error){
      dispatch(setLoading(false))
      console.log(error)
      dispatch(setAlert({open:true,variant:"error",message:"Something went Wrong"}));
    }
   
  };

  function handleClose(){
      setOpen(false);
      setFormData({
        petName: "",
        petAge: "",
        breed: "",
        medicalHistory: "",
        preference: "",
      });
      setFormError({});
  }
  

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <Box className="add-pet-form-wrapper">
          <Box component="img" src={logo} alt="logo" className="signup-logo" />
          <Typography className="add-pet-form-heading">Add Pets</Typography>
          <Box component={"form"} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
            <Grid item container spacing={2}>
              <FormFields
                name={"petName"}
                value={formData.petName}
                onChange={handleChange}
                error={formError.petName}
                placeholder={"Pet Name"}
              />
              <FormFields
                name={"petAge"}
                value={formData.petAge}
                onChange={handleChange}
                error={formError.petAge}
                placeholder={"Pet Age"}
                max={2}
                notationVal={"Months Old"}
              />
            </Grid>
            <Grid item container spacing={2}>
              <FormFields
                name={"breed"}
                value={formData.breed}
                onChange={handleChange}
                error={formError.breed}
                placeholder={"Breed"}
              />
              <FormFields
                name={"preference"}
                value={formData.preference}
                onChange={handleChange}
                error={formError.preference}
                placeholder={"Preferences"}
              />
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
              <FormControl
                className="add-pet-form-feed-container"
                fullWidth
              >
                <TextField
                  multiline
                  fullWidth
                  minRows={2}
                  maxRows={5}
                  value={formData.medicalHistory}
                  name="medicalHistory"
                  onChange={handleChange}
                  placeholder="Medical History"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </FormControl>
              </Grid>
              </Grid>
              <Grid container item xs={12} >
                <Grid item xs={3} sx={{margin:"auto"}}>
              <Button
                className="add-pet-form-btn button-hover-scale"
                type="submit"
              >
                Add Now
              </Button>
              </Grid>
            </Grid>
            </Grid>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}

export default AddPets;

function FormFields({ name, onChange, value, error, placeholder ,max,notationVal}) {
  return (
    <>
    <Grid item md={6}>
      <FormControl className="add-pet-form-feed-container" fullWidth>
        <TextField
          name={name}
          onChange={onChange}
          fullWidth
          value={value}
          placeholder={placeholder}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            endAdornment: notationVal && <InputAdornment position="start">{ "\xa0 "+ notationVal}</InputAdornment>,
            style: {
              color: "rgba(16, 99, 173, 0.47) !important/",
              "@media(max-width:900px)": { fontSize: "10px !important" },
            },
          }}
          inputProps={{ maxLength: max}}
        />
      </FormControl>
      {error && (
        <Typography variant="caption" color="red" className="add-pet-form-error">
          {error}
        </Typography>
      )}
      </Grid>
    </>
  );
}
