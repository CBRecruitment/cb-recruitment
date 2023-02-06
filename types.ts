export type Job = {
    id: number;
    title: string;
    categories: CategoryAPIResponse;
    skills: SkillAPIResponse;
    employmentType: string;
    customText14: string;
    customText15: string;
    customText12: string;
    dateAdded: number;
    _score: number;
};

export type CategoryAPIResponse = {
    total: number;
    data: {
        id: number;
        name: string;
    }[];
};

export type SkillAPIResponse = {
    total: number;
    data: {
        id: number;
        name: string;
    }[];
};

