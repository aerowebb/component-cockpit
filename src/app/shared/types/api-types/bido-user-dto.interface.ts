export interface BidoUserDTO {
  userId?: string;
  firstname?: string;
  lastname?: string;
  login?: string;
  password?: string;
  userComment?: string;
  eMail?: string;
  lastLoginDate?: Date;
  lastLogoutDate?: Date;
  lastPasswordChangeDate?: Date;
  validityDate?: Date;
  customerCode?: string;
  employeeId?: string;
  isUserService?: boolean;
  isUserMobile?: boolean;
  company? : string;
  employee ?: string;
  email?: string;

}
