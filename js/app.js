function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let image = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    botao = gameClicado();
    document.getElementById('game-3').setAttribute('dashboard__item__button dashboard__item__button--return', true)

    alert(nomeJogo.textContent);
}