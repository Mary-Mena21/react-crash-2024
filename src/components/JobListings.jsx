import React, { useState, useEffect } from "react";
import jobs from "../jobs.json";
import JobListing from "./JobListing";
import ClipLoader from "./Spinner";

function JobListings({ isHome = false }) {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    //const jobListings = isHome ? jobs.slice(0, 3) : jobs;

    useEffect(() => {
        //look at vite.config.js
        const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
        const fetchJobs = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setJobs(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching jobs:", error);
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    //console.log(jobs);
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "Recent Jobs" : "Browse Jobs"}
                </h2>
                {/* {jobListings.map((job) => "Note: 3 jobs will appear"}( */}
                {loading ? (
                    <ClipLoader icon={true} loading={loading} />
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                                <JobListing job={job} key={job.id} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default JobListings;
