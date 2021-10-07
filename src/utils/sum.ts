export const CreditSum = (arr: any): number => {
    let sum = 0;
    arr.forEach((val: any) => {
        sum += val.credit
    });

    return sum;
}

export const WeightedMarkSum = (arr: any): number => {
    let sum = 0;
    arr.forEach((val: any) => {
        sum += val.weightedMark
    });

    return sum;
}

export const Final_Mark_Fixed1 = (TotalCredit: number, TotalWeightedMark: number) => {
   return (TotalWeightedMark/TotalCredit).toFixed(1);
}

export const Final_Mark_Fixed0 = (TotalCredit: number, TotalWeightedMark: number) => {
    return (TotalWeightedMark/TotalCredit).toFixed(0);
}