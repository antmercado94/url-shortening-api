import { z } from "zod";

const invalid_type_error = "Please input a valid URL";
const required_error = "Please add a link";

export const FormSchema = z.object({
  url: z
    .string({
      invalid_type_error,
      required_error,
    })
    .url({
      message: required_error,
    }),
});
