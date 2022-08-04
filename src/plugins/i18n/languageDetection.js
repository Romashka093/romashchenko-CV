export const options = {
    // order and from where user language should be detected
    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],

    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',

    // cache user language on
    caches: ['localStorage'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement,
}