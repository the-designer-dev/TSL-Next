import React, { useState } from 'react';
import { useRouter } from "next/router";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
function AddButton(props) {
    const router = useRouter();
    return (
        <Fab onClick={() =>
            router.push({ pathname: props.path })
        } sx={{
            color: 'common.white',
            bgcolor: '#2AB572',
            '&:hover': {
                bgcolor: '#1E3459',
            },
            position: 'sticky',
            float: 'right',
            bottom: 16,
            right: 16,
        }} aria-label={'Add'} color={'primary'}>
            <AddIcon />
        </Fab>
    );
}

export default AddButton;