
import TaskCreate from "../pages/TaskCreate";
import TastList from "../pages/TaskList";
import { CREATE, LIST,  } from "./CONSTS";

export const TODOPath = [
    {
        Component: TastList,
        path: LIST,
    },
    {
        Component: TaskCreate,
        path: CREATE,
    }
]