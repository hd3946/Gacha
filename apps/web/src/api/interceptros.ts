export function setInterceptors(
  instance: {
    interceptors: {
      request: { use: (arg0: (config: any) => any, arg1: (error: any) => Promise<never>) => void }
      response: { use: (arg0: (response: any) => any, arg1: (error: any) => Promise<never>) => void }
    }
  },
  type: any
) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function (config: { headers: { [x: string]: string }; withCredentials: boolean }) {
      if (type) {
        config.headers['Content-Type'] = 'multipart/form-data;; charset=utf-8'
      } else {
        config.headers['Content-Type'] = 'application/json; charset=utf-8'
      }
      config.withCredentials = true
      //config.headers.Authorization = store.state.token; // token
      return config
    },
    function (error: any) {
      return Promise.reject(error)
    }
  )

  // 응답에 대한 리턴값 설정 및 오류 발생에 대한 처리
  instance.interceptors.response.use(
    function (response: any) {
      return response
    },
    function (error: any) {
      return Promise.reject(error)
    }
  )
  return instance
}
