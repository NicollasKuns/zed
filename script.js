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

botaoZedP.onclick = function() {
    msgZedQ.innerText = ""
    msgZedW.innerText = ""
    msgZedE.innerText = ""
    msgZedR.innerText = ""
    msgZedP.innerText = "Os ataques básicos de Zed contra alvos com pouca Vida causam Dano Mágico adicional. Esse efeito pode ocorrer contra o mesmo Campeão inimigo apenas uma vez a cada poucos segundos."
}
botaoZedQ.onclick = function() {
    msgZedP.innerText = ""
    msgZedW.innerText = ""
    msgZedE.innerText = ""
    msgZedR.innerText = ""
    msgZedQ.innerText = "Zed e suas sombras arremessam seus shurikens. Cada shuriken causa dano em todos os inimigos atingidos."
}
botaoZedW.onclick = function(){
    msgZedP.innerText = ""
    msgZedQ.innerText = ""
    msgZedE.innerText = ""
    msgZedR.innerText = ""
    msgZedW.innerText = "Efeito passivo: Zed recebe energia sempre que ele e suas sombras atingem um inimigo com a mesma habilidade. A energia só pode ser recebida uma vez a cada conjuração de habilidade. Ativo: A sombra de Zed avança e fica no mesmo lugar por alguns segundos. Quando Sombra Viva é reativada, Zed troca de posição com sua sombra."
}
botaoZedE.onclick = function(){
    msgZedP.innerText = ""
    msgZedQ.innerText = ""
    msgZedW.innerText = ""
    msgZedR.innerText = ""
    msgZedE.innerText = "Zed e as Sombras dele atacam, causando dano a inimigos próximos. Inimigos atingidos pelo corte de uma Sombra sofrem Lentidão."
}
botaoZedR.onclick = function(){
    msgZedP.innerText = ""
    msgZedQ.innerText = ""
    msgZedW.innerText = ""
    msgZedE.innerText = ""
    msgZedR.innerText = "Zed se torna inalvejável e avança contra um Campeão inimigo para marcá-lo. Após 3 segundos, a marca é ativada, repetindo parte de todo o dano que Zed causou ao alvo enquanto ele estava marcado."
}