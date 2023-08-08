import { TaskListComp } from "../components/List/List";
import { ITask } from "../utils/interfaces";

interface IProps {
    handleTask: (flag: string, date?: Date, task?: ITask) => void;
    tasks: Array<ITask> | null;
}

export default function TastList({ tasks, handleTask }: IProps) {
    return (
        <>
            <TaskListComp tasks={tasks} handleTask={handleTask} />
        </>
    );
}
