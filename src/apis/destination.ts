import { IBeautifulPlace } from "@/interfaces/beautiful-place";
import { BeautifulPlace } from "@/models/beautiful-place";
import { Result } from "@/models/result";
import { HttpRequest } from "@/utils/request";

const httpRequest = new HttpRequest(null, "/bnm/web/beautiful-places");
// Mares1221..
// Энэхүү захиалгын форм нь нууцлагдсан орчинд ажилладаг бөгөөд залилангийн шинж чанартай гэмт хэргээс урьдчилан сэргийлж таны IP хаягийг (138.252.29.4) бүртгэн авч байгаа болно.

export const list = async (data: any) => {
  const res = await httpRequest.get("", data as any);

  return Result.fromJson<IBeautifulPlace>({
    rows: res?.rows?.map((row: IBeautifulPlace) =>
      BeautifulPlace.fromJson(row),
    ),
    count: res?.count,
  });
};

export const get = async (id: string) => {
  const res = await httpRequest.get(`/${id}`);
  return BeautifulPlace.fromJson(res);
};

export const destinationApi = {
  list,
  get,
};
