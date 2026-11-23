/**
 * Common cross-cutting application types.
 */

export interface GeoLocation {
  latitude: number;
  longitude: number;
  address: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
}

export type TrustStatus =
  | "unverified_sample"
  | "pending_audit"
  | "independently_verified"
  | "heritage_landmark";

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}
