import { Reference } from "@/models/reference";
import { HttpRequest } from "@/utils/request";

const httpRequest = new HttpRequest(null, "/bnm/web/references");

export const list = async (data: any) => {
  const res = await httpRequest.get("", data);
  return res;
};

export const get = async (id: string) => {
  const res = await httpRequest.get(`/${id}`);

  return Reference.fromJson(res);
};

export const create = async (data: any) => {
  return httpRequest.post("", data);
};

export const update = async (id: string, data: any) => {
  return httpRequest.put(`/${id}`, data);
};

export const remove = async (id: string) => {
  return httpRequest.del(`/${id}`);
};
