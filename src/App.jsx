import "./App.css";
import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            {/* <!-- Hero --> */}
            <Hero
                title="Become a React Dev "
                subtitle="Find a React job that fits your skills and needs"
            />
            <HomeCard />
            {/* <!-- Browse Jobs --> */}
            <JobListings />
            <section className="m-auto max-w-lg my-10 px-6">
                <a
                    href="jobs.html"
                    className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                >
                    View All Jobs
                </a>
            </section>
        </>
    );
}

export default App;
