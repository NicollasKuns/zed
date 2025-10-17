const botaoZedP = document.getElementById('ZedP')
const msgZedP = document.getElementById('msgZedP')
const botaoZedQ = document.getElementById('ZedQ')
const msgZedQ = document.getElementById('msgZedQ')
const botaoZedW = document.getElementById('ZedW')
const msgZedW = document.getElementById('msgZedW')
const botaoZedE = document.getElementById('ZedE')
const msgZedE = document.getElementById('msgZedE')
const botaoZedR = document.getElementById('ZedR')
const msgZedR = document.getElementById('msgZedR')
const video = document.getElementById('VideoHab')
const VP = document.getElementById('VP')
const VQ = document.getElementById('VQ')
const VW = document.getElementById('VW')
const VE =document.getElementById('VE')
const VR =document.getElementById('VR')
let p = false
let q = false
let w = false
let e = false
let r = false

botaoZedP.addEventListener('click', function() {
    msgZedQ.innerText = ""
    msgZedW.innerText = ""
    msgZedE.innerText = ""
    msgZedR.innerText = ""
    msgZedP.innerText = "Os ataques básicos de Zed contra alvos com pouca Vida causam Dano Mágico adicional. Esse efeito pode ocorrer contra o mesmo Campeão inimigo apenas uma vez a cada poucos segundos."
    if (!p) {
        p = true
        VP.style.display = 'block'
        VP.currentTime = 0
        VP.play()
    }
    if (q) {
        q = false
        VQ.style.display = 'none'
        VQ.pause()
    }
    if (w) {
        w = false
        VW.style.display = 'none'
        VW.pause()
    }
    if (e) {
        e = false
        VE.style.display = 'none'
        VE.pause()
    }
    if (r) {
        r = false
        VR.style.display = 'none'
        VR.pause()
    }
})

botaoZedQ.addEventListener('click', function() {
    msgZedP.innerText = ""
    msgZedW.innerText = ""
    msgZedE.innerText = ""
    msgZedR.innerText = ""
    msgZedQ.innerText = "Zed e suas sombras arremessam seus shurikens. Cada shuriken causa dano em todos os inimigos atingidos."
    if (!q) {
        q = true
        VQ.style.display = 'block'
        VQ.currentTime = 0
        VQ.play()
    }
    if (p) {
        p = false
        VP.style.display = 'none'
        VP.pause()
    }
    if (w) {
        w = false
        VW.style.display = 'none'
        VW.pause()
    }
    if (e) {
        e = false
        VE.style.display = 'none'
        VE.pause()
    }
    if (r) {
        r = false
        VR.style.display = 'none'
        VR.pause()
    }
})

botaoZedW.addEventListener('click', function(){
    msgZedP.innerText = ""
    msgZedQ.innerText = ""
    msgZedE.innerText = ""
    msgZedR.innerText = ""
    msgZedW.innerText = "Efeito passivo: Zed recebe energia sempre que ele e suas sombras atingem um inimigo com a mesma habilidade. A energia só pode ser recebida uma vez a cada conjuração de habilidade. Ativo: A sombra de Zed avança e fica no mesmo lugar por alguns segundos. Quando Sombra Viva é reativada, Zed troca de posição com sua sombra."
    if (!w) {
        w = true
        VW.style.display = 'block'
        VW.currentTime = 0
        VW.play()
    }
    if (p) {
        p = false
        VP.style.display = 'none'
        VP.pause()
    }
    if (q) {
        q = false
        VQ.style.display = 'none'
        VQ.pause()
    }
    if (e) {
        e = false
        VE.style.display = 'none'
        VE.pause()
    }
    if (r) {
        r = false
        VR.style.display = 'none'
        VR.pause()
    }
})

botaoZedE.addEventListener('click', function(){
    msgZedP.innerText = ""
    msgZedQ.innerText = ""
    msgZedW.innerText = ""
    msgZedR.innerText = ""
    msgZedE.innerText = "Zed e as Sombras dele atacam, causando dano a inimigos próximos. Inimigos atingidos pelo corte de uma Sombra sofrem Lentidão."
    if (!e) {
        e = true
        VE.style.display = 'block'
        VE.currentTime = 0
        VE.play()
    }
    if (p) {
        p = false
        VP.style.display = 'none'
        VP.pause()
    }
    if (q) {
        q = false
        VQ.style.display = 'none'
        VQ.pause()
    }
    if (w) {
        w = false
        VW.style.display = 'none'
        VW.pause()
    }
    if (r) {
        r = false
        VR.style.display = 'none'
        VR.pause()
    }
})

botaoZedR.addEventListener('click', function(){
    msgZedP.innerText = ""
    msgZedQ.innerText = ""
    msgZedW.innerText = ""
    msgZedE.innerText = ""
    msgZedR.innerText = "Zed se torna inalvejável e avança contra um Campeão inimigo para marcá-lo. Após 3 segundos, a marca é ativada, repetindo parte de todo o dano que Zed causou ao alvo enquanto ele estava marcado."
    if (!r) {
        r = true
        VR.style.display = 'block'
        VR.currentTime = 0
        VR.play()
    }
    if (p) {
        p = false
        VP.style.display = 'none'
        VP.pause()
    }
    if (q) {
        q = false
        VQ.style.display = 'none'
        VQ.pause()
    }
    if (w) {
        w = false
        VW.style.display = 'none'
        VW.pause()
    }
    if (e) {
        e = false
        VE.style.display = 'none'
        VE.pause()
    }
})