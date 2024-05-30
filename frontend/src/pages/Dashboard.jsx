import React from "react"
import { RecoilRoot } from "recoil"

import Books from "../components/Books"
import Topbar from "../components/Topbar"

function Dashboard() {
    return (
        <div className="bg-slate-100 w-screen h-screen overflow-scroll no-scrollbar">
            <RecoilRoot>
                <Topbar />
                <Books />
                <Books />
                <Books />
            </RecoilRoot>
        </div>
    )
}

export default Dashboard;