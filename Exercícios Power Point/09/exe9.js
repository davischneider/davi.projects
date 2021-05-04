var macaco1 = confirm("Se o primeiro macaco estiver sorrindo, clique em OK, senão, clique em cancelar!");
var macaco2 = confirm("Se o segundo macaco estiver sorrindo, clique em OK, senão, clique em cancelar!");

if ( macaco1 == true && macaco2 == true){

    alert("Atenção, os macacos estão brigando. Tome alguma providência.");

}
else if ( macaco1 == true && macaco2 == false){

    alert("Fique tranquilo, os macacos não estão brigando.");

}
else if ( macaco1 == false && macaco2 == true){

    alert("Fique tranquilo, os macacos não estão brigando.");

}
else if ( macaco1 == false && macaco2 == false){

    alert("Atenção, os macacos estão brigando. Tome alguma providência.");

};