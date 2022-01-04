var segundos = 00
var minutos = 00
var horas = 00
var interval

function start ()
{
    interval = setInterval(relogio, 1000)
}

function pause ()
{
    clearInterval(interval)
}

function reset ()
{
    clearInterval(interval)
    segundos = 0
    minutos = 0
    document.getElementById('relogio').innerText= "00:00:00"
}

function relogio()
{
    segundos++
    if (segundos==60)
    {
        minutos++
        segundos = 0
    }
    if (minutos == 60)
    {
        horas++
        minutos = 0
    }
    document.getElementById('relogio').innerText=horas + ":" + minutos + ":" + segundos
}