import { api } from "./client";

function url(entity, id) {
  return id ? `/api/${entity}/${id}` : `/api/${entity}`;
}

function make(entity) {
  return {
    list: async (params = {}) => (await api.get(url(entity), { params })).data,
    get: async (id) => (await api.get(url(entity, id))).data,
    create: async (data) => (await api.post(url(entity), data)).data,
    update: async (id, data) => (await api.patch(url(entity, id), data)).data,
    remove: async (id) => (await api.delete(url(entity, id))).data,
  };
}

export const entities = {
  Incident: make("Incident"),
  Decision: make("Decision"),
  PredictiveAlert: make("PredictiveAlert"),
  KnowledgeBaseArticle: make("KnowledgeBaseArticle"),
  PostIncidentReview: make("PostIncidentReview"),
  AuditLog: make("AuditLog"),
  IncidentAutomation: make("IncidentAutomation"),
};
