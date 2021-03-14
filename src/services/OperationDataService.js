import http from "../http-common";

const getAll = () => {
  return http.get("/operations");
};

const get = id => {
  return http.get(`/operations/${id}`);
};

const create = data => {
  return http.post("/operations", data);
};

const update = (id, data) => {
  return http.put(`/operations/${id}`, data);
};

const remove = id => {
  return http.delete(`/operations/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
};
