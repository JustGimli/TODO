import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import { ITask } from "../../../utils/interfaces";
import { useState } from "react";

interface IProps {
    status: boolean;
    name: string;
    description: string;
    date: Date;
    handleTask: (flag: string, date?: Date, task?: ITask) => void;
}

export const TskItem = ({
    name,
    status,
    description,
    handleTask,
    date,
}: IProps) => {
    const [tskName, setName] = useState<string>(name);
    const [tskDescription, setDescription] = useState<string>(description);

    const [open, setOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setName(name);
        setDescription(description);
        setOpen(false);
    };

    const handleSaveClose = () => {
        handleTask("update", date, {
            name: tskName,
            description: tskDescription,
            status: status,
            date: date,
        });
        setOpen(false);
    };

    const handleDelete = () => {
        handleTask("delete", date);
    };

    const handleStatus = () => {
        handleTask("updateStatus", date);
    };

    const Item = (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Редактирование задачи</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    После ввода данных нажмите кнопку сохранить
                </DialogContentText>
                <TextField
                    autoFocus
                    value={tskName}
                    label="Название задачи"
                    fullWidth
                    onChange={(e: any) => setName(e.target.value)}
                    variant="standard"
                />
                <TextField
                    value={tskDescription}
                    label="Описание задачи"
                    fullWidth
                    onChange={(e: any) => setDescription(e.target.value)}
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSaveClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    );

    return (
        <>
            {Item}
            <div className="d-flex">
                <div className="d-flex align-items-center">
                    <Checkbox onClick={handleStatus} checked={status} />
                </div>
                <Accordion
                    sx={{ minWidth: "50vw" }}
                    TransitionProps={{ unmountOnExit: true }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        {name}
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="d-flex">{description}</div>
                    </AccordionDetails>
                </Accordion>
                <div className="d-flex align-items-center">
                    <Button
                        variant="contained"
                        color="primary"
                        className="mx-3"
                        onClick={handleClickOpen}
                    >
                        <EditIcon />
                    </Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={handleDelete}
                    >
                        <DeleteForeverIcon />
                    </Button>
                </div>
            </div>
        </>
    );
};
