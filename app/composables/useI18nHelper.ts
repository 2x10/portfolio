/**
 * Returns an array of translated strings for a given array translation key.
 * @param key Base translation key (e.g., 'about.description')
 */
export function useI18nHelper() {
    const { t, locale, getLocaleMessage, setLocale } = useI18n()

    function getArray(key: string): string[] 
    {
        // Get the raw messages
        const raw = (getLocaleMessage(locale.value) as any)
        
        const parts = key.split('.') 
        let arr = raw
        for (const part of parts) {
            arr = arr?.[part]
            if (!arr) return [] 
        }

        if (!Array.isArray(arr)) return []

        return arr.map((_, i) => t(`${key}.${i}`))
    }

    const selectedLocale = computed
    ({
        get: () => locale.value,
        set: (val) => setLocale(val)
    })

    return { getArray, selectedLocale, t }
}