import { SiTodoist } from "react-icons/si";

export const LogoComp = () => {
    return (
        <div
            className="d-flex align-items-center my-3 px-5"
            style={{ color: "#1976d2" }}
        >
            <SiTodoist size={30} />
            <span
                className="mx-2"
                style={{ fontSize: "24px", fontWeight: 900 }}
            >
                TODO
            </span>
        </div>
    );
};
