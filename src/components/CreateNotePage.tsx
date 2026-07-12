
import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

const CreateNotePage = ()=> {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailError, setDetailError] = useState(false)
    const [category, setCategory] = useState("remainders")



    const handleSubmit = (e) => {

        setTitleError(false)
        setDetailError(false)
        if (title == ''){
            setTitleError(true)
        }

        if (details == ''){
            setDetailError(true)
        }
        e.preventDefault();
        if (title && details) {
            console.log('title', title)
            console.log('details', details)
            console.log('category', category)
            fetch('http://localhost:8000/notes',{
                method : "POST",
                headers : {"Content-type" : "application/json"},
                body : JSON.stringify({
                    title,
                    details,
                    category
                })
            }).then((data)=>{
                console.log(data)
            })
        }
    }
    return (
        <Container
            sx={{border : "1px dotted black", padding: 3}}
        >
            <Typography
                sx={{margin: 1}}
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    label="Note Title"
                    required
                    fullWidth
                    sx={{marginBottom : 2}}
                    value={title}
                    onChange={({target})=> setTitle(target.value)}
                    error={titleError}
                />
                <TextField
                    label="Details"
                    required
                    fullWidth
                    multiline
                    rows={4}
                    sx={{marginBottom: 2}}
                    value={details}
                    onChange={({target})=> setDetails(target.value)}
                    error={detailError}
                />
                <FormControl sx={{display : 'block'}}> 
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={({target})=> setCategory(target.value)}>
                    <FormControlLabel label="Money" value="money" control={<Radio/>}/>
                    <FormControlLabel label="Todos" value="todos" control={<Radio/>}/>
                    <FormControlLabel label="Remainders" value="remainders" control={<Radio/>}/>
                    <FormControlLabel label="Work" value="work" control={<Radio/>}/>
                    </RadioGroup>
                </FormControl>
                <Button
                    type="submit"
                    variant="contained"
                    endIcon={<ArrowForwardIosIcon/>}
                >
                    SUBMIT
                </Button>
            </form>
           
        </Container>
    )
}

export default CreateNotePage