import { Types } from 'mongoose';

export enum UserRole {
  ADMIN = 'admin',
  DOCTOR = 'doctor',
  PATIENT = 'patient',
}

export interface User {
  _id?: Types.ObjectId;
  username: string;
  email: string;
  phone?: number;
  password?: string;
  age?: string;
  profile_pic?: string;
  is_active?: boolean;
  gender?: string;
  address?: string;
  role: UserRole;
  location?: string;
  clinic_name?: string;
  about?: string;
  verified?: boolean;
  education?: string;
  experience?: string;
  medical_license?: string;
  department?: string;
  certification?: string;
  created_at?: Date;
  updated_at?: Date;
  otp?: string|null;
  otp_expiration?: Date|null;
}