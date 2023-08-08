import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from "react-router-dom";
import { TODOPath } from "./utils/path";
import { LogoComp } from "./components/general/logo";
import { useEffect, useState } from "react";
import { ITask } from "./utils/interfaces";

function App() {
    const [tasks, setTasks] = useState<Array<ITask> | null>(null);

    const handleTask = (flag: string, date?: Date, task?: ITask) => {
        if (flag === "create" && task) {
            setTasks(tasks ? [...tasks, task] : [task]);
        } else if (flag === "delete" && date && tasks) {
            setTasks(
                tasks.filter((task) => task.date.getTime() !== date.getTime())
            );
        } else if (flag === "updateStatus" && date && tasks) {
            setTasks(
                tasks
                    .map((task) => {
                        if (task.date.getTime() === date.getTime()) {
                            return {
                                ...task,
                                status: !task.status,
                                date: new Date(),
                            };
                        }
                        return task;
                    })
                    .sort(
                        (a: ITask, b: ITask) =>
                            Number(a.status) - Number(b.status)
                    )
            );
        } else if (flag === "update" && task && date && tasks) {
            setTasks(
                tasks.map((t) => {
                    if (t.date.getTime() === date.getTime()) {
                        return {
                            ...task,
                        };
                    }
                    return t;
                })
            );
        }
    };

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");

        if (storedTasks) {
            const tasks = JSON.parse(storedTasks).map((task: ITask) => {
                return {
                    ...task,
                    date: new Date(task.date),
                };
            });
            setTasks(tasks);
        }
    }, []);

    useEffect(() => {
        if (tasks) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);

    const renderRoutes = () => {
        return TODOPath.map(({ path, Component }) => (
            <Route
                key={path}
                path={path}
                element={<Component tasks={tasks} handleTask={handleTask} />}
            />
        ));
    };

    return (
        <div>
            <div>
                <LogoComp />
            </div>
            <div style={{ width: "75vw", margin: "auto" }}>
                <Routes>{renderRoutes()}</Routes>
            </div>
        </div>
    );
}

export default App;
