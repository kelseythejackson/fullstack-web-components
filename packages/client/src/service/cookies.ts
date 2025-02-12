type InternalCookiePermission = {
  permission: boolean;
};

export enum COOKIES {
  ACCEPT,
  DECLINE,
}

export type CookiePermission = {
  permission: COOKIES.ACCEPT | COOKIES.DECLINE;
};
