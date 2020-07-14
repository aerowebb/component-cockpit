import {TaskDTO} from './task-dto.interface';
import {SpecToolsDTO} from './spec-tools-dto.interface';
import {IngredientsDTO} from './ingredients-dto.interface';
import {QualificationDTO} from './qualification-dto.interface';
import {ProcessDTO} from './process-dto.interface';
import {SparePartsDTO} from './spare-parts-dto.interface';
import {SystChangesDTO} from './syst-changes-dto.interface';

export interface AssetWorkDTO {

 	tasksData?: TaskDTO[];
	specToolsData?: SpecToolsDTO[];
	standToolsData?: StandToolsDTO[];
	ingData?: IngredientsDTO[];
	qualData?: QualificationDTO[];
	processData?: ProcessDTO[];
	sparePartsData?: SparePartsDTO[];
	systChangesData?: SystChangesDTO[];
	workAssetUser?: string;
	workAssetDate?: string;
	workAssetProjectNumber?: string;
	workAssetStatus?: string;
	workAssetMroCenter?: string;
	workAssetDueDate?: string;
	tasksAssetUser?: string;
	tasksAssetDate?: string;
	tasksProjectNumber?: string;
	specToolsAssetUser?: string;
	specToolsAssetDate?: string;
	specToolsProjectNumber?: string;
	standToolsAssetUser?: string;
	standToolsAssetDate?: string;
	standToolsProjectNumber?: string;
	ingAssetUser?: string;
	ingAssetDate?: string;
	ingProjectNumber?: string;
	qualifAssetUser?: string;
	qualifAssetDate?: string;
	qualifProjectNumber?: string;
	sparePartsAssetUser?: string;
	sparePartsAssetDate?: string;
	sparePartsProjectNumber?: string;
	systChangesAssetUser?: string;
	systChangesAssetDate?: string;
	systChangesProjectNumber?: string;
	
}
