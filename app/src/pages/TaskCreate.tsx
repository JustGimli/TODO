import { TaskCreateComp } from "../components/Create/Create";
import { ITask } from "../utils/interfaces";

interface IProps {
    handleTask: (flag: string, date?: Date, task?: ITask) => void;
}

export default function TaskCreate({ handleTask }: IProps) {
    return (
        <>
            <TaskCreateComp handleTask={handleTask} />
        </>
    );
}
