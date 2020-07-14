import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class UserProfileManagementApi extends AbstractApi {
  private static readonly baseUrl: string = '/user_profile_management';

  public readonly addFavorite: string = super.appendToBaseUrl('/add_favorite');

  public readonly favorites: string = super.appendToBaseUrl('/favorites');

  public readonly getDefaultFavorite: string = super.appendToBaseUrl('/get_default_favorite');

  public readonly removeDefaultFavorite: string = super.appendToBaseUrl('/remove_default_favorite');

  public readonly removeFavorite: string = super.appendToBaseUrl('/remove_favorite');

  public readonly setDefaultFavorite: string = super.appendToBaseUrl('/set_default_favorite');

  // public readonly createUser: string = super.appendToBaseUrl('/create_user');

  // public readonly updateUser: string = super.appendToBaseUrl('/update_user');

  // public readonly createProfile: string = super.appendToBaseUrl('/create_profile');

  // public readonly updateProfile: string = super.appendToBaseUrl('/update_profile');

  public readonly removeUser: string = super.appendToBaseUrl('/removeuser');

  public readonly removeProfile: string = super.appendToBaseUrl('/remove_profile');

  public readonly findUserByLogin: string = super.appendToBaseUrl('/find_user_by_login');

  public readonly findAllBidoUsers: string = super.appendToBaseUrl('/getallusers');

  public readonly findUser: string = super.appendToBaseUrl('/find_user');

  // public readonly findFunctionType: string = super.appendToBaseUrl('/find_function_type');

  // public readonly removeMandant: string = super.appendToBaseUrl('/remove_mandant');

  // public readonly findMandant: string = super.appendToBaseUrl('/find_mandant');

  // public readonly findMandantUser: string = super.appendToBaseUrl('/find_mandant_user');

  // public readonly findBidoFunctionTypesByUserAndProfileIdsAndFunctionModule: string = super.appendToBaseUrl('/find_bido_function_types_by_user_and_profile_ids_and_function_module');

  // public readonly findBidoPreferenceUsersByReferencedPreferenceUser: string = super.appendToBaseUrl('/find_bido_preference_users_by_referenced_preference_user');

  public readonly findAllBidoProfiles: string = super.appendToBaseUrl('/find_all_bido_profiles');

  // public readonly findBidoUserProfilesByProfileId: string = super.appendToBaseUrl('/find_bido_user_profiles_by_profile_id');

  // public readonly findBidoUsersByEmployeeId: string = super.appendToBaseUrl('/find_bido_users_by_employee_id');

  // public readonly findBidoProfilesByUser: string = super.appendToBaseUrl('/find_bido_profiles_by_user');

  // public readonly findProfileByName: string = super.appendToBaseUrl('/find_profile_by_name');

  // public readonly createProfileFunction: string = super.appendToBaseUrl('/create_profile_function');

  // public readonly removeProfileFunction: string = super.appendToBaseUrl('/remove_profile_function');

  // public readonly removeProfileFunctionsByUserId: string = super.appendToBaseUrl('/remove_profile_functions_by_user_id');

  public readonly findAllBidoFunctionTypesByModule: string = super.appendToBaseUrl('/getallfunctiontypesbymodule');

  public readonly getBuildingBlockUseCaseLevel: string = super.appendToBaseUrl('/getbuildingblockusecaselevel');

  public readonly createFunctionType: string = super.appendToBaseUrl('/create_function_type');

  public readonly updateFunctionType: string = super.appendToBaseUrl('/update_function_type');

  // public readonly removeFunctionType: string = super.appendToBaseUrl('/remove_function_type');

  // public readonly findProfileFunction: string = super.appendToBaseUrl('/find_profile_function');

  // public readonly updateBidoPasswordOfUser: string = super.appendToBaseUrl('/update_bido_password_of_user');

  // public readonly updateLastLoginDateOfUser: string = super.appendToBaseUrl('/update_last_login_date_of_user');

  // public readonly updateLastLogoutDateOfUser: string = super.appendToBaseUrl('/update_last_logout_date_of_user');

  // public readonly createBidoMandant: string = super.appendToBaseUrl('/create_bido_mandant');

  // public readonly findAllBidoMandants: string = super.appendToBaseUrl('/find_all_bido_mandants');

  // public readonly createBidoMandantUser: string = super.appendToBaseUrl('/create_bido_mandant_user');

  // public readonly removeBidoMandantUser: string = super.appendToBaseUrl('/remove_bido_mandant_user');

  // public readonly findAllBidoMandantUsers: string = super.appendToBaseUrl('/find_all_bido_mandant_users');

  // public readonly findBidoMandantUsersByUserId: string = super.appendToBaseUrl('/find_bido_mandant_users_by_user_id');

  // public readonly removeBidoMandantUsersByUserId: string = super.appendToBaseUrl('/remove_bido_mandant_users_by_user_id');

  // public readonly findAllBidoFunctionTypes: string = super.appendToBaseUrl('/find_all_bido_function_types');

  // public readonly findBidoProfileFunctionsByUser: string = super.appendToBaseUrl('/find_bido_profile_functions_by_user');

  // public readonly createBidoPuProfile: string = super.appendToBaseUrl('/create_bido_pu_profile');

  public readonly saveBidoPreferenceUser: string = super.appendToBaseUrl('/save_bido_preference_user');

  public readonly removeBidoPreferenceUser: string = super.appendToBaseUrl('/remove_bido_preference_user');

  // public readonly findBidoPreferenceUser: string = super.appendToBaseUrl('/find_bido_preference_user');

  public readonly findAllBidoProperties: string = super.appendToBaseUrl('/find_all_bido_properties');

  // public readonly findBidoPropertiesValues: string = super.appendToBaseUrl('/find_bido_properties_values');

  // public readonly findBidoProperties: string = super.appendToBaseUrl('/find_bido_properties');

  // public readonly createBidoPropertiesValue: string = super.appendToBaseUrl('/create_bido_properties_value');

  // public readonly updateBidoPropertiesValue: string = super.appendToBaseUrl('/update_bido_properties_value');

  public readonly deleteBidoPropertiesValue: string = super.appendToBaseUrl('/delete_bido_properties_value');

  // public readonly findBidoPropertiesValueData: string = super.appendToBaseUrl('/find_bido_properties_value_data');

  public readonly saveBidoPropertiesValue: string = super.appendToBaseUrl('/save_bido_properties_value');

  public readonly findBidoUsersWithUseCase: string = super.appendToBaseUrl('/find_bido_users_with_use_case');

  // public readonly findBidoUsersWithMobileAccess: string = super.appendToBaseUrl('/find_bido_users_with_mobile_access');

  // public readonly findBidoUsersWithServiceAccess: string = super.appendToBaseUrl('/find_bido_users_with_service_access');

  public readonly findBackgroundJobs: string = super.appendToBaseUrl('/getbackgroundjobdetail');

  // public readonly findBidoUsersBySapClientAndSapLogin: string = super.appendToBaseUrl('/find_bido_users_by_sap_client_and_sap_login');

  // public readonly findBidoProfilesByUserAndBuildingBlock: string = super.appendToBaseUrl('/find_bido_profiles_by_user_and_building_block');

  // public readonly findBidoProfilesByUserAndBuildingBlocks: string = super.appendToBaseUrl('/find_bido_profiles_by_user_and_building_blocks');

  // public readonly findBidoFunctionTypesByUserAndProfileIds: string = super.appendToBaseUrl('/find_bido_function_types_by_user_and_profile_ids');

  // public readonly findBidoProfileFunctionsByUserAndFunctionModule: string = super.appendToBaseUrl('/find_bido_profile_functions_by_user_and_function_module');

  // public readonly removeProfileFunctionsByUserIdAndProfileId: string = super.appendToBaseUrl('/remove_profile_functions_by_user_id_and_profile_id');

  // public readonly findBidoMandantUserByLoginAndSapCLient: string = super.appendToBaseUrl('/find_bido_mandant_user_by_login_and_sap_c_lient');

  // public readonly removeBidoPuProfileByPreferenceUserId: string = super.appendToBaseUrl('/remove_bido_pu_profile_by_preference_user_id');

  // public readonly findBidoPuProfilesByMandantAndPreferenceUserId: string = super.appendToBaseUrl('/find_bido_pu_profiles_by_mandant_and_preference_user_id');

  // public readonly findBidoPreferenceUsersByPreference: string = super.appendToBaseUrl('/find_bido_preference_users_by_preference');

  // public readonly findBidoPreferenceUsersByPreferenceAndValue: string = super.appendToBaseUrl('/find_bido_preference_users_by_preference_and_value');

  // public readonly findBidoPreferenceUsersByPreferenceAndProfiles: string = super.appendToBaseUrl('/find_bido_preference_users_by_preference_and_profiles');

  // public readonly findBidoPreferenceUsersByPreferenceAndUser: string = super.appendToBaseUrl('/find_bido_preference_users_by_preference_and_user');

  // public readonly findBidoPreferenceUserByUserAndPreference: string = super.appendToBaseUrl('/find_bido_preference_user_by_user_and_preference');

  public readonly findBidoPropertiesValuesByPropertiesId: string = super.appendToBaseUrl(
    '/find_bido_properties_values_by_properties_id'
  );
  public readonly companyMap: string = super.appendToBaseUrl('/company_map');
  public readonly copyUserProfile: string = super.appendToBaseUrl('/copyuserprofile');
  public readonly getuserdetail: string = super.appendToBaseUrl('/getuserdetail');

  public readonly getUseCasesAccessDegrees: string = super.appendToBaseUrl('/get_use_case_access_degrees');

  public readonly findUsersBySearchCriteria: string = super.appendToBaseUrl('/findusersbysearchcriteria');

  public readonly updateUserDetails: string = super.appendToBaseUrl('/updateuserdetails');

  public readonly addUser: string = super.appendToBaseUrl('/adduser');

  public readonly checkSapUser: string = super.appendToBaseUrl('/checksapuser');

  // public readonly findPropertyValuesByPropertyNameAndLocale: string = super.appendToBaseUrl('/find_property_values_by_property_name_and_locale');

  // public readonly findPropertyKeysByPropertyNameAndValueAndLocale: string = super.appendToBaseUrl('/find_property_keys_by_property_name_and_value_and_locale');

  // public readonly isBackgroundJobRunningByJobNameAndParameters: string = super.appendToBaseUrl('/is_background_job_running_by_job_name_and_parameters');

  public readonly findProfileWithUseCasesByName: string = super.appendToBaseUrl(
    '/find_profile_data_with_use_cases_by_name'
  );

  public readonly findBuildingBlocksForProfile: string = super.appendToBaseUrl('/find_building_blocks_for_profile');

  public readonly saveProfile: string = super.appendToBaseUrl('/save_profile');

  public readonly findFilterList: string = super.appendToBaseUrl('/fill_filter_list');

  public readonly getBidoPreferenceById: string = super.appendToBaseUrl('/get_bido_preference_by_id');

  public readonly fillLogicLink: string = super.appendToBaseUrl('/fill_logical_link');

  public readonly fillObject: string = super.appendToBaseUrl('/fill_objects');

  public readonly fillData: string = super.appendToBaseUrl('/fill_data');

  public readonly fillValue: string = super.appendToBaseUrl('/fill_value');

  public readonly fillType: string = super.appendToBaseUrl('/fill_type');

  public readonly fillProfile: string = super.appendToBaseUrl('/fill_profile');

  public readonly fillSite: string = super.appendToBaseUrl('/fill_sites');

  public readonly fillVariant: string = super.appendToBaseUrl('/fill_variant');

  public readonly saveBidoFilter: string = super.appendToBaseUrl('/save_filter');

  public readonly saveInspectionMatrix: string = super.appendToBaseUrl('/save_inspection_matrix');

  public readonly getInspectionMatrix: string = super.appendToBaseUrl('/get_inspection_matrix');

  public readonly fillMatrixType: string = super.appendToBaseUrl('/fill_matrix_type');

  public readonly fillMatrixMatching: string = super.appendToBaseUrl('/fill_matrix_matching');

  public readonly fillMatrixStatus: string = super.appendToBaseUrl('/fill_matrix_status');

  public readonly getMrocenter: string = super.appendToBaseUrl('/get_mrocenter');

  public readonly getCustomer: string = super.appendToBaseUrl('/get_customer');

  public readonly getFamily: string = super.appendToBaseUrl('/get_family');

  public readonly removeBidoUserFilter: string = super.appendToBaseUrl('/remove_bido_preference_user_filter_screen');

  public readonly changePasswordUser: string = super.appendToBaseUrl('/update_bido_password_of_user');

  public readonly findBidoPropertyValuesByPropertyId: string = super.appendToBaseUrl(
    '/find_bido_property_values_by_property_id'
  );

  public readonly updateSettings: string = super.appendToBaseUrl('/update_settings');

  public readonly getCustomizationData: string = super.appendToBaseUrl('/get_customization_data');

  public readonly fillStatusDropDown: string = super.appendToBaseUrl('/fill_status_drop_down');

  public readonly getAllUsersDropdown: string = super.appendToBaseUrl('/get_all_users_drop_down');

  public readonly initDate: string = super.appendToBaseUrl('/init_date');

  public readonly findAllBidoFunctionTypeByModule: string = super.appendToBaseUrl(
    '/find_all_bido_function_type_by_module'
  );

  public readonly findAllBidoUser: string = super.appendToBaseUrl('/find_all_bido_user');

  public readonly checkAWLicense: string = super.appendToBaseUrl('/check_aw_license_number');

  public readonly findUsersWithUseCaseForWorkOrder: string = super.appendToBaseUrl(
    '/find_users_with_use_case_for_work_order'
  );

  public readonly getUserSiteByLogin: string = super.appendToBaseUrl('/get_user_site_by_login');

  public readonly getUserWarehouseByLogin: string = super.appendToBaseUrl('/get_user_warehouse_by_login');

  public constructor() {
    super(UserProfileManagementApi.baseUrl);
  }
}
