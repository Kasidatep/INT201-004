import {CookieUtil} from './lib/cookieUtil.js'
CookieUtil.set('member', 'Umaporn')
CookieUtil.set('color-tone', 'pastel', new Date('December 1, 2022'))
console.log(CookieUtil.get('color-tone'))
console.log(CookieUtil.get('member'))
CookieUtil.unset('color-tone')