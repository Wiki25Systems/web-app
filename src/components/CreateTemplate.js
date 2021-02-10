import React, {useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import '../styles/CreateTemplate.css';

function CreateTemplate() {

    const [language, setLanguage] = useState("en_US");
    const [category, setCategory] = useState("AUTO_REPLY");

    const createTemplate = () => {

    }

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return(
        <div className="createTemplate">

            <TextField
                label="Name"
                variant="outlined"
                size="medium"
                fullWidth={true}
            />

            <FormControl variant="outlined" fullWidth={true}>
                <InputLabel>Language</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    onChange={handleLanguageChange}
                    label="Language"
                    value={language}>
                    <MenuItem value={"en_US"}>en_US</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="outlined" fullWidth={true}>
                <InputLabel>Category</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    onChange={handleCategoryChange}
                    label="Category"
                    value={category}>
                    <MenuItem value={"AUTO_REPLY"}>AUTO_REPLY</MenuItem>
                </Select>
            </FormControl>

            <TextField
                label="Body"
                multiline
                variant="outlined"
                size="medium"
                fullWidth={true}
            />

            <Button
                fullWidth={true}
                onClick={createTemplate}>Create</Button>

        </div>
    )
}

export default CreateTemplate;