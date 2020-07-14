export interface Confirmation {
  messageKey: string;
  accept: Function;
  contextKeys?: string[];
  interpolateParams?: Object;
  reject?: Function;
  delayCallback?: boolean;
}
