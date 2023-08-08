import { ITask } from "../../utils/interfaces";
import { TskCreateHeader } from "./TskCreateHeader/TskCreateHeader";
import { TskInputComp } from "./TskInputComp/TskInputComp";

interface IProps {
    handleTask: (flag: string, date?: Date, task?: ITask) => void;
}

export const TaskCreateComp = ({ handleTask }: IProps) => {
    return (
        <>
            <TskCreateHeader />
            <TskInputComp handleTask={handleTask} />
        </>
    );
};
