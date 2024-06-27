import { OpenSourceProject as TOpenSourceProject } from "../api/openSourceProject/OpenSourceProject";

export const OPENSOURCEPROJECT_TITLE_FIELD = "projectName";

export const OpenSourceProjectTitle = (record: TOpenSourceProject): string => {
  return record.projectName?.toString() || String(record.id);
};
