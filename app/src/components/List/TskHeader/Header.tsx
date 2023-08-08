import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { CREATE } from "../../../utils/CONSTS";

export const TskHeader = () => {
    const navigate = useNavigate();

    const handleClick = (e: any) => {
        navigate(CREATE);
    };

    return (
        <div className="d-flex justify-content-between align-items-center">
            <span style={{ fontWeight: 600, fontSize: "16px" }}>
                Список Задач
            </span>

            <Fab color="primary" onClick={handleClick}>
                <EditIcon />
            </Fab>
        </div>
    );
};
