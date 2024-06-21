import { Query as TQuery } from "../api/query/Query";

export const QUERY_TITLE_FIELD = "id";

export const QueryTitle = (record: TQuery): string => {
  return record.id?.toString() || String(record.id);
};
