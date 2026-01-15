export class ErrorResponse {
  code: string;
  reason: string; // ระบุเหตุผลของ error
  data?: any; // ข้อมูลที่เกี่ยวข้องกับ error
}
