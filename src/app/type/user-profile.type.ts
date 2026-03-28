export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  dob: Date;
  gender: 'Male' | 'Female' | 'Other';
}