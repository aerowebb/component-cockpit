export class BidmWorkOrderUtils {
  private static readonly TASK_CODE_VERSION_SEP: string = '-';

  public static getTaskCodeFromTaskId(task: string | undefined): string {
    if (!task) {
      return '';
    }

    return task.split(BidmWorkOrderUtils.TASK_CODE_VERSION_SEP)[0];
  }

  public static getTaskVersionFromTaskId(task: string | undefined): string {
    if (!task) {
      return '';
    }

    return task.split(BidmWorkOrderUtils.TASK_CODE_VERSION_SEP)[1];
  }
}
