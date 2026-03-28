import { InjectionToken } from "@angular/core"

export interface PortalData<T> {
  data: T
}
export const PORTAL_DATA = new InjectionToken<any>('PORTAL_DATA');