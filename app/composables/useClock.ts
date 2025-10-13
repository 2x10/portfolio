export function useClock() 
{
    const time = ref<string>('')

    const updateClock = () => 
    {
        var now = new Date();
        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours();

        time.value = 
            ("0" + hours).substr(-2) + ":" + 
            ("0" + minutes).substr(-2) + ":" + 
            ("0" + seconds).substr(-2)
    }

    let intervalId: number | undefined

    onMounted(() => 
    {
        updateClock()
        intervalId = window.setInterval(updateClock, 1000)
    })

    onUnmounted(() => 
    {
        if (intervalId) clearInterval(intervalId)
    })
    return time
}
