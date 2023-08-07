import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps {
    status: boolean;
    name: string;
    description: string;
}

export const TskItem = ({ name, status, description }: IProps) => {
    return (
        <div className="d-flex">
            <div>
                <Checkbox />
            </div>
            <Accordion
                sx={{ minWidth: "270px" }}
                TransitionProps={{ unmountOnExit: true }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {name}
                </AccordionSummary>
                <AccordionDetails>{description}</AccordionDetails>
            </Accordion>
        </div>
    );
};
