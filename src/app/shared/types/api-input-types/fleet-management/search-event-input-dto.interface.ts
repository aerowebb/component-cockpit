import { EventCriteriaInputDTO } from '../../api-types/event-criteria-input-dto.interface';

export interface SearchEventInputDTO {
    eventCriteriaInputDTO: EventCriteriaInputDTO;
    rationalOperator?: number;
    rationalOperand?: number;
}
