import { HttpRequest } from "@/utils/request";

const httpRequest = new HttpRequest(null, "/bnm/web/merchants");

export const list = async (data: any) => {
  const { count, rows } = await httpRequest.get("/merchants", data);

  return {
    count: count,
    rows: rows.map((item: any) => item),
  };
};

export const get = async (id: string) => {
  return httpRequest.get(`/merchants/${id}`);
};

export const create = async (data: any) => {
  return httpRequest.post("/merchants", data);
};

export const update = async (id: string, data: any) => {
  return httpRequest.put(`/merchants/${id}`, data);
};

export const remove = async (id: string) => {
  return httpRequest.del(`/merchants/${id}`);
};
