import { api } from "./client";

// Backend function endpoints live under /api/functions/<name>

export async function callFunction(name, payload = {}) {
  const { data } = await api.post(`/api/functions/${name}`, payload);
  return data;
}

