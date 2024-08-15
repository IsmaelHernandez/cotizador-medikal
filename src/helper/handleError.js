export default function HandlerError(error) {
  return error.response?.data?.message ?? error.message ?? "";
}
