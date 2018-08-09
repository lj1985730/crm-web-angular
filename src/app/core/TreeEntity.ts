import {BaseEntity} from './BaseEntity';

export interface TreeEntity extends BaseEntity {
  name: string;
  parentId: string;
  sortNumber: number;
  enabled: boolean;
}
