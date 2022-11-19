export const resInterceptor = {
  onFulfill(response: any) {
    return response;
  },
  onReject(error: any) {
    if (error.response) {
      return Promise.reject(error.response);
    }
    if (error.request) {
      return Promise.reject({ error: 'Error' });
    }
    return Promise.reject(error);
  },
};
