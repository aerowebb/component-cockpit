import {AssetStructureOptionsDTO} from './asset-structure-options-dto.interface';

export interface ControlConfigurationOptions {

 	assetStructureOptions?: AssetStructureOptionsDTO;
	isConfigurationCheckEnabled?: boolean;
	isStructureCheckEnabled?: boolean;
	isPotentialCheckEnabled?: boolean;
	isReferentialCheckEnabled?: boolean;
	isMELCheckEnabled?: boolean;
	isLogbookCheckEnabled?: boolean;
	isFLCheckEnabled?: boolean;
	
}
