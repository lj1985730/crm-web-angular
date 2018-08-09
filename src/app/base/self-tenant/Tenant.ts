import {TreeEntity} from '../../core/TreeEntity';

export interface Tenant extends TreeEntity {
  enName: string;
  shortName: string;
  uscc: string;
  code: string;
  category: string;
  categoryText: string;
  location: string;
  legalRepresentative: string;
  registeredCapital: string;
  establishmentDate: string;
  businessTermStart: string;
  businessTermEnd: string;
  businessScope: string;
  linkman: string;
  fax: string;
  phone: string;
  email: string;
  level: number;
  remark: number;
}
