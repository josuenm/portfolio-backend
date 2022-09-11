export interface IUserData {
  id?: string;
  description: string;
  layout: string;
  manufacturer: string;
  name: string;
  prerelease: string;
  product: string;
  ua: string;
  version: string;
  os: {
    architecture: string;
    family: string;
    version: string;
  };
  ip: string;

  location: {
    range: string[];
    country: string;
    region: string;
    eu: string;
    timezone: string;
    city: string;
    ll: string[];
    metro: number;
    area: number;
  };
}
