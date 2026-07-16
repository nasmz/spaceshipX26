export interface Passenger {
    id: number;
    name: string;
    email: string;
    age: number;
    type:'Crew' | 'Passenger';
    gender: 'Male' | 'Female' | 'Other';
    membershipLevel: string;
    status: 'Active' | 'Inactive';
}
