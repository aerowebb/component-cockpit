export interface ListModificationsDTO<T> {
  addedList?: T[];
  updatedList?: T[];
  deletedList?: T[];
}
