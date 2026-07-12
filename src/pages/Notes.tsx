import { Container, Grid, Paper } from "@mui/material"
import { useEffect, useState } from "react"


const Notes = ()=> {
    const [notes, setNotes] = useState([])

    useEffect(()=> {
        fetch('http://localhost:8000/notes')
        .then(res => res.json())
        .then(data=> setNotes(data))
    },[])

    return (
        <Container>
            {/* <Grid container>
                <Grid size={{md : 3, xs : 12, sm : 6}}>
                    <Paper>1</Paper>
                </Grid>
                <Grid size={{md : 3,xs : 12, sm : 6}}>
                    <Paper>2</Paper>
                </Grid>
                <Grid size={{md : 3,xs : 12, sm : 6}}>
                    <Paper>3</Paper>
                </Grid>
                 <Grid size={{md : 3,xs : 12, sm : 6}}>
                    <Paper>4</Paper>
                </Grid>
            </Grid> */}
            <Grid container sx={{margin : 3}}> 
                {
                    notes.map(note => (
                        <Grid 
                            key={note.id} 
                            size ={{lg : 4, md : 6, sm : 12, xs : 12}}
                            sx={{margin : 1}}
                        >
                            <Paper>{note.title}</Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default Notes;