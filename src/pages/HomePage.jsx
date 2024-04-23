import React from "react";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

function HomePage() {
    return (
        <>
            <Hero
                title="Become a React Dev "
                subtitle="Find a React job that fits your skills and needs"
            />
            <HomeCard />
            <JobListings />
            <ViewAllJobs />
        </>
    );
}

export default HomePage;
