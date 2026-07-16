export interface ResourceData {
    id: number;
    resourceName: string;
    resourcesLevel: 'Silver' | 'Gold' | 'Platinum';    
    status: 'Available' | 'Unavailable';
}
