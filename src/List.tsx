import React from "react";
import Card from "./Card";
import { jobs } from "./Job";

interface JobListProps {
    job: typeof jobs;
}

const List: React.FC = () => {
    return (
        <div className="job-list">{jobs.map((job, index) => (
            <Card key={index} job={job} />
        ))}
        </div>
    )
};

export default List;