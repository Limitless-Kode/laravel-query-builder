export type SpatieType = {
    when: (condition: boolean, callback: (param: any) => SpatieType) => SpatieType;
    filter: (key: string, value: string) => SpatieType;
    include: (...value: any) => SpatieType;
    sort: (...field: string[]) => SpatieType;
    build: () => string;
};
export declare function spatie(url: string): SpatieType;
