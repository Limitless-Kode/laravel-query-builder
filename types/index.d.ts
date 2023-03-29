declare function spatie(url: string): {
    when(condition: boolean, callback: (param: any) => any): any;
    filter(key: string, value: string): any;
    include(...value: any): any;
    sort(...field: string[]): any;
    build(): string;
};
export default spatie;
