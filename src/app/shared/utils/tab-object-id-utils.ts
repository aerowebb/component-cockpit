import { BireEvolutionDTOId } from '../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireFamilyDTOId } from '../../shared/types/api-types/bire-family-dto-id.interface';
import { BireOperationDTOId } from '../../shared/types/api-types/bire-operation-dto-id.interface';
import { BireSbDTOId } from '../../shared/types/api-types/bire-sb-dto-id.interface';

export class TabObjectIdUtils {
  public static readonly DEFAULT_SEPARATOR = '|';

  public static readonly CONTEXT_SEPARATOR = '-';

  public static bireOperationDTOIdToString(operationId: BireOperationDTOId): string {
    return (
      operationId.opeCode +
      TabObjectIdUtils.DEFAULT_SEPARATOR +
      operationId.opeVersion +
      TabObjectIdUtils.DEFAULT_SEPARATOR +
      operationId.rangeCode
    );
  }

  public static bireFamilyDTOIdToString(bireFamilyiD: BireFamilyDTOId): string {
    return bireFamilyiD.familyCode + TabObjectIdUtils.DEFAULT_SEPARATOR + bireFamilyiD.structureType;
  }

  public static stringToBireFamilyDTOId(objectId: string): BireFamilyDTOId {
    const temp = objectId.split(this.DEFAULT_SEPARATOR);
    const bireFamilyId: BireFamilyDTOId = { familyCode: temp[0], structureType: temp[1] };

    return bireFamilyId;
  }

  public static bireSbDTOIdToString(bireSbId: BireSbDTOId): string {
    return bireSbId.sbNumber + TabObjectIdUtils.DEFAULT_SEPARATOR + bireSbId.sbRevisionNumber;
  }

  public static stringToBireSbDTOId(objectId: string): BireEvolutionDTOId {
    const temp = objectId.split(this.DEFAULT_SEPARATOR);
    const bireEvolutionId: BireEvolutionDTOId = { evolutionRevisionNumber: temp[1], evolutionNumber: temp[0] };

    return bireEvolutionId;
  }

  public static bireEvolutionDTOIdToString(bireEvolutionId: BireEvolutionDTOId): string {
    const evoNum = `${bireEvolutionId.evolutionNumber}`;
    const evoRevNum = `${bireEvolutionId.evolutionRevisionNumber}`;

    return evoNum.concat(TabObjectIdUtils.DEFAULT_SEPARATOR, evoRevNum);
  }

  public static stringToBireEvolutionDTOId(objectId: string): BireEvolutionDTOId {
    const temp = objectId.split(this.DEFAULT_SEPARATOR);
    const bireEvolutionId: BireEvolutionDTOId = { evolutionRevisionNumber: temp[1], evolutionNumber: temp[0] };

    return bireEvolutionId;
  }
}
