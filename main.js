$(document).ready(function() {
    $('#adicionarItem').click(function() {
    var itemInput = $('#item');
    var itemText = itemInput.val();
    if (itemText.trim() !== "") {
        var lista = $('#lista');
        var novoItem = $('<li>').text(itemText);
        lista.append(novoItem);
        itemInput.val('');
    }
    });

    $('#lista').on('click', 'li', function() {
        $(this).toggleClass('lista-item-riscado');
    });
});
