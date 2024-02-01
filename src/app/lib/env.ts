import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  CLEANURI_API_URL: str(),
});

export default env;
