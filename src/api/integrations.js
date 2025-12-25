import { api } from "./client";

// Minimal integration helpers used by the UI.

export async function InvokeLLM({ prompt, system } = {}) {
  const { data } = await api.post("/api/ai/invoke-llm", { prompt, system });
  return data;
}

// Stubs for optional features not implemented in this app.
export async function SendEmail() {
  throw new Error("SendEmail not implemented");
}

export async function UploadFile() {
  throw new Error("UploadFile not implemented");
}

export async function GenerateImage() {
  throw new Error("GenerateImage not implemented");
}

export async function ExtractDataFromUploadedFile() {
  throw new Error("ExtractDataFromUploadedFile not implemented");
}

export async function CreateFileSignedUrl() {
  throw new Error("CreateFileSignedUrl not implemented");
}

export async function UploadPrivateFile() {
  throw new Error("UploadPrivateFile not implemented");
}
