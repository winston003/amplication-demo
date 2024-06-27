import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GitHubLinkWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  repoName?: StringNullableFilter;
  repoUrl?: StringNullableFilter;
};
