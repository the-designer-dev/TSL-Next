import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { setImages } from '../redux/addHotel';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { API_URL } from '../config';
export var dayImgs =[];

const DaysDropfile = (props) => {
    // dayImgs= Array.apply(null, Array(props.length)).map(()=> [...dayImgs, []])
    console.log(dayImgs)
   const imgs = useSelector(state => state.addRoom.roomImages)
    const [images , setStateImages] = useState([])
    useEffect(() => {
      var formData = new FormData();
      formData.append('images' ,images);      
      dayImgs[props.length -1] = images
      console.log(dayImgs)
    },[images])

    const handleChangeStatus = ({ meta }, status) => {
      console.log(status, meta);
    };
    const handleSubmit = (files, allFiles) => {
      setStateImages(allFiles.map(el => el.file))
      allFiles.forEach(f => f.remove());
    };
    return (
      <Grid container spacing={1}>
        {images.length>0 ? images.map(el =>  (<Grid item xs={3}><img style={{width:'100%' , height:'100%' , borderRadius:'8px'}} src={URL.createObjectURL(el)}/></Grid>)) :
        imgs.map((el) => (<Grid item xs={3}><img style={{width:'100%' , height:'100%' , borderRadius:'8px'}} src={`${API_URL}${el.url}`}/></Grid>))}
        <Grid item xs={12}>
      <Dropzone
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
        accept="image/*"
      />
      </Grid>
      </Grid>
    )
  }
export default DaysDropfile;