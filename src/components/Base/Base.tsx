import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Base(){
    return (
        <>
            <NavBar />
            <section className="content">
                <Outlet />
            </section>
        </>
    )
}

export default Base;