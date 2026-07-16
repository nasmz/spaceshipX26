export interface UsageReport {
    id: number;
    passengerId: number;
    resourceId: number;
    resourceName: string;
    usageCount: number;
    usageDate: Date;
    status:string;
}
