/* ===== DATOS DE EJEMPLO: reemplazar con información oficial ===== */
var TIPOS={org:{n:"Orgánico",c:"#5b8c2a"},rec:{n:"Reciclable",c:"#1f6fb5"},ino:{n:"Inorgánico",c:"#6b6b6b"}};
var DIAS=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
var ZONAS={
 A:{hora:"7:00 a 11:00",d:{org:[1,4],rec:[3],ino:[6]},ruta:"Recorrido de ejemplo: avenida principal, calles laterales y retorno por el mercado."},
 B:{hora:"11:00 a 15:00",d:{org:[2,5],rec:[4],ino:[0]},ruta:"Recorrido de ejemplo: entrada norte, fraccionamientos y cierre en la plaza."},
 C:{hora:"15:00 a 19:00",d:{org:[1,3,5],rec:[2],ino:[6]},ruta:"Recorrido de ejemplo: zona sur, colonias periféricas y comunidad cercana."},
 D:{hora:"15:00 a 19:00",d:{org:[1,3,5],rec:[2],ino:[6]},ruta:"Recorrido de ejemplo: zona sur, colonias periféricas y comunidad cercana."}

};
var COLONIAS=[["Colonia de ejemplo Centro","A"],["Colonia de ejemplo Jardines","A"],["Colonia de ejemplo Las Lomas","B"],["Colonia de ejemplo Vista Hermosa","B"],["Colonia de ejemplo La Presa","C"],["Colonia de ejemplo San Isidro","C"]];
var SEPARACION={
 org:["Cáscaras y restos de fruta y verdura","Restos de comida","Café, té y cascarón de huevo","Hojas y pasto"],
 rec:["Papel y cartón limpios y secos","Botellas de plástico y vidrio","Latas de aluminio y metal","Envases enjuagados"],
 ino:["Servilletas y papel sucio","Pañales y toallas sanitarias","Unicel y empaques sucios","Barrido y colillas"]};
var OBJETOS=[["botella de plástico","rec"],["botella de vidrio","rec"],["lata","rec"],["cartón","rec"],["periódico","rec"],["cáscaras","org"],["restos de comida","org"],["hojas","org"],["café","org"],["pañal","ino"],["servilleta","ino"],["unicel","ino"],["pilas","esp"],["medicinas","esp"],["llantas","esp"],["colchón","esp"],["televisión","esp"],["refrigerador","esp"],["aceite de cocina","esp"]];
var ESPECIALES=["Muebles y colchones","Electrodomésticos y electrónicos","Pilas y baterías","Medicinas caducas","Llantas","Residuos de jardinería y poda","Aceite de cocina usado","Escombro"];
/* ================================================================ */
