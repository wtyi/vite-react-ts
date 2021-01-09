export type MatchResult<P extends Object = {}> = {
    isExact: boolean;
    params: P;
    path: string;
    url: string;
};

export type Match = {};
