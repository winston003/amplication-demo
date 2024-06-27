import { SortOrder } from "../../util/SortOrder";

export type GitHubLinkOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  repoName?: SortOrder;
  repoUrl?: SortOrder;
  updatedAt?: SortOrder;
};
