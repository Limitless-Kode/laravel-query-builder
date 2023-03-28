declare function spatie(url: string): {
    filter(key: string, value: string): any;
    include(...value: any): any;
    sort(field: string, asc?: boolean): any;
    build(): string;
};
export default spatie;
