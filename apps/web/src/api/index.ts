import axios from 'axios'
import { setInterceptors } from './interceptors'

console.log('현재 연결서버주소', process.env.REACT_APP_URL)
// 액시오스 초기화 함수
function createInstanceWithAuth(url?: string | undefined, type?: string | undefined) {
  const instance = axios.create({
    baseURL: `http://${process.env.REACT_APP_URL}/${url}`
  })
  return setInterceptors(instance, type)
}

/** http://localhost:3005/ */
export const instance = createInstanceWithAuth()

/** http://localhost:3005/users */
export const sign = createInstanceWithAuth('user')

/** http://localhost:3005/club */
export const club = createInstanceWithAuth('club')

/** http://localhost:3005/my */
export const my = createInstanceWithAuth('my')

/** http://localhost:3005/nft */
export const nft = createInstanceWithAuth('nft')
export const nftMulti = createInstanceWithAuth('nft', 'multipart/form-data')

/** http://localhost:3005/post */
