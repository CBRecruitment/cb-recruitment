export type Job = {
    [x: string]: any;
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

export type Fields = {
    name: string,
    type: string,
    dataType: string,
    maxLength: number,
    confidential: boolean,
    label: string,
    options: OptionsAPIResponse;
};

export type OptionsAPIResponse = {
    value: string,
    label: string
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

export type SearchResponse = {
    total: number;
    start: number;
    count: number;
    data: Job[];
};

export type Props = {
    data: SearchResponse;
};

export type SearchQueryProps = {
    searchQuery: string;
}

export type formProps = {
    value: string;
    label: string;
  };
