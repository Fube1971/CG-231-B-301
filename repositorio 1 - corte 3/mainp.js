
    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(0xDDDDDD, 1);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
    camera.position.z = 4.5;
    camera.position.x = -1.2;
    camera.position.y = 2;

    camera.rotation.set(0, -0.5, 0);
    scene.add(camera);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);

    //Materiales
    Material1=new THREE.MeshPhongMaterial({color:0xFF0000}, { Wireframe : true });//rojo 


    //Creacion de Cubitos 
   var Cubonormal= cubo([10,10,10],20,Material1);

   scene.add(Cubonormal);

   const light = new THREE.DirectionalLight(0xffffff, 1);
   light.position.set(-1, 2, 4);
   scene.add(light);
   
   const size = 150;
   const divisions = 160;
   const axesHelper = new THREE.AxesHelper(1000);
   scene.add(axesHelper);
   
   const gridHelper = new THREE.GridHelper(size, divisions);
   scene.add(gridHelper);
   
   function render() {
     requestAnimationFrame(render);
     renderer.render(scene, camera);
   }
   
   render();

function cubo(posini,lado, material){ //Creacion del CUbo
    //Cubo 
    GeoCuadrado=new THREE.BufferGeometry(); //Guarda los vertices de un cubo
    var vertices = [[posini[0]-lado/2,posini[1]-lado/2,posini[2]-lado/2], //F
                    [posini[0]-lado/2,posini[1]+lado/2,posini[2]-lado/2], //E
                    [posini[0]+lado/2,posini[1]+lado/2,posini[2]-lado/2], //H
                    [posini[0]+lado/2,posini[1]-lado/2,posini[2]-lado/2], //G
                    [posini[0]-lado/2,posini[1]-lado/2,posini[2]-lado/2], //F Cierra cara trasera
                    [posini[0]-lado/2,posini[1]-lado/2,posini[2]+lado/2], //C
                    [posini[0]-lado/2,posini[1]+lado/2,posini[2]+lado/2], //D
                    [posini[0]+lado/2,posini[1]+lado/2,posini[2]+lado/2], //A
                    [posini[0]+lado/2,posini[1]-lado/2,posini[2]+lado/2], //B
                    [posini[0]-lado/2,posini[1]-lado/2,posini[2]+lado/2], //C cierra cara delantera
                    [posini[0]-lado/2,posini[1]-lado/2,posini[2]-lado/2], //F
                    [posini[0]+lado/2,posini[1]-lado/2,posini[2]-lado/2], //G
                    [posini[0]+lado/2,posini[1]-lado/2,posini[2]+lado/2], //B cara abajo
                    [posini[0]+lado/2,posini[1]+lado/2,posini[2]+lado/2], //A
                    [posini[0]+lado/2,posini[1]+lado/2,posini[2]-lado/2], //H Cara derecha
                    [posini[0]-lado/2,posini[1]+lado/2,posini[2]-lado/2], //E
                    [posini[0]-lado/2,posini[1]+lado/2,posini[2]+lado/2], //D Cara arriba
                    ];

        geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

        const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
        const mesh = new THREE.Mesh( geometry, material );

    var largoVertice = vertices.length;
    for (i = 0; i < largoVertice; i++) {
        x = vertices[i][0];
        y = vertices[i][1];
        z = vertices[i][2];
        vector = new THREE.Vector3(x, y, z);
        GeoCuadrado.vertices.push(vector); 
    }
    this.getlado=function(){ // return el lado del cubo creado
        return lado
    }
    micubito=new THREE.BufferGeometry(GeoCuadrado,material);
    return micubito; // retorna el cubo
}

init();  



    