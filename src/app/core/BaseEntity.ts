export interface BaseEntity {
  id: string;
  tenantId: string;
  lastModifyAccountId: string;
  lastModifyTime: string;
  deleted: boolean;
}
