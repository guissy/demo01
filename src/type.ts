export interface User {
  user_id: number;
  user_name: string;
  user_name_cn: string;
  role: number;
  user_level: number;
  expiration_date: string;
  company?: string;
  depart?: string;
  position?: string;
  // roles: RoleItem[]
  login_times: number;
  workspace_ids: number[];
  workspaceTime: number;
  login_date: number;

  is_visible: string | number;
  allow_ip: string;
  phone?: string;
  email?: string;
  organization_name?: string;
  email_address: string;
}

export type CurrentUser = Omit<User, 'user_id'> & {
  id: number;
  name: string;
  name_cn: string;
  is_admin: boolean;
  is_super_admin: 1 | 0;
  organization_id: number;
};
