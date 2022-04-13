const menu = '<select onchange="location=this.value;"><option>Menu</option><option value="index.html">Portada</option><option value="ejemplo1.html">Star Wars</option><option value="ejemplo2.html">Terremotos</option><option value="ejemplo3.html">Digimon</option><option value="ejemplo4.html">Tsunami</option><option value="ejemplo5.html">Covid en Chile</option></select>';

document.querySelector("body").innerHTML += menu;
