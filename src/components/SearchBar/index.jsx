import React from "react";
import TextField from '@mui/material/TextField';

const SearchBar = () => {
    return (
        <TextField id="fullWidth" label="Pesquisa" variant="outlined" size='small' color="warning" focused width='50%'/>
    )
}

export default SearchBar;