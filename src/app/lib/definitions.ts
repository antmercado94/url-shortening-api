export type ProcessedLink = {
  id: string;
  url: string;
  shortLink: string;
};

export type APIResponse = {
  result_url: string;
  error?: string;
};
