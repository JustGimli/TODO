import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import { LIST } from "../../../utils/CONSTS";
export const TskCreateHeader = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(LIST);
    };

    return (
        <div className="d-flex justify-content-between align-items-center">
            <div style={{ fontWeight: 600, fontSize: "16px" }}>
                Создание новой задачи
            </div>
            <Button variant="outlined" onClick={handleClick}>
                Назад <ArrowForwardIosIcon />
            </Button>
        </div>
    );
};
