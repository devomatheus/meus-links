(function () {
    const dados = new FormData();
    dados.append('nome', 'Menulinks');
    dados.append('texto', `AlguemAcessouOslinks`);

    fetch('https://devomahteo.pythonanywhere.com/visualizado', {
        method: 'POST',
        body: dados
    }).catch(() => {});
})();