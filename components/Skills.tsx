import { GetServerSideProps } from 'next';
import React, { useState } from 'react';
import { Props } from '../interfaces/types';

const BullhornUrl = process.env.REACT_APP_BULLHORN_URL;
const BhRestToken = process.env.REACT_APP_BH_REST_TOKEN;

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(
        `${BullhornUrl}/search/JobOrder?fields=id,skills&count=500&query=isOpen:1 AND isDeleted:0 AND NOT status:archive&BhRestToken=${BhRestToken}&sort=-dateAdded`
    );
    const data = await res.json();
    return { props: { data } };
};

const Skills = ({ data }: Props) => {
    const [results, setResults] = useState(data.data);

    results.map((result) => {
        const skills = result.skills.data;

        return (
            <div className='flex flex-row space-x-5'>
                {skills.map((skill) => (
                    <p
                        className='text-sm rounded-md border border-[var(--orange)] p-2 hover:bg-[var(--orange)]'
                        key={skill.id}
                    >
                        {skill.name}
                    </p>
                ))}
            </div>
        );
    });
};

export default Skills;
