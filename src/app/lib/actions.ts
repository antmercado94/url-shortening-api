"use server";

import { cookies } from "next/headers";
import { FormSchema } from "@/app/models/Form";
import { APIResponse, ProcessedLink } from "./definitions";
import env from "./env";

const API_URL = env.CLEANURI_API_URL;

// This is temporary until @types/react-dom is updated
export type ErrorState = {
  errors?: {
    url?: string[];
  };
  message?: string | null;
};

/**
 * Generate ProcessedLink obj
 */
export async function createProcessedLink(
  prevState: ErrorState | ProcessedLink,
  formData: FormData,
) {
  const validatedFields = FormSchema.safeParse({
    url: formData.get("url"),
  });

  // zod validation
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Could not process URL.",
    };
  }

  const { url } = validatedFields.data;

  // fetch api
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    if (!res.ok) {
      const { error }: APIResponse = await res.json();
      throw new Error(error);
    }

    const { result_url }: APIResponse = await res.json();

    const processedLink: ProcessedLink = {
      id: Date.now().toString(36),
      url,
      shortLink: result_url,
    };

    return processedLink;
  } catch (error) {
    return {
      errors: { url: ["Something went wrong, please try again"] },
      message: (error as Error).message,
    };
  }
}

/**
 * Create "items" cookie using Next.js server method
 * - only used for loading list skeletons
 * - sets length of items found within local storage
 * - would not be needed if using db instead of LS
 */
export async function setItemsCookie(val: number) {
  cookies().set("items", `${val}`, { maxAge: 34560000000 });
}
