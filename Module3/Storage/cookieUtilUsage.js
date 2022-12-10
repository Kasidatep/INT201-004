import {CookieUtil} from './lib/cookieUtil.js'
CookieUtil.set('Customer', 'Umaporn')
CookieUtil.set('color-bg-tone', 'pastel', new Date('December 20, 2022'))
console.log(CookieUtil.get('color-tone'))
console.log(CookieUtil.get('member'))
CookieUtil.unset('color-tone')