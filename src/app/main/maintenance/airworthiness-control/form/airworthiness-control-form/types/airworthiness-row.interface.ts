import { ControlConfigConstants } from '../../../../../../shared/constants/control-config-constants';
import { GenerateAirworthinessControlTableOutput } from '../../../../../../shared/types/api-output-types/airworthiness-management/generate-airworthiness-control-table-output.interface';
import { BidoBireDocumentDTO } from '../../../../../../shared/types/api-types/bido-bire-documentdto';

export class AirworthinessRow {
  public alert: ControlConfigConstants | undefined;
  public asset: string;
  public csn: string;
  public designation: string;
  public mp: string;
  public nextWorkPackage: string;
  public potential: string;
  public status: string;
  public tsn: string;
  public hasChildren: boolean;
  public pnCode?: string;
  public sn?: string;
  public _id: string;
  public _obj: GenerateAirworthinessControlTableOutput;
  public _alertLoading: boolean;
  public _alertTooltip: string;
  public _expand: boolean;
  public _potentialLoading: boolean;
  public illustrationDocument ?: BidoBireDocumentDTO;


  public constructor() {
    this._obj = {
      bidoEquipment: {},
      children: []
    };
    this._alertLoading = false;
    this._expand = false;
    this._potentialLoading = false;
  }
}
