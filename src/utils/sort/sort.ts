export const sortObjectsByPropertyString = (
    property: string,
    sortAsc: boolean
) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (obj1: any, obj2: any) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const obj1PropertyValue = obj1[property] as string;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const obj2PropertyValue = obj2[property] as string;

        if (obj1PropertyValue < obj2PropertyValue) {
            return sortAsc ? -1 : 1;
        }
        if (obj1PropertyValue > obj2PropertyValue) {
            return sortAsc ? 1 : -1;
        }
        return 0;
    };
};

export const sortObjectsByPropertyStringAsc = (property: string) =>
    sortObjectsByPropertyString(property, true);

export const sortObjectsByPropertyStringDesc = (property: string) =>
    sortObjectsByPropertyString(property, false);

export const sortObjectsByPropertyNumber = (
    property: string,
    sortAsc: boolean
) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (obj1: any, obj2: any) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const obj1PropertyValue = obj1[property] as number;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const obj2PropertyValue = obj2[property] as number;

        return sortAsc
            ? obj1PropertyValue - obj2PropertyValue
            : obj2PropertyValue - obj1PropertyValue;
    };
};

export const sortObjectsByPropertyNumberAsc = (property: string) =>
    sortObjectsByPropertyNumber(property, true);

export const sortObjectsByPropertyNumberDesc = (property: string) =>
    sortObjectsByPropertyNumber(property, false);
