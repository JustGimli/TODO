import { Alert, Button, TextField } from "@mui/material";
import { ITask } from "../../../utils/interfaces";
import { useState } from "react";

interface IProps {
    handleTask: (flag: string, date?: Date, task?: ITask) => void;
}

export const TskInputComp = ({ handleTask }: IProps) => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [alert, setAlert] = useState<string>("");

    const handleClick = () => {
        if (!name.length || name.length >= 128) {
            setAlert("Проверьте правильность загаловка задачи");
            return;
        }

        if (!description.length) {
            setAlert("Проверьте правильность описания задачи");
            return;
        }

        handleTask("create", new Date(), {
            name,
            description,
            date: new Date(),
            status: false,
        });

        setName("");
        setDescription("");
        setAlert("");
    };

    return (
        <>
            {alert.length > 0 && (
                <div className="my-3">
                    <Alert variant="outlined" severity="info">
                        {alert}
                    </Alert>
                </div>
            )}
            <div className="d-flex flex-column">
                <TextField
                    label="Заголовок задачи"
                    variant="outlined"
                    className="my-4"
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                />
                <TextField
                    label="Описание задачи"
                    variant="outlined"
                    value={description}
                    onChange={(e: any) => setDescription(e.target.value)}
                />
                <div className="d-flex justify-content-end my-4">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </>
    );
};
