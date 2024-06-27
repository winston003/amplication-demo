import { GitHubLink as TGitHubLink } from "../api/gitHubLink/GitHubLink";

export const GITHUBLINK_TITLE_FIELD = "repoName";

export const GitHubLinkTitle = (record: TGitHubLink): string => {
  return record.repoName?.toString() || String(record.id);
};
