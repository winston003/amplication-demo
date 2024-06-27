import { GitHubLinkWhereInput } from "./GitHubLinkWhereInput";
import { GitHubLinkOrderByInput } from "./GitHubLinkOrderByInput";

export type GitHubLinkFindManyArgs = {
  where?: GitHubLinkWhereInput;
  orderBy?: Array<GitHubLinkOrderByInput>;
  skip?: number;
  take?: number;
};
