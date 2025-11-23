export interface VulnerabilityData {
  severity: string;
  count: number;
  fill: string;
}

export interface ContributorData {
  month: string;
  contributors: number;
  active: number;
}

export interface WorkDistributionData {
  category: string;
  hours: number;
  fullMark: number;
}

export enum TabType {
  DATA = 'DATA',
  SECURITY = 'SECURITY',
  COMMUNITY = 'COMMUNITY'
}