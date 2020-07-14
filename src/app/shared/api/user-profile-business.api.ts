import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class UserProfileBusinessApi extends AbstractApi {
  private static readonly baseUrl: string = '/user_profile_business';

  // public readonly isSuperInstaller: string = super.appendToBaseUrl('/is_super_installer');

  // public readonly checkLicense: string = super.appendToBaseUrl('/check_license');

  // public readonly checkLicense: string = super.appendToBaseUrl('/check_license');

  // public readonly checkAndGetUser: string = super.appendToBaseUrl('/check_and_get_user');

  // public readonly exportUsers: string = super.appendToBaseUrl('/export_users');

  // public readonly calculateLicenseReport: string = super.appendToBaseUrl('/calculate_license_report');

  // public readonly getNumberOfCurrentlyLoggedUsers: string = super.appendToBaseUrl('/get_number_of_currently_logged_users');

  // public readonly getAwLicenseNumber: string = super.appendToBaseUrl('/get_aw_license_number');

  public readonly isBuildingBlockInstalled: string = super.appendToBaseUrl('/is_building_block_installed');

  // public readonly synchronizeFunctionTypes: string = super.appendToBaseUrl('/synchronize_function_types');

  // public readonly extractUserPreferenceCombination: string = super.appendToBaseUrl('/extract_user_preference_combination');

  // public readonly getLicensesNumberInLicense: string = super.appendToBaseUrl('/get_licenses_number_in_license');

  public readonly updateLocale: string = super.appendToBaseUrl('/update_locale');

  public readonly hasDisplayRights: string = super.appendToBaseUrl('/has_display_rights');

  public readonly hasSimulateRights: string = super.appendToBaseUrl('/has_simulate_rights');

  public readonly hasUpdateRights: string = super.appendToBaseUrl('/has_update_rights');

  public readonly hasManageRights: string = super.appendToBaseUrl('/has_manage_rights');

  public readonly getUserRightList: string = super.appendToBaseUrl('/get_user_right_list');

  public readonly getUserSite: string = super.appendToBaseUrl('/get_user_site');

  public readonly getUserWarehouse: string = super.appendToBaseUrl('/get_user_warehouse');

  public constructor() {
    super(UserProfileBusinessApi.baseUrl);
  }
}
