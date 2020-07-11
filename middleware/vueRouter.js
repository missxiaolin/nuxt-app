export default function (context) {
    if (process.client) {
        window.history.replaceState = window.history.replaceState || function () { }
    }
}