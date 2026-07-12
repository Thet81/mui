import { DeleteOutlineOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";


const NoteCard = ({note, handleDelete})=> {
    return (
        <Card>
            <CardHeader
                action={
                    <IconButton onClick={()=>handleDelete(note.id)}>
                        <DeleteOutlineOutlined/>
                    </IconButton>
                }

                title={note.title}
                subheader = {note.category}
            />
            <CardContent>
                <Typography>
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NoteCard;