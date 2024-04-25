import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";
import ViewAllJobs from "./components/ViewAllJobs";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/MainLayout";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

//add job
const addJob = async (newJob) => {
    //console.log(newJob);
    const res = await fetch(`/api/jobs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
    });
    return;
};

//delete job
const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
        method: "DELETE",
    });
    return;
    //console.log("delete", id);
};

//update job
const updateJob = async (updateJob) => {
    const res = await fetch(`/api/jobs/${updateJob.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateJob),
    });
    return;
};

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route
                    path="/add-job"
                    element={<AddJobPage addJobSubmit={addJob} />}
                />
                <Route path="*" element={<NotFoundPage />} />
                <Route
                    path="/jobs/:id"
                    element={<JobPage deleteJob={deleteJob} />}
                    loader={jobLoader}
                />
                <Route
                    path="/edit-job/:id"
                    element={<EditJobPage updateJobSubmit={updateJob} />}
                    loader={jobLoader}
                />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
}

export default App;
