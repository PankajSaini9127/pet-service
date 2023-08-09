import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

//css
import "../../../assets/css/profilePage/petInfo.css";

import DataTabel from "../../utils/DataTabel";
import AddPets from "../../utilsComponents/AddPets";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../../store/actions/alert-action";
import { getAllPets } from "../../../service/Api";
import { setLoading } from "../../../store/actions/loading-action";


const columns = [
  {
    field: "srno",
    headerName: "Sr No.",
    minWidth: 50,
    headerClassName: "dataGridHeader",
    headerAlign: "center",
  },
  {
    field: "petName",
    headerName: "Pet Name",
    minWidth: 150,
    flex: 1,
    headerClassName: "dataGridHeader",
    headerAlign: "center",
  },
  {
    field: "breed",
    headerName: "Breed",
    minWidth: 150,
    flex: 1,
    headerClassName: "dataGridHeader",
    headerAlign: "center",
  },
  {
    field: "petAge",
    headerName: "Age",
    minWidth: 150,
    flex: 1,
    headerClassName: "dataGridHeader",
    headerAlign: "center",
  },
  {
    field: "medicalHistory",
    headerName: "Medical History",
    minWidth: 150,
    flex: 1,
    headerClassName: "dataGridHeader",
    headerAlign: "center",
  },
  {
    field: "preferences",
    headerName: "Preferences",
    minWidth: 150,
    flex: 1,
    headerClassName: "dataGridHeader",
    headerAlign: "center",
  },
];

function PetInfo() {

  const dispatch = useDispatch();
  const {auth} = useSelector(s=>s);

  const [addPetOpen, setAddPetOpen] = useState(false);
  const [pets,setPets] = useState([]);
  const [addpetFlag,setAddPetFlag] = useState("")


  const row = ()=>{
    let array = [];
    pets.map((item,id)=>{
      array.push({
        id: item.id,
        srno: id+1,
        petName:item.petName,
        breed: item.breed,
        medicalHistory: item.medicalHistory,
        preferences: item.preference,
        petAge:`${item.petAge} Months`
      });
    })
    return array
  };


  async function fetchData(header){
    try {
      dispatch(setLoading(true))
      const response = await getAllPets(header);
      if(response.status === 200){
        setPets(response.data);
      }
      dispatch(setLoading(false))
    } catch (error) {
      console.log(error)
      dispatch(setLoading(false))
        dispatch(setAlert({open:true,variant:"error",message:"Something went Wrong"}));
      }
  };
  

  const token = `Bearer ${auth.token}` 

  useEffect(()=>{
    fetchData(token)
  },[addpetFlag])

  return (
    <>
      <AddPets open={addPetOpen} setOpen={setAddPetOpen} setFlag={setAddPetFlag} />
      <Typography className="pet-profile-heading">Pet Information</Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          className="pet-profile-add-pet-btn button-hover-scale"
          onClick={() => setAddPetOpen(true)}
        >
          Add Pet
        </Button>
      </Box>

      <Box>
        <DataTabel rows={row()} columns={columns} />
      </Box>
    </>
  );
}

export default PetInfo;
