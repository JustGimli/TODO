import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    CssBaseline,
    List,
    Paper,
} from "@mui/material";
import { TskHeader } from "./TskHeader/Header";
import { TskItem } from "./TskItem/Item";
import RestoreIcon from "@mui/icons-material/Restore";
import ListIcon from "@mui/icons-material/List";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useEffect, useState } from "react";
import { ITask } from "../../utils/interfaces";

interface IProps {
    tasks: Array<ITask> | null;
    handleTask: (flag: string, date?: Date, task?: ITask) => void;
}

export const TaskListComp = ({ tasks, handleTask }: IProps) => {
    const [value, setValue] = useState<number>(0);
    const [currentTask, setCurrentTask] = useState<Array<ITask> | null>();

    useEffect(() => {
        setCurrentTask(tasks);
    }, [tasks]);

    const handleNavChange = (event: any, newValue: number) => {
        if (newValue === 0) {
            setCurrentTask(tasks);
        } else if (newValue === 1) {
            setCurrentTask(
                tasks ? tasks.filter((task) => task.status === true) : []
            );
        } else {
            setCurrentTask(
                tasks ? tasks.filter((task) => task.status === false) : []
            );
        }

        setValue(newValue);
    };

    return (
        <div>
            <TskHeader />

            <Box sx={{ pb: 7 }}>
                <CssBaseline />
                <List>
                    <div style={{ overflowY: "auto", maxHeight: "80vh" }}>
                        {currentTask?.length ? (
                            currentTask.map((item) => (
                                <TskItem
                                    key={item.date.getTime().toString()}
                                    handleTask={handleTask}
                                    date={item.date}
                                    status={item.status}
                                    description={item.description}
                                    name={item.name}
                                />
                            ))
                        ) : (
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{ color: "grey" }}
                            >
                                Пока пусто
                            </div>
                        )}
                    </div>
                </List>
                <Paper
                    sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                    elevation={3}
                >
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={handleNavChange}
                    >
                        <BottomNavigationAction
                            label="Все"
                            icon={<ListIcon />}
                        />
                        <BottomNavigationAction
                            label="Выполненые"
                            icon={<RestoreIcon />}
                        />
                        <BottomNavigationAction
                            label="невыполненые"
                            icon={<ArchiveIcon />}
                        />
                    </BottomNavigation>
                </Paper>
            </Box>
        </div>
    );
};
