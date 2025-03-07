import React from 'react';
import './App.css'

//Define Job type
interface Job{
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
}

//Hardcoded job data
const jobs: Job[] = [
    { id: 1, title: "Frontend Developer", company: "Google", location: "Mountain View, CA", salary: "$120,000" },
    { id: 2, title: "Backend Developer", company: "Facebook", location: "Menlo Park, CA", salary: "$130,000" },
    { id: 3, title: "Fullstack Developer", company: "Amazon", location: "Seattle, WA", salary: "$140,000" },
    { id: 4, title: "DevOps Engineer", company: "Microsoft", location: "Redmond, WA", salary: "$150,000" },
    { id: 5, title: "Data Scientist", company: "Apple", location: "Cupertino, CA", salary: "$160,000" },
    { id: 6, title: "Machine Learning Engineer", company: "Tesla", location: "Palo Alto, CA", salary: "$170,000" },
    { id: 7, title: "Software Engineer", company: "Netflix", location: "Los Gatos, CA", salary: "$180,000" },
    { id: 8, title: "QA Engineer", company: "Uber", location: "San Francisco, CA", salary: "$190,000" },
    { id: 9, title: "Security Engineer", company: "Lyft", location: "San Francisco, CA", salary: "$200,000" },
    { id: 10, title: "Product Manager", company: "Airbnb", location: "San Francisco, CA", salary: "$210,000" }
];

//JobItem component
const JobItem: React.FC<{ job: Job }> = ({ job }) => {
    const [showDetails, setShowDetails] = React.useState(false);

    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <p><strong>{job.company}</strong> - {job.location}</p>
            <p>{showDetails && job.salary}</p>
            <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Hide" : "Show"} Details</button>
      
                {showDetails && (<div className="job-details"> <p><strong>Location: </strong>{job.location}</p>
                <p><strong>Salary: </strong>{job.salary}</p>
            </div>
            )}
        </div>
    );
};

//JobList component
const JobList: React.FC = () => {
    return (
        <div className="job-list">
            <h1 className='h1'>Job Listings App</h1> {jobs.length > 0 ? (jobs.map(job => <JobItem key={job.id} job={job} />)) : (
                <p className='no-jobs'>No jobs available at the moment.</p>)}
        </div>
    );
};


export default JobList;