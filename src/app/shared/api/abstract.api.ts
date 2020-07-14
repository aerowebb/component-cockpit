import { ServerUtils } from '../utils/server-utils';

export class AbstractApi {
  private readonly baseUrl: string;

  protected constructor(baseUrl: string) {
    let formattedBaseUrl: string = ServerUtils.removeTrailingSeparator(baseUrl);
    formattedBaseUrl = ServerUtils.addLeadingSeparator(formattedBaseUrl);

    this.baseUrl = formattedBaseUrl;
  }

  protected appendToBaseUrl(serviceUrl: string) {
    let formattedServiceUrl: string = ServerUtils.removeTrailingSeparator(serviceUrl);
    formattedServiceUrl = ServerUtils.addLeadingSeparator(formattedServiceUrl);

    return this.baseUrl + formattedServiceUrl;
  }
}
