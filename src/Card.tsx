import React, { useState } from 'react';

//Define Job type
interface Job{
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    description: string;
    tags: string[];
    requirements?: string[];
    postedDate: string;
}

const Card: React.FC<{job: Job}> = ({job}) => {
    const [showRequirements, setShowRequirements] = useState(false);

    return (
        <div className="job-card">
            <h2>{job.company}</h2>
            <p>{job.title}</p> - <p>{job.location}</p>
            <button onClick={() => setShowRequirements(!showRequirements)}>
                {showRequirements ? "Hide Details" : "Show Details"}
            </button>
            {showRequirements && (
                <>
                <div className="job-details">
                    <p><strong>Salary:</strong> {job.salary}</p>
                    <p><strong>Posted on:</strong> {job.postedDate}</p>
                    <p><strong>Description:</strong> {job.description}</p>
                <ul>
                        {job.requirements?.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))}
                </ul>
                </div>
                </>
            )}
        </div>
    );
};

export default Card;