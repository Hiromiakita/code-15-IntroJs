let comidaFavorita = prompt("Comida favorita:")

switch(comidaFavorita) {
    case "carne":
    case "pollo":
    case "pescado":
        alert('Eres carnivoro')
        break;
    case "lechuga":
    case "acelgas":
        alert("Eres vegetariano")
        break;
    case "tofu":
        alert("Eres vegano")
        break;
    default:
        alert("Eres alien?")
        break;
}
