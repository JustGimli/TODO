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
import { useState } from "react";

export const TaskListComp = () => {
    const [value, setValue] = useState<number>(0);

    return (
        <div>
            <TskHeader />

            <TskItem status={false} description="ASD" name="A" />
            <TskItem status={false} description="ASD" name="AASD" />
            <TskItem status={false} description="ASD" name="AASD" />
            <TskItem status={false} description="ASD" name="AASD" />
            <TskItem status={false} description="ASD" name="AASD" />
            <Box sx={{ pb: 7 }}>
                <CssBaseline />
                <List></List>
                <Paper
                    sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                    elevation={3}
                >
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
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
