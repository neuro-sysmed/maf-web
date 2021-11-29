
export interface Acl {
  id:string;
  endpoint:string;
  can_create:boolean;
  can_read:boolean;
  can_update:boolean;
  can_delete:boolean;
}

export interface AclHash {
  [acls: string]: Acl; 
}

export interface UserInfo {
  id: string;
  username: string;
  email: string;
  superuser: boolean;
  name: string;
//  acls: string;
//  [acls: string] : string;
  acls: AclHash;
}

