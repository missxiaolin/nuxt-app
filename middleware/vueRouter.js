/**
 * ie9 路由跳转问题
 * @param {*} context 
 */
export default function (context) {
    if (process.client) {
        window.history.replaceState = window.history.replaceState || function () { }
    }
}