import { useParams, useLoaderData , useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
const JobPage = ({ deleteJob }) => {
    const { id } = useParams();
  const job = useLoaderData();
  const navigate=useNavigate()
    
  const onDeleteClick = (jobId) => {
        const response = confirm("Are you sure you want to delete this job?");
        //const confirm=window.confirm("Are you sure you want to delete this job?");
        if (!response) return false;

      deleteJob(jobId);
      navigate("/jobs");
    };
    //console.log(job);
    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/jobs"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <FaArrowAltCircleLeft className="mr-2" /> Back to Job
                        Listings
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                                <div className="text-gray-500 mb-4">
                                    {job.type}
                                </div>
                                <h1 className="text-3xl font-bold mb-4">
                                    {job.title}
                                </h1>
                                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                                    <FaMapMarker className="text-orange-700 mr-1" />
                                    <p className="text-orange-700">
                                        {job.location}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    {job.title}
                                </h3>

                                <p className="mb-4">{job.description}</p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                                    Salary
                                </h3>

                                <p className="mb-4">{job.salary}</p>
                            </div>
                        </main>

                        {/* <!-- Sidebar --> */}
                        <aside>
                            {/* <!-- Company Info --> */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">
                                    Company Info
                                </h3>

                                <h2 className="text-2xl">{job.company.name}</h2>

                                <p className="my-2">{job.description}</p>

                                <hr className="my-4" />

                                <h3 className="text-xl">Contact Email:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {job.company.contactEmail}
                                </p>

                                <h3 className="text-xl">Contact Phone:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {job.company.contactPhone}
                                </p>
                            </div>

                            {/* <!-- Manage --> */}
                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">
                                    Manage Job
                                </h3>
                                <Link
                                    to={`/jobs/edit/${job.id}`}
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    Edit Job
                                </Link>
                                <button
                                    onClick={() => onDeleteClick(job.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    Delete Job
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
};

const jobLoader = async ({ params }) => {
    const response = await fetch(`/api/jobs/${params.id}`);
    const data = await response.json();
    return data;
};

export { jobLoader, JobPage as default };

//----------------------------------------------------
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ClipLoader from "../components/Spinner";

// function JobPage() {
//     const { id } = useParams();
//     const [job, setJob] = useState(null);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         const fetchJob = async () => {
//             try {
//                 const response = await fetch(`/api/jobs/${id}`);
//                 const data = await response.json();
//                 setJob(data);
//                 setLoading(false);
//             } catch (error) {
//             } finally {
//                 console.error("Error fetching job:", error);
//                 setLoading(false);
//             }
//         };
//         fetchJob();
//     }, []);

//   return loading ? <ClipLoader /> : (
//         <h1>{job.title}</h1>
//     );
// }

// export default JobPage;

//---------------------------------------------------
// function JobPage() {
//     const { id } = useParams();
//     const [job, setJob] = useState(null);

// useEffect(() => {
//     const fetchJob = async () => {
//         try {
//             const response = await fetch(`/api/jobs/${id}`);
//             if (!response.ok) {
//                 throw new Error("Failed to fetch job");
//             }
//             const data = await response.json();
//             setJob(data);
//         } catch (error) {
//             console.error("Error fetching job:", error);
//         }
//     };

//     fetchJob();
// }, [id]);

// if (!job) {
//     return <div>Loading...</div>;
// }

//     return (
//         <div>
//             <h1>{job.title}</h1>
//             <p>{job.description}</p>
//             <p>Salary: {job.salary}</p>
//         </div>
//     );
// }